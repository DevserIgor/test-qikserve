'use client';

import { Restaurant, ThemeColors } from '@/@types';
import { ActionTypes, SetStateProps } from '@/store/@types/actionsTypes';
import { useRestaurantSetup } from '@/hooks/restaurant/useRestaurantSetup';

import { defaultThemeColors } from '@/util/theme/defaults';
import {
  ReactNode,
  createContext,
  useCallback,
  useMemo,
  useReducer
} from 'react';
import { AppInitialState } from '@/@types/setup/setupTypes';
import { AppReducer, initialAppState } from '@/store/AppReducer';
import { AppActions } from '@/store/AppActions';
import { useGetMenu } from '@/templates/menus/hooks/useGetList/useGetMenu';
import { isEqual } from 'lodash';

type CombinedProviderProps = {
  children: ReactNode;
};

export type AppContextProps = {
  state: AppInitialState;
  dispatch: React.Dispatch<ActionTypes<SetStateProps>>;
};

const AppContext = createContext<AppContextProps>({} as AppContextProps);

const AppContextProvider = ({ children }: CombinedProviderProps) => {
  const { data: restaurant } = useRestaurantSetup();
  const { data: menu } = useGetMenu();

  const [state, dispatch] = useReducer(AppReducer, {
    ...initialAppState,
    globalState: {
      ...initialAppState.globalState,
      menu: menu,
      restaurant: restaurant,
      theme: defaultThemeColors
    }
  } as AppInitialState);

  const setState = useCallback(
    (data: SetStateProps) => dispatch(AppActions.setState(data)),
    [dispatch]
  );

  const updateTheme = useCallback(
    async (restaurant: Restaurant) => {
      const { webSettings } = restaurant;
      if (isEqual(restaurant, state.globalState.restaurant)) return;
      setState({ key: 'restaurant', value: restaurant });

      const theme = Object.entries(webSettings).reduce((acc, [key, value]) => {
        if (defaultThemeColors[key as keyof ThemeColors] === undefined)
          return acc;

        const propertyName =
          defaultThemeColors[key as keyof ThemeColors].variableName;
        const propertyValue = value as string;

        const transformPropertyName =
          propertyName == '--banner-image'
            ? `url('${propertyValue}')`
            : propertyValue;

        document.documentElement.style.setProperty(
          propertyName,
          transformPropertyName
        );

        return {
          ...acc,
          [key]: {
            ...acc[key as keyof ThemeColors],
            value: transformPropertyName
          }
        };
      }, defaultThemeColors);

      if (isEqual(theme, state.globalState.theme)) return;
      setState({ key: 'theme', value: theme });
    },
    [setState, state.globalState.restaurant, state.globalState.theme]
  );

  useMemo(() => {
    if (restaurant !== undefined) {
      updateTheme(restaurant);
    }

    if (menu && !isEqual(menu, state.globalState.menu)) {
      setState({ key: 'menu', value: menu });
    }
  }, [menu, restaurant, setState, state.globalState.menu, updateTheme]);

  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export { AppContextProvider, AppContext };
