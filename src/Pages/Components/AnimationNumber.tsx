import React, { useState, useEffect, FunctionComponent } from 'react'
import { Dispatch, SetStateAction } from 'react'
import { Flex } from '@chakra-ui/react';
import CountUp from 'react-countup';

interface Props {
  value: number
}
const AnimationNumber: FunctionComponent<Props> = ({ value }) => {
  const [prev, setPrev] = useState(0);
  // const [prevRest, setPrevRest] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setPrev(Math.floor(value));
      // setPrevRest(getRest(value));
    }, 1000);
  }, [value])

  function getRest(num: number) {
    return Math.round(num * 100 - Math.floor(num) * 100)
  }

  const rest = getRest(value) < 10 ? ".0" + getRest(value).toString() : "." + getRest(value).toString();
  return (
    <span>
      <CountUp start={prev} end={Math.floor(value)} separator=',' />
      {getRest(value) > 0 ? `${rest}` : "" }
    </span>
  )
}

export default AnimationNumber;