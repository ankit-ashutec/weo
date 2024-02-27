import React, {memo} from 'react';
import {styles} from './shadowContainer.styles';
import {ShadowContainerProps} from './shadowContainer.types';
import {View} from 'react-native';

const ShadowContainer: FCC<ShadowContainerProps> = ({
  children,
  style,
  ...restProps
}) => {
  return (
    <View style={[styles.container, style]} {...restProps}>
      {children}
    </View>
  );
};

export default memo(ShadowContainer);
