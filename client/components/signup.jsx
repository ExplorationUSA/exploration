import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  FormHelperText,
  FormControl,
  FormLabel,
  Button,
  Input,
  Container,
  Box,
  Text,
  LightMode,
  Flex,
} from '@chakra-ui/react';

const signup = () => {
  const [newUser, setNewUserField] = useState({
    userName: '',
    userEmail: '',
    userPassword: '',
  });
  const handleAllInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setNewUserField({ ...newUser, [name]: value });
    console.log(event.target.value);
  };
  // backend function passed down in props that will take the currentUser as input;
  const handleNewUserSubmit = (event) => {
    event.preventDefault();
    console.log(newUser);
  }; 
  return (
    <LightMode>
      <Box>
        <Container border="1px solid silver" margin="auto" mt="100px" maxW="300px" py="20px" rounded="5%">
          <Text colorScheme="blue" textAlign="center" letterSpacing="2px" mb={2}>Begin Your Exploration</Text>
          <Container marginBottom="1px solid silver" justifyContent="column">
            <form onSubmit={handleNewUserSubmit}>
              <FormControl required>
                <FormLabel>Username:</FormLabel>
                <Input onChange={handleAllInputChange} id="userName" name="userName" />
                <FormHelperText fontSize="12px" id="email-helper-text">Set up a username</FormHelperText>
              </FormControl>
              <FormControl required mt="10px">
                <FormLabel>User Email:</FormLabel>
                <Input onChange={handleAllInputChange} id="userEmail" name="userEmail" />
                <FormHelperText fontSize="12px" id="email-helper-text">Your user account email address</FormHelperText>
              </FormControl>
              <FormControl mt="10px" required>
                <FormLabel>Password:</FormLabel>
                <Input onChange={handleAllInputChange} id="userPassword" type="password" name="userPassword" />
                <FormHelperText fontSize="12px" id="password-helper-text">Set up a password</FormHelperText>
              </FormControl>
              <Button colorScheme="cyan" color="white" ml="60px" mt={4} type="submit">Submit</Button>
            </form>
          </Container>
          <Container>
            <Flex ml="30px" maxW="180px" justifyContent="space-between">
              <NavLink to="/"><Text mt="10px" fontSize="12px">I already have an account</Text></NavLink>
            </Flex>
          </Container>
        </Container>
      </Box>
    </LightMode>
  );
};

export default signup;
