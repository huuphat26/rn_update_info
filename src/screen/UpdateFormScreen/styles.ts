import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  textContent: {
    fontSize: 20,
    color: colors.gray2,
    marginBottom: 5,
  },
  textBtn: {
    fontSize: 15,
    color: colors.white,
    textAlign: 'center',
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: colors.gray,
    marginBottom: 10,
  },
  btn: {
    width: 180,
    height: 45,
    backgroundColor: colors.orange,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  containerBtn: {
    alignItems: 'flex-end',
    marginBottom: 40,
    marginTop: 10,
    paddingHorizontal: 20,
  },
  viewImage: {
    width: 200,
    height: 80,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: colors.gray2,
    justifyContent: 'center',
    marginLeft: 90,
    alignItems: 'center',
    marginVertical: 20,
  },

  img: {
    width: 200,
    height: 100,
    borderRadius: 5,
  },
  containerPosition: {
    width: 225,
    borderColor: colors.gray2,
    marginBottom: 5,
    marginLeft: 35,
    zIndex: 10,
  },
  viewPosition: {
    flexDirection: 'row',
    marginVertical: 5,
    zIndex: 10,
  },
  textPosition: {
    marginRight: 95,
    fontSize: 15,
    fontWeight: '500',
  },
  circle: {
    width: 15,
    height: 15,
    borderRadius: 99,
    borderWidth: 1,
    borderColor: colors.gray2,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircle: {
    width: 8,
    height: 8,
    borderWidth: 1,
    borderColor: colors.gray2,
    backgroundColor: colors.orange,
    borderRadius: 99,
  },

  viewSex: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  containerSex: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.gray2,
    width: 180,
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: colors.white,
    borderRadius: 5,
    marginLeft: 16,
  },
});

export default styles;
