import {Control, FieldValues, Path} from 'react-hook-form';
import {StyleProp, TextInputProps, ViewStyle} from 'react-native/types';

export interface InputProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle> | undefined;
  error?: boolean;
  helperText?: string | undefined;
  borderColor?: string;
  isLoading?: boolean;
  leftComponent?: () => React.JSX.Element | null;
  rightComponent?: () => React.JSX.Element | null;
}

export interface InputWithControlProps<T extends FieldValues>
  extends InputProps {
  control: Control<T>;
  name: Path<T>;
  rules?: any;
}
