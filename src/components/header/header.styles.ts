import {Colors, FontSize} from '@utils';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    width: '100%',
    backgroundColor: Colors.White,
    shadowColor: Colors.Shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  title: {
    fontSize: FontSize.H5,
    color: Colors.Black100,
    fontWeight: '600',
    textAlign: 'center',
    flex: 1,
  },
  leftComponentButton: {
    paddingHorizontal: 15,
    height: '100%',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
  },
});
