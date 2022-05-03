import React, { FunctionComponent } from 'react';
import { Stack, VStack, Flex, Button } from '@chakra-ui/react'

const Dashboard: FunctionComponent = (props) => {
  return (
    <VStack 
      mt={'15px'} 
      px={{sm:'10px', md:'20px', lg:'110px'}}
      w={'100%'}
      spacing={'53px'}
    >
      <h1>Hello</h1>
    </VStack>
  );
}
export default Dashboard;