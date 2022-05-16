import React, { FunctionComponent, useState, useMemo, useEffect } from 'react';
import { Flex, Text, Button, Image, Spinner, useDisclosure } from '@chakra-ui/react'
import {  Popover, PopoverTrigger } from '@chakra-ui/react'
import {MdOutlineAccountBalanceWallet} from 'react-icons/md'

import { BroadcastMode, SecretNetworkClient } from 'secretjs';
import {config} from '../../../testnet'

import Wallet from './../../../assets/Wallet.svg';
import { useStore, ActionKind } from '../../../store';
import { shortenAddress, floorNormalize, sleep } from '../../../Util';


const ConnectWallet: FunctionComponent = () => {
  const { state, dispatch } = useStore();
  const [bank, setBank] = useState(false);
  const [loading ,setLoading] = useState(false);
  const [account, setAccount] = useState('');

  let keplrWallet: any;
  let keplrOfflineSigner: any;
  let secretjs: SecretNetworkClient;
  let isKeplrWallet = false;
  let chainId: string;

  useEffect(() => {
    window.addEventListener('keplr_keystorechange', () => {
      console.log('Key store in Keplr is changed. Reloading page');
      window.location.reload();
    });
    
    keplrCheckPromise.then(() => {});
  },[])

  const keplrCheckPromise = new Promise<void>((accept, _reject) => {
    // 1. Every one second, check if Keplr was injected to the page
    const keplrCheckInterval = setInterval(async () => {
      isKeplrWallet =
        // @ts-ignore
        !!window.keplr &&
        // @ts-ignore
        !!window.getOfflineSigner &&
        // @ts-ignore
        !!window.getEnigmaUtils;
      // @ts-ignore
      keplrWallet = window.keplr;

      if (isKeplrWallet) {
        // Keplr is present, stop checking
        clearInterval(keplrCheckInterval);
        accept();
      } else {
        console.log('Keplr is not installed');
      }
    }, 1000);
  });

  async function connect(wait?: boolean) {
    try {
      // error = '';

      console.log('Waiting for Keplr...');
      while (wait || !keplrWallet) {
        await sleep(100);
      }
      console.log('Found Keplr', config.CHAIN_ID);

      chainId = config.CHAIN_ID;

      // Setup Secret Testnet (not needed on mainnet)
      if (config.NETWORK_TYPE !== 'MAINNET') {
        await keplrWallet.experimentalSuggestChain({
          chainId: chainId,
          chainName: config.CHAIN_NAME,
          rpc: config.SECRET_RPC,
          rest: config.SECRET_LCD,
          bip44: {
            coinType: 529,
          },
          coinType: 529,
          stakeCurrency: {
            coinDenom: 'SCRT',
            coinMinimalDenom: 'uscrt',
            coinDecimals: 6,
          },
          bech32Config: {
            bech32PrefixAccAddr: 'secret',
            bech32PrefixAccPub: 'secretpub',
            bech32PrefixValAddr: 'secretvaloper',
            bech32PrefixValPub: 'secretvaloperpub',
            bech32PrefixConsAddr: 'secretvalcons',
            bech32PrefixConsPub: 'secretvalconspub',
          },
          currencies: [
            {
              coinDenom: 'SCRT',
              coinMinimalDenom: 'uscrt',
              coinDecimals: 6,
            },
          ],
          feeCurrencies: [
            {
              coinDenom: 'SCRT',
              coinMinimalDenom: 'uscrt',
              coinDecimals: 6,
            },
          ],
          gasPriceStep: {
            low: 0.1,
            average: 0.25,
            high: 0.4,
          },
          features: ['secretwasm'],
        });
      }
      // Ask the user for permission
      await keplrWallet.enable(chainId);

      // @ts-ignore
      keplrOfflineSigner = window.getOfflineSigner(chainId);
      const [{ address: myAddress }] = await keplrOfflineSigner.getAccounts();
      setAccount(myAddress);

      const secretjs = await SecretNetworkClient.create({
        grpcWebUrl: "https://grpc-web.azure-api.net",
        chainId: "secret-4",
        wallet: keplrOfflineSigner,
        walletAddress: myAddress,
      });
      let res = await secretjs.query.compute.contractCodeHash(config.AMM_FACTORY_CONTRACT);
      console.log(res)
      // const { token_info } = await secretjs.query.compute.queryContract({
      //   contractAddress: config.AMM_FACTORY_CONTRACT,
      //   codeHash: sScrtCodeHash, // optional but way faster
      //   query: { token_info: {} },
      // });

    } catch (error) {
      console.error(error);
    }
  }
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
          onClick={() => connect()}
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