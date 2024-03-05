import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
  },
  containerSignIn: {
    width: '90%',
    height: 400,
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderRadius: 5,
    marginTop: 100,
  },
  textTitle: {
    fontSize: 30,
    fontWeight: '600',
    color: colors.black,
    textAlign: 'center',
    marginBottom: 10,
  },
  textContent: {
    fontSize: 16,
    color: colors.gray2,
    marginBottom: 15,
  },
  textBtn: {
    fontSize: 18,
    color: colors.white,
  },
  textError: {
    marginTop: 3,
    color: colors.err,
    textAlign: 'center',
    fontSize: 12,
  },
  textForgotPassword: {
    fontSize: 15,
    color: colors.black,
    textDecorationLine: 'underline',
  },
  btnSubmit: {
    height: 50,
    borderRadius: 5,
    backgroundColor: colors.orange,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  input: {
    height: 50,
    width: '100%',
    borderRadius: 3,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 10,
  },
  textPlaceholder: {
    color: '#deddd9',
  },
  containerSubmit: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
