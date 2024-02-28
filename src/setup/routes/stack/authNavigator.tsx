import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {VerifyOTP, Login, OfferList, CollectOffer} from '@screens';
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
      <Stack.Screen name={NavigationNames.OfferList} component={OfferList} />
      <Stack.Screen
        name={NavigationNames.CollectOffer}
        component={CollectOffer}
        options={{
          headerShown: true,
          headerTitleStyle: {textAlign: 'center'},
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
