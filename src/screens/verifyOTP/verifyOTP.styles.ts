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
    fontSize: FontSize.BodyBig,
    color: Colors.Black100,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: 5,
  },
  resendText: {
    fontSize: FontSize.BodyBig,
    color: Colors.Black100,
    fontWeight: '600',
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
  backButton: {
    // position: 'absolute',
    shadowColor: Colors.Shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignSelf: 'center',
    backgroundColor: Colors.White,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  },
  rowView: {
    flexDirection: 'row',
  },
  editButton: {
    height: 20,
    justifyContent: 'center',
  },
});
