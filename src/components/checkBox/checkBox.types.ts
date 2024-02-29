import {TouchableOpacityProps} from 'react-native';

export interface CheckBoxProps extends TouchableOpacityProps {
  checked?: boolean;
  error?: boolean;
  helperText?: string | undefined;
}
