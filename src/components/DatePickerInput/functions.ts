import {MutableRefObject} from 'react';
import {Animated} from 'react-native';

export const onChevronRightRotate = (
  chevronRightRotate: MutableRefObject<Animated.Value>,
  value = 1,
) => {
  Animated.spring(chevronRightRotate.current, {
    toValue: value,
    useNativeDriver: true,
  }).start();
};
export const onContainerScale = (
  containerScale: MutableRefObject<Animated.Value>,
  value = 1,
) => {
  Animated.timing(containerScale.current, {
    toValue: value,
    useNativeDriver: false,
  }).start();
};
export const onItemScale = (
  itemScale: MutableRefObject<Animated.Value>,
  value = 1,
) => {
  Animated.timing(itemScale.current, {
    toValue: value,
    useNativeDriver: false,
  }).start();
};

export const onPaddingScale = (
  paddingScale: MutableRefObject<Animated.Value>,
  value = 1,
) => {
  Animated.timing(paddingScale.current, {
    toValue: value,
    useNativeDriver: false,
  }).start();
};
