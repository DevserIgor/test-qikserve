import { Menu, Restaurant, ThemeColors } from '@/@types';
import { AppInitialState } from '@/@types/setup/setupTypes';
import { ActionTypes, SetStateProps } from '@/store/@types/actionsTypes';

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
  action: ActionTypes<SetStateProps>
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
          [action.payload.key]: action.payload.value
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
