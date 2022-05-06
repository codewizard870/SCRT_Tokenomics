import React, { FunctionComponent, useEffect, useState } from 'react';
import { Stack, VStack, HStack, Flex, Image, Text, Button, Box, Input, useDisclosure } from '@chakra-ui/react'
import axios from 'axios';

import { CgArrowsExchangeAltV } from 'react-icons/cg';

import InputPanel from './InputPanel';
import { fixedNumberString } from '../../../Util';

const SwapPanel: FunctionComponent = (props) => {
  const [fromValue, setFromValue] = useState(0);
  const [fromTokenIndex, setFromTokenIndex] = useState(4);
  const [fromBalance, setFromBalance] = useState(0);

  const [toValue, setToValue] = useState(0);
  const [toTokenSymbol, setToTokenSymbol] = useState('sSCRT');
  const [toBalance, setToBalance] = useState(0);

  const [tokenList, setTokenList] = useState<any[]>([]);
  const ethBaseURL = "https://api-bridge-mainnet.azurewebsites.net/";
  const bscBaseURL = 'https://bridge-bsc-mainnet.azurewebsites.net/tokens/?page=0&size=1000';

  const changeFromToken = (index: number) => {
    setFromTokenIndex(index);
  }

  useEffect(() => {
    const fetchToken = async (baseURL: string) => {
      const res = await axios.get(
        'tokens/?page=0&size=10000',
        { baseURL }
      );
      return res.data.tokens;
    }
    fetchToken(ethBaseURL).then((ethList) => {
      fetchToken(bscBaseURL).then((bscList) => {
        console.log(ethList);
        console.log(bscList)
        setTokenList(ethList.concat(bscList));
      });
    });

  }, []);

  return (
    <Box
      w='100%'
      bg='#e5e7e9'
      rounded={'20px'}
      p='20px'
    >
      <InputPanel
        balance={fromBalance}
        setBalance={setFromBalance}
        index={fromTokenIndex}
        tokenList={tokenList}
        changeToken={changeFromToken}
      />
      <Flex w='100%' justify={'center'} m='10px'>
        <CgArrowsExchangeAltV size='30px' />
      </Flex>

      <Button mt='20px' w='100%'>
        Swap
      </Button>
    </Box>
  );
}
export default SwapPanel;