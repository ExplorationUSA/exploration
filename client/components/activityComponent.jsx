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

const Activity = (props) => {
  const {
    image_url,
    name,
    url,
    coordinates: {latitude, longitude},
    rating,
    review_count,
    address,
  } = props.activity;
 
  return (
    <>
      <Box m={2} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
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
              {name}
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
              onClick={(event) => props.addActivityHandler(
                event, name, address, image_url, url, latitude,longitude, review_count, rating
              )}
              colorScheme="blue"
              size="sm"
            >
              Save Activity
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Activity;
