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
  titleContainer: {
    position: 'absolute',
    top: '20%',
  },
  title: {
    fontSize: FontSize.H5,
    color: Colors.Black100,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    fontSize: FontSize.Body,
    color: Colors.Black100,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: 5,
  },
  input: {
    marginHorizontal: '12%',
    alignSelf: 'center',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: '20%',
  },
  otpTextContainer: {
    borderWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 10,
  },
});
