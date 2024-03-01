import {Colors, FontSize} from '@utils';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.Gray,
    overflow: 'hidden',
    borderRadius: 10,
    backgroundColor: Colors.White,
    shadowColor: Colors.Shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  imageView: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: Colors.Background,
    padding: 15,
  },
  shadowContainer: {width: 90, height: 90, borderRadius: 50},
  imageShadowView: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.Shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 80,
    resizeMode: 'cover',
  },
  contentView: {
    flex: 1,
    padding: 10,
    gap: 5,
  },
  name: {
    fontSize: FontSize.H6,
    color: Colors.Black100,
    fontWeight: 'bold',
  },
  creator: {
    fontSize: FontSize.BodyBig,
    color: Colors.Black100,
    fontWeight: '400',
  },
  priceRowView: {
    borderTopWidth: 1,
    borderTopColor: Colors.Border,
    marginTop: 5,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'flex-end',
  },
  priceView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  label: {
    fontSize: FontSize.BodyBig,
    color: Colors.Gray900,
    fontWeight: '600',
  },
  value: {
    fontSize: FontSize.H6,
    color: Colors.Black100,
    fontWeight: '400',
  },
});
