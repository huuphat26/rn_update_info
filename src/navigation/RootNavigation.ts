import {createRef} from 'react';
import {
  CommonActions,
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';
import {mainStackParamList} from './types';

export const isMountedRef = createRef();
export const navigationRef = createNavigationContainerRef<mainStackParamList>();

export function navigate<RouteName extends keyof mainStackParamList>(
  ...args: RouteName extends unknown
    ? undefined extends mainStackParamList[RouteName]
      ?
          | [screen: RouteName]
          | [screen: RouteName, params: mainStackParamList[RouteName]]
      : [screen: RouteName, params: mainStackParamList[RouteName]]
    : never
) {
  if (navigationRef.isReady()) {
    navigationRef.current?.navigate(...args);
  }
}

export function goBack() {
  navigationRef.current?.goBack();
}

export function navigateAndReset(
  routes: {name: string; params?: any}[],
  index: number,
) {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index,
      routes,
    }),
  );
}

export function replace(name: string, params?: any) {
  navigationRef.current?.dispatch(StackActions.replace(name, params));
}
