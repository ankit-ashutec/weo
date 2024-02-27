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
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 15,
    shadowColor: '#b2b6bf',
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    elevation: 8,
  },
});
