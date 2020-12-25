import React, { useState, useEffect } from 'react';
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

const SignupPage = () => {
  const [newUser, setNewUserField] = useState({
    username: '',
    // useremail: '',
    password: '',
    confirmedUserPassword: '',
  });

  const [error, setError] = useState({
    verifyPassword: '',
  });

  useEffect(() => {
    console.log(error);
  }, [error]);

  const handleAllInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setNewUserField({ ...newUser, [name]: value });
    console.log(event.target.value);
  };

  const validate = () => {
    const firstPasswordInput = newUser.password;
    const secondPasswordInput = newUser.confirmedUserPassword;
    if (firstPasswordInput !== secondPasswordInput) {
      console.log('in if statement');
      setError({ ...error, verifyPassword: 'passwords do not match' });
      return false;
    }
    console.log(error.verifyPassword);
    return true;
  };

  // backend function passed down in props that will take the currentUser as input;
  const handleNewUserSubmit = (event) => {
    event.preventDefault();
    console.log(newUser);

    const errorStatus = validate();
    console.log(errorStatus);

    if (errorStatus) {
      fetch('/api/member/signup', {
        method: 'Post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      })
        .then((res) => {
          console.log('fetch request with new user sent to server');
          return res.json();
        })
        .then((data) => console.log(data))
        .catch((err) => console.log(
          'An error occured in this fetch request to send new user',
          err,
        ));
    }
  };

  return (
    <LightMode>
      <Box>
        <Container
          border="1px solid silver"
          margin="auto"
          mt="100px"
          maxW="300px"
          py="20px"
          rounded="5%"
        >
          <Text
            colorScheme="blue"
            textAlign="center"
            letterSpacing="2px"
            mb={2}
          >
            Begin Your Exploration
          </Text>
          <Container marginBottom="1px solid silver" justifyContent="column">
            <form onSubmit={handleNewUserSubmit}>
              <FormControl isRequired>
                <FormLabel>Username:</FormLabel>
                <Input
                  onChange={handleAllInputChange}
                  id="username"
                  name="username"
                />
                <FormHelperText fontSize="12px" id="email-helper-text">
                  Set up a username
                </FormHelperText>
              </FormControl>
              <FormControl isRequired mt="10px">
                <FormLabel>User Email:</FormLabel>
                <Input
                  onChange={handleAllInputChange}
                  id="email"
                  name="email"
                />
                <FormHelperText fontSize="12px" id="email-helper-text">
                  Your user account email address
                </FormHelperText>
              </FormControl>
              <FormControl mt="10px" isRequired>
                <FormLabel>Password:</FormLabel>
                <Input
                  onChange={handleAllInputChange}
                  id="password"
                  type="password"
                  name="password"
                />
                {error.verifyPassword && (
                  <Text id="mismatchedPassword" fontSize="8px">
                    {error.verifyPassword}
                  </Text>
                )}
                <FormHelperText fontSize="12px" id="password-helper-text">
                  Set up a password
                </FormHelperText>
              </FormControl>
              <FormControl mt="10px" isRequired>
                <FormLabel>Confirm Password:</FormLabel>
                <Input
                  onChange={handleAllInputChange}
                  id="confirmedUserPassword"
                  type="password"
                  name="confirmedUserPassword"
                />
                {error.verifyPassword && (
                  <Text id="mismatchedPassword" fontSize="8px">
                    {error.verifyPassword}
                  </Text>
                )}
                <FormHelperText fontSize="12px" id="password-helper-text">
                  Set up a password
                </FormHelperText>
              </FormControl>
              <Button
                colorScheme="cyan"
                color="white"
                ml="60px"
                mt={4}
                type="submit"
              >
                Let us explore
              </Button>
            </form>
          </Container>
          <Container>
            <Flex ml="30px" maxW="180px" justifyContent="space-between">
              <NavLink to="/login">
                <Text mt="10px" fontSize="12px">
                  I already have an account
                </Text>
              </NavLink>
            </Flex>
          </Container>
        </Container>
      </Box>
    </LightMode>
  );
};

export default SignupPage;
