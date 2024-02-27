import {Colors, FontSize} from '@utils';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.Gray,
    borderRadius: 10,
    alignItems: 'center',
  },
  textInput: {
    width: '100%',
    fontSize: FontSize.H6,
    height: 40,
    paddingHorizontal: 10,
    fontWeight: '500',
  },
  error: {
    marginTop: 5,
    color: Colors.Red,
    fontSize: FontSize.Body,
    textAlign: 'center',
  },
});
