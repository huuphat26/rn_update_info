import React, {FC, useEffect, useState} from 'react';
import {Alert, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {mainStackParamList} from '../../navigation/types';
import {DatePickerInput, Header} from '../../components';
import RowInput from '../../components/RowInput';
import DropDownPicker from 'react-native-dropdown-picker';
import {Controller, useForm} from 'react-hook-form';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {pickImageBase64} from './function';
import axios from 'axios';
import {Image} from 'react-native';
import {db} from '../../services/mockData';

interface updateFormProps
  extends NativeStackScreenProps<mainStackParamList, 'UpdateFormScreen'> {}
type userData = {
  id: string;
  username: string;
  password: string;
  photo: string;
  full_name: string;
  code: string;
  position: string;
  sex: string;
  date_of_birth: string;
  ids: string;
  email: string;
  register_date: string;
  place: string;
  phone: string;
  re_password: string;
};
const UpdateFormScreen: FC<updateFormProps> = () => {
  const [data, setData] = useState<userData>();
  const {control, handleSubmit, setValue} = useForm({});
  const [openPosition, setOpenPosition] = useState(false);
  const [position, setPosition] = useState([
    {label: 'Fresher', value: 'fresher', id: 1},
    {label: 'Junior', value: 'junior', id: 2},
  ]);
  const [dataSex, setDataSex] = useState('Nam | Nữ');
  const fetchUserById = async (userId: string) => {
    try {
      const response = await axios.get(
        `http://localhost:3002/api/user/${userId}`,
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching user:', error);
      throw error;
    }
  };
  useEffect(() => {
    fetchUserById('1')
      .then(userData => {
        setData(userData);
      })
      .catch(error => {
        console.error('Error fetching user:', error);
      });
  }, []);
  useEffect(() => {
    if (data) {
      Object.entries(data).forEach(([key, value]) => {
        setValue(key as keyof typeof data, value);
      });
    }
    if (data?.sex) {
      setDataSex(data.sex);
    }
  }, [data, setValue]);
  const onSubmitUpdate = async (data: any) => {
    const isEmptyData = Object.values(data).some(value => value === '');

    if (isEmptyData) {
      Alert.alert('Vui lòng nhập đầy đủ thông tin');
      return;
    }
    try {
      const response = await axios.put(
        'http://localhost:3002/api/user/1',
        data,
      );
      db.users.update({
        id: 1,
        username: data?.username,
        password: data?.password,
        photo: data?.photo,
        full_name: data?.full_name,
        code: data?.code,
        position: data?.position,
        sex: dataSex,
        date_of_birth: data?.date_of_birth,
        ids: data?.ids,
        email: data?.email,
        register_date: data?.register_date,
        place: data?.place,
        phone: data?.phone,
        re_password: data?.re_password,
      });
      if (response.status === 200) {
        // console.log('response.data', response.data);
        // await AsyncStorage.setItem('userData', JSON.stringify(response.data));
        Alert.alert('Cập nhật thông tin thành công!');
      } else {
        Alert.alert('Lỗi cập nhật thông tin');
      }
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Cập nhật Profile" goBack />
      <KeyboardAwareScrollView
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}>
        <View style={{paddingHorizontal: 20, marginBottom: 20}}>
          <Text style={styles.textContent}>Thông tin cá nhân</Text>
          <View style={styles.line} />
          <View style={{flexDirection: 'row'}}>
            <Text>Photo: </Text>
            <Controller
              control={control}
              render={({field: {value, onChange}, fieldState: {}}) => {
                return (
                  <TouchableOpacity
                    style={styles.viewImage}
                    onPress={() => {
                      pickImageBase64().then(base64 => {
                        onChange(base64);
                      });
                    }}>
                    {!value && !data?.photo ? (
                      <Text>Image</Text>
                    ) : (
                      <Image
                        source={{uri: value || data?.photo}}
                        resizeMode="stretch"
                        style={styles.img}
                      />
                    )}
                  </TouchableOpacity>
                );
              }}
              name={'photo'}
            />
          </View>

          <RowInput
            title="Tên nhân viên: "
            isRequired
            required
            name="full_name"
            control={control}
            defaultValue={data?.full_name}
          />
          <RowInput
            title="Mã nhân viên: "
            isRequired
            required
            name="code"
            control={control}
            defaultValue={data?.code}
          />
          <Controller
            control={control}
            render={({field: {value, onChange}, fieldState: {}}) => {
              return (
                <View style={styles.viewPosition}>
                  <Text style={styles.textPosition}>Vị trí:</Text>
                  <DropDownPicker
                    open={openPosition}
                    value={value}
                    onChangeValue={onChange}
                    items={position}
                    setOpen={setOpenPosition}
                    setValue={onChange}
                    setItems={setPosition}
                    placeholder={data?.position || 'Chọn vị trí'}
                    style={styles.containerPosition}
                  />
                </View>
              );
            }}
            name={'position'}
          />

          <View style={styles.viewSex}>
            <Text style={styles.textPosition}>Giới tính</Text>
            <View style={styles.containerSex}>
              <Text>Nam</Text>
              <TouchableOpacity
                onPress={() => {
                  setDataSex('Nam');
                }}>
                <View style={styles.circle}>
                  {dataSex === 'Nam' ? (
                    <View style={styles.innerCircle} />
                  ) : null}
                </View>
              </TouchableOpacity>

              <Text>Nữ</Text>
              <TouchableOpacity
                onPress={() => {
                  setDataSex('Nữ');
                }}>
                <View style={styles.circle}>
                  {dataSex === 'Nữ' ? (
                    <View style={styles.innerCircle} />
                  ) : null}
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <DatePickerInput
            label="Ngày sinh: "
            control={control}
            name={'date_of_birth'}
            defaultValue={data?.date_of_birth}
          />
          <RowInput
            title="Số CMND/CCCD: "
            name="ids"
            control={control}
            defaultValue={data?.ids}
          />
          <RowInput
            title="Email: "
            name="email"
            control={control}
            defaultValue={data?.email}
            keyboardType={'email-address'}
          />
          <DatePickerInput
            label="Ngày cấp: "
            control={control}
            name={'register_date'}
            defaultValue={data?.register_date}
          />
          <RowInput
            title="Số điện thoại: "
            name="phone"
            control={control}
            defaultValue={data?.phone}
            keyboardType="phone-pad"
          />
          <RowInput
            title="Nơi cấp: "
            name="place"
            control={control}
            value={data?.place}
            defaultValue={data?.place}
          />
        </View>

        <View style={{paddingHorizontal: 20}}>
          <Text style={styles.textContent}>Thông tin đăng nhập</Text>
          <View style={styles.line} />

          <RowInput
            title="Tên đăng nhập: "
            control={control}
            name="username"
            defaultValue={data?.username}
          />
          <RowInput
            title="Mật khẩu: "
            control={control}
            name="password"
            defaultValue={data?.password}
          />
          <RowInput
            title="Xác nhận mật khẩu: "
            control={control}
            name="re_password"
            defaultValue={data?.re_password}
          />
        </View>
        <View style={styles.containerBtn}>
          <TouchableOpacity
            style={styles.btn}
            onPress={handleSubmit(onSubmitUpdate)}>
            <Text style={styles.textBtn}>Cập nhật</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default UpdateFormScreen;
