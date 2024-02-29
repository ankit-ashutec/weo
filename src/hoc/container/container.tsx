import {KeyboardAvoidingView, Platform, ScrollView, View} from 'react-native';
import {ContainerProps} from './container.types';
import {memo} from 'react';

const Container: React.FC<ContainerProps> = ({
  style,
  children,
  ScrollViewProps,
  keyboardAvoidingViewProps,
  withScroll = false,
  ...restProps
}) => {
  if (withScroll) {
    return (
      <View style={[{flex: 1}, style]} {...restProps}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          {...keyboardAvoidingViewProps}
          style={[{flex: 1}, keyboardAvoidingViewProps?.style]}>
          <ScrollView
            bounces={false}
            showsVerticalScrollIndicator={false}
            {...ScrollViewProps}
            keyboardShouldPersistTaps="never"
            contentContainerStyle={[
              {flexGrow: 1},
              ScrollViewProps?.contentContainerStyle,
            ]}>
            {children}
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  }
  return (
    <View style={[{flex: 1}, style]} {...restProps}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        {...keyboardAvoidingViewProps}
        style={[{flex: 1}, keyboardAvoidingViewProps?.style]}>
        {children}
      </KeyboardAvoidingView>
    </View>
  );
};

export default memo(Container);
