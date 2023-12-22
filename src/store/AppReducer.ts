import { Menu, Restaurant, ThemeColors } from '@/@types';
import { AppInitialState } from '@/@types/setup/setupTypes';
import { ActionTypes } from '@/store/@types/actionsTypes';

export const initialAppState: AppInitialState = {
  loading: false,
  error: '',
  globalState: {
    restaurant: {} as Restaurant,
    theme: {} as ThemeColors,
    menu: {} as Menu
  }
};

export const AppReducer = (
  state: AppInitialState = initialAppState,
  action: ActionTypes<AppInitialState>
): AppInitialState => {
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
        globalState: {
          ...state.globalState,
          ...action.payload
        },
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
