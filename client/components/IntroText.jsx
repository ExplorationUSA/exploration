import React from 'react';

import { Text } from '@chakra-ui/react';

export default function IntroText() {
  return (
    <>
      <Text align="center" color="gray.900" mt="5%" fontSize="4xl">
        TIME
      </Text>
      <Text align="center" color="gray.700" fontSize="1xl" mb="2.5%">
        <b>T</b>
        ravel
        {' '}
        <b>I</b>
        tinerary
        {' '}
        <b>M</b>
        ade
        {' '}
        <b>E</b>
        asy
      </Text>
    </>
  );
}