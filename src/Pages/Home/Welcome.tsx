import React, { FunctionComponent } from 'react';
import { Stack, HStack, Flex, Image, Text } from '@chakra-ui/react'

import Animation from '../../assets/to-the-stars-animate.svg';

const Welcome: FunctionComponent = (props) => {

  return (
    <Stack
      direction={{ base: 'column', md: 'row', lg: 'row' }}
      w='100%'
      align={'center'}
      px={{sm:'30px', md: '50px', lg:'80px'}}
    >
      <Flex
        direction={'column'}
        mt={'15px'}
        w={'100%'}
      >
        <Text fontSize='16px'>Welcome to GlowV2</Text>
        <Text fontSize='32px'>The light in the darkness of DeFi.</Text>
        <Text fontSize='16px' mt='16px'>
          We present to you a token focused on giving back through a lottery for our holders, charitable donations, education to the masses, and empowering others to succeed and do good in the world while also being transparent in how we operate.
        </Text>
        <HStack mt='48px'>
          <Flex
            w='133px'
            h='38px'
            color='white'
            rounded='20px'
            background='#70cc75'
            justify={'center'}
            align='center'
            cursor={'pointer'}
          >
            Buy now
          </Flex>
          <Flex
            w='133px'
            h='38px'
            justify={'center'}
            align='center'
            cursor={'pointer'}
          >
            Swap
          </Flex>
        </HStack>
        <Text mt='48px' fontSize='16px'>
          Contract 0x686c626E48bfC5DC98a30a9992897766fed4Abd3
        </Text>
        <Text fontSize='10px'>
          Tap or click the address above to copy the full address
        </Text>
      </Flex>
      <Flex w={{sm:'100%', md:'100%', lg:'50%'}}>
        <Image src={Animation} />
      </Flex>
    </Stack>
  );
}
export default Welcome;