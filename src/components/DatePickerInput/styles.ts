import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    flex: 4,
    paddingBottom: 20,
  },
  error: {
    color: colors.err,
    position: 'absolute',
    bottom: 5,
  },
  buttonContainer: {
    flex: 6,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
  },
  input: {
    height: 45,
    width: 220,
    borderRadius: 5,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.gray2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  inputValue: {
    width: 200,
    borderRadius: 3,
    color: colors.black,
  },
});

export default styles;
