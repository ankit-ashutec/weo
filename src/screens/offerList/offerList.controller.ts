import {useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {AuthNavigationProps} from '@setup/routes';
import {OfferListController, OfferListFormFields} from './offerList.types';
import offers from '@utils/json/offers.json';
import {useCallback, useEffect} from 'react';
import {Offer} from '@components/offerTile/offerTile.types';
import {NavigationNames} from '@utils';

export const useOfferListController = (): OfferListController => {
  const navigation = useNavigation<AuthNavigationProps>();
  const {
    control,
    formState: {errors, isValid},
    watch,
    setValue,
  } = useForm<OfferListFormFields>({
    defaultValues: {
      offerList: offers,
    },
  });
  const fields = watch();

  useEffect(() => {
    if (fields.search) {
      onSearch(fields.search.trim());
    } else {
      setValue('offerList', offers);
    }
  }, [fields.search]);

  const onSearch = (text: string): void => {
    const filterOffers = offers.filter(offer =>
      offer.category?.toLowerCase().includes(text?.toLowerCase()),
    );
    setValue('offerList', filterOffers);
  };

  const clearSearchText = (): void => {
    setValue('search', '');
  };

  const onItemClick = useCallback((offer: Offer) => {
    navigation.navigate(NavigationNames.CollectOffer, {offer});
  }, []);

  return {
    control,
    fields,
    clearSearchText,
    onItemClick,
  };
};
