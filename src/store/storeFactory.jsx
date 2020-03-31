import React, { createContext, useContext, useReducer, useMemo } from "react";

export const createStore = (reducer, defaultState, dispatchAction) => {
  const Context = createContext({ state: defaultState });
  const withStore = (Comp) => (props) => {
    const [state, dispatch] = useReducer(reducer, defaultState);
    const value = useMemo(() => ({ state, dispatch }), [state]);
    return <Context.Provider value={value}><Comp {...props}/></Context.Provider>
  }

  const useStore = () => {
    const { state } = useContext(Context);
    return state;
  }

  const useAction = () => {
    const { dispatch } = useContext(Context);
    return dispatchAction(dispatch);
  }

  return { withStore, useStore, useAction};
};
