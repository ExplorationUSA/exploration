import React, { Component } from 'react';

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

const TripPlanned = ({trip}) => {
 const { destination, start_date, end_date, place_id } = trip;
  // const max = props.trips.locationPhotos.length;
  // const randPhoto = Math.floor(Math.random() * max) + 1;
  // console.log(randPhoto);
  // const photo = props.trips.locationPhotos[randPhoto];
  // console.log(photo, props.trips.location, props.trips.tripStart, props.trips.tripEnd);
  const photo = null;
  return (
    <>
      <Box borderWidth="1px" borderRadius="lg">
        <Grid
          h="200px"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(3, 1fr)"
          gap={4}
        >
          <GridItem rowSpan={2} colSpan={1}>
            <Box>
              <Flex align="center">
                <Image
                  boxSize="200px"
                  src={photo}
                  fallbackSrc="https://www.ishn.com/ext/resources/900x550/airplane-plane-flight-900.jpg?height=635&t=1583412590&width=1200"
                />
              </Flex>
            </Box>
          </GridItem>
          <GridItem rowSpan={2} colSpan={1}>
            <Text fontSize="xl" color="gray.800">Going to:</Text>
            <Text fontSize="2xl" color="gray.800">{destination}</Text>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <Text fontSize="xl" color="gray.800">Starting</Text>
            <Text fontSize="2xl" color="gray.800">{new Date(start_date).toLocaleDateString()}</Text>
          </GridItem>
          {/* {props.trips.datesKnown === 'day' || props.trips.datesKnown === 'month' && */}
          <GridItem rowSpan={1} colSpan={1}>
            <Text fontSize="xl" color="gray.800">Ending</Text>
            <Text fontSize="2xl" color="gray.800">{new Date(end_date).toLocaleDateString()}</Text>
          </GridItem>
{/* } */}
        </Grid>
      </Box>
    </>
  );
};

export default TripPlanned;
