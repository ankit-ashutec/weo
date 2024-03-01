import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {OfferTileProps} from './offerTile.types';
import {styles} from './offerTile.styles';
import {Pizza} from '@assets/images';
import {ShadowContainer} from '@hoc';

const OfferTile: React.FC<OfferTileProps> = ({item, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      role="banner"
      onPress={onPress}
      activeOpacity={0.5}>
      <View style={styles.imageView}>
        <ShadowContainer distance={7} style={styles.shadowContainer}>
          <Image style={styles.image} source={Pizza} />
        </ShadowContainer>
      </View>
      <View style={styles.contentView}>
        <View style={{flex: 1, gap: 5}}>
          <Text style={styles.name} numberOfLines={1}>
            {item.offerName}
          </Text>
          <Text style={styles.creator}>@{item.creatorName}</Text>
        </View>
        <View style={styles.priceRowView}>
          <View style={styles.priceView}>
            <Text style={styles.label}>Price</Text>
            <Text style={styles.value}>${item.price}</Text>
          </View>
          <View style={styles.priceView}>
            <Text style={styles.label}>Miles</Text>
            <Text style={styles.value}>{item.miles}</Text>
          </View>
          <View style={styles.priceView}>
            <Text style={styles.label}>Days</Text>
            <Text style={styles.value}>{item.days}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default OfferTile;
