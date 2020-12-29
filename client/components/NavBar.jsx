import React from 'react';

import { useHistory } from 'react-router-dom';

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

  const history = useHistory();
  const handleSignOut = () => {
    fetch('/api/member/logout', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((body) => {
        console.log(body);
        history.push('/');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <>
      <Box border="1px" borderColor="cyan.400" background="cyan.300">
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
            <Menu>
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
            </Menu>
            <Button
              m={2}
              fontSize={{ base: '15px', md: '18px', lg: '20px' }}
              align="right"
              colorScheme="purple"
              variant="solid"
              borderRadius="full"
              boxShadow="base"
              verticalAlign="right"
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
