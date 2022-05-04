import React, { FunctionComponent } from 'react';
import { Stack, HStack, Flex, Image, Text } from '@chakra-ui/react'
import Member from './Member';

import bryan from '../../../assets/team/bryan_suite.webp';
import shane from '../../../assets/team/shane.webp';
import kimmie from '../../../assets/team/kimmie_suite.webp';
import jared from '../../../assets/team/jared_suite.webp';
import jacob from '../../../assets/team/jacob.webp';
import carl from '../../../assets/team/carl.webp';

const Team: FunctionComponent = (props) => {
  return (
    <Flex
      direction={'column'}
      w='100%'
      align={'center'}
    >
      <Text fontSize='16px'>Glow Team</Text>
      <Text fontSize='32px'>Meet the Team</Text>
      <Flex
        direction='row'
        mt='64px'
        flexWrap='wrap'
        justify='space-between'
        w='100%'
        px={{sm:'10px', md: '50px', lg:'80px'}}
      >
        <Member avatar={bryan} name='Bryan' description='CEO | Co-Founder'/>
        <Member avatar={shane} name='Shane' description='Chief of Operations'/>
        <Member avatar={kimmie} name='Kimmie' description='VP | Customer Relations'/>
        <Member avatar={jared} name='Jared' description='VP | Education'/>
        <Member avatar={jacob} name='Jacob' description='VP | Development'/>
        <Member avatar={carl} name='Carl' description='Marketing'/>
      </Flex>
      <Flex 
        mt='30px' 
        justify={'center'} 
        align='center' 
        bg='#3b91ad'
        w='175px'
        h='48px'
        rounded={'20px'}
      >
        Find out More
      </Flex>
    </Flex>
  );
}
export default Team;