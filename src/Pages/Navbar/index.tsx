import React, { FunctionComponent } from 'react';
import { Stack, Flex } from '@chakra-ui/react'

import Tab from './Tab'
import ConnectWallet from './ConnectWallet';

const Navbar: FunctionComponent = (props) => {
  return (
    <Flex
      direction={'row'}
      px={{ sm: '10px', md:'20px', lg: '109px' }}
      // mr={{sm:'10px', md:'20px', lg:'110px'}}
      mt={'50px'}
      mb={'50px'}
      w={'100%'}
      justify={'space-between'}
      align={'center'}
    >
      <Stack
        direction={{ sm: 'column', md:'row', lg: 'row' }}
        spacing={'0px'}
      >
        <Tab id={'dashboard'} >DASHBOARD</Tab>
        <Tab id={'mypage'} >MY PAGE</Tab>
        <Tab id={'earn'} >EARN</Tab>
        <Tab id={'utility'} >UTILITY+</Tab>
      </Stack>
      <ConnectWallet />
    </Flex>
  );
}
export default Navbar;