import React, { Component } from 'react';


import { Route, Switch } from 'react-router-dom';
import LoginPage from './containers/LoginPage';
import SignupPage from './containers/SignupPage';
import HomePage from './containers/HomePage';
import TimeHomePage from './containers/timeHomePage/TimeHomePage';
import TripPage from './containers/tripPage/aTripPage';
import PrivateRoute from './privateRoute';
import NotFound from './containers/404';

// import ResetPasswordPage from './containers/ResetPasswordPage';

import {
  Button,
} from '@chakra-ui/react';

class App extends Component { 

  state = {
    trips : [
      {id: '1', 
      locationPhotos  : [
        "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=ATtYBwJYoYNDyA_A5MWpQl0rdFpzilFkA_Dx4BjoVZcgMrlI_oPE2P4610rWuXEAxFf2g9DL3wIoY0YV_gg9W1cwofSgjuOH24FANNYu3O35fEIS_CoKiD-PCP0LWAC5wK9q2O1kRwgC5tF_NhieU0BLSEJpIpUUk3QSMvEgLPOzyyGrlLWD&key=AIzaSyCftYGY9WZGwrfAtDLsFR7DKplydOraNw8", 
        "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=ATtYBwKM4rM9SO3alQUzia8OLldvRdD6ydXG5-UDIhzodvsIrMooaWtYGyUAfZ3CE39bGBu8mZ9bH3-hha2V1k_NtEyGP5YZ8_cqwXVQ1GPlU_8RAIyzpDX0qPF0oQbrp6RptdR0KVevgYbMK4P6YQMSwvPFP1h1g0EEIpCOM17MxPYsEYCA&key=AIzaSyCftYGY9WZGwrfAtDLsFR7DKplydOraNw8", 
        "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=ATtYBwI59__Y1Wblwj7kLBlgI0xE6eAe6HWHzLu4DEiJtWMWrU1RF-pxaipsaGyEQ_793aN9SkJA3zKJH48s3vjPouvIr3rcrSrWwD6I_1ev0qbxRePvI-k1O4cG6LwzJfQVY3zJqshVJpc2VyqAelvx8ZiS4qzkfPULnrr5hgzAllpsEH1G&key=AIzaSyCftYGY9WZGwrfAtDLsFR7DKplydOraNw8",
        "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=ATtYBwISAk3I5yHUCvFnhP_VihXNyQFPmnvPr72DsKTbXgQ_JsOJwb46REjw-_zwGaSYNl_Z-j1nLrM8b-rDfYZVvJkC_89tVuFuNs6RJZMow7Sv-8WPj2ff8XsExnb3jqjCuVgVEsZxcpm-uqG8rQ1JexjFmVxESPnk_vBdrP3jRXRRT8Gr&key=AIzaSyCftYGY9WZGwrfAtDLsFR7DKplydOraNw8",
        "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=ATtYBwJkcjSuzwSqsqdp2orEnaH8rdGy9juty8nYJd4mvXmqPUlAZZU5G9JDGzdgrLmULfld_DGKvuO3XDjReM3AokO7poJq9LVML45fjqdVtnp2LdiXyKYpGJT1DOqrL-gEwRMgTQLJPrPFqEI_ZtUZyi32s2j0faR_Ufe1MzjqOyO_D5e6&key=AIzaSyCftYGY9WZGwrfAtDLsFR7DKplydOraNw8",
        "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=ATtYBwJ3uQzOn0BnsZCWyWgfsxtrSc6QqQytzLHpi3zMwg1xT1XNqvPzpMwLrpWdgob8G1L5OdzgX-8CaQRKM_rIT2a-mkvnXns03W20wgwxMImrHm_Rr66ZOeojuNYp5utAZ7ASr3zw_0p5WFObJAHkGnAhNin8OKrBEToX-b2wzOGlh3kR&key=AIzaSyCftYGY9WZGwrfAtDLsFR7DKplydOraNw8",
        "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=ATtYBwI0w5OlNUyeDXTX48Kcp6eeUZthbotv3NYk1X1EJepKQGfpsd-nRVpK8UoCp7q4mxP0BtMMojRlFQRi5lCznLGEHx_lwnygFzlbhJHaQaRBwX2ZDli8fVrj95qFReA5Hhbjyo3vrD-QGKI4Z7PYpet_pfQqZJfFbTRkmBSDw2pOq1dI&key=AIzaSyCftYGY9WZGwrfAtDLsFR7DKplydOraNw8",
        "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=ATtYBwKdVGZzA0xUSIQhl8dPziXhx92m3SK9KMT9cAzCylwmDLDubBVFCM-pAnGw18cbuL8YIaVtrCfHoKbSZhY0DucJJbIdLMkwR7LGpu68NDu0O06uGUHQOPqOcLQQ-ocP7Uco9a4i0_rX53IG_ZtU59NPlFPpEWtCohx11CrtDynB1X2s&key=AIzaSyCftYGY9WZGwrfAtDLsFR7DKplydOraNw8"
      ],
        location: "NYC, NY, USA", datesKnown: 'year', place_id: "ChIJOwg_06VPwokRYv534QaPC8g", tripStartFrontEnd: "2022", tripEndFrontEnd: "2022", tripName: "Dream NYC Trip",
      activities: []
    },
  ],
  };

  handleNewTrip = (trips) => {
    this.setState({trips : trips})
  }

  handleAddedActivity = (trips) => {
    this.setState({trips : trips})
  }

  handleFetchYelp = (location, tripId) => {
    console.log(this.state);
    fetch('/api/yelp/' + location, {
      method: "GET",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .then((result) => {
    
    console.log('result', result);
    let trips = [...this.state.trips]
    let trip = trips.filter( el => el.id === tripId)
    trip = trip[0]
    let index = this.state.trips.indexOf(trip);
    let newActivites = result.result;
    console.log('trip ', trip);
    trip.activities = newActivites;
    trips.splice(index, 1, trip);
    this.setState({trips});
    })
    .catch((error) => {
      console.error('Error:', error);
    })  
  }
  



  render() {

  return(
  <div id="app" className="main-container">
    <Switch>
    {/* <Route path="/" exact component={HomePage} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/signup" exact component={SignupPage} /> */}
      {/* <Route path="/resetpassword" exact component={ResetPasswordPage} /> */}
      {/* <Route path="/"
          render={(props) => 
          <TimeHomePage 
          {...props} 
          trips = {this.state.trips}
          />
          }
          /> */}
      <Route path="/" 
      render={() => (
        <TripPage 
        trips = {this.state.trips}
        handleFetchYelp = {this.handleFetchYelp}
        handleAddedActivity = {this.handleAddedActivity}/>
    )}
  />
      <Route path="*" component={NotFound} />
    </Switch>
  </div>
  )
    };
  }

export default App;
