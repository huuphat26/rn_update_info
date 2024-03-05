import React, {FC} from 'react';
import axios from 'axios';
import {Controller, useForm} from 'react-hook-form';
import {
  Alert,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {mainStackParamList} from '../../navigation/types';
import styles from './styles';
import {navigate} from '../../navigation/RootNavigation';

interface signInProps
  extends NativeStackScreenProps<mainStackParamList, 'SignInScreen'> {}
const SignInScreen: FC<signInProps> = () => {
  const {control, handleSubmit} = useForm({});
  const onSubmitSignIn = async (userData: any) => {
    try {
      const response = await axios.post('http://localhost:3002/api/login', {
        username: userData?.username,
        password: userData?.password,
      });
      const {token} = response.data;
      if (token) {
        navigate('UpdateFormScreen');
      } else {
        Alert.alert('Tài khoản hoặc mật khẩu chưa đúng!');
      }
    } catch (error) {
      console.error('Error login:', error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerSignIn}>
        <Text style={styles.textTitle}>ĐĂNG NHẬP</Text>
        <View style={{paddingHorizontal: 20, marginBottom: 30}}>
          <Text style={styles.textContent}>Đăng nhập hệ thống</Text>
          <Controller
            control={control}
            rules={{
              required: `Vui lòng không bỏ trống trường này`,
            }}
            render={({
              field: {onChange, value, onBlur},
              fieldState: {error},
            }) => {
              return (
                <View>
                  <TextInput
                    style={styles.input}
                    placeholder="User name ..."
                    value={value}
                    onChangeText={onChange}
                    placeholderTextColor={'#deddd9'}
                    onBlur={onBlur}
                  />
                  {error && (
                    <Text style={styles.textError}>
                      {error.message || 'Unknown error'}
                    </Text>
                  )}
                </View>
              );
            }}
            name="username"
          />

          <View style={{height: 15}} />
          <Controller
            control={control}
            rules={{
              required: `Vui lòng nhập mật khẩu`,
            }}
            render={({
              field: {onChange, value, onBlur},
              fieldState: {error},
            }) => {
              return (
                <View>
                  <TextInput
                    style={styles.input}
                    placeholder="Mật khẩu ..."
                    secureTextEntry={true}
                    value={value}
                    onChangeText={onChange}
                    placeholderTextColor={'#deddd9'}
                    onBlur={onBlur}
                  />
                  {error && (
                    <Text style={styles.textError}>
                      {error.message || 'Unknown error'}
                    </Text>
                  )}
                </View>
              );
            }}
            name="password"
          />
        </View>

        <View style={styles.containerSubmit}>
          <TouchableOpacity style={{flex: 1}} onPress={() => {}}>
            <Text style={styles.textForgotPassword}>Quên mật khẩu</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnSubmit}
            onPress={handleSubmit(onSubmitSignIn)}>
            <Text style={styles.textBtn}>ĐĂNG NHẬP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;
