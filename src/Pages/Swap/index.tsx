import React, { FunctionComponent, useEffect, useState } from 'react';
import { Stack, VStack, HStack, Flex, Image, Text } from '@chakra-ui/react'
import axios from 'axios';

import scrtswap from '../../assets/scrt_swap.svg';
import PriceChart from './Chart';
import SwapPanel from './SwapPanel';

const Swap: FunctionComponent = (props) => {
  const [data, setData] = useState<any[]>([]);

  const baseURL = "https://api.coingecko.com/api/v3/";

  useEffect(() => {
    const fetchPrice = async () => {
      const res = await axios.get(
        'coins/secret/market_chart?vs_currency=usd&days=30',
        { baseURL }
      );
      return res
    }
    fetchPrice().then((res) => {
      let len = res.data.prices.length;
      let temp = [];
      for (let i = 0; i < 50; i++) {
        temp[i] = { time: res.data.prices[len - 51 + i][0], price: res.data.prices[len - 51 + i][1] };
      }
      setData(temp)
    });
  }, [])

  return (
    <Stack
      pt='180px'
      spacing='50px'
      w='100%'
      justify={'center'}
      px={{ sm: '5px', md: '50px', lg: '80px' }}
      direction={{ sm: 'column', md: 'column', lg: 'row' }}
      mb='40px !important'
    >
      <Flex
        direction='column'
        w={{ sm: '100%', md: '100%', lg: '60%' }}
        rounded='20px'
        bg='#e5e7e9'
        p='20px'
      >
        <Flex justify={'center'}>
          <Image src={scrtswap} width='30px' />
          <Text ml='10px'>
            SCRT
          </Text>
        </Flex>
        <PriceChart data={data} />
      </Flex>
      <Flex
        w={{ sm: '100%', md: '100%', lg: '50%' }}
      >
        <SwapPanel />
      </Flex>
    </Stack>
  );
}
export default Swap;