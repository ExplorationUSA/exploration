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
} from "@chakra-ui/react";

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
    trip_id
  } = props.activity;
  return (
    <>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src={image_url} borderRadius="full" boxSize="100px" />
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
              {title}
            </Box>
          </Box>

          <Box d="flex" alignItems="baseline" textAlign="center">
            <Text color="gray.600" fontSize="sm">
              Rating: {rating}
            </Text>
          </Box>

          <Box d="flex" mt="2" alignItems="center">
            <Link href={url} isExternal>
              Visit Page
            </Link>
          </Box>
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            <Button type="button"
              onClick={(event) => props.deleteActivityHandler(
                event,id
              )}
              colorScheme="blue"
              size="sm"
            >
              Delete
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SavedActivities;
