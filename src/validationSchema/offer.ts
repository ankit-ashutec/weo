import {CollectOfferFormFields} from '@screens/collectOffer/collectOffer.type';
import * as yup from 'yup';

export const collectOfferSchema = yup
  .object<Record<keyof CollectOfferFormFields, yup.AnySchema>>()
  .shape({
    openSheet: yup.boolean().required(),
    isTAndCAccected: yup
      .boolean()
      .required()
      .isTrue('Please check terms and conditions first.'),
  })
  .required();
