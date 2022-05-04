import React, { FunctionComponent } from 'react';
import { Stack, VStack, Flex, Button } from '@chakra-ui/react'
import Welcome from './Welcome';
import Brand from './Brand';
import About from './About';
import MoreAbout from './MoreAbout';
import Wallet from './Wallet';
import Team from './Team';

const Home: FunctionComponent = (props) => {
  return (
    <VStack 
      pt={'180px'} 
      w={'100%'}
      spacing={'53px'}
    >
      <Welcome />
      <Brand />
      <About />
      <MoreAbout />
      <Wallet />
      <Team />
    </VStack>
  );
}
export default Home;