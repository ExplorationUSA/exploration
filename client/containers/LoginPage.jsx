import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

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
  useToast,
} from '@chakra-ui/react';

import Footer from '../components/Footer';

const LoginPage = () => {
  // this sets the current state using the useState hook;
  const [currentUser, setCurrentUserField] = useState({
    username: '',
    password: '',
  });
  // this sets the toast parts according to errors/actions
  const [toastMessage, setToastMessage] = useState(undefined);

  const toast = useToast();
  const history = useHistory();

  useEffect(() => {
    if (toastMessage) {
      toast({
        title: toastMessage.title,
        description: toastMessage.description,
        status: 'warning',
        duration: toastMessage.duration,
        isClosable: true,
        position: 'bottom-left',
      });
    }
  }, [toastMessage, toast]);

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setCurrentUserField({ ...currentUser, [name]: value });
    console.log(event.target.value);
  };
    // backend function passed down in props that will take the currentUser as input;

  const handleUserSubmit = (event) => {
    event.preventDefault();
    let title;
    let description;
    let duration;
    fetch('/api/member/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(currentUser),
    })
      .then((res) => {
        if (res.status === 200) {
          history.push('/time/home');
        } else {
          title = 'credentials not found';
          description = 'We could not find your username and/or password. Please try signing in instead';
          duration = 1100;
          setToastMessage({ title, description, duration });
          history.push('/signup');
        }
      })
      .catch((error) => {
        title = `error code ${error.status}, something went wrong at our end`;
        description = 'We were unable to find the page you requested, please try again';
        duration = 5000;
        setToastMessage({ title, description, duration });
      });
  };

  return (
    <LightMode>
      <Box>
        <Box mb="20px" width="100%" overflow="hidden" border="1px" borderColor="cyan.400" background="cyan.300">
          <Text textAlign="center" letterSpacing="2px" mb={2}>Exploration</Text>
        </Box>
        <Container border="1px solid silver" mt="40px" mb="40px" maxW="300px" py="40px" rounded="5%">
          <Container marginBottom="1px solid silver" justifyContent="column">
            <form onSubmit={handleUserSubmit}>
              <FormControl isRequired>
                <FormLabel>Username:</FormLabel>
                <Input id="username" onChange={handleInputChange} name="username" />
                <FormHelperText fontSize="12px" id="email-helper-text">Your username</FormHelperText>
              </FormControl>
              <FormControl isRequired mt="10px">
                <FormLabel>Password:</FormLabel>
                <Input id="password" onChange={handleInputChange} type="password" name="password" />
                <FormHelperText fontSize="12px" id="password-helper-text">The password you used to signup with</FormHelperText>
              </FormControl>
              <Button ml="80px" mt={4} colorScheme="cyan" color="white" type="submit">Login</Button>
            </form>
          </Container>
          <Flex mt="30px" justifyContent="space-between">
            <Button colorScheme="teal" mb="10px" mr="10px"><Text fontSize="12px">Login with Facebook</Text></Button>
            <Button colorScheme="purple"><Text fontSize="12px">Login with Google</Text></Button>
          </Flex>
          <Container>
            <Flex ml="30px" maxW="180px" justifyContent="space-between">
              <Text fontSize="12px">Do not have an account?</Text>
              <NavLink to="/signup"><Text fontSize="12px" textDecoration="underline">Sign up</Text></NavLink>
            </Flex>
            {/* <NavLink to="/resetPassword"><Text id="forgotPassword" ml="30px" pt="5px" fontSize="10px">Forgot username and password?</Text></NavLink> */}
          </Container>
        </Container>
      </Box>
      <Footer mt={3} />
    </LightMode>
  );
};
export default LoginPage;
