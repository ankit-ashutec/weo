import {useNavigation} from '@react-navigation/native';
import {AuthNavigationProps} from '@setup/routes';
import {
  CollectOfferController,
  CollectOfferFormFields,
} from './collectOffer.type';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {collectOfferSchema} from '@validationSchema/offer';
import {useCallback} from 'react';

export const useCollectOfferController = (): CollectOfferController => {
  const navigation = useNavigation<AuthNavigationProps>();
  const {
    control,
    formState: {errors},
    handleSubmit,
    setValue,
    watch,
  } = useForm<CollectOfferFormFields>({
    mode: 'onChange',
    defaultValues: {
      isTAndCAccected: false,
      openSheet: true,
    },
    resolver: yupResolver<CollectOfferFormFields>(collectOfferSchema),
  });
  const field = watch();

  const onBackPress = useCallback((): void => {
    navigation.goBack();
  }, [navigation]);

  const onCollect = (): void => {
    setValue('openSheet', false);
  };

  return {
    control,
    errors,
    onBackPress,
    handleSubmit,
    field,
    onCollect,
  };
};
