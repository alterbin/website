import React, {
  createContext,
  type ReactNode,
  useContext,
  useMemo,
  useState,
  useEffect
} from 'react';
import { Updater, useImmer } from 'use-immer';

const initialState = {
  showMobileMenu: false
};

type State = ReturnType<() => typeof initialState>;

type SetState = Updater<State>;

interface DefaultValues {
  state: State
  setState: SetState
}

const Context = createContext<DefaultValues>({ state: initialState, setState: () => null });

const Provider = (props: { children: ReactNode }) => {
  const { children } = props;

  const [state, setState] = useImmer(initialState);

  const value = useMemo(() => ({ state, setState }), [state, setState]);

  useEffect(() => {
    setState(initialState);
  }, [setState]);

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};

const useGlobalContext = () => useContext(Context);

export { useGlobalContext, Provider, initialState };
