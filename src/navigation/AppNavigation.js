/**
 * Libraries
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

/**
 * Stacks
 */
import {LoggedStack} from './stacks/LoggedStack';

export const AppNavigation = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <LoggedStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
