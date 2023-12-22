import { Menu } from '@/@types';
import { useFetch } from '@/services';

export const useGetMenu = () =>
  useFetch<Menu>({
    url: process.env.NEXT_PUBLIC_MENU_DETAILS || '',
    params: {},
    config: {
      enabled: true
    },
    errorMessage: 'Error ao buscar informações do menu'
  });
