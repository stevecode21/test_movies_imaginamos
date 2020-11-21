/**
 * Libraries
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

/**
 * Stacks
 */
import {LoggedStack} from './stacks/LoggedStack';

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <LoggedStack />
    </NavigationContainer>
  );
};
