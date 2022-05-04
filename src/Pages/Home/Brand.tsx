import React, { FunctionComponent } from 'react';
import { Stack, HStack, Flex, Image, Text } from '@chakra-ui/react'

import bscscan from '../../assets/bscscan.png';
import coinmarket from '../../assets/coinmarket.png';
import certik from '../../assets/certik.png';
import nomics from '../../assets/nomics.png';
import watcher from '../../assets/watcher.png';

const Brand: FunctionComponent = (props) => {

  return (
    <Flex
      direction='row'
      w='100%'
      mb='75px'
      justify={'space-between'}
      px={{sm:'10px', md: '50px', lg:'80px'}}
      flexWrap='wrap'
    >
      <Image src={bscscan} width='150px' />
      <Image src={coinmarket} width='150px' />
      <Image src={certik} width='150px' />
      <Image src={nomics} width='150px' />
      <Image src={watcher} width='150px' />
    </Flex>
  );
}
export default Brand;