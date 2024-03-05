import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './RootNavigation';
import {
  CardStyleInterpolators,
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';
import {SignInScreen, UpdateFormScreen} from '../screen';
const Stack = createStackNavigator();

const screenOptions: StackNavigationOptions = {
  headerShown: false,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};
export function RootNavigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={'SignInScreen'}
        screenOptions={screenOptions}>
        <Stack.Screen
          key={'SignInScreen'}
          name={'SignInScreen'}
          component={SignInScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          key={'UpdateFormScreen'}
          name={'UpdateFormScreen'}
          component={UpdateFormScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
