import React, { useState } from 'react';

import {
  createStandaloneToast,
  useDisclosure,
  Drawer,
  Text,
  Button,
  Input,
  Flex,
  Box,
  Spacer,
  Heading,
} from '@chakra-ui/react';

const ActivitySearch = (props) => {
  const [searchField, setSearchField] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    props.handleSearchedActivities(props.trip.location, searchField);
  };

  return (
    <>
      <Heading align="center" color="gray.900" fontSize="2xl" mb="8px">
        Search Activities
      </Heading>
      <Flex paddingX={40}>
        <Box flex="2">
          <Input
            placeholder="Food, Parks, Museums, Music, Sports, etc."
            size="lg"
            colorScheme="white"
            bg="white"
            value={searchField}
            onChange={(e) => setSearchField(e.target.value)}
          />
        </Box>
        <Box>
          <Button
            onClick={handleSearch}
            colorScheme="blue"
            size="lg"
            marginLeft={2}
          >
            Search
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default ActivitySearch;
