import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const useStyles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  containerInput: {
    flexDirection: 'row',
    marginBottom: 5,
    justifyContent: 'space-between',
  },
  title: {
    marginRight: 5,
    marginBottom: 5,
  },
  error: {
    color: colors.err,
  },
  input: {
    height: 45,
    width: 220,
    borderRadius: 5,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.gray2,
    paddingHorizontal: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textError: {
    marginTop: 3,
    color: colors.err,
    textAlign: 'center',
    fontSize: 12,
  },
});

export default useStyles;
