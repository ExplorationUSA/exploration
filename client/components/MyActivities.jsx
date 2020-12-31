import React from 'react';

import {
  Text, Box, Grid, GridItem,
} from '@chakra-ui/react';

const MyActivities = (props) => (
  <Box borderWidth="5px" borderColor="gray.700" overflow="hidden">
    <Grid templateColumns="repeat(1, 1fr)" templateRows="repeat(12, 1fr)">
      <GridItem>
        <Text align="center" color="gray.900" mt="5%" fontSize="3xl">
          Name's Plans
        </Text>
      </GridItem>
      <GridItem />

    </Grid>
  </Box>
);

export default MyActivities;
