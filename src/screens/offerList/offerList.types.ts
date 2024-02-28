import {Control} from 'react-hook-form';
import {Offer} from '@components/offerTile/offerTile.types';

export interface OfferListFormFields {
  search: string;
  offerList: Offer[];
}

export interface OfferListController {
  control: Control<OfferListFormFields, any>;
  fields: OfferListFormFields;
  clearSearchText: () => void;
  onItemClick: (offer: Offer) => void;
}
