import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AuthNavigator from './stack/authNavigator';

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default Routes;
