import React, { FunctionComponent } from 'react';
import { VStack, HStack, Flex, Image, Text } from '@chakra-ui/react'

interface Props{
  avatar: string,
  title: string,
  description: string
}
const AboutItem: FunctionComponent<Props> = ({avatar, title, description}) => {
  return (
    <HStack
      w='100%'
      align={'center'}
      spacing='16px'
    >
      <Image src={avatar} width='38px'/>
      <VStack align={'baseline'} spacing='0px'>
        <Text fontSize='16px'>{title}</Text>
        <Text w='100%' textAlign={'left'}>
          {description}
        </Text>
      </VStack>
    </HStack>
  );
}
export default AboutItem;