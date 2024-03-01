import {Colors} from '@utils';
import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    width: width / 1.4,
    height: width / 1.4,
    borderRadius: width / 2,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: Colors.White,
  },
});
