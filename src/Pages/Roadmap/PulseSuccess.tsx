import React, { FunctionComponent } from 'react';
import { Box, chakra, keyframes } from '@chakra-ui/react'

import { motion } from 'framer-motion';

const animationKeyframes = keyframes`
  0%,
  70% {box-shadow:0 0 0 0 #62af66}
  to {box-shadow:0 0 0 10px #6194bc00}
`;
const animation = `${animationKeyframes} 4s infinite`;

const PulseSuccess: FunctionComponent = (props) => {
  return (
    <Box
      // as={motion.div}
      animation={animation}
      bg="#62af66"
      width="15px"
      height="15px"
      rounded='50%'
      position='absolute'
      left='-31px'
    >
    </Box>
  );
}
export default PulseSuccess;