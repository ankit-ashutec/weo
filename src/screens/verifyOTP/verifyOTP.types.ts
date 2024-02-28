import {Control, FieldErrors, UseFormHandleSubmit} from 'react-hook-form';

export interface VerifyOTPFormFields {
  otp: string;
  resendTimer: number;
  generatedOTP: string;
}

export interface VerifyOTPController {
  control: Control<VerifyOTPFormFields, any>;
  errors: FieldErrors<VerifyOTPFormFields>;
  handleSubmit: UseFormHandleSubmit<VerifyOTPFormFields, VerifyOTPFormFields>;
  isValid: boolean;
  resendTimer: number;
  generateNewOTP: () => void;
  onSubmit: (fields: VerifyOTPFormFields) => void;
  onBackPress: () => void;
}
