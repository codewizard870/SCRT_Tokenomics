import React, { FunctionComponent, useEffect, useState } from 'react';
import { HStack, Stack, VStack, Flex, Text, Image, Link, Center, Divider } from '@chakra-ui/react'

import GreenLamp from './../../assets/GreenLamp.svg'
import Twitter from './../../assets/Twitter.svg'
import Subtract from './../../assets/Subtract.svg'
import Medium from './../../assets/Medium.svg'

const Footer: FunctionComponent = (props) => {
  const [blockHeight, setBlockHeight] = useState(0); 
  const [timer, setTimer] = useState(0);

  return (
    <Flex
      direction={'row'}
      px={{ sm: '10px', md:'20px', lg: '109px' }}
      pt={'108px'}
      pb={'104px'}
      w={'100%'}
      justify={'space-between'}
      align={'center'}
    >
      <HStack spacing={'5px'}>
        <Image src={GreenLamp} w={'10px'}/>
        <Text
          ml={'5px'}
          fontSize={'9px'}
          fontWeight={'860'}
          lineHeight={'10px'}
        >
          LATEST BLOCK:&nbsp;&nbsp;&nbsp;{blockHeight}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TERMS
        </Text>
      </HStack>
      <HStack spacing={'50px'}>
        <Image src={Twitter} w={'15px'} />
        <Image src={Subtract} w={'15px'} />
        <Image src={Medium} w={'15px'} />
        <Text
          fontSize={'9px'}
          fontWeight={'860'}
          lineHeight={'10px'}
        >
          DOCS
        </Text>
      </HStack>
    </Flex>
  );
}
export default Footer;