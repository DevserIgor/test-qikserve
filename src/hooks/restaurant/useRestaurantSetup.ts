import { Restaurant } from '@/@types';
import { useFetch } from '@/services';

export const useRestaurantSetup = () =>
  useFetch<Restaurant>({
    url: process.env.NEXT_PUBLIC_ROUTE_RESTAURANT_DETAILS || '',
    params: {},
    config: {
      enabled: true
    },
    errorMessage: 'Error ao buscar informações do restaurant'
  });
