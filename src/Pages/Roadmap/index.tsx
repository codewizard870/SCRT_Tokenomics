import React, { FunctionComponent } from 'react';
import { Stack, VStack, Flex, Button, Text, Divider } from '@chakra-ui/react'
import { Progress } from '@chakra-ui/react'

const RoadMap: FunctionComponent = (props) => {
  return (
    <VStack 
      pt={'180px'} 
      w={'100%'}
    >
      <Flex 
        direction='column'
        w='100%'
        justify='left'
        px={{sm:'30px', md: '50px', lg:'80px'}}
      >
        <Text fontSize='32px' mt='10px'>
          Roadmap
        </Text>
        <Text mt='20px'>
          Everything that we have planned for the forseeable future
        </Text>
      </Flex>

      <Flex 
        mt='30px' 
        pt='80px'
        bg='#e5e7e9' 
        w='100%' 
        px={{sm:'30px', md: '50px', lg:'80px'}} 
        align='center'
        direction='column'
      >
        <Text w='100%' textAlign={'center'}>
          Holder's Goal
        </Text>
        <Flex w='100%' mt='10px'>
          <Text>10,977</Text>
          <Progress value={23} w='100%' mx='30px' rounded={'10px'} size='lg'/>
          <Text>50,000</Text>
        </Flex>
        <Text>
          Phase 1 | 2022
        </Text>
        <Flex w='100%'>
          <Flex>
            <Divider orientation='vertical' h='100%'/>
            <Flex 
              w='100%'
              direction='column'
            >
              <Text>
                Phase 1 | 2022
              </Text>
              <Flex>
                <Text bg='white' rounded='10px'>
                  Initial token creation, website launch, social media presence, and get logo added on bscscan. We're also looking to list on CoinGecko, CoinMarketCap, SafeMoonSwap, Indacoin, and begin our $10,000 lottery and charity donations.
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </VStack>
  );
}
export default RoadMap;