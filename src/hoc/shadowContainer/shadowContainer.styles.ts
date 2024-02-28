import {Colors} from '@utils';
import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    width: width - width / 9,
    height: width - width / 9,
    borderRadius: width,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    overflow: 'hidden',
    shadowColor: Colors.Shadow,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    elevation: 8,
  },
});
