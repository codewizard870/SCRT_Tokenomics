import React, { useEffect, useMemo } from 'react'
import { Outlet, Link } from "react-router-dom";
import { VStack, Flex, useDisclosure, useEventListenerMap } from '@chakra-ui/react'
import { useStore, ActionKind } from './store';

import Navbar from './Pages/Navbar'
import Footer from "./Pages/Footer";

import { checkNetwork } from './Util';

const Layout = () => {

  const { state, dispatch } = useStore();

  return (
      <Flex
        background={'black'}
        justify={'center'}
        w={'100%'}
      >
        <VStack
          fontFamily={'SF-Pro-Text'}
          fontStyle={'normal'}
          letterSpacing={'-0.06em'}
          spacing={'10px'}
          color={'white'}
          maxWidth={'1440px'}
          w = {'100%'}
        >
          <Navbar />
          <Outlet />
          <Footer />

        </VStack>
      </Flex>
  )
};
export default Layout;
