import React, { useState } from "react";

import {
  createStandaloneToast,
  useDisclosure,
  Drawer,
  Text,
  Button,
  Input,
} from "@chakra-ui/react";

const ActivitySearch = (props) => {
  const [searchField, setSearchField] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    props.handleSearchedActivities(props.trip.location, searchField);
  };

  return (
    <>
      <Text align="center" color="gray.900" mt="5%" fontSize="2xl" mb="8px">Search Activities </Text>
      <Input
        placeholder="Food, Parks, Museums, Music, Sports, etc."
        size="lg"
        value={searchField}
        onChange={(e) => setSearchField(e.target.value)}
      />
      <Button onClick={handleSearch}>Search</Button>
    </>
  );
};

export default ActivitySearch;
