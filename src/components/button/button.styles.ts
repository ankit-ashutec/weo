import {Colors, FontSize} from '@utils';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Primary,
    paddingVertical: 10,
  },
  name: {
    fontSize: FontSize.H4,
    fontWeight: 'bold',
    color: Colors.White,
  },
  activityIndicator: {
    position: 'absolute',
    right: 10,
  },
});
