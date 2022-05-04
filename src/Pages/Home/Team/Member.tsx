import React, { FunctionComponent } from 'react';
import { VStack, HStack, Flex, Image, Text } from '@chakra-ui/react'

interface Props{
  avatar: string,
  name: string,
  description: string
}
const Member: FunctionComponent<Props> = ({avatar, name, description}) => {
  return (
    <Flex
      direction='column'
      w='150px'
      align={'center'}
    >
      <Flex w='100px' h='100px' background='black' rounded={'50%'}>
        <Image src={avatar} w='100%' rounded='50%'/>
      </Flex> 
      <Text fontSize='16px' mt='20px'>{name}</Text>
      <Text fontSize='10px' textAlign='center'>
        {description}
      </Text>
    </Flex>
  );
}
export default Member;