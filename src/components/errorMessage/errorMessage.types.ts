import {StyleProp, TextStyle} from 'react-native';

export interface ErrorMessageProps {
  error?: boolean;
  helperText?: string | undefined;
  textStyle?: StyleProp<TextStyle>;
}
