import {
  RestaurantActionsTypes,
  RestaurantState
} from '@/@types/restaurant/RestaurantTypes';

export const RestaurantReducer = (
  state: RestaurantState,
  action: RestaurantActionsTypes
): RestaurantState => {
  switch (action.type) {
    case 'SET_REQUESTING':
      return {
        ...state,
        loading: action.isLoading
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        loading: false,
        restaurant: action.payload,
        error: ''
      };
    case 'SET_ERROR':
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};
