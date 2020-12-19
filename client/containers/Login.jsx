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

const LoginPage = () => {
  // this sets the current state using the useState hook;
  const [currentUser, setCurrentUserField] = useState({
    userEmail: '',
    userPassword: '',
  });

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setCurrentUserField({ ...currentUser, [name]: value });
    console.log(event.target.value);
  }
    // backend function passed down in props that will take the currentUser as input;
  const handleUserSubmit = (event) => {
    event.preventDefault();
    console.log('form submit');
    console.log(event.target.querySelector('#userEmail').value);
    console.log('currentUser', currentUser);
  }; 

    return (
      <LightMode>
        <Box>
          <Container border="1px solid silver" margin="auto" mt="100px" maxW="300px" py="20px" rounded="5%">
            <Text textAlign="center" letterSpacing="2px" mb={2}>Exploration</Text>
            <Container marginBottom="1px solid silver" justifyContent='column'>
              <form onSubmit={handleUserSubmit}>
                <FormControl required>
                  <FormLabel>User Email:</FormLabel>
                  <Input id="userEmail" onChange={handleInputChange} name="userEmail" />
                  <FormHelperText fontSize="12px" id="email-helper-text">Your user account email address</FormHelperText>
                </FormControl>
                <FormControl mt="10px" required>
                  <FormLabel>Password:</FormLabel>
                  <Input id="userPassword" onChange={handleInputChange} type="password" name="userPassword" />
                  <FormHelperText fontSize="12px" id="password-helper-text">The password you used to signup with</FormHelperText>
                </FormControl>
                <Button ml="60px" mt={4} colorScheme="gray" type="submit">Submit</Button>
              </form>
            </Container>
            <Flex mt="30px" justifyContent="space-between">
              <Button colorScheme="blue" mb="10px" mr="10px"><Text fontSize="12px">Login with Facebook</Text></Button>
              <Button colorScheme="orange"><Text fontSize="12px">Login with Google</Text></Button>
            </Flex>
            <Container>
              <Flex ml="30px" maxW="180px" justifyContent="space-between">
                <Text fontSize="12px">Do not have an account?</Text>
                <NavLink to="/signup"><Text fontSize="12px" textDecoration="underline">Sign up</Text></NavLink>
              </Flex>
              <NavLink to="/resetPassword"><Text id="forgotPassword" ml="30px" pt="5px" fontSize="10px">Forgot username and password?</Text></NavLink>
            </Container>
          </Container>
        </Box>
      </LightMode>
  );
};
export default LoginPage;
