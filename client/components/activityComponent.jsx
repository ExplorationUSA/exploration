import React from 'react';

import {
  Box, Button, Text, Image, Grid, GridItem, Link, Badge 
} from '@chakra-ui/react';

const Activity = (props) => (

  <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
    <Image
      // src={this.props.image_url}
      borderRadius="full"
      boxSize="100px"
    />
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
          this.props.name
        </Box>
      </Box>

      <Box d="flex" alignItems="baseline" textAlign="center">
        <Text color="gray.600" fontSize="sm">Rating: this.props.rating</Text>
      </Box>
      

      <Box d="flex" mt="2" alignItems="center">
      <Link href='' isExternal>
      Visit Page
      </Link>
      </Box>
        <Box as="span" ml="2" color="gray.600" fontSize="sm">
          <Button colorScheme="blue" size="sm">+</Button>
        </Box>
      </Box>
 
  </Box>
);

export default Activity;
