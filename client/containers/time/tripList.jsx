import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  createStandaloneToast,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawterOverlay,
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
          {trips.map(
            ({
              id,
              tripName,
              location,
              tripStartFrontEnd,
              tripEndFrontEnd,
              place_id,
              datesKnown,
            }) => (
              <>
                <Grid key={`trip_grid_${id}`}>
                  <GridItem>
                    <Text textAlign="center" color="gray.800" fontSize="2xl">
                      {tripName}
                    </Text>
                  </GridItem>
                  <GridItem>
                    <TripPlanned
                      key={`trip_${id}`}
                      trip={{
                        location,
                        tripStartFrontEnd,
                        tripEndFrontEnd,
                        place_id,
                        datesKnown,
                      }}
                    />
                  </GridItem>
                  <GridItem>
                    <Flex justify="center">
                      {/* <Button m={2} colorScheme="blue" onClick = {()=>console.log('clicked')}> */}
                      <Link
                        to={{
                          pathname: `/time/trip/${id}`,
                          state: { param: `${id}` },
                        }}
                      >
                        <Button type="button" m={2} colorScheme="blue">
                          Explore {location}
                        </Button>
                      </Link>
                      {/* </Button>  */}

                      <Button
                        m={2}
                        id={id}
                        type="button"
                        colorScheme="red"
                        onClick={deleteTripHandler}
                      >
                        Delete trip
                      </Button>
                    </Flex>
                  </GridItem>
                </Grid>
              </>
            )
          )}
        </VStack>
      </Box>
    </>
  );
};

export default TripListContainer;
