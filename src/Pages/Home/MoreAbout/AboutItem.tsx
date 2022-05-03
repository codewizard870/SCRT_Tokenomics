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
    >
      <Image src={avatar} />
      <VStack align={'baseline'}>
        <Text fontSize='16px'>{title}</Text>
        <Text w='100%' textAlign={'left'}>
          {description}
        </Text>
      </VStack>
    </HStack>
  );
}
export default AboutItem;