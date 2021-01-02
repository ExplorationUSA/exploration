import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';
import LoginPage from './containers/LoginPage';
import SignupPage from './containers/SignupPage';
import HomePage from './containers/HomePage';
import TimeHomePage from './containers/time/TimeHomePage';
import PrivateRoute from './privateRoute';
import NotFound from './containers/404';
// import ResetPasswordPage from './containers/ResetPasswordPage';
import TripPage from './containers/time/TripPage';
import ActivityList from './containers/time/Activities/ActivityList';

class App extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      trips : [], 
      message : '',
    }
  }

  handleNewTrip = (trips) => {
    this.setState({trips : trips})
  }

  handleAddedActivity = (trips) => {
    this.setState({trips : trips})
  }

  handleStateUpdate = (emptyTrip) => {
    this.setState({trips: emptyTrip})
  }

  handleDelete = (trips, message) => {
    this.setState({trips: trips, message: message}, () => console.log(this.state));
  }
t
  handleFetchState = () => {
    fetch('/api/trips/')
    .then(response => response.json())
    .then((result) => {
      const {trips} = result;
      const emptyTrip =[];
      trips.forEach(trip => {
        const newTrip = {}
        newTrip.location = trip.destination
        newTrip.tripName = trip.title
        newTrip.place_id = trip.place_id
        newTrip.tripStartFrontEnd = trip.start_date
        newTrip.tripEndFrontEnd = trip.end_date
        newTrip.locationphotos = trip.locationphotos
        newTrip.datesKnown = trip.dates_known
        newTrip.id = trip.id
        emptyTrip.push(newTrip);
      });
      this.handleStateUpdate(emptyTrip);
  })
  .catch((error) => {
    console.error('Error:', error);
  }); 
}

  handleFetchYelp = (location, tripId) => {
    // console.log(this.state);
    fetch('/api/yelp/' + location, {
      method: "GET",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .then((result) => {
    
    // console.log('result', result);
    let trips = [...this.state.trips]
    let trip = trips.filter( el => el.id === tripId)
    trip = trip[0]
    let index = this.state.trips.indexOf(trip);
    let newActivites = result.result;
    trip.activities = newActivites;
    trips.splice(index, 1, trip);
    this.setState({trips});
    })
    .catch((error) => {
      console.error('Error:', error);
    }); 
  }



  render() {
  return(
  <div id="app" className="main-container">
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/signup" exact component={SignupPage} />
      {/* <Route path="/resetpassword" exact component={ResetPasswordPage} /> */}
      <PrivateRoute path="/time/home"  component={TimeHomePage} trips = {this.state.trips}
        handleNewTrip = {this.handleNewTrip}
        handleStateUpdate = {this.handleStateUpdate}
        handleDelete = {this.handleDelete}
        handleFetchState = {this.handleFetchState} />
      {/* <PrivateRoute path="/time/trip" exact component={TripPage} /> */}
      <PrivateRoute path="/time/trip/:tripId" component={TripPage}  
        handleFetchYelp = {this.handleFetchYelp}
        handleAddedActivity = {this.handleAddedActivity}
      />
       {/* <PrivateRoute path="/time/activitylist" exact component={ActivityList} /> */}
      <PrivateRoute path="*" component={NotFound} />
    </Switch>
  </div>
  )
  }
}
/*render={(props) => 
<TimeHomePage 
{...props} 

/>
}*/
export default App;
