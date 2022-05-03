import React, { FunctionComponent } from 'react';
import { useNavigate } from "react-router-dom";
import { Flex, Text } from '@chakra-ui/react'
import {useStore, ActionKind} from '../../../store';

interface Props {
  id: string,
}
const Tab: FunctionComponent<Props> = ({id, children}) => {
  const {state, dispatch} = useStore();
  const selected = id == state.tab;
  const navigate = useNavigate();

  const clickTab = () => {
    dispatch({type: ActionKind.setTab, payload:id});
    navigate("/" + id);
  }
  return (
    <Flex
      fontSize={'14px'}
      fontWeight={'800'}
      height={'53px'}
      color={selected ? '#1bb1dc' : '#413e66'} //#212121
      justify={'center'}
      align={'center'}
      rounded={'20px'}
      cursor={'pointer'}
      p={'18px'}
      onClick={() => {clickTab()}}
    >
      <Text>{children}</Text>
    </Flex>
  );
}

export default Tab;