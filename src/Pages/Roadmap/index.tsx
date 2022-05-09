import React, { FunctionComponent } from 'react';
import { Stack, VStack, Flex, Button, Text, Divider, Textarea, Box, chakra } from '@chakra-ui/react'
import { Progress } from '@chakra-ui/react'
import PulseSuccess from './PulseSuccess';
import PulsePending from './PulsePending';

const RoadMap: FunctionComponent = (props) => {
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
          Roadmap
        </Text>
        <Text mt='20px'>
          Everything that we have planned for the forseeable future
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
        <Text w='100%' textAlign={'center'} fontSize='14px'>
          Holder's Goal
        </Text>
        <Flex w='100%' mt='10px' align='center'>
          <Text fontSize='14px'>10,977</Text>
          <Progress bg='#f0ad4e' colorScheme={'green'} value={23} w='100%' mx='30px' rounded={'10px'} height='10px'/>
          <Text fontSize='14px'>50,000</Text>
        </Flex>

        <Flex 
          w='100%'
          mt='30px'
        >
          <Flex w='50px' h='100%' justify={'center'}>
            <Divider orientation='vertical' h='100%' borderColor='black'/>
          </Flex>
          <Flex 
            w='100%'
            direction='column'
          >
            <Text fontSize='14px'>
              Phase 1 | 2022
            </Text>
            <Flex mt='10px' h='100%' p='10px'  bg='white' rounded='10px' position='relative'>
              <PulseSuccess />
              <Text fontSize='16px' rounded='10px'>
                Initial token creation, website launch, social media presence, and get logo added on bscscan. We're also looking to list on CoinGecko, CoinMarketCap, SafeMoonSwap, Indacoin, and begin our $10,000 lottery and charity donations.
              </Text>
            </Flex>
            <Flex mt='10px' h='100%' p='10px'  bg='white' rounded='10px' position='relative'>
              <PulseSuccess />
              <Text fontSize='16px' rounded='10px'>
                Create a dapp to check your dividends and claim pending rewards as well as upgrading the token contract to v2. We also would like to reach 5,000 holders by the end of Q1.
              </Text>
            </Flex>
            <Text mt='50px' fontSize='14px'>
              Phase 2 | 2022
            </Text>
            <Flex mt='10px' h='100%' p='10px'  bg='white' rounded='10px' position='relative'>
              <PulsePending />
              <Text fontSize='16px' rounded='10px'>
                Certik Audit + SkyNet and the launch of a new website. Glow NFT collection will be set to launch as well as the GlowSwap.
              </Text>
            </Flex>
            <Flex mt='10px' h='100%' p='10px'  bg='white' rounded='10px' position='relative'>
              <PulsePending />
              <Text fontSize='16px' rounded='10px'>
                TrustWallet Logo and we're also planning to begin development on a new NFT Marketplace, Pay-to-Earn Game, and a new wallet app.
              </Text>
            </Flex>
            <Text mt='50px' fontSize='14px'>
              Phase 3 | 2022
            </Text>
            <Flex mt='10px' h='100%' p='10px'  bg='white' rounded='10px' position='relative'>
              <PulsePending />
              <Text fontSize='16px' rounded='10px'>
                Glow Foundation should be established along with various scholarships.
              </Text>
            </Flex>
            <Flex mt='10px' h='100%' p='10px'  bg='white' rounded='10px' position='relative'>
              <PulsePending />
              <Text fontSize='16px' rounded='10px'>
                $50,000 Charity donation.
              </Text>
            </Flex>
            <Text mt='50px' fontSize='14px'>
              Phase 4 | 2022
            </Text>
            <Flex mt='10px' h='100%' p='10px'  bg='white' rounded='10px' position='relative'>
              <PulsePending />
              <Text fontSize='16px' rounded='10px'>
                Glow Wallet should be coming close being complete
              </Text>
            </Flex>
            <Flex mt='10px' h='100%' p='10px'  bg='white' rounded='10px' position='relative'>
              <PulsePending />
              <Text fontSize='16px' rounded='10px'>
                Listing on the SafeMoon Exchange and USA Credit Card portal.
              </Text>
            </Flex>
            <Flex mt='10px' h='100%' p='10px'  bg='white' rounded='10px' position='relative'>
              <PulsePending />
              <Text fontSize='16px' rounded='10px'>
                $150,000 Charity Donation and possibly a $150,000 Lottery Giveaway
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
export default RoadMap;