import {View, Text} from 'react-native';
import React from 'react';
import {Container} from '@hoc';
import {styles} from './collectOffer.styles';
import {useRoute} from '@react-navigation/native';
import {AuthRouteProp} from '@setup/routes';
import {NavigationNames} from '@utils';
import {Circle} from '@components';

const CollectOffer: React.FC = () => {
  const {params} = useRoute<AuthRouteProp<NavigationNames.CollectOffer>>();
  return (
    <Container withScroll style={styles.container}>
      <View style={styles.secondView}>
        <Circle
          days={params.offer.days}
          degree={params.offer.miles}
          miles={params.offer.miles}
          price={params.offer.price}
        />
        <Text style={styles.title}>{params.offer.offerName}</Text>
        <Text style={styles.description}>{params.offer.description}</Text>
      </View>
      <View style={styles.buttonShadowView}></View>
    </Container>
  );
};

export default CollectOffer;
