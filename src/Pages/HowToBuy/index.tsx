import React, { FunctionComponent } from 'react';
import { Stack, VStack, Flex, Button, Text, Divider, Textarea, Box, Image } from '@chakra-ui/react'
import indacoin from '../../assets/indacoin.png'
import pancake from '../../assets/pancake.png'
import safemoon from '../../assets/safemoon.png'
import poocoin from '../../assets/poocoin.png'
import SwapCard from './SwapCard'

const HowToBuy: FunctionComponent = (props) => {
  return (
    <Flex
      direction={'column'} 
      w={'100%'}
      pt='180px'
    >
      <Flex 
        direction='column'
        w='100%'
        justify='left'
        px={{sm:'30px', md: '50px', lg:'80px'}}
      >
        <Text fontSize='32px' mt='10px'>
          How to Buy
        </Text>
        <Text mt='20px' w={{base:'100%', lg:'50%'}}>
          A guide on where and how to acquire Glow v2 on various swaps and exchanges.
        </Text>
      </Flex>
      <Flex 
        mt='30px' 
        pt='80px'
        pb='30px'
        bg='#e5e7e9' 
        w='100%' 
        px={{sm:'20px', md: '20px', lg:'30px'}} 
        align='center'
        direction='column'
      >
        <Text
          mt='80px'
          fontSize='32px'
        >
          Decentralized Swaps
        </Text>
        <Text
          fontSize='14px'
        >
          Swaps that work pretty much in any country except where prohibited.
        </Text>
        <Flex
          w='100%'
          mt='80px'
          flexWrap={'wrap'}
          px={{base: '10px', lg:'20px'}}
          justify='space-between'
        >
          <SwapCard 
            header='Easiest - Direct Buy'
            color='#62af66'
            img={indacoin}
            siteName={'Indacoin'}
            description='Directly buy GlowV2 using a debit or credit card. Non-USA. *'
            btnLabel='Buy Now'
          />
          <SwapCard 
            header='Medium'
            color='#f0ad4e'
            img={pancake}
            siteName={'PancakeSwap'}
            description='The most well known and trusted but requires a bit extra work.'
            btnLabel='Swap Now'
          />
          <SwapCard 
            header='Easy - Popular'
            color='#62af66'
            img={safemoon}
            siteName={'SafeSwap'}
            description="The go-to for many people as it's very popular and easy to use."
            btnLabel='Buy Now'
          />
          <SwapCard 
            header='Medium'
            color='#f0ad4e'
            img={poocoin}
            siteName={'Poocoin'}
            description="Another option to swap on. Not widely popular but it's here"
            btnLabel='Swap Now'
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
export default HowToBuy;