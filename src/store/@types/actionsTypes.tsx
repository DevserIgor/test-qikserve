export type ActionProps<TPayload, TError = string> = {
  type: string;
  payload?: TPayload;
  error?: TError;
  isLoading?: boolean;
};

export type ActionFetchSuccess<TPayload> = {
  type: 'FETCH_SUCCESS';
  payload: TPayload;
};

export type ActionSetIsLoading = {
  type: 'SET_REQUESTING';
  isLoading: boolean;
};

export type ActionSetError<TError = string> = {
  type: 'SET_ERROR';
  error: TError;
};

export type ActionTypes<TPayload, TError = string> =
  | ActionFetchSuccess<TPayload>
  | ActionSetIsLoading
  | ActionSetError<TError>;

export type ContextProps<TState, TActions> = {
  state: TState;
  dispatch: React.Dispatch<TActions>;
};

export type CombinedContextProps<TState, TDispatch> = {
  state: TState;
  dispatch: TDispatch;
};
