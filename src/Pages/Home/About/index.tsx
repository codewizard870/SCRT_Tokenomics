import React, { FunctionComponent } from 'react';
import { Stack, VStack, HStack, Flex, Image, Text } from '@chakra-ui/react'
import Card from './Card';

import unity from '../../../assets/holding-hand.png';
import globe from '../../../assets/globe-heart.png';
import security from '../../../assets/security.png';

const About: FunctionComponent = (props) => {
  return (
    <VStack
      w='100%'
      justify={'center'}
      pt='80px'
      px={{sm:'30px', md: '50px', lg:'80px'}}
    >
      <Text>About Glow</Text>
      <Text fontSize='32px'>How We Operate</Text>
      <Text w='50%' textAlign={'center'} pt='48px'>
        We are committed to excellence and full transparency in the way we run our business, forging a bright future for our company and investors.
      </Text>
      <Stack
        pt='48px'
        direction={{ base: 'column', md: 'row', lg: 'row' }}
        spacing='30px'
      >
        <Card avatar={unity} title='Unity' description='Partnerships with projects and organizations to promote worthy causes.' />
        <Card avatar={globe} title='Charity' description='Charitable donations to support community and global causes.' />
        <Card avatar={security} title='Security' description='Transparent engagement and communication with our investors.' />
      </Stack>
    </VStack>
  );
}
export default About;