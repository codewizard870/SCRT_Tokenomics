import React, { FunctionComponent } from 'react';
import { Box, chakra, keyframes } from '@chakra-ui/react'

import { motion } from 'framer-motion';

const animationKeyframes = keyframes`
  0%,
  70%{box-shadow:0 0 0 0 #f0ad4e}
  to{box-shadow:0 0 0 10px #6194bc00}
`;
const animation = `${animationKeyframes} 4s infinite`;

const PulsePending: FunctionComponent = (props) => {
  return (
    <Box
      // as={motion.div}
      animation={animation}
      bg="#f0ad4e"
      width="15px"
      height="15px"
      rounded='50%'
      position='absolute'
      left='-31px'
    >
    </Box>
  );
}
export default PulsePending;