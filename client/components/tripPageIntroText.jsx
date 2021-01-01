import React from 'react';

import { Text, Grid, GridItem, Flex } from '@chakra-ui/react';

import MyActivities from './../components/MyActivities';


const TripPageIntroText = (props) => {
  // {tripName} = props.trip
  const trip = props.trip[0];
  console.log(props.trip);
  return (
    <>
      <Grid templateRows="repeat(4, 1fr)">
        <GridItem rowSpan={1}>
          <Text align="center" color="gray.900" mt="5%" fontSize="5xl">
            {trip.tripName}
          </Text>
        </GridItem>
        <GridItem rowSpan={1}>
          <Text align="center" color="gray.700" fontSize="1xl" mb="2.5%" fontSize="3xl">
            {trip.location}
          </Text>
        </GridItem>
        <GridItem rowSpan={1}>
          <Grid templateColumns="repeat(3, 1fr)">
            <GridItem align="right" colSpan={1}>
              <Text fontSize="lg">{trip.tripStartFrontEnd}</Text>
            </GridItem>
            <GridItem align="center" colSpan={1}>
              <Text fontSize="lg">-</Text>
            </GridItem>
            <GridItem align="left" colSpan={1}>
              <Text fontSize="lg">{trip.tripEndFrontEnd}</Text>
            </GridItem>
            <GridItem rowSpan={1}>
              <Flex align="center">
                <MyActivities />
              </Flex>
            </GridItem>

          </Grid>
        </GridItem>
      </Grid>
    </>
  );
};

export default TripPageIntroText;
