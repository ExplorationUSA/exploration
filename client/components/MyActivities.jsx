import React, { useState } from 'react';

import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

import {
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Button,
  FormControl,
  Stack,
  Text,
  Box,
  Grid,
  GridItem,
  Select,
  Input,
} from '@chakra-ui/react';

import { AiFillCompass } from 'react-icons/ai';

const MyActivities = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Flex justifyContent="center">
        <Button
          ref={btnRef}
          onClick={onOpen}
          rightIcon={<AiFillCompass />}
          colorScheme="teal"
          size="md"
        >
          My Activities
        </Button>
      </Flex>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="lg"
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader background="teal.50" fontSize="2xl">
              My Activities in
            </DrawerHeader>

            <DrawerBody />
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default MyActivities;
