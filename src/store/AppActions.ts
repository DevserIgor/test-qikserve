import {
  ActionFetchSuccess,
  ActionSetError,
  ActionSetIsLoading,
  SetStateProps
} from './@types/actionsTypes';

const setState = (data: SetStateProps): ActionFetchSuccess<SetStateProps> => {
  return {
    type: 'FETCH_SUCCESS',
    payload: data
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

export const AppActions = {
  setState,
  setIsLoading,
  setError
};
