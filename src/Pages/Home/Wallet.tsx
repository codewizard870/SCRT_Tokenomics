import React, { FunctionComponent } from 'react';
import { Stack, HStack, Flex, Image, Text } from '@chakra-ui/react'

import walletbg from '../../assets/walletbg.ef1d3ba4.jpg';
import walletswap from '../../assets/walletswap.webp';

const Wallet: FunctionComponent = (props) => {

  return (
    <Stack
      direction={{ base: 'column', md: 'row', lg: 'row' }}
      w='100%'
      align={'center'}
      background={`url(${walletbg}) 50% no-repeat`}
      h={{sm:'780px', md: '450px', lg:'450px'}}
      overflow='hidden'
    >
      <Flex
        direction={'column'}
        mt={'15px'}
        w={'100%'}
        color='white'
        px={{sm:'30px', md: '50px', lg:'80px'}}
      >
        <Text fontSize='16px'>Introducing</Text>
        <Text fontSize='32px'>Glow Wallet & Swap</Text>
        <Text fontSize='16px' mt='16px'>
          Based on feedback from multiple projects, we present to you a clean, easy to use UI with Sending, Receiving, NFT Collections, and more.
        </Text>
        <Text fontSize='14px' mt='16px'>
          Image shown is a concept and final design may differ
        </Text>
        <Flex 
          mt='24px' 
          justify={'center'} 
          align='center' 
          bg='#3b91ad'
          w='145px'
          h='38px'
          rounded={'20px'}
          opacity='0.65'
        >
          Coming Soon
        </Flex>
      </Flex> 
        
      <Flex 
        w={{sm:'100%', md:'100%', lg:'50%'}}
        alignSelf='baseline'
        justify={'center'}
      >
        <Image src={walletswap} width='300px'/>
      </Flex>
    </Stack>
  );
}
export default Wallet;