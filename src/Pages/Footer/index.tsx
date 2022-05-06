import React, { FunctionComponent, useEffect, useState } from 'react';
import { HStack, Stack, VStack, Flex, Text, Image, Input, InputGroup, InputRightElement, Divider, Button} from '@chakra-ui/react'

import {FaDiscord, FaTwitter, FaYoutube, FaFacebook, FaInstagram, FaReddit, FaTiktok} from 'react-icons/fa';

import logo from '../../assets/logo.png'

const data = [
  {title:'Branding', url:'branding'},
  {title:'White paper', url:'branding'},
  {title:'Our Team', url:'branding'},
  {title:'Terms of Service', url:'branding'},
  {title:'Privacy Policy', url:'branding'},
  {title:'SafeMoon', url:'branding'},
];

const Footer: FunctionComponent = (props) => {
  return (
    <Flex
      direction='column'
      px={{ sm: '10px', md:'20px', lg: '50px' }}
      pt='50px'
      pb='50px'
      w={'100%'}
      background='#e5e7e9'

    >
      <Stack
        direction={{sm: 'column', md:'column', lg:'row'}}
        align={'center'}
        spacing={{sm:'10px', md:'10px', lg:'240px'}}
      >
        <Flex
          direction='column'
          align='baseline'
          w='100%'
        >
          <Image src={logo} w='60px' />
          <Text fontSize='32px'>
            The light in the darkness of DeFi.
          </Text>
          <Text fontSize='16px' mt='24px'>
            We are committed to excellence and full transparency in the way we run our business, forging a bright future for our company and investors.
          </Text>
        </Flex>
        <Flex
          direction='column'
          align='end'
          w='100%'
        >
          <Text fontSize='16px'>
            Want all the latest news? Sign up for our email newsletter!
          </Text>
          <InputGroup 
            background='white'
            rounded='20px'
            w='100%'
            mt='16px'
            alignItems='center'
          >
            <Input 
              fontSize='16px' 
              rounded='20px' 
              placeholder='Email Address'
              w='100%'
              h='46px'
            />
            <InputRightElement
              w='120px'
              h='100%'
              rounded='20px'
            >
              <Button
                background='#378aa5'
                rounded='20px'
              >
                Subscribe
              </Button>
            </InputRightElement>
          </InputGroup>
          <HStack
            mt='20px'
            spacing='50px'
            height='32px'
          >
            <FaDiscord size='32px' color='#378aa5'/>
            <FaTwitter size='32px' color='#378aa5'/>
            <FaYoutube size='32px' color='#378aa5'/>
            <FaFacebook size='32px' color='#378aa5'/>
            <FaInstagram size='32px' color='#378aa5'/>
            <FaReddit size='32px' color='#378aa5'/>
            <FaTiktok size='32px' color='#378aa5'/>
          </HStack>
        </Flex>
      </Stack>
      <Divider orientation='horizontal' mt='40px' mb='40px' background='white' height='1px' />
      <Stack
        direction={{sm: 'column', md:'column', lg:'row'}}
        w='100%'
        justify='space-between'
      >
        <Text
          fontSize='16px'
        >
          Copyright © 2022 GlowToken LLC. | All Rights Reserved.
        </Text>
        <HStack
          spacing='20px'
          justify='center'
          flexWrap='wrap'
        >
          {data.map((item, index) => (
            <Flex>
              <Text>
                {item.title}
              </Text>
            </Flex>
          ))}
        </HStack>
      </Stack>
    </Flex>
  );
}
export default Footer;