'use client';

import { Restaurant, ThemeColors } from '@/@types';
import { ActionTypes } from '@/store/@types/actionsTypes';
import { useRestaurantSetup } from '@/hooks/restaurant/useRestaurantSetup';

import { defaultThemeColors } from '@/util/theme/defaults';
import { ReactNode, createContext, useMemo, useReducer } from 'react';
import { AppInitialState } from '@/@types/setup/setupTypes';
import { AppReducer, initialAppState } from '@/store/AppReducer';
import { AppActions } from '@/store/AppActions';
import { useGetMenu } from '@/templates/menus/hooks/useGetList/useGetMenu';

type CombinedProviderProps = {
  children: ReactNode;
};

export type AppContextProps = {
  state: AppInitialState;
  dispatch: React.Dispatch<ActionTypes<AppInitialState>>;
};

const AppContext = createContext<AppContextProps>({} as AppContextProps);

const AppContextProvider = ({ children }: CombinedProviderProps) => {
  const {
    data: restaurant,
    isLoading: isLoadingRestaurant,
    isError: isErrorRestaurant
  } = useRestaurantSetup();

  const {
    data: menu,
    isLoading: isLoadingMenu,
    isError: isErrorMenu
  } = useGetMenu();
  const [state, dispatch] = useReducer(AppReducer, {
    ...initialAppState,
    globalState: {
      ...initialAppState.globalState,
      menu: menu,
      restaurant: restaurant,
      themeColors: defaultThemeColors
    }
  } as AppInitialState);

  const setThemeColors = ({ webSettings }: Restaurant) => {
    Object.entries(defaultThemeColors).forEach(async ([key, value]) => {
      const propertyName = value.variableName;
      const propertyValue = webSettings[key as keyof ThemeColors];
      console.log({ key, value, propertyName, propertyValue });

      const transformPropertyName =
        propertyName == '--banner-image'
          ? `url('${propertyValue}')`
          : propertyValue;

      document.documentElement.style.setProperty(
        propertyName,
        transformPropertyName
      );
      dispatch(
        AppActions.setState({
          ...state,
          globalState: {
            ...state.globalState,
            theme: {
              ...state.globalState.theme,
              [key]: {
                ...state.globalState.theme[key as keyof ThemeColors],
                value: transformPropertyName
              }
            }
          }
        })
      );
    });
  };

  const setLoading = (isLoading: boolean) => {
    dispatch(AppActions.setIsLoading(isLoading));
  };

  const setError = (isError: boolean) => {
    dispatch(AppActions.setError(isError));
  };

  useMemo(() => {
    setLoading(isLoadingRestaurant);
    setError(isErrorRestaurant);
    restaurant && setThemeColors(restaurant);
  }, [isLoadingRestaurant, isErrorRestaurant, restaurant]);

  useMemo(() => {
    setLoading(isLoadingMenu);
    setError(isErrorMenu);
  }, [isLoadingMenu, isErrorMenu]);

  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export { AppContextProvider, AppContext };
