/* eslint-disable max-len */
import React from 'react';

import EachActivity from './EachActivity';
import Activity from '../../../components/activityComponent';

import {
  Flex,
  Button,
  Box,
  Grid,
  GridItem,
  Text,
  StackDivider,
  Heading,
} from '@chakra-ui/react';
const ActivityList = (props) => {
  return (
    <>
      <Box boxSize="m">
        <Heading align="center" color="gray.900" fontSize="2xl" mb="8px">
          Search Results
        </Heading>
        <Grid templateColumns="repeat(4, 1fr)" m={30} padding={10} gap={6}>
          {props.trip.searchedActivities.map((activity) => (
            <GridItem colSpan={1}>
              <Activity
                addActivityHandler={props.addActivityHandler}
                activity={activity}
              />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default ActivityList;
