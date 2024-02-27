import {LoginFormFields} from '@screens/login/login.types';
import {VerifyOTPFormFields} from '@screens/verifyOTP/verifyOTP.types';
import {phoneRegex} from '@utils';
import * as yup from 'yup';

export const loginSchema = yup
  .object<Record<keyof LoginFormFields, yup.AnySchema>>()
  .shape({
    phoneNumber: yup
      .string()
      .required('Phone Number is a required field')
      .matches(
        phoneRegex,
        'Phone number must have 10 Numeric characters and should not start from 0 to 5',
      ),
  })
  .required();

export const verifyOTPSchema = yup
  .object<Record<keyof VerifyOTPFormFields, yup.AnySchema>>()
  .shape({
    otp: yup
      .string()
      .required('Phone Number is a required field')
      .matches(
        phoneRegex,
        'Phone number must have 10 Numeric characters and should not start from 0 to 5',
      ),
  })
  .required();
