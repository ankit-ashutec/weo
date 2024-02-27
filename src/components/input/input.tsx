import React, {forwardRef, memo} from 'react';
import {Text, TextInput, View} from 'react-native';
import {styles} from './input.styles';
import {InputProps} from './input.types';
import {Colors} from '@utils';

const Input = forwardRef<TextInput, InputProps>(
  (
    {
      containerStyle,
      style: inputStyle,
      error,
      helperText,
      placeholder,
      leftComponent,
      ...restProps
    }: InputProps,
    ref?: React.Ref<TextInput>,
  ) => {
    return (
      <>
        <View style={[styles.container, containerStyle]}>
          {leftComponent && leftComponent}
          <TextInput
            ref={ref}
            spellCheck
            placeholderTextColor={Colors.Gray}
            selectionColor={Colors.Primary}
            {...restProps}
            placeholder={placeholder}
            style={[styles.textInput, inputStyle]}
          />
        </View>
        {error && <Text style={styles.error}>{helperText}</Text>}
      </>
    );
  },
);

export default memo(Input);
