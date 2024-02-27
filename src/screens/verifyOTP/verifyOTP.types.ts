import {Control, FieldErrors} from 'react-hook-form';

export interface VerifyOTPFormFields {
  otp: string;
}

export interface VerifyOTPController {
  control: Control<VerifyOTPFormFields, any>;
  errors: FieldErrors<VerifyOTPFormFields>;
  isValid: boolean;
}
