import React, { Component } from 'react';

import {
  Flex,
  Button,
  Box,
  Grid,
  GridItem,
  Text,
  StackDivider,
} from '@chakra-ui/react';
import Activity from '../../components/activityComponent';

import TripPlanned from '../../components/tripComponent';

const ActivitiesList = (props) => (
  <>
    <Box boxSize="sm">
      <Grid colSpan={2} rowSpan={4}>
        <GridItem>
          <Text>Food</Text>
        </GridItem>
        <GridItem>
          <Activity />

        </GridItem>

      </Grid>
    </Box>
  </>
);

export default ActivitiesList;
