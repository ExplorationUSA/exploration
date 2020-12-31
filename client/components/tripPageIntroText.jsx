import React from 'react';

import { Text, Grid, GridItem} from '@chakra-ui/react';

const TripPageIntroText = (props) => {
    // {tripName} = props.trip
    
    console.log(props.trip)
  return (
    <>
      <Text align="center" color="gray.900" mt="5%" fontSize="5xl">
        {props.trip.tripName}
      </Text>
      <Text align="center" color="gray.700" fontSize="1xl" mb="2.5%" fontSize="3xl">
        Trip Location 
      </Text>
      <Grid templateColumns="repeat(3, 1fr)" >
          <GridItem align="right" colSpan={1} >
            <Text fontSize="lg">Start Date</Text>
          </GridItem>
          <GridItem align="center" colSpan={1} >
            <Text fontSize="lg">-</Text>
          </GridItem>
          <GridItem align="left" colSpan={1} >
            <Text fontSize="lg">End Date</Text>
          </GridItem>
      </Grid>
    </>
  );
}

export default TripPageIntroText;