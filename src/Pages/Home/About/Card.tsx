import React, { FunctionComponent } from 'react';
import { VStack, HStack, Flex, Image, Text } from '@chakra-ui/react'

interface Props{
  avatar: string,
  title: string,
  description: string
}
const Card: FunctionComponent<Props> = ({avatar, title, description}) => {
  return (
    <VStack
      direction={{base:'column', md:'column', lg:'row'}}
      w='100%'
      justify={'center'}
      pt='80px'
      rounded={'10px'}
      background='#e5e7e9'
      align={'baseline'}
      p='16px'
    >
      <Image src={avatar} />
      <Text fontSize='32px'>{title}</Text>
      <Text w='100%' textAlign={'left'}>
        {description}
      </Text>
    </VStack>
  );
}
export default Card;