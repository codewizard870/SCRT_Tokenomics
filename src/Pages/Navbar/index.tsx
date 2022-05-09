import React, { FunctionComponent, useState } from 'react';
import { Stack, Flex, Image, Text, HStack } from '@chakra-ui/react'

import Tab from './Tab'
import ConnectWallet from './ConnectWallet';
import Logo from '../../assets/logo.png'
import menu from '../../assets/menu.svg'

const Navbar: FunctionComponent = (props) => {
  const [scrolled, setScrolled] = useState(false);
  document.addEventListener('scroll', function(e) {
    if(window.pageYOffset > 10)
      setScrolled(true)
    else
      setScrolled(false)
  });

  return (
    <Flex
      direction={'row'}
      px={{ sm: '10px', md:'20px', lg: '109px' }}
      pt={'50px'}
      pb={'20px'}
      w={'100%'}
      justify={'space-between'}
      align={'center'}
      position='fixed'
      background={scrolled ? 'white': 'none'}
      boxShadow={scrolled ? '0px 0px 30px rgb(127 137 161 / 30%)' : 'none'}
      transition='all 0.5s'
      zIndex={'9'}
    >
      <HStack>
        <Image src={Logo} width='30px'/>
        <Text fontSize='20px'>Glow</Text>
        <sup>v2</sup>
      </HStack>
      <HStack 
        display={{sm: 'none', md: 'none', lg: 'flex'}}
        spacing={'0px'}
      >
        <Tab id={'home'} >Home</Tab>
        <Tab id={'swap'} >Swap</Tab>
        <Tab id={'howtobuy'} >How to Buy</Tab>
        <Tab id={'roadmap'} >RoadMap</Tab>
        <Tab id={'lottery'} >Lottery</Tab>
        <Tab id={'charity'} >Charity</Tab>
        <Tab id={'education'} >Education</Tab>
        <Tab id={'merch'} >Merch</Tab>
        <Tab id={'dashboard'} >Dashboard</Tab>
      </HStack>
      <Flex display={{sm: 'block', md: 'block', lg: 'none'}}>
        <Image src={menu} background='gray' width='30px' />
      </Flex>
      {/* <ConnectWallet /> */}
    </Flex>
  );
}
export default Navbar;