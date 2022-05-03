import React, { FunctionComponent } from 'react';
import { Stack, VStack, Flex, Button } from '@chakra-ui/react'
import Welcome from './Welcome';
import Brand from './Brand';
import About from './About';
import MoreAbout from './MoreAbout';

const Home: FunctionComponent = (props) => {
  return (
    <VStack 
      pt={'180px'} 
      px={{sm:'10px', md:'20px', lg:'110px'}}
      w={'100%'}
      spacing={'53px'}
    >
      <Welcome />
      <Brand />
      <About />
      <MoreAbout />
    </VStack>
  );
}
export default Home;