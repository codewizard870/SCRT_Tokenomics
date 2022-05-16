import { AppContextInterface, ActionKind } from './store'

import { ConnectedWallet } from '@terra-money/wallet-provider'
import { toast } from 'react-toastify';

import { successOption, errorOption } from './constants';

export function shortenAddress(address: string | undefined) {
  if (address) {
    let prefix = address.slice(0, 5);
    let suffix = address.slice(-5)
    return prefix + "..." + suffix;
  }
  return "";
}


export function checkNetwork(wallet: ConnectedWallet | undefined, state: AppContextInterface) {
  //----------verify connection--------------------------------
  if (wallet === undefined) {
    toast("Please connect wallet first!", errorOption);
    console.log("Please connect wallet first!");
    return false;
  }
  else {
    toast.dismiss();
  }

  if (state.net == 'mainnet' && wallet.network.name == 'testnet') {
    toast("Please switch to mainnet!", errorOption);
    return false;
  }
  if (state.net == 'testnet' && wallet.network.name == 'mainnet') {
    toast("Please switch to Testnet!", errorOption);
    return false;
  }
  return true;
}

export function floorNormalize(amount: number) {
  return Math.floor(amount / 10 ** 4) / 100;
}

export function floor(amount: number) {
  return Math.floor(amount * 100) / 100;
}

export function fixedNumberString(amount: number) {
  let above = Math.floor(amount);
  let below = Math.round(amount*100 - Math.floor(amount)*100);
  return above.toString() + "." + below.toString();
}

export function getDateString(time: number) {
  const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  let datetime = new Date(time * 1000)
  return (month[datetime.getMonth()] + "   " + datetime.getDate() + " , " + datetime.getFullYear());
}

export function convertTosSymbol(symbol: string) {
  if(symbol == undefined)
    return '';
    
  const pattern = "secret-";
  const len = pattern.length;
  if(symbol.substr(0, len) == pattern)
    return "s" + symbol.substr(len);
  else 
    return symbol;
}

export const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};