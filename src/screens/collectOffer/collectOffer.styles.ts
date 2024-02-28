import {Colors, FontSize} from '@utils';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Background,
    padding: 15,
    paddingBottom: 0,
  },
  secondView: {
    backgroundColor: Colors.White,
    paddingHorizontal: 10,
    paddingBottom: 30,
    bottom: -15,
  },
  title: {
    fontSize: FontSize.H3,
    fontWeight: 'bold',
    color: Colors.Black100,
    textAlign: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  description: {
    fontSize: FontSize.H6,
    fontWeight: '500',
    color: Colors.Shadow,
    textAlign: 'center',
    marginHorizontal: 50,
    marginTop: 10,
  },
  buttonShadowView: {
    shadowColor: Colors.Black100,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    flex: 1,
    backgroundColor: Colors.White,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});
