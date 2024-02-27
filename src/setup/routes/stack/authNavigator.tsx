import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {VerifyOTP, Login} from '@screens';
import {AuthNavigatorParamsList} from '../routes.types';
import {NavigationNames} from '@utils';

const Stack = createStackNavigator<AuthNavigatorParamsList>();

const AuthNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={NavigationNames.SignIn}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={NavigationNames.SignIn} component={Login} />
      <Stack.Screen name={NavigationNames.VerifyOTP} component={VerifyOTP} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
