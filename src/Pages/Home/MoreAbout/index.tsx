import React, { FunctionComponent } from 'react';
import { Stack, VStack, HStack, Flex, Image, Text } from '@chakra-ui/react'
import AboutItem from './AboutItem';

import piechart from '../../../assets/pie-chart-animate.svg'
import unity from '../../../assets/holding-hand.png';
import globe from '../../../assets/globe-heart.png';
import security from '../../../assets/security.png';

const MoreAbout: FunctionComponent = (props) => {
  return (
    <VStack
      w='100%'
      justify={'center'}
      pt='80px'
    >
      <Text>MoreAbout Glow</Text>
      <Text fontSize='32px'>Tokenomics</Text>
      <Text w='50%' textAlign={'center'} pt='48px'>
        55% Burned | 6% Official Team** | 39% Circulating Supply
      </Text>
      <Stack
        pt='48px'
        direction={{ base: 'column', md: 'row', lg: 'row' }}
        spacing='100px'
        w='100%'
        align={'center'}
      >
        <Flex w='50%'>
          <Image src={piechart} />
        </Flex>
        <Flex direction='column'>
          <Text fontSize='24px'>15% Total Tax</Text>
          <Text>Each transaction is charged a 15% tax. Here's how it's broken down.</Text>
          <VStack mt='48px' spacing="30px">
            <AboutItem avatar={unity} title='Unity' description='Partnerships with projects and organizations to promote worthy causes.' />
            <AboutItem avatar={globe} title='Charity' description='Charitable donations to support community and global causes.' />
            <AboutItem avatar={security} title='Security' description='Transparent engagement and communication with our investors.' />
          </VStack>
        </Flex>
      </Stack>
      <Text fontSize='14px'>
        ** Team has a locked wallet, meaning they can not withdraw tokens. They only receive dividends as payment.
        If a team member leaves, the tokens are recovered.
      </Text>
    </VStack>
  );
}
export default MoreAbout;