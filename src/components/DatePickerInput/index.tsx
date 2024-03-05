import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import {
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import {
  Control,
  Controller,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../../constants/colors';

interface IDatePickerInputProps extends TextInputProps {
  label?: string;
  required?: boolean;
  control: Control<FieldValues>;
  rules?:
    | Omit<
        RegisterOptions<FieldValues, 'firstName'>,
        'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
      >
    | undefined;
  name: string;
  defaultValue?: string;
}

const DatePickerInput: React.FC<IDatePickerInputProps> = ({
  label,
  required,
  control,
  rules,
  name,
  defaultValue,
  ...args
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Controller
        control={control}
        rules={{
          ...rules,
          required: required && 'Vui lòng không bỏ trống trường này',
        }}
        render={({field: {value, onChange}, fieldState: {error}}) => (
          <View style={{flexDirection: 'row', marginBottom: 10}}>
            {label && <Text style={styles.title}>{label}</Text>}
            <TouchableOpacity
              onPress={() => {
                setOpen(true);
              }}
              style={styles.input}>
              <TextInput
                placeholderTextColor={colors.gray2}
                style={styles.inputValue}
                returnKeyType="done"
                value={value}
                defaultValue={moment().format('DD/MM/YYYY') ?? defaultValue}
                onChangeText={onChange}
                editable={false}
                {...args}
              />
              <Entypo name="chevron-down" color={colors.black} />
            </TouchableOpacity>
            <DatePicker
              modal
              open={open}
              date={
                value && value !== ''
                  ? moment(value, 'DD/MM/YYYY').toDate()
                  : new Date()
              }
              mode={'date'}
              locale={'vi'}
              confirmText={'Xác nhận'}
              cancelText={'Huỷ bỏ'}
              onConfirm={date => {
                setOpen(false);
                onChange(moment(date).format('DD/MM/YYYY'));
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
            {error && (
              <Text style={styles.error}>
                {error.message || 'Unknown error'}
              </Text>
            )}
          </View>
        )}
        name={name}
      />
    </>
  );
};

export default DatePickerInput;
