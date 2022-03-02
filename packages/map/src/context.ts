import React from 'react';
import { useContext } from 'react';

type InitialState = {
  AMap?: typeof AMap;
  map?: AMap.Map;
  container?: HTMLDivElement | null;
};

export const initialState: Partial<InitialState> = {
  map: undefined,
  AMap: undefined,
  container: undefined,
};

export const reducer = (state: InitialState, action: InitialState) => {
  return {
    ...state,
    ...action,
  };
};

export interface Context {
  state: Partial<InitialState>;
  dispatch: React.Dispatch<InitialState>;
}

export const Context = React.createContext<Context>({
  state: initialState,
  dispatch: () => null,
});

export function useMapContext() {
  const { state, dispatch } = useContext(Context);
  return { ...state, state, dispatch };
}
