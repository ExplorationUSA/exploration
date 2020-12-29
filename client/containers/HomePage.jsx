import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Button, Container, Box, Stack,
} from '@chakra-ui/react';
import Footer from '../components/Footer';

const HomePage = () => (
  <>
    <Container maxW="xl" padding="4">
      <Box padding="4" bg="gray.100" maxW="3xl">
        <h2>Welcome to TIME</h2>
        <p>Travel Itineary Made Easy</p>
      </Box>

      <Stack spacing={4} direction="row" align="center" padding="4">
        <NavLink to="/signup">
          <Button border="2px" borderColor="cyan.500">
            Sign up
          </Button>
        </NavLink>
        <NavLink to="/login">
          <Button border="2px" borderColor="cyan.500">
            Login
          </Button>
        </NavLink>
      </Stack>

      <Footer />
    </Container>
  </>
);

export default HomePage;
