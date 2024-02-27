import React from 'react';
import {Text} from 'react-native';
import {styles} from './errorMessage.styles';
import {memo} from 'react';
import {ErrorMessageProps} from './errorMessage.types';

const ErrorMessage: React.FC<ErrorMessageProps> = props => {
  if (!props.error) {
    return null;
  }
  return (
    <Text style={[styles.errorMessage, props.textStyle]}>
      {props.helperText}
    </Text>
  );
};

export default memo(ErrorMessage);
