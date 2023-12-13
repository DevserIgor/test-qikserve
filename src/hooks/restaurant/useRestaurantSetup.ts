import {
  RestaurantResponse,
  RestaurantState
} from '@/@types/restaurant/RestaurantTypes';
import { useFetch } from '@/services';

export const useRestaurantSetup = () =>
  useFetch<RestaurantState>({
    url: process.env.NEXT_PUBLIC_ROUTE_RESTAURANT_DETAILS || '',
    params: {},
    config: {
      enabled: true,
      select: (restaurant): RestaurantState => {
        return {
          loading: false,
          error: '',
          restaurant: restaurant as unknown as RestaurantResponse
        };
      }
    },
    errorMessage: 'Error ao buscar informações do restaurant'
  });
