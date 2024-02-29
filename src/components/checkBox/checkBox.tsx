import {TouchableOpacity} from 'react-native';
import React from 'react';
import {CheckBoxProps} from './checkBox.types';
import {styles} from './checkBox.styles';
import {Check, UnCheck} from '@assets/svg';
import {ErrorMessage} from '@components';
import {Colors} from '@utils';

const CheckBox: React.FC<CheckBoxProps> = ({
  checked,
  style: TouchableOpacityStyle,
  children,
  error,
  helperText,
  ...restProps
}) => {
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.container, TouchableOpacityStyle]}
        {...restProps}>
        {checked ? (
          <Check width={25} height={25} fill={Colors.Primary} />
        ) : (
          <UnCheck width={25} height={25} fill={Colors.Shadow} />
        )}
        {children}
      </TouchableOpacity>
      <ErrorMessage error={error} helperText={helperText} />
    </>
  );
};

export default CheckBox;
