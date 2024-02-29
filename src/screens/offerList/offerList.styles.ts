import {Colors, FontSize} from '@utils';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Background,
  },
  flatlist: {
    gap: 15,
    padding: 15,
    paddingTop: 10,
  },
  searchInput: {
    margin: 15,
    backgroundColor: Colors.White,
    shadowColor: Colors.Primary,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    borderRadius: 30,
  },
  searchLeftIconView: {
    paddingLeft: 15,
    height: 40,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    justifyContent: 'center',
  },
  searchRightIconView: {
    paddingRight: 15,
    height: 40,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'center',
  },
  resultText: {
    fontSize: FontSize.BodyBig,
    color: Colors.Black100,
    paddingHorizontal: 20,
    marginTop: 10,
  },
});
