import {Offer} from '@components/offerTile/offerTile.types';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {NavigationNames} from '@utils';

export type AuthNavigatorParamsList = {
  [NavigationNames.SignIn]: undefined;
  [NavigationNames.VerifyOTP]: undefined;
  [NavigationNames.OfferList]: undefined;
  [NavigationNames.CollectOffer]: {offer: Offer};
};

export type AuthNavigationProps = StackNavigationProp<AuthNavigatorParamsList>;

export type AuthRouteProp<T extends keyof AuthNavigatorParamsList> = RouteProp<
  AuthNavigatorParamsList,
  T
>;
