import React from "react";

import {
  Box,
  Button,
  Text,
  Image,
  Grid,
  GridItem,
  Link,
  Badge,
  Center,
  Flex,
} from "@chakra-ui/react";

const Activity = (props) => {
  const {
    image_url,
    name,
    url,
    coordinates: { latitude, longitude },
    rating,
    review_count,
    address,
  } = props.activity;

  return (
    <>
      <Box
        m={2}
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
      >
        <Center padding={5}>
          <Image
            src={image_url}
            fit="contain"
            alignItems="center"
            objectFit="cover"
            boxSize="150px"
            borderRadius="full"
          />
        </Center>
        <Box p="1">
          <Box d="flex" alignItems="baseline">
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="sm"
              textTransform="uppercase"
              ml="2"
            >
              {name}
            </Box>
          </Box>

          <Box d="flex" alignItems="baseline" textAlign="center">
            <Text color="gray.600" fontSize="sm" ml="2">
              Rating: {rating}
            </Text>
          </Box>

          <Flex mt={5} mb={5} justifyContent="center">
            <Box d="flex" alignItems="center">
              <Link href={url} isExternal>
                <Button type="button" size="sm" colorScheme="purple">
                  View
                </Button>
              </Link>
            </Box>
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              <Button
                type="button"
                onClick={(event) =>
                  props.addActivityHandler(
                    event,
                    name,
                    address,
                    image_url,
                    url,
                    latitude,
                    longitude,
                    review_count,
                    rating
                  )
                }
                colorScheme="blue"
                size="sm"
              >
                Save Activity
              </Button>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Activity;
