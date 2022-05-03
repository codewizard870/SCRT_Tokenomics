import React, { createContext, useContext, useReducer } from 'react'
import { ConnectedWallet } from '@terra-money/wallet-provider'
import { LCDClient } from '@terra-money/terra.js'

import { floor, floorNormalize } from './Util'

export type COINTYPE = 'ust' | 'luna';

interface Action {
  type: ActionKind;
  payload: any;
}

export interface AppContextInterface {
  loading: boolean,
  net: "mainnet" | "testnet",
  connected: Boolean,
  tab: string,
}

const initialState: AppContextInterface = {
  loading: false,
  net: "testnet",
  connected: false,
  tab: 'home',
}

export enum ActionKind{
  setLoading,
  setNet,
  setPoolAddr,
  setLcd,
  setConnected,
  setTab,
}

const StoreContext = createContext<{ state: AppContextInterface; dispatch: React.Dispatch<any>; }>
({
  state: initialState,
  dispatch: () => null
});

export const reducer = (state: AppContextInterface,  action: Action ) => {
  switch (action.type) {
    case ActionKind.setLoading:
      return { ...state, loading: action.payload}
    case ActionKind.setNet:
      return { ...state, net: action.payload}
    case ActionKind.setConnected:
      return { ...state, connected: action.payload }
    case ActionKind.setLcd:
      return { ...state, lcd: action.payload }
    case ActionKind.setTab:
      return { ...state, tab: action.payload }
    default:
      return state
  }
}

export const StoreProvider: React.FC = ({ children}) => 
{
  const [state, dispatch] = useReducer(reducer, initialState)

  // useEffect(()=>{
  //   let net = window.localStorage.getItem('net') || "mainnet";
  //   if( net == "testnet" ){
  //     Set2Testnet(state, dispatch);
  //   }
  //   else{
  //     Set2Mainnet(state, dispatch);
  //   }
  // }, []);

  return (
    <StoreContext.Provider value={{state, dispatch}}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStore = () => useContext(StoreContext)
