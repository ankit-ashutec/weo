import {Colors, FontSize} from '@utils';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    left: 20,
    right: 20,
    backgroundColor: Colors.Black100,
    borderRadius: 10,
    padding: 10,
    shadowColor: Colors.Black100,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  message: {
    color: Colors.White,
    fontSize: FontSize.H5,
    textAlign: 'center',
  },
});
