import React, { FunctionComponent } from 'react';
import { Stack, VStack, Flex, Box, Button, Text, Divider } from '@chakra-ui/react'
import TradingChart from './TradingChart';
import { initialData } from "./data";

const Candlestick: FunctionComponent = (props) => {
  return (
    <Flex
      w='100%'
    >
      <Box pt='70px' background='#04306b'>
        <TradingChart initialData={initialData} />
      </Box>
    </Flex>
  )
}

export default Candlestick;