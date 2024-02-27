import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import {styles} from './button.styles';
import {ButtonProps} from './button.types';

const Button: React.FC<ButtonProps> = ({
  style: buttonStyle,
  name,
  textStyle,
  variant = 'primary',
  disabled,
  isLoading,
  ...restProps
}) => {
  return (
    <TouchableOpacity
      {...restProps}
      activeOpacity={0.8}
      disabled={disabled || isLoading}
      style={[styles.container, {opacity: disabled ? 0.3 : 1}, buttonStyle]}>
      <Text style={[styles.name, textStyle]}>{name}</Text>
      {isLoading && (
        <ActivityIndicator
          style={styles.activityIndicator}
          color="white"
          size="small"
        />
      )}
    </TouchableOpacity>
  );
};

export default memo(Button);
