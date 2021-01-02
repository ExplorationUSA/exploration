import React, { useState } from "react";

// import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

import { useHistory, Link } from "react-router-dom";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Image,
  Button,
  Text,
  Grid,
  GridItem,
  Icon,
} from "@chakra-ui/react";

// import { RiAddCircleFill } from 'react-icons/ri';
import { ChevronDownIcon } from "@chakra-ui/icons";

import { GrDirections } from "react-icons/gr";
// import { IconContext } from 'react-icons';
import { useAuth } from "../useAuth";

// stateless functional component

export default function NavBar() {
  const auth = useAuth();
  const history = useHistory();

  const handleSignOut = () => {
    fetch("/api/member/logout", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (res.status === 200) {
          auth.signOutFunc(() => history.push("/"));
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <>
      <Box border="1px" borderColor="teal.100" background="teal.50">
        <Grid templateColumns="repeat(3, 1fr)">
          <GridItem colSpan={2} m={2}>
            <Link to={{ pathname: "/time/home" }}>
              <Button colorScheme="teal" variant="outline">
                <Icon as={GrDirections} w={8} h={8} />
                <Text fontSize={{ base: "0px", md: "18px", lg: "20px" }}>
                  TIME
                </Text>
              </Button>
            </Link>
          </GridItem>
          <GridItem>
            {/* <Menu>
              <MenuButton
                fontSize={{ base: '15px', md: '18px', lg: '20px' }}
                colorScheme="cyan"
                m={2}
                as={Button}
                rightIcon={<ChevronDownIcon />}
                borderRadius="full"
                boxShadow="base"
              >
                Your Trips
              </MenuButton>
              <MenuList>
                <MenuItem minH="48px">
                  <Image boxSize="2rem" borderRadius="full" mr="12px" />
                  <span>Trip 1</span>
                </MenuItem>
              </MenuList>
            </Menu> */}

            <Grid templateColumns="repeat(2, 1fr)">
              <GridItem>
                <Text align="center" m={5} fontSize="sm" fontWeight={600}>
                  Logged in as {auth.user.userName}
                </Text>
              </GridItem>
              <GridItem>
                <Button
                  m={2}
                  // fontSize={{ base: '15px', md: '18px', lg: '20px' }}
                  // align="right"
                  iconSpacing={0}
                  colorScheme="red"
                  variant="solid"
                  // borderRadius="full"
                  boxShadow="base"
                  // verticalAlign="right"
                  onClick={handleSignOut}
                >
                  Log Out
                </Button>
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}
