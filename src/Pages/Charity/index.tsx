import React, { FunctionComponent } from 'react';
import { Stack, VStack, Flex, Button, Text, Divider, Textarea, Box, Image } from '@chakra-ui/react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import handheart from '../../assets/hand-hearts.webp'

const Charity: FunctionComponent = (props) => {
  return (
    <Flex
      direction={'column'} 
      w={'100%'}
      pt='180px'
    >
      <Flex 
        direction='column'
        w='100%'
        justify='left'
        px={{sm:'30px', md: '50px', lg:'80px'}}
      >
        <Text fontSize='32px' mt='10px'>
          Charity
        </Text>
        <Text mt='20px' w={{base:'100%', lg:'50%'}}>
          Every month we let the community vote on a new charity that GLOW will donate to.
        </Text>
      </Flex>
      <Flex 
        mt='30px' 
        pt='80px'
        pb='30px'
        bg='#e5e7e9' 
        w='100%' 
        px={{sm:'30px', md: '50px', lg:'80px'}} 
        align='center'
        direction='column'
      >
        <Image src={handheart} w='98px' />
        <Text fontSize='32px'>
          Vote for the monthly charity!
        </Text>
        <Text fontSize='14px' color='green'>
          Currently Active: May 2022. Expires June 1st. 
        </Text>
        <Text fontSize='14px' w={{base: '80%', lg:'50%'}} textAlign='center' mt='20px'>
          If you're interested in voting for a charity, click the button below. Each charity is carefully
          vetted to ensure a high percentage goes to where it needs to and that it's legit.
        </Text>
        <Button 
          w='175px' h='38px' mt='64px' 
          bg='rgb(99, 178, 104)' 
          _hover={{background:'#70cc75', color:'white'}} 
          color='white' 
          rounded='30px'
        >
          Vote for a Charity
        </Button>
        <Text
          mt='80px'
          fontSize='32px'
        >
          Previous Donations
        </Text>
        <Text 
          fontSize='14px'
        >
          Here's the last 5 charities that we've contributed to. Click on the image icon for proof!
        </Text>
        <TableContainer>
          <Table 
            w={{base: '100%', lg:'80%'}}
            mt='30px'
            // variant='simple' 
            colorScheme='yellow'
            textColor={'black'}
            fontSize='16px'
          >
            <Thead>
              <Tr>
                <Th>Charity</Th>
                <Th></Th>
                <Th>Amount</Th>
                <Th>Date</Th>
              </Tr>
            </Thead>
            <Tbody>
              {charities.map((item, index) => (
                <Tr key={index}>
                  <Td>{item.charity}</Td>
                  <Td></Td>
                  <Td>{item.amount}</Td>
                  <Td>{item.date}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </Flex>
  );
}
export default Charity;

const charities=[
  {
    charity: "Mercyland Christian Mission",
    amount: "4,100.27",
    date: "Apr. 2022"
  },
  {
    charity: "War Child",
    amount: "$2,450.00",
    date: "Mar. 2022"
  },
  {
    charity: "PCA Georgia",
    amount: "$8,451.00",
    date: "Feb. 2022"
  },
  {
    charity: "Kika Foundation",
    amount: "$7,195.00",
    date: "Jan. 2022"
  },
]