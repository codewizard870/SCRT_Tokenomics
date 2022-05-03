import React, { FunctionComponent } from 'react';
import { Stack, HStack, Flex, Image, Text } from '@chakra-ui/react'

import bscscan from '../../assets/bscscan.png';
import coinmarket from '../../assets/coinmarket.png';
import certik from '../../assets/certik.png';
import nomics from '../../assets/nomics.png';
import watcher from '../../assets/watcher.png';

const Brand: FunctionComponent = (props) => {

  return (
    <Stack
      direction={{ base: 'column', md: 'column', lg: 'row' }}
      w='100%'
      spacing='50px'
      mb='75px'
      justify={'center'}
    >
      <HStack spacing='50px' alignSelf={'center'}>
        <Image src={bscscan} width='150px' />
        <Image src={coinmarket} width='150px' />
      </HStack>
      <HStack spacing='50px' alignSelf={'center'}>
        <Image src={certik} width='150px' />
        <Image src={nomics} width='150px' />
      </HStack>
      <HStack spacing='50px' alignSelf={'center'}>
        <Image src={watcher} width='150px' />
      </HStack>
    </Stack>
  );
}
export default Brand;