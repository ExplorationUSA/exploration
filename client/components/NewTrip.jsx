import React, { useState } from 'react';

import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

import {
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Button,
  FormControl,
  Stack,
  Text,
  Box,
  Grid,
  GridItem,
  Select,
  Input,
} from '@chakra-ui/react';

import { RiAddCircleFill } from 'react-icons/ri';

const NewTripDrawer = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { handleNewTrip } = props;

  const [tripName, setTripName] = useState('');

  const handleTripName = (event) => {
    setTripName(event.target.value);
  };

  const [datesKnown, setKnownDates] = useState('none');

  const handleDatesKnown = (event) => {
    setKnownDates(event.target.value);
  };

  const [dayStart, setDayStart] = useState('none');

  const handleDayStart = (event) => {
    setDayStart(event.target.value);
  };

  const [monthStart, setMonthStart] = useState('none');

  const handleMonthStart = (event) => {
    setMonthStart(event.target.value);
  };

  const [yearStart, setYearStart] = useState('none');

  const handleYearStart = (event) => {
    setYearStart(event.target.value);
  };

  const [dayEnd, setDayEnd] = useState('none');

  const handleDayEnd = (event) => {
    setDayEnd(event.target.value);
  };

  const [monthEnd, setMonthEnd] = useState('none');

  const handleMonthEnd = (event) => {
    setMonthEnd(event.target.value);
  };

  const [yearEnd, setYearEnd] = useState('none');

  const handleYearEnd = (event) => {
    setYearEnd(event.target.value);
  };

  const [location, setLocation] = useState('none');

  const onSubmit = () => {
    const days = [monthStart, dayStart, yearStart, monthEnd, dayEnd, yearEnd];
    let tripStart;
    let tripEnd;
    onClose();
    switch (datesKnown) {
      case 'day':
        tripStart = new Date(yearStart, monthStart, yearStart);
        tripEnd = new Date(yearEnd, monthEnd, dayEnd);
        break;
      case 'month':
        tripStart = new Date(yearStart, monthStart);
        tripEnd = new Date(yearEnd, monthEnd);
        break;
      case 'year':
        tripStart = yearStart;
        tripEnd = yearEnd;
        break;
      case 'none':
        tripStart = null;
        tripEnd = null;
        break;
    }
    handleNewTrip(tripName, location, datesKnown, tripStart, tripEnd);
  };

  return (
    <>
      <Flex justifyContent="center">
        <Button
          ref={btnRef}
          onClick={onOpen}
          leftIcon={<RiAddCircleFill />}
          colorScheme="teal"
          size="md"
        >
          New Adventure
        </Button>
      </Flex>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="lg"
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader background="teal.50" fontSize="2xl">
              Add Your Adventure
            </DrawerHeader>

            <DrawerBody>
              <FormControl>
                <Text m={2} fontSize="2xl">
                  Name your trip!
                </Text>
                <Input
                  m={2}
                  placeholder="Spring Break? Honeymoon? Dream Vacation?"
                  value={tripName}
                  onChange={handleTripName}
                />
                <Text m={2} fontSize="2xl">
                  Where you going?
                </Text>
                <Stack m={2}>
                  <GooglePlacesAutocomplete
                    apiKey="AIzaSyCftYGY9WZGwrfAtDLsFR7DKplydOraNw8"
                    onPlaceSelected={(data, details = null) => {
                      console.log(data, details);
                    }}
                    onLoadFailed={(error) => (
                      console.error('Could not inject Google script', error)
                    )}
                    selectProps={{
                      location,
                      onChange: setLocation,
                    }}
                  />
                </Stack>
                <Flex m={2} textAlign={['left', 'center']} align="right">
                  <Text fontSize="2xl">Know the Dates?</Text>
                </Flex>
                <Stack m={2}>
                  <Select
                    placeholder="Select"
                    value={datesKnown}
                    onChange={handleDatesKnown}
                  >
                    <option value="day">Down to the day</option>
                    <option value="month">Know the month(s)!</option>
                    <option value="year">Just the year</option>
                    <option value="none">No dates planned yet!</option>
                  </Select>
                </Stack>
                {datesKnown !== 'none' && (
                  <Box
                    m={3}
                    borderWidth="1px"
                    borderRadius="lg"
                    overflow="hidden"
                  >
                    <Grid
                      templateColumns="repeat(2, 1fr)"
                      templateRows="repeat(3, 1fr)"
                      gap={1}
                    >
                      <GridItem rowSpan={3} colSpan={1}>
                        <Flex
                          m={2}
                          textAlign={['left', 'center']}
                          align="right"
                        >
                          <Text fontSize="xl">Trip Start</Text>
                        </Flex>
                      </GridItem>
                      {(datesKnown === 'day' || datesKnown === 'month') && (
                        <GridItem rowSpan={1} colSpan={1}>
                          <Select
                            placeholder="Month"
                            value={monthStart}
                            onChange={handleMonthStart}
                          >
                            <option value="1">January</option>
                            <option value="2">February</option>
                            <option value="3">March</option>
                            <option value="4">April</option>
                            <option value="5">May</option>
                            <option value="6">June</option>
                            <option value="7">July</option>
                            <option value="8">August</option>
                            <option value="9">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>

                          </Select>
                        </GridItem>
                      )}
                      {datesKnown === 'day' && (
                        <GridItem rowSpan={1} colSpan={1}>
                          <Select
                            placeholder="Day"
                            value={dayStart}
                            onChange={handleDayStart}
                          >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            {monthStart !== 2 && <option value="29">29</option>}
                            {monthStart !== 2 && <option value="30">30</option>}
                            {(monthStart === 1
                              || monthStart === 3
                              || monthStart === 5
                              || monthStart === 7
                              || monthStart === 8
                              || monthStart === 10
                              || monthStart === 12) && (
                              <option value="31">31</option>
                            )}
                          </Select>
                        </GridItem>
                      )}

                      {(datesKnown === 'day'
                        || datesKnown === 'month'
                        || datesKnown === 'year') && (
                        <GridItem rowSpan={1} colSpan={1}>
                          <Select
                            placeholder="Year"
                            value={yearStart}
                            onChange={handleYearStart}
                          >
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                            <option value="2028">2028</option>
                            <option value="2029">2029</option>
                            <option value="2030">2030</option>
                          </Select>
                        </GridItem>
                      )}
                    </Grid>
                  </Box>
                )}
                {(datesKnown !== 'none' && yearStart !== 'none') && (
                  <Box
                    m={3}
                    borderWidth="1px"
                    borderRadius="lg"
                    overflow="hidden"
                  >
                    <Grid
                      templateColumns="repeat(2, 1fr)"
                      templateRows="repeat(3, 1fr)"
                      gap={1}
                    >
                      <GridItem rowSpan={3} colSpan={1}>
                        <Flex
                          m={2}
                          textAlign={['left', 'center']}
                          align="right"
                        >
                          <Text fontSize="xl">Trip End</Text>
                        </Flex>
                      </GridItem>
                      {(datesKnown === 'day' || datesKnown === 'month') && (
                      <GridItem rowSpan={1} colSpan={1}>
                        <Select
                          placeholder="Month"
                          value={monthEnd}
                          onChange={handleMonthEnd}
                        >
                          <option value="1">January</option>
                          <option value="2">February</option>
                          <option value="3">March</option>
                          <option value="4">April</option>
                          <option value="5">May</option>
                          <option value="6">June</option>
                          <option value="7">July</option>
                          <option value="8">August</option>
                          <option value="9">September</option>
                          <option value="10">October</option>
                          <option value="11">November</option>
                          <option value="12">December</option>
                        </Select>
                      </GridItem>
                      )}
                      {datesKnown === 'day' && (
                      <GridItem rowSpan={1} colSpan={1}>
                        <Select
                          placeholder="Day"
                          value={dayEnd}
                          onChange={handleDayEnd}
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                          <option value="13">13</option>
                          <option value="14">14</option>
                          <option value="15">15</option>
                          <option value="16">16</option>
                          <option value="17">17</option>
                          <option value="18">18</option>
                          <option value="19">19</option>
                          <option value="20">20</option>
                          <option value="21">21</option>
                          <option value="22">22</option>
                          <option value="23">23</option>
                          <option value="24">24</option>
                          <option value="25">25</option>
                          <option value="26">26</option>
                          <option value="27">27</option>
                          <option value="28">28</option>
                          <option value="29">29</option>
                          <option value="30">30</option>
                          <option value="31">31</option>
                        </Select>
                      </GridItem>
                      )}

                      {(datesKnown === 'day'
                        || datesKnown === 'month'
                        || datesKnown === 'year') && (
                        <GridItem rowSpan={1} colSpan={1}>
                          <Select
                            placeholder="Year"
                            value={yearEnd}
                            onChange={handleYearEnd}
                          >
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                            <option value="2028">2028</option>
                            <option value="2029">2029</option>
                            <option value="2030">2030</option>
                          </Select>
                        </GridItem>
                      )}
                    </Grid>
                  </Box>
                )}
                <Stack />
              </FormControl>

              <Flex mt={5}>
                <Button colorScheme="purple" m={1} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="teal" leftIcon={<RiAddCircleFill />} onClick={onSubmit} m={1}>
                  Add Trip
                </Button>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default NewTripDrawer;
