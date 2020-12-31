import React, { useState, useEffect, Component } from 'react';

import {
  Flex,
  Button,
  Box,
  Grid,
  GridItem,
  VStack,
  StackDivider,
  Text,
} from '@chakra-ui/react';

import NavBar from '../../components/NavBar';
import TripPageIntroText from '../../components/tripPageIntroText';
import Footer from '../../components/Footer';
import Activity from '../../components/activityComponent';
import ActivitiesList from './activitiesList';
import MyActivities from '../../components/MyActivities';
import "@babel/polyfill";


class TripPage extends Component {
    
    async componentDidMount() {
        const yelpActivities = await this.props.handleFetchYelp('New York', '1');
    }
    
    handleShowState = () => (
        console.log(this.props.trips)
        )
        
        render() {
    return (
      <>
        <NavBar />
        <Grid templateColumns="repeat(3, 1fr)">
          <GridItem colSpan={3}>
            <TripPageIntroText 
            trip = {this.props.trips}/>
          </GridItem>
          <GridItem colSpan={1}>
            <Flex align="center">
              <MyActivities />
            </Flex>
          </GridItem>
          <GridItem>
            <ActivitiesList />
          </GridItem>

        </Grid>
        <Footer />
        <Button onClick={this.handleShowState}>Show State</Button>
      </>
    );
  }
}

export default TripPage;
