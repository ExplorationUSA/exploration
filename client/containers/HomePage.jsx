import React from "react";
import { NavLink } from "react-router-dom";
import {
  Button,
  Container,
  Box,
  Stack,
  Text,
  Heading,
  Flex,
  Image,
} from "@chakra-ui/react";
import Footer from "../components/Footer";
import image from "../assets/images/Bridge.jpg";

const HomePage = () => {
  const background = `url(${image})`;
  return (
    <>
      <Box
        backgroundImage={background}
        backgroundRepeat="no-repeat"
        bgPosition="center bottom"
        bgSize="cover"
        py={2}
      >
        <Stack spacing={8}>
          <Box pb={330}>
            <Heading
              fontSize="4xl"
              px="30px"
              py="60px"
              m={2}
              color="gray.800"
              textAlign="center"
            >
              Welcome to TIME!
            </Heading>
            <Text fontSize="2xl" m={2} color="gray.800" textAlign="center">
              Travel Itineary Made Easy
            </Text>
            <Text fontSize="lg" m={2} color="gray.800" textAlign="center">
              We are here to make discovering the world easy.
            </Text>
            <Text fontSize="lg" m={2} color="gray.800" textAlign="center">
              Create individual trips and start searching for activities to do
              within the area.
            </Text>
            <Text textAlign="center" fontSize="lg" color="gray.800" m={2}>
              Whether you are planning on going next week or simply creating a
              dream adventure, use TIME to take the stress out of planning and
              keep the joy in traveling!
            </Text>

            <Flex justifyContent="center">
              <Stack spacing={4} direction="row" align="center" padding="4">
                <NavLink to="/signup">
                  <Button
                    border="2px"
                    borderColor="teal.500"
                    colorScheme="teal"
                    variant="solid"
                  >
                    Sign up
                  </Button>
                </NavLink>
                <NavLink to="/login">
                  <Button
                    border="2px"
                    borderColor="purple"
                    colorScheme="purple"
                    variant="solid"
                  >
                    Login
                  </Button>
                </NavLink>
              </Stack>
            </Flex>
          </Box>
        </Stack>
      </Box>
      <Footer />
    </>
  );
};

export default HomePage;
