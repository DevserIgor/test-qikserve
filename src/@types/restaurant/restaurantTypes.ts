export type RestaurantState = {
  loading: boolean;
  error: string;
  restaurant: Restaurant;
};

export type VenueTypes = {
  id: number;
  venueId: number;
  bannerImage: string;
  backgroundColour: string;
  primaryColour: string;
  primaryColourHover: string;
  navBackgroundColour: string;
};

export type Restaurant = {
  id: number;
  name: string;
  internalName: string;
  description: string | null;
  liveFlag: number;
  demoFlag: number;
  address1: string;
  address2: string;
  address3: string | null;
  city: string;
  county: string;
  postcode: string;
  country: string;
  timezoneOffset: string;
  locale: string;
  timeZone: string;
  webSettings: VenueTypes;
  ccy: string;
  ccySymbol: string;
  currency: string;
};
