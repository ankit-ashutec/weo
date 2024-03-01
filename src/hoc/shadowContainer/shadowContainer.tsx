import React, {memo} from 'react';
import {styles} from './shadowContainer.styles';
import {ShadowContainerProps} from './shadowContainer.types';
import {Shadow} from 'react-native-shadow-2';
import {Colors} from '@utils';

const ShadowContainer: FCC<ShadowContainerProps> = ({
  children,
  style,
  ...restProps
}) => {
  return (
    <Shadow
      distance={30}
      startColor={Colors.White}
      endColor={Colors.LightGrayishBlue}
      style={[styles.container, style]}
      {...restProps}>
      {children}
    </Shadow>
  );
};

export default memo(ShadowContainer);
