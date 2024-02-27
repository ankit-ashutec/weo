import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {NavigationNames} from '@utils';

export type AuthNavigatorParamsList = {
  [NavigationNames.SignIn]: undefined;
  [NavigationNames.VerifyOTP]: undefined;
};

export type HomeNavigatorParamsList = {};

export type AuthNavigationProps = StackNavigationProp<AuthNavigatorParamsList>;

export type AuthRouteProp<T extends keyof AuthNavigatorParamsList> = RouteProp<
  AuthNavigatorParamsList,
  T
>;

export type HomeNavigationProps = StackNavigationProp<HomeNavigatorParamsList>;

export type HomeRouteProp<T extends keyof HomeNavigatorParamsList> = RouteProp<
  HomeNavigatorParamsList,
  T
>;
