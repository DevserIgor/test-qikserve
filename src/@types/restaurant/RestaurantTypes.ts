import { VenueTypes } from './webSettings/VenueTypes';

export type RestaurantState = {
  loading: boolean;
  error: string;
  restaurant: RestaurantResponse;
};

export type RestaurantResponse = {
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

export type RestaurantActionsPropsTypes = {
  type: string;
  payload: RestaurantResponse;
  error: string;
  isLoading: boolean;
};

export type ActionSetupInfo = {
  type: 'FETCH_SUCCESS';
  payload: RestaurantResponse;
};

export type ActionSetIsLoading = {
  type: 'SET_REQUESTING';
  isLoading: boolean;
};

export type ActionSetError = {
  type: 'SET_ERROR';
  error: string;
};

export type RestaurantActionsTypes =
  | ActionSetupInfo
  | ActionSetIsLoading
  | ActionSetError;

export type SetupContextProps = {
  state: RestaurantState;
  dispatch: React.Dispatch<RestaurantActionsTypes>;
};
