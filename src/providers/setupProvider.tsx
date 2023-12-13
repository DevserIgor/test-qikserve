'use client';
import {
  RestaurantResponse,
  RestaurantState,
  SetupContextProps
} from '@/@types/restaurant/RestaurantTypes';
import { useRestaurantSetup } from '@/hooks/restaurant/useRestaurantSetup';
import { RestaurantActions } from '@/store/restaurante/RestaurantActions';
import { RestaurantReducer } from '@/store/restaurante/RestauranteReducer';
import {
  ReactNode,
  createContext,
  useEffect,
  useMemo,
  useReducer
} from 'react';

type SetupProviderProps = {
  children: ReactNode;
};
const SetupContext = createContext<SetupContextProps>({} as SetupContextProps);

export const initialState: RestaurantState = {
  loading: false,
  error: '',
  restaurant: {} as RestaurantResponse
};

const SetupProvider = ({ children }: SetupProviderProps) => {
  const { data, isLoading, isError } = useRestaurantSetup();
  const [state, dispatch] = useReducer(RestaurantReducer, initialState);

  const setState = (data: RestaurantState) => {
    dispatch(RestaurantActions.setupInfo(data));
  };

  const setLoading = (isLoading: boolean) => {
    dispatch(RestaurantActions.setIsLoading(isLoading));
  };

  const setError = (isError: boolean) => {
    dispatch(RestaurantActions.setError(isError));
  };

  useEffect(() => {
    setLoading(isLoading);
    if (data) {
      setState(data);
    }
    setError(isError);
  }, [data, isError, isLoading]);

  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <SetupContext.Provider value={contextValue}>
      {children}
    </SetupContext.Provider>
  );
};

export { SetupProvider, SetupContext };
