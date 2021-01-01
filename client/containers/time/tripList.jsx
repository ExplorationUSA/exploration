import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  createStandaloneToast,
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
  Image,
  Text,
  Box,
  Grid,
  GridItem,
  VStack,
  StackDivider,
  Container,
  Heading,
} from '@chakra-ui/react';
import TripPlanned from '../../components/tripComponent';

const TripListContainer = ({ trips, deleteTripHandler, message }) => {
  const toast = createStandaloneToast();
    // if(!message) {
    //   toast({
    //     title: '',
    //     description: `${message}`,
    //     status: 'success',
    //     duration: 9000,
    //     isClosable: true,
    //     position: 'top',
    // })};

  return (
  <>
    <Box
      p={5}
      shadow="md"
      borderWidth="1px"
      flex="1"
      borderRadius="md"
      mt={10}
      mb={10}
      mr={(0, 50, 200)}
      ml={(0, 50, 200)}
    >
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        align="stretch"
      >
        {trips.map(({ id, title, destination, start_date, end_date, place_id }) => (
          <>
            <Grid>
              <GridItem>
                <Text textAlign="center" color="gray.800" fontSize="2xl">
                  {title}
                </Text>
              </GridItem>
              <GridItem>
                <TripPlanned
                  key={`trip_${id}`}
                  trip={{ destination, start_date, end_date, place_id }}
                />
              </GridItem>
              <GridItem>
                <Flex justify="center">
                  <Link to={{ pathname: `/time/trip/${id}`, state: { param: `${id}` } }}>
                      Explore<Text ml="1px">  {destination}</Text>    
                  </Link>
                  <Button id={id} type="button" onClick={deleteTripHandler}>Delete trip</Button>
                </Flex>
              </GridItem>
            </Grid>
          </>
        ))}
      </VStack>
    </Box>
  </>
  );
};

export default TripListContainer;
