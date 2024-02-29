import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {styles} from './collectOffer.styles';
import {Pizza} from '@assets/images';
import {Clocks, Share} from '@assets/svg';
import {Colors} from '@utils';

const CollectHeader: React.FC = () => {
  return (
    <View style={[styles.CollectHeadercontainer]}>
      <TouchableOpacity style={styles.leftContainer} activeOpacity={0.5}>
        <View style={styles.imageView}>
          <Image source={Pizza} style={styles.roundImage} />
          <Image
            source={Pizza}
            style={[styles.roundImage, styles.imageOverlap]}
          />
          <Image
            source={Pizza}
            style={[styles.roundImage, styles.imageOverlap1]}
          />
        </View>
        <View style={{marginLeft: 35}}>
          <Text style={styles.name}>23</Text>
          <Text style={styles.headerLabel}>collection</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.centerContainer}>
        <Clocks />
        <View style={{marginLeft: 5, flexDirection: 'column'}}>
          <Text style={styles.name}>4</Text>
          <Text style={styles.headerLabel}>left</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.8} style={styles.rightContainer}>
        <Text style={styles.name}>425</Text>
        <Share fill={Colors.Shadow} />
      </TouchableOpacity>
    </View>
  );
};

export default CollectHeader;
