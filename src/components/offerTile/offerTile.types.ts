export interface Offer {
  image: string;
  offerName: string;
  creatorName: string;
  price: number;
  miles: number;
  days: number;
  description: string;
  collectionedCount: number;
  sharedCount: number;
  category: string;
}

export interface OfferTileProps {
  item: Offer;
  onPress?: () => void;
}
