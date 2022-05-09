import React, { FunctionComponent } from 'react';
import { Stack, VStack, Flex, Button, Text, Divider, Textarea, Box, Image } from '@chakra-ui/react'
import astronat from '../../assets/astronaut-helmet-animate.svg'
import badge from '../../assets/check-badge.webp'

const Lottery: FunctionComponent = (props) => {
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
          Lottery
        </Text>
        <Text mt='20px' w={{base:'100%', lg:'50%'}}>
          It pays big to hold Glow! $50 worth of Glow in your wallet can net you a cool $10,000 in our 10k BUSD Lottery.
        </Text>
      </Flex>
      <Flex 
        mt='30px' 
        pt='80px'
        pb='30px'
        bg='#e5e7e9' 
        w='100%' 
        px={{sm:'30px', md: '50px', lg:'80px'}} 
        align='center'
        direction='column'
      >
        <Image src={astronat} width='100px'/>
        <Text fontSize='32px'>
          Want to win some cash?
        </Text>
        <Text fontSize='16px'>
          Here at GlowToken we strive to give back to our community. Simply by holding GlowV2, you're eligible to be entered in our lottery. Here's how.
        </Text>

        <Stack
          mt='80px'
          direction={{base:'column', lg:'row'}}
          spacing='20px'
        >
          <VStack
            w='100%'
            px='16px'
            py='24px'
            rounded='20px'
            bg='white'
          >
            <Image src={badge} width='64px' />
            <Text fontSize='32px'>
              10K BUSD Lottery
            </Text>
            <Text fontSize='16px'>
              Progress: 3,214.88 / 10,000
            </Text>
            <Text fontSize='16px'>
              Requirements:
            </Text>
            <Text fontSize='16px'>
              Must hold at least $50 GlowV2 at the time of the drawing
            </Text>
          </VStack>
          <VStack
            w='100%'
            px='16px'
            py='24px'
            rounded='20px'
            bg='white'
          >
            <Image src={badge} width='64px' />
            <Text fontSize='32px'>
              10K BUSD Lottery
            </Text>
            <Text fontSize='16px'>
              Progress: 3,214.88 / 10,000
            </Text>
            <Text fontSize='16px'>
              Requirements:
            </Text>
            <Text fontSize='16px'>
              Must hold at least $50 GlowV2 at the time of the drawing
            </Text>
          </VStack>
        </Stack>
        <VStack
          mt='80px'
          w='100%'
        >
          <Text>
            10K Lottery Wallet:
          </Text>
          <Text>
            0x686c626E48bfC5DC98a30a9992897766fed4Abd3
          </Text>
          <Text fontSize='14px'>
            If your value drops below the required amount at the time of the drawing, you will not be entered in the pool.
          </Text>
          <Text fontSize='14px'>
            The 10K drawing will occur once the wallet accumulates $10,000 BUSD.
          </Text>
          <Text fontSize='14px'>
            Multiple drawings for this can occur in a single day as long as there are funds to support it.
          </Text>
        </VStack>
      </Flex>
    </Flex>
  );
}
export default Lottery;