import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../../features/login/components';

import {routes} from '../routes';
import HomeScreen from '../../features/home/components';

const Stack = createStackNavigator();

const StackNavigator: React.FunctionComponent = (props: any) => {
  return (
    <Stack.Navigator {...props}>
      <Stack.Screen
        name={routes.LOGIN}
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={routes.HOME}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
