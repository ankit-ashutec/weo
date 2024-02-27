import {
  KeyboardAvoidingViewProps,
  ScrollViewProps,
  ViewProps,
} from 'react-native';

export interface ContainerProps extends ViewProps {
  keyboardAvoidingViewProps?: KeyboardAvoidingViewProps;
  ScrollViewProps?: ScrollViewProps;
  withScroll?: boolean;
}
