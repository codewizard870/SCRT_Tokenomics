import React, { FunctionComponent, useEffect, useState } from 'react';
import { Stack, VStack, HStack, Flex, Image, Text, Divider, Input, useDisclosure } from '@chakra-ui/react'
import axios from 'axios';
import { MdKeyboardArrowDown, MdSearch } from 'react-icons/md';
import { fixedNumberString, convertTosSymbol } from '../../../Util';
import TokenList from './TokenList';

interface Props {
  changeToken: (index: number) => void,
  tokenList: any[],
  index: number,
  balance: number,
  setBalance: React.Dispatch<React.SetStateAction<number>>,
}
const InputPanel: FunctionComponent<Props> = ({ index, tokenList, balance, setBalance,  changeToken }) => {
  const {isOpen, onClose, onOpen} = useDisclosure();

  return (
    <VStack
      mt='10px' mx='10px'
      px='20px'
      py='10px'
      border="solid 1px white"
      spacing='10px' 
      rounded='20px'
    >
      <Flex w='100%' justify={'space-between'}>
        <Text>
          From
        </Text>
        <HStack>
          <Text>
            Balance :
          </Text>
          <MdSearch width='40px' />
          <Text cursor="pointer" _hover={{color: 'white'}}>
            View Balance
          </Text>
        </HStack>
      </Flex>
      <Flex w='100%' justify={'space-between'}>
        <Input
          p='0px'
          fontSize='32px'
          value={fixedNumberString(balance)} 
        />
        <Flex
          minW='140px'
          align='center'
          justify={'end'}
          cursor='pointer'
          onClick={() => onOpen()}
          _hover={{color: 'white'}}
        >
          <Image
            src={tokenList[index]?.display_props?.image}
            fallbackSrc={`https://app.secretswap.net${tokenList[index]?.display_props?.image}`}
            w='30px' h='30px'
          />
          <Text ml='10px'>{convertTosSymbol(tokenList[index]?.dst_coin)}</Text>
          <MdKeyboardArrowDown width='30px' />
        </Flex>
      </Flex>
      <TokenList isOpen={isOpen} onClose={onClose} tokenList={tokenList} changeToken={changeToken} />
    </VStack>
  );
}
export default InputPanel;