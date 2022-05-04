import React, { FunctionComponent } from 'react';
import { Stack, VStack, HStack, Flex, Image, Text } from '@chakra-ui/react'
import AboutItem from './AboutItem';

import piechart from '../../../assets/pie-chart-animate.svg'
import unity from '../../../assets/holding-hand.png';
import globe from '../../../assets/globe-heart.png';
import security from '../../../assets/security.png';

import rewards from '../../../assets/rewards.png'
import piggybank from '../../../assets/piggy-bank.png'
import heartbeat from '../../../assets/heartbeat.png'

import foxbussiness from '../../../assets/FoxBusiness.png'
import nasdaq from '../../../assets/nasdaq.png'
import newsmax from '../../../assets/Newsmax.png'
import bloomberg from '../../../assets/bloomberg.png'
import yahoo from '../../../assets/yahoo.png'

const MoreAbout: FunctionComponent = (props) => {
  return (
    <VStack
      w='100%'
      justify={'center'}
      pt='80px'
      px={{sm:'30px', md: '50px', lg:'80px'}}
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
            <AboutItem avatar={rewards} title='10% Rewards' description='10% gets redistributed amongst holders in the form of BUSD.' />
            <AboutItem avatar={piggybank} title='3% Marketing & Lottery' description='3% goes into a marketing and lottery wallet.' />
            <AboutItem avatar={globe} title='1% Charity' description='1% gets contributed to a charity of the community s choice.' />
            <AboutItem avatar={heartbeat} title='1% Liquidity' description='1% gets fed back in to the liquidity pool to keep the coin going.' />
          </VStack>
        </Flex>
      </Stack>
      <Text fontSize='14px'>
        ** Team has a locked wallet, meaning they can not withdraw tokens. They only receive dividends as payment.
        If a team member leaves, the tokens are recovered.
      </Text>
      <Stack
        pt='48px'
        direction={{ base: 'column', md: 'row', lg: 'row' }}
        spacing='100px'
        w='100%'
        align={'center'}
      >
        <Image src={foxbussiness} width='150px'/>
        <Image src={nasdaq} width='150px'/>
        <Image src={newsmax} width='150px'/>
        <Image src={bloomberg} width='150px'/>
        <Image src={yahoo} width='150px'/>
      </Stack>
    </VStack>
  );
}
export default MoreAbout;