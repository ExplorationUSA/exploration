import React, { Component } from 'react';
import {
  Flex,
  Button,
  Box,
  Grid,
  GridItem,
  VStack,
  StackDivider,
  Text
} from '@chakra-ui/react';
import TripPlanned from '../../components/tripComponent';

const TripListContainer = (props) => (
  <>
    <Box
      p={5}
      shadow="md"
      borderWidth="1px"
      flex="1"
      borderRadius="md"
      mt={10}
      mb={10}
      mr={0, 50, 200}
      ml={0, 50, 200}
    >
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        align="stretch"
      >
        {props.trips.map((tempTrip) => (
          <>
            <Grid>
              <GridItem>
                <Text textAlign="center" color="gray.800" fontSize="2xl">{tempTrip.tripName}</Text>
              </GridItem>
              <GridItem>
                <TripPlanned key={props.trips.indexOf(tempTrip)} trip={tempTrip} />
              </GridItem>
              <GridItem>
                <Flex justify="center">
                  <Button colorScheme="blue">
                    Explore
                    {tempTrip.location}
                  </Button>
                </Flex>
              </GridItem>
            </Grid>
          </>
        ))}
      </VStack>
    </Box>
  </>
);

export default TripListContainer;
