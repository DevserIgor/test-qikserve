import {
  ActionSetError,
  ActionSetIsLoading,
  ActionSetupInfo,
  RestaurantState
} from '@/@types/restaurant/RestaurantTypes';
import { initialState } from '@/providers/setupProvider';

const setupInfo = (data: RestaurantState = initialState): ActionSetupInfo => {
  return {
    type: 'FETCH_SUCCESS',
    payload: data.restaurant
  };
};

const setIsLoading = (isLoading: boolean): ActionSetIsLoading => {
  return {
    type: 'SET_REQUESTING',
    isLoading
  };
};

const setError = (isError: boolean): ActionSetError => {
  return {
    type: 'SET_ERROR',
    error: isError ? 'It was not possible to set up the restaurant' : ''
  };
};

export const RestaurantActions = {
  setupInfo,
  setIsLoading,
  setError
};
