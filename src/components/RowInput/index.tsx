import React from 'react';
import {Text, TextInput, TextInputProps, View} from 'react-native';
import colors from '../../constants/colors';
import styles from './styles';
import {
  Control,
  Controller,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';
export interface rowInputProps extends TextInputProps {
  title: string;
  error?: string;
  onPress?: () => void;
  isRequired?: boolean;
  control: Control<FieldValues>;
  rules?:
    | Omit<
        RegisterOptions<FieldValues, 'firstName'>,
        'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
      >
    | undefined;
  name: string;
  required?: boolean;
  defaultValue?: string;
}

const RowInput: React.FC<rowInputProps> = ({
  title,
  isRequired,
  control,
  rules,
  name,
  required,
  defaultValue,
  ...args
}) => {
  return (
    <Controller
      control={control}
      rules={{
        ...rules,
        required: required && 'Vui lòng không bỏ trống trường này',
      }}
      defaultValue={defaultValue}
      render={({field: {value, onChange}, fieldState: {error}}) => {
        return (
          <View style={styles.containerInput}>
            <View style={{flexDirection: 'row'}}>
              <Text numberOfLines={1} style={styles.title}>
                {title}
              </Text>
              {isRequired && <Text style={{color: 'red'}}>*</Text>}
            </View>
            <View style={{}}>
              <TextInput
                placeholderTextColor={colors.gray2}
                style={[
                  styles.input,
                  {borderColor: error ? colors.err : colors.gray2},
                ]}
                returnKeyType="done"
                value={value}
                // defaultValue={defaultValue}
                onChangeText={onChange}
                {...args}
              />
              {error && (
                <Text style={styles.textError}>{error.message || 'error'}</Text>
              )}
            </View>
          </View>
        );
      }}
      name={name}
    />
  );
};

export default RowInput;
