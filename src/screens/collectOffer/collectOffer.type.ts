import {Control, FieldErrors, UseFormHandleSubmit} from 'react-hook-form';

export interface CollectOfferFormFields {
  openSheet: boolean;
  isTAndCAccected: boolean;
}

export interface CollectOfferController {
  control: Control<CollectOfferFormFields, any>;
  errors: FieldErrors<CollectOfferFormFields>;
  onBackPress: () => void;
  handleSubmit: UseFormHandleSubmit<
    CollectOfferFormFields,
    CollectOfferFormFields
  >;
  field: CollectOfferFormFields;
  onCollect: () => void;
}
