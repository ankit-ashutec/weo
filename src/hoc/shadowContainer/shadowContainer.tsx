import React, {memo} from 'react';
import {styles} from './shadowContainer.styles';
import {ShadowContainerProps} from './shadowContainer.types';
import {ImageBackground} from 'react-native';
import {Round} from '@assets/images';

const ShadowContainer: FCC<ShadowContainerProps> = ({
  children,
  style,
  ...restProps
}) => {
  return (
    <ImageBackground
      style={[styles.container, style]}
      source={Round}
      {...restProps}>
      {children}
    </ImageBackground>
  );
};

export default memo(ShadowContainer);
