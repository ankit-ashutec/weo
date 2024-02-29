import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {verifyOTPSchema} from '@validationSchema/index';
import {VerifyOTPController, VerifyOTPFormFields} from './verifyOTP.types';
import {useCallback, useEffect} from 'react';
import {NavigationNames, generateOTP} from '@utils';
import {useToast} from '@setup/providers';
import {useNavigation} from '@react-navigation/native';
import {AuthNavigationProps} from '@setup/routes';

export const useVerifyOTPController = (): VerifyOTPController => {
  const {showToast} = useToast();
  const navigation = useNavigation<AuthNavigationProps>();
  let timer: NodeJS.Timeout;
  const {
    control,
    formState: {errors, isValid},
    setValue,
    watch,
    getValues,
    handleSubmit,
  } = useForm<VerifyOTPFormFields>({
    mode: 'onBlur',
    defaultValues: {
      resendTimer: 30,
    },
    resolver: yupResolver(verifyOTPSchema),
  });
  const {resendTimer} = watch();

  useEffect(() => {
    generateNewOTP();
    return () => {
      if (timer) clearInterval(timer);
    };
  }, []);

  const onBackPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const startTimer = () => {
    timer = setInterval(() => {
      if (getValues('resendTimer') > 0) {
        setValue('resendTimer', getValues('resendTimer') - 1);
      } else {
        if (timer) clearInterval(timer);
      }
    }, 1000);
  };

  const generateNewOTP = useCallback(() => {
    const otp: string = generateOTP();
    setValue('generatedOTP', otp);
    setValue('resendTimer', 30);
    showToast(`Your OTP: ${otp}`);
    startTimer();
  }, [setValue]);

  const onSubmit = useCallback((fields: VerifyOTPFormFields): void => {
    if (fields.otp === fields.generatedOTP) {
      navigation.reset({
        index: 0,
        routes: [{name: NavigationNames.OfferList}],
      });
    } else {
      showToast('Please enter valid OTP.');
    }
  }, []);

  return {
    control,
    errors,
    isValid,
    resendTimer,
    generateNewOTP,
    onSubmit,
    handleSubmit,
    onBackPress,
  };
};
