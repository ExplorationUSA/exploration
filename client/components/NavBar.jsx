import React from 'react';

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
} from '@chakra-ui/react';

import { ChevronDownIcon } from '@chakra-ui/icons';

import { GrDirections } from 'react-icons/gr';
// import { IconContext } from 'react-icons';

// stateless functional component

export default function NavBar() {
  const handleSignOut = () => {
    fetch('/api/member/logout', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((body) => console.log(body))
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <>
      <Box border="1px" borderColor="teal.100" background="teal.50"
      >
        <Grid templateColumns="repeat(3, 1fr)">
          <GridItem colSpan={2} m={2}>
            <Button colorScheme="teal" variant="outline">
              <Icon as={GrDirections} w={8} h={8} />
              <Text fontSize={{ base: '0px', md: '18px', lg: '20px' }}>
                TIME
              </Text>
            </Button>
          </GridItem>
          <GridItem colStart={4} colEnd={6}>

            <Button
              m={2}
              fontSize={{ base: '15px', md: '18px', lg: '20px' }}
              colorScheme="purple"
              borderRadius="full"
              boxShadow="base"
              onClick={handleSignOut}
            >
              Log Out
            </Button>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}