import React, {useEffect} from 'react';
import {RootNavigator} from './src/navigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import startServer from './src/services/mockData';

function App(): JSX.Element {
  useEffect(() => {
    startServer;
  }, []);
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <RootNavigator />
    </GestureHandlerRootView>
  );
}

export default App;
