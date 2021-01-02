import React, { useState } from "react";

import { Button, Input, Flex, Box, Heading, Select } from "@chakra-ui/react";

const ActivitySearch = (props) => {
  const [searchField, setSearchField] = useState("");

  const handleSelectedSearch = (event) => {
    setSearchField(event.target.value);
  };

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
          <Select
            placeholder="Search Activities"
            value={searchField}
            onChange={handleSelectedSearch}
            background="white"
          >
            <option value="arts">Arts</option>
            <option value="active">Currently Open</option>
            <option value="food">Food</option>
            <option value="hotels">Hotels</option>
            <option value="parks">Parks</option>
            <option value="shopping">Shopping</option>
            <option value="tours">Tours</option>
          </Select>
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
