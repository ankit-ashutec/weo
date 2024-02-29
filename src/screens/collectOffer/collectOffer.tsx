import {View, Text, Animated} from 'react-native';
import React, {useEffect} from 'react';
import {Container} from '@hoc';
import {styles} from './collectOffer.styles';
import {useRoute} from '@react-navigation/native';
import {AuthRouteProp} from '@setup/routes';
import {NavigationNames, getErrorProps} from '@utils';
import {Button, CheckBox, Circle, Header} from '@components';
import {BackArrow} from '@assets/svg';
import CollectHeader from './collectHeader';
import {Controller} from 'react-hook-form';
import {useCollectOfferController} from './collectOffer.controller';

const CollectOffer: React.FC = () => {
  const {params} = useRoute<AuthRouteProp<NavigationNames.CollectOffer>>();
  const {control, errors, onBackPress, handleSubmit, field, onCollect} =
    useCollectOfferController();
  const animated = new Animated.Value(0);
  const duration = 500;

  useEffect(() => {
    if (field.isTAndCAccected && !field.openSheet) {
      Animated.timing(animated, {
        toValue: 255,
        duration: duration,
        useNativeDriver: true,
      }).start();
    }
  }, [field]);

  return (
    <>
      <Header
        title="Collect Offer"
        leftComponentPress={onBackPress}
        leftComponent={() => <BackArrow />}
      />
      <CollectHeader />
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
        <View
          style={[
            styles.buttonShadowView,
            {paddingBottom: field.openSheet ? 120 : 15},
          ]}>
          <Text style={styles.offerDetailTitle}>Offer Details</Text>
          <Text style={styles.label}>Payment</Text>
          <Text style={styles.value}>Full/Installments</Text>
          <Text style={styles.label}>Validity Date</Text>
          <Text style={styles.value}>14 Mar,23 - 24 Mar,25</Text>
        </View>
      </Container>
      <Animated.View
        style={[styles.bottomSheetView, {transform: [{translateY: animated}]}]}>
        <Controller
          control={control}
          name="isTAndCAccected"
          render={({field: {value, onChange}}) => (
            <CheckBox
              checked={value}
              onPress={() => onChange(!value)}
              {...getErrorProps(errors.isTAndCAccected)}>
              <Text style={styles.termsAndConditions}>
                I agreed to these
                <Text style={styles.termsAndConditionsBlue}>
                  {' '}
                  Terms & Conditions
                </Text>
              </Text>
            </CheckBox>
          )}
        />
        <Button
          style={styles.collectButton}
          name="Collect"
          onPress={handleSubmit(onCollect)}
        />
      </Animated.View>
    </>
  );
};

export default CollectOffer;
