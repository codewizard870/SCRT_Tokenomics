import React, { FunctionComponent, useEffect, useState } from 'react';
import { Stack, VStack, HStack, Flex, Image, Text, Divider, Input } from '@chakra-ui/react'
import axios from 'axios';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'

interface Props {
  isOpen: boolean,
  onClose: () => void,
  tokenList: any[],
  changeToken: (index: number) => void,
}
const TokenList: FunctionComponent<Props> = ({ isOpen, onClose, tokenList, changeToken }) => {
  const selectItem = (index: number) => {
    onClose();
    changeToken(index);
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent minW='750px'>
        <ModalHeader>Select a Token</ModalHeader>
        <ModalCloseButton />
        <ModalBody
        >
          <Input placeholder="Search symbol or paste address" />
          <Divider />
          <VStack h='500px' spacing='10px' overflowX='hidden' mt='20px' overflowY='auto'>
            {tokenList!.map((item, index) => (
              <Flex
                justify={'space-between'}
                w='100%'
                px='10px'
                minH='50px'
                alignItems={'center'}
                cursor='pointer'
                _hover={{ bg: 'green' }}
                onClick={() => selectItem(index)}
              >
                <Flex>
                  <Image
                    src={item.display_props.image}
                    fallbackSrc={`https://app.secretswap.net${item.display_props.image}`}
                    w='30px' h='30px'
                  />
                  <Text ml='10px'>{item.dst_coin}</Text>
                </Flex>
                <Flex>
                  <Text>{item.dst_address}</Text>
                </Flex>
              </Flex>
            ))}
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
export default TokenList;