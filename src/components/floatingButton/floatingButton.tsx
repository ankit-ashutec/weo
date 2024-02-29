import {TouchableOpacityProps, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './floatingButton.styles';

const FloatingButton: React.FC<TouchableOpacityProps> = ({
  children,
  style: styleProp,
  ...restProps
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, styleProp]}
      activeOpacity={0.8}
      {...restProps}>
      {children}
    </TouchableOpacity>
  );
};

export default FloatingButton;
