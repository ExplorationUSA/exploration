import React, { Component } from 'react';
// import { useDisclosure } from '@chakra-ui/react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import IntroText from '../../components/IntroText';
import NewTripDrawer from '../../components/NewTrip';
import TripListContainer from './tripList';


class TimeHomePage extends Component {

  
  handleNewTrip = (tripName, location, datesKnown, tripStart, tripEnd) => {


    fetch('/imagefetch/' + location.value.place_id, {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json'}
    })
        .then((res) => res.json())
        .then((body) => {
          const results = body.result.photos;
          let photos = [];
          for (let i=0; i<results.length; i++){
            photos.push(`https://maps.googleapis.com/maps/api/place/photo?maxwidth=200&photoreference=${results[i].photo_reference}&key=AIzaSyCftYGY9WZGwrfAtDLsFR7DKplydOraNw8`)
          }
    
          let tripStartFrontEnd, tripEndFrontEnd; 
    (datesKnown === 'day' || datesKnown === 'month') ? tripStartFrontEnd = tripStart.toLocaleDateString("en-US") : tripStartFrontEnd = "Soon!";
    (datesKnown === 'day' || datesKnown === 'month') ? tripEndFrontEnd = tripEnd.toLocaleDateString("en-US") : tripEndFrontEnd = "Soon!"

    const newTrip = { locationPhotos : photos, location : location.label, place_id : location.value.place_id, tripStartFrontEnd: tripStartFrontEnd, tripEndFrontEnd : tripStartFrontEnd, tripStartBackEnd: tripStart, tripEndBackEnd: tripEnd, datesKnown : datesKnown, tripName: tripName};
    const trips = [...this.props.trips];
    trips.push(newTrip);
    this.props.handleNewTrip(trips);
    this.handleTripToBackEnd(tripName, location, location.value.place_id, tripStart, tripEnd)
  })
    .catch((error) => {
        console.error('Error:', error);
        });

  }

  handleTripToBackEnd = (tripName, location, place_id, tripStartBackEnd, tripEndBackEnd) => {
    const newTripForBackEnd = {title : tripName, destination : location, placeId : place_id, startDate : tripStartBackEnd, endDate : tripEndBackEnd }
    fetch('/api/trips/', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTripForBackEnd),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    }
  

  render() {
    console.log(this.props.trips)
    return (
      <>
        <NavBar />
        <IntroText />
        <NewTripDrawer handleNewTrip = {this.handleNewTrip} />
        <TripListContainer trips = {this.props.trips}/>
        <Footer />
      </>
    );
  }
}

export default TimeHomePage;
