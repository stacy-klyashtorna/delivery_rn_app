import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../login/LoginScreen';

import {routes} from '../../constants/routes';

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
    </Stack.Navigator>
  );
};

export default StackNavigator;
