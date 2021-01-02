import React from 'react';

import {
  Box,
  Button,
  Text,
  Image,
  Grid,
  GridItem,
  Link,
  Badge,
  Flex,
  Center,
} from '@chakra-ui/react';

const SavedActivities = (props) => {
  console.log(props);
  const {
    id,
    image_url,
    title,
    url,
    latitude,
    longitude,
    rating,
    review_count,
    location,
    trip_id,
  } = props.activity;
  return (
    <>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
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
            <Text
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="sm"
              textTransform="uppercase"
              textAlign="center"
            >
              {title}
            </Text>
          </Box>
          <Box d="flex" alignItems="baseline">
            <Text color="gray.600" fontSize="sm" textAlign="center">
              Rating: {rating}
            </Text>
          </Box>

          <Flex mt={5} mb={5} justifyContent="center">
            <Box d="flex">
              <Link href={url} isExternal>
                <Button type="button" size="sm" colorScheme="blue">
                  View
                </Button>
              </Link>
            </Box>
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              <Button
                type="button"
                onClick={(event) => props.deleteActivityHandler(event, id)}
                colorScheme="red"
                size="sm"
              >
                Delete
              </Button>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default SavedActivities;
