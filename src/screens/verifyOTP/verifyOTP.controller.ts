import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {verifyOTPSchema} from '@validationSchema/index';
import {VerifyOTPController, VerifyOTPFormFields} from './verifyOTP.types';

export const useVerifyOTPController = (): VerifyOTPController => {
  const {
    control,
    formState: {errors, isValid},
  } = useForm<VerifyOTPFormFields>({
    mode: 'onChange',
    resolver: yupResolver(verifyOTPSchema),
  });

  return {
    control,
    errors,
    isValid,
  };
};
