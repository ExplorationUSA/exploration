import React, { Component } from 'react';

import {
  Flex,
  Image,
  Text,
  Box,
  Grid,
  GridItem,
} from '@chakra-ui/react';

const TripPlanned = (props) => {
  const max = 8;
  const randPhoto = Math.floor(Math.random() * (max + 1) + 0) - 1;
  console.log(randPhoto, 'location photos: ', props.trip.locationphotos);
  const photo = props.trip.locationphotos[randPhoto];
  console.log(photo, props.trip.location, props.trip.tripStart, props.trip.tripEnd);
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
            <Text fontSize="2xl" color="gray.800">{props.trip.location}</Text>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <Text fontSize="xl" color="gray.800">Starting</Text>
            <Text fontSize="2xl" color="gray.800">{props.trip.tripStartFrontEnd}</Text>
          </GridItem>
          {props.trip.datesKnown === 'day' || props.trip.datesKnown === 'month' &&
          (
          <GridItem rowSpan={1} colSpan={1}>
            <Text fontSize="xl" color="gray.800">Ending</Text>
            <Text fontSize="2xl" color="gray.800">{props.trip.tripEndFrontEnd}</Text>
          </GridItem>
          )
}
        </Grid>
      </Box>
    </>
  );
};

export default TripPlanned;