import React from "react";

import { Text, Grid, GridItem, Flex } from "@chakra-ui/react";

import MyActivities from "../components/MyActivities";

const TripPageIntroText = (props) => {
  // {tripName} = props.trip
  return (
    <>
        <Grid templateColumns={(props.trip.tripStartFrontEnd || props.trip.tripEndFrontEnd) ? 'repeat(3, 1fr)' : 'repeat(1, 1fr)'}>
        <GridItem rowSpan={1}>
          <Text align="center" color="gray.900" mt="5%" fontSize="5xl">
            {props.trip.tripName}
          </Text>
        </GridItem>
        <GridItem rowSpan={1}>
          <Text
            align="center"
            color="gray.700"
            fontSize="3xl"
          >
            {props.trip.location}
          </Text>
        </GridItem>
        <GridItem rowSpan={1}>
          <Grid templateColumns={(props.trip.tripStartFrontEnd || props.trip.tripEndFrontEnd) ? 'repeat(3, 1fr)' : 'repeat(1, 1fr)'}>
            <GridItem align="right" colSpan={1}>
              {props.trip.tripStartFrontEnd && <Text fontSize="lg">
                {new Date(props.trip.tripStartFrontEnd).toLocaleDateString()}
              </Text>}
            </GridItem>
            {(props.trip.tripStartFrontEnd || props.trip.tripEndFrontEnd) &&
            <GridItem align="center" colSpan={1}>
              <Text fontSize="lg">-</Text>
            </GridItem>}

            <GridItem align="left" colSpan={1}>
              {props.trip.tripEndFrontEnd && <Text fontSize="lg">
                {new Date(props.trip.tripEndFrontEnd).toLocaleDateString()}
              </Text>
              }
            </GridItem>
            {/* <GridItem rowSpan={1}>
              <Flex align="center">
                <MyActivities />
              {/* </Flex> */}
            {/* </GridItem>  */}
          </Grid>
        </GridItem>
      </Grid>
    </>
  );
};

export default TripPageIntroText;
