import {useForm} from 'react-hook-form';
import {LoginController, LoginFormFields} from './login.types';
import {yupResolver} from '@hookform/resolvers/yup';
import {loginSchema} from '@validationSchema/index';
import {useNavigation} from '@react-navigation/native';
import {AuthNavigationProps} from '@setup/routes';
import {NavigationNames} from '@utils';
import {useCallback} from 'react';

export const useLoginController = (): LoginController => {
  const navigation = useNavigation<AuthNavigationProps>();
  const {
    control,
    formState: {errors, isValid},
  } = useForm<LoginFormFields>({
    mode: 'onBlur',
    resolver: yupResolver(loginSchema),
  });

  const onButtonPress = useCallback((): void => {
    navigation.navigate(NavigationNames.VerifyOTP);
  }, [navigation]);

  return {
    control,
    errors,
    isValid,
    onButtonPress,
  };
};
