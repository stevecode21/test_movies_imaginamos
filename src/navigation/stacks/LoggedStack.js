/**
 * Libraries
 */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

/**
 * Screens
 */
import {Movies} from '../../screens/Movies/Movies';
/**
 * Constants
 */
import {LoggedRoutes} from '../routes/LoggedRoutes';

const Stack = createStackNavigator();

export const LoggedStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={LoggedRoutes.MOVIES} component={Movies} />
    </Stack.Navigator>
  );
};
