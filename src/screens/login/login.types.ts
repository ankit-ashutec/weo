import {Control, FieldErrors} from 'react-hook-form';

export interface LoginFormFields {
  phoneNumber: string;
}

export interface LoginController {
  control: Control<LoginFormFields, any>;
  errors: FieldErrors<LoginFormFields>;
  isValid: boolean;
  onButtonPress: () => void;
}
