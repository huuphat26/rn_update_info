import colors from '../../constants/colors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  leftSide: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  centerSide: {
    flex: 4,
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 24,
    color: colors.orange,
    fontWeight: '500',
  },
  rightSide: {
    flex: 2,
    alignItems: 'flex-end',
  },
});

export default styles;
