import React from 'react';
// import { useDisclosure } from '@chakra-ui/react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import IntroText from '../../components/IntroText';
import NewTripDrawer from '../../components/NewTrip';

const TimeHomePage = () => (
  <>
    <NavBar />
    <IntroText />
    <NewTripDrawer />
    <Footer />
  </>
);

export default TimeHomePage;
