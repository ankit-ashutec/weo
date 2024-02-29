import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './header.styles';
import {HeaderProps} from './header.types';

const Header: React.FC<HeaderProps> = ({
  leftComponent,
  title,
  leftComponentPress,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {leftComponent && (
        <TouchableOpacity
          onPress={leftComponentPress}
          style={styles.leftComponentButton}>
          {leftComponent()}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
