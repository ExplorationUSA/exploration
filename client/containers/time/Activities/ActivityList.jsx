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
} from '@chakra-ui/react';
const ActivityList = (props) => {

console.log(props);
  return (
      <>

      <Box boxSize="m">
        <Grid templateColumns="repeat(3, 1fr)">
         
            {props.trip.searchedActivities.map((activity) =>(
             <GridItem colSpan={1}>
            <Activity addActivityHandler={props.addActivityHandler} activity = {activity} />
            </GridItem>
            )
            )}
        </Grid>
      </Box>
      </>
    );
  }



export default ActivityList;