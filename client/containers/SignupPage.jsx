import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
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
} from "@chakra-ui/react";

import { useAuth } from "../useAuth";

const SignupPage = () => {
  const auth = useAuth();
  const [newUser, setNewUserField] = useState({
    username: "",
    // useremail: '',
    password: "",
    confirmedUserPassword: "",
  });

  const [error, setError] = useState({
    verifyPassword: "",
  });

  const history = useHistory();
  const toast = useToast();

  const [toastMessage, setToastMessage] = useState(undefined);

  useEffect(() => {
    if (toastMessage) {
      toast({
        title: toastMessage.title,
        description: toastMessage.description,
        status: "warning",
        duration: toastMessage.duration,
        isClosable: true,
        position: "bottom-left",
      });
    }
  }, [toastMessage, toast]);

  const handleAllInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setNewUserField({ ...newUser, [name]: value });
  };

  const validate = () => {
    const firstPasswordInput = newUser.password;
    const secondPasswordInput = newUser.confirmedUserPassword;
    if (firstPasswordInput !== secondPasswordInput) {
      setError({ ...error, verifyPassword: "passwords do not match" });
      return false;
    }
    return true;
  };

  // backend function passed down in props that will take the currentUser as input;
  const handleNewUserSubmit = (event) => {
    event.preventDefault();

    const errorStatus = validate();
    let title;
    let description;
    let duration;
    if (errorStatus) {
      fetch("/api/member/signup", {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      })
        .then((res) => {
          if (res.status === 200) {
            return res.json();
          }
          return res.json().then((data) => {
            throw data;
          });
        })
        .then((data) =>
          auth.signInFunc(data.user.id, data.user.username, () =>
            history.replace("/time/home")
          )
        )
        .catch((error) => {
          title = "Error";
          description = `${error.err}`;
          duration = 9000;
          setToastMessage({ title, description, duration });
        });
    }
  };

  return (
    <LightMode>
      <Box>
        <Container
          border="1px solid silver"
          margin="auto"
          mb="50px"
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
