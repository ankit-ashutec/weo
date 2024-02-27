import {StyleProp, TextStyle, TouchableOpacityProps} from 'react-native/types';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

export interface ButtonProps extends TouchableOpacityProps {
  name: React.ReactNode;
  textStyle?: StyleProp<TextStyle>;
  variant?: ButtonVariant;
  isLoading?: boolean;
}
