import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';

import {
  Box, Button, Text, Grid, GridItem, Link,
} from '@chakra-ui/react';

// stateless functional component

const Footer = () => (
  <Box
    border="1px"
    borderColor="teal.100"
    background="teal.50"
    left="0px"
    bottom="0px"
    height="12%"
    width="100%"
  >
    <Grid templateColumns="repeat(3, 1fr)" gap={4}>
      <GridItem m={2}>
        <Link href="https://github.com/ExplorationLLC/exploration">
          <Button
            leftIcon={
              <AiOutlineGithub w={('20px', '32px')} h={('20px', '32px')} />
            }
            rowSpan={1}
            fontSize={{ base: '12px', md: '12px', lg: '16px' }}
          >
            Our Code
          </Button>
        </Link>
      </GridItem>
      <GridItem m={2}>
        <Text
          textAlign={['left', 'center']}
          fontSize={{ base: '8px', md: '12px', lg: '16px' }}
        >
        </Text>
      </GridItem>
      <GridItem m={2}>
        <Text
          textAlign={['left', 'center']}
          fontSize={{ base: '8px', md: '12px', lg: '16px' }}
        >
          By Nathan Bargers, Jason Lee, Anika Mustafiz, Razana Nisathar, and TJ
          Wetmore
        </Text>
      </GridItem>
    </Grid>
  </Box>
);

export default Footer;