import React, { FunctionComponent, useState, useMemo, useEffect } from 'react';
import { Flex, Text, Button, Image, Spinner, useDisclosure } from '@chakra-ui/react'
import {
  Popover,
  PopoverTrigger,
} from '@chakra-ui/react'
import { useWallet, useConnectedWallet } from '@terra-money/wallet-provider'
import { LCDClient, WasmAPI, Coins, Coin } from '@terra-money/terra.js'
import { toast } from 'react-toastify';
import {MdOutlineAccountBalanceWallet} from 'react-icons/md'

import Wallet from './../../../assets/Wallet.svg';

import { useStore, ActionKind } from '../../../store';
import { shortenAddress, floorNormalize } from '../../../Util';


const ConnectWallet: FunctionComponent = () => {
  const { state, dispatch } = useStore();
  const [bank, setBank] = useState(false);

  return (
    <>
      {!state.connected && 
        <Button
          fontSize={'15px'}
          fontWeight={'700'}
          width={'171px'}
          height={'36px'}
          background={'none'}
          border={'solid 2px #F9D85E'}
          rounded={'25px'}
          onClick={() => {}}
        >
        <Image src={Wallet} width={'15px'} />
          <Text ml={'11px'} color={'#F9D85E'}>
            Connect Wallet
          </Text>
        </Button>
      }
      {state.connected &&
        <Popover>
          <PopoverTrigger>
            <Button
              fontSize={'15px'}
              fontWeight={'700'}
              // width={'171px'}
              height={'36px'}
              background={'none'}
              border={'solid 2px #F9D85E'}
              rounded={'25px'}
              onClick={() => { }}
            >
              {(bank && !state.loading) &&
                <MdOutlineAccountBalanceWallet size={25} color={'#F9D85E'}/>
              }
              {(!bank || state.loading) && 
                <Spinner color={'#F9D85E'}/>
              }
              <Text ml={'15px'} color={'#F9D85E'}>
                Connected
              </Text>
            </Button>
          </PopoverTrigger>
        </Popover>
      } 
    </>
  );
}

export default ConnectWallet;