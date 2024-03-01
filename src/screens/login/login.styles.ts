import {Colors, FontSize} from '@utils';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    paddingVertical: 20,
    backgroundColor: Colors.White,
    gap: 30,
  },
  button: {
    marginHorizontal: '15%',
  },
  loginText: {
    fontSize: FontSize.H5,
    color: Colors.Black100,
    fontWeight: 'bold',
    position: 'absolute',
    top: '20%',
  },
  input: {
    marginHorizontal: '5%',
    alignSelf: 'center',
  },
  countryCodeText: {
    paddingLeft: 10,
    fontSize: FontSize.H6,
    color: Colors.Black100,
    fontWeight: '400',
  },
});
