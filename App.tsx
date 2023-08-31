/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Provider} from 'react-redux';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { setupStore } from './src/store';
//Loading all screens

import { AppNavigator } from './src/navigation';

const store = setupStore({});

export const AppWrapper = (): JSX.Element => {
  return (
    <AppNavigator />
  )
}

const App = ():JSX.Element =>{

  return (

    <Provider store={store}>
      <AppWrapper/>
    </Provider>
  );
}


export default App;
