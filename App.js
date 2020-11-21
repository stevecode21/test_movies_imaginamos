/**
 * Libraries
 */
import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';

/**
 * Redux
 */
import {Provider} from 'react-redux';
import configureStore from './src/store/configureStore';
/**
 * Navigation
 */
import {AppNavigation} from './src/navigation/AppNavigation';
// eslint-disable-next-line no-undef
export default App = () => {
  return (
    <Provider store={configureStore}>
      <SafeAreaView style={{flex: 1}}>
        <AppNavigation />
      </SafeAreaView>
    </Provider>
  );
};
