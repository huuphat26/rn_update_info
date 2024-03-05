/* eslint-disable react/react-in-jsx-scope */
import {View, TouchableOpacity, Text} from 'react-native';
import {goBack as GoBack} from '../../navigation/RootNavigation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../constants/colors';
import styles from './styles';
type headerProps = {
  title?: string;
  goBack?: boolean | Function;
  customerTitle?: any;
};

const Header: React.FC<headerProps> = ({title, goBack = true}) => {
  return (
    <View style={styles.container}>
      {title ? <Text style={styles.textTitle}>{title}</Text> : null}
      <TouchableOpacity
        hitSlop={{top: 50, bottom: 10, left: 50, right: 50}}
        style={{marginRight: 15}}
        onPress={() => {
          if (typeof goBack === 'function') {
            goBack();
          } else {
            GoBack();
          }
        }}>
        <AntDesign name="close" color={colors.black} size={22} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
