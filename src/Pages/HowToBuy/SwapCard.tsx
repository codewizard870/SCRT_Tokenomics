import React, { FunctionComponent } from 'react';
import { Stack, VStack, Flex, Button, Text, Divider, Textarea, Box, Image } from '@chakra-ui/react'
import indacoin from '../../assets/indacoin.png'
import badge from '../../assets/check-badge.webp'

interface Props{
  header: string,
  color: string,
  img: string,
  siteName: string,
  description: string,
  btnLabel: string
}
const SwapCard: FunctionComponent<Props> = ({header, color, img, siteName, description, btnLabel}) => {
  return (
    <Flex
      direction='column'
      justify={'center'}
      rounded='10px'
      bg='white'
      minW='314px'
      w='314px'
      mt='20px'
    >
      <Flex
        rounded='10px 10px 0 0'
        bg={color}
        h='40px'
        justify={'center'}
        align={'center'}
      >
        <Text
          fontSize='16px'
        >
          {header}
        </Text>
      </Flex>
      <VStack
        w='100%'
        spacing='30px'
        p='20px'
        justify={'center'}
      >
        <Image src={img} w='48px' />
        <Text fontSize='16px'>{siteName}</Text>
        <Text fontSize='14px' textAlign={'center'}>
          {description}
        </Text>
        <Button 
          w='175px' h='38px' mt='64px' 
          bg={color} 
          color='white' 
          rounded='30px'
        >
          {btnLabel}
        </Button>
      </VStack>
    </Flex>
  );
}
export default SwapCard;