import React, { Component } from 'react';
// import { useDisclosure } from '@chakra-ui/react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import IntroText from '../../components/IntroText';
import NewTripDrawer from '../../components/NewTrip';
import TripListContainer from './TripList';


class TimeHomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trips: []
    };
    this.deleteTripHandler = this.deleteTripHandler.bind(this);
  }

  componentDidMount() {
    fetch('/api/trips/')
        .then(res => res.json())
        .then((result) => {
          this.setState({ trips: result.trips });

        })
        .catch(err => console.log(err));
  }

  deleteTripHandler(event) {
    const deleteTripId = Number(event.target.id);
    console.log('delete Trip Id', deleteTripId);
    fetch(`/api/trips/${deleteTripId}`, {
      method: 'DELETE',
      headers: {
      'Content-Type': 'application/json',
      },
    })
    .then((res) => {
      if (res.status === 200) return res.json();
      return res.json().then((data) => {
        throw data;
      });
    })
    .then((data) => {
      this.setState({ trips: this.state.trips.filter((el) => el.id !== deleteTripId)});
      toast({
        title: '',
        description: `${data.message}`,
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <>
        <NavBar />
        <IntroText />
        {/* <NewTripDrawer handleNewTrip = {handleNewTrip} /> */}
        <TripListContainer deleteTripHandler={this.deleteTripHandler} trips = {this.state.trips} />
        <Footer />
      </>
    );
  }
} 
// const TimeHomePage = () => {
//   // state = {
//   //   trips : [
//   //     {   locationPhotos  : [
//   //       "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=ATtYBwJYoYNDyA_A5MWpQl0rdFpzilFkA_Dx4BjoVZcgMrlI_oPE2P4610rWuXEAxFf2g9DL3wIoY0YV_gg9W1cwofSgjuOH24FANNYu3O35fEIS_CoKiD-PCP0LWAC5wK9q2O1kRwgC5tF_NhieU0BLSEJpIpUUk3QSMvEgLPOzyyGrlLWD&key=AIzaSyCftYGY9WZGwrfAtDLsFR7DKplydOraNw8", 
//   //       "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=ATtYBwKM4rM9SO3alQUzia8OLldvRdD6ydXG5-UDIhzodvsIrMooaWtYGyUAfZ3CE39bGBu8mZ9bH3-hha2V1k_NtEyGP5YZ8_cqwXVQ1GPlU_8RAIyzpDX0qPF0oQbrp6RptdR0KVevgYbMK4P6YQMSwvPFP1h1g0EEIpCOM17MxPYsEYCA&key=AIzaSyCftYGY9WZGwrfAtDLsFR7DKplydOraNw8", 
//   //       "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=ATtYBwI59__Y1Wblwj7kLBlgI0xE6eAe6HWHzLu4DEiJtWMWrU1RF-pxaipsaGyEQ_793aN9SkJA3zKJH48s3vjPouvIr3rcrSrWwD6I_1ev0qbxRePvI-k1O4cG6LwzJfQVY3zJqshVJpc2VyqAelvx8ZiS4qzkfPULnrr5hgzAllpsEH1G&key=AIzaSyCftYGY9WZGwrfAtDLsFR7DKplydOraNw8",
//   //       "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=ATtYBwISAk3I5yHUCvFnhP_VihXNyQFPmnvPr72DsKTbXgQ_JsOJwb46REjw-_zwGaSYNl_Z-j1nLrM8b-rDfYZVvJkC_89tVuFuNs6RJZMow7Sv-8WPj2ff8XsExnb3jqjCuVgVEsZxcpm-uqG8rQ1JexjFmVxESPnk_vBdrP3jRXRRT8Gr&key=AIzaSyCftYGY9WZGwrfAtDLsFR7DKplydOraNw8",
//   //       "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=ATtYBwJkcjSuzwSqsqdp2orEnaH8rdGy9juty8nYJd4mvXmqPUlAZZU5G9JDGzdgrLmULfld_DGKvuO3XDjReM3AokO7poJq9LVML45fjqdVtnp2LdiXyKYpGJT1DOqrL-gEwRMgTQLJPrPFqEI_ZtUZyi32s2j0faR_Ufe1MzjqOyO_D5e6&key=AIzaSyCftYGY9WZGwrfAtDLsFR7DKplydOraNw8",
//   //       "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=ATtYBwJ3uQzOn0BnsZCWyWgfsxtrSc6QqQytzLHpi3zMwg1xT1XNqvPzpMwLrpWdgob8G1L5OdzgX-8CaQRKM_rIT2a-mkvnXns03W20wgwxMImrHm_Rr66ZOeojuNYp5utAZ7ASr3zw_0p5WFObJAHkGnAhNin8OKrBEToX-b2wzOGlh3kR&key=AIzaSyCftYGY9WZGwrfAtDLsFR7DKplydOraNw8",
//   //       "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=ATtYBwI0w5OlNUyeDXTX48Kcp6eeUZthbotv3NYk1X1EJepKQGfpsd-nRVpK8UoCp7q4mxP0BtMMojRlFQRi5lCznLGEHx_lwnygFzlbhJHaQaRBwX2ZDli8fVrj95qFReA5Hhbjyo3vrD-QGKI4Z7PYpet_pfQqZJfFbTRkmBSDw2pOq1dI&key=AIzaSyCftYGY9WZGwrfAtDLsFR7DKplydOraNw8",
//   //       "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=ATtYBwKdVGZzA0xUSIQhl8dPziXhx92m3SK9KMT9cAzCylwmDLDubBVFCM-pAnGw18cbuL8YIaVtrCfHoKbSZhY0DucJJbIdLMkwR7LGpu68NDu0O06uGUHQOPqOcLQQ-ocP7Uco9a4i0_rX53IG_ZtU59NPlFPpEWtCohx11CrtDynB1X2s&key=AIzaSyCftYGY9WZGwrfAtDLsFR7DKplydOraNw8"
//   //     ],
//   //       location: "NYC, NY, USA", datesKnown: 'year', place_id: "ChIJOwg_06VPwokRYv534QaPC8g", tripStartFrontEnd: "2022", tripEndFrontEnd: "2022", tripName: "Dream NYC Trip"}],
//   // };
//   const [ data, setData ] = useState({ trips:[] });

//   useEffect(() => {
//     console.log('here in use effect'); 
//     fetch('/api/trips/')
//     .then(res => res.json())
//     .then((result) => {
//       console.log('data trip list', result);
//       setData(result);
//     })
//     .catch(err => console.log(err));
//   });
  

//   // handleNewTrip = (tripName, location, datesKnown, tripStart, tripEnd) => {
//   //   fetch('/imagefetch/' + location.value.place_id, {
//   //     method: 'GET', 
//   //     headers: {
//   //       'Content-Type': 'application/json'}
//   //   })
//   //       .then((res) => res.json())
//   //       .then((body) => {
//   //         const results = body.result.photos;
//   //         let photos = [];
//   //         for (let i=0; i<results.length; i++){
//   //           photos.push(`https://maps.googleapis.com/maps/api/place/photo?maxwidth=200&photoreference=${results[i].photo_reference}&key=AIzaSyCftYGY9WZGwrfAtDLsFR7DKplydOraNw8`)
//   //         }
//   //         console.log(photos)
    
//   //         let tripStartFrontEnd, tripEndFrontEnd; 
//   //   (datesKnown === 'day' || datesKnown === 'month') ? tripStartFrontEnd = tripStart.toLocaleDateString("en-US") : tripStartFrontEnd = "Soon!";
//   //   (datesKnown === 'day' || datesKnown === 'month') ? tripEndFrontEnd = tripEnd.toLocaleDateString("en-US") : tripEndFrontEnd = "Soon!"
//   //   console.log('location', location);
//   //   const newTrip = { locationPhotos : photos, location : location.label, place_id : location.value.place_id, tripStartFrontEnd: tripStartFrontEnd, tripEndFrontEnd : tripStartFrontEnd, tripStartBackEnd: tripEnd, tripEndBackEnd: tripEnd, datesKnown : datesKnown, tripName: tripName};
//   //   console.log(newTrip);
//   //   const trips = [...this.state.trips];
//   //   trips.push(newTrip);
//   //   this.setState({trips : trips});
//   //       })
//   //   .catch((error) => {
//   //       console.error('Error:', error);
//   //       });

//   //   // fetch request    
//   // }

//   console.log('Trip Array', data.trips);

//     return (
//       <>
//         <NavBar />
//         <IntroText />
//         {/* <NewTripDrawer handleNewTrip = {handleNewTrip} /> */}
//         <TripListContainer trips = {data.trips} />
//         <Footer />
//       </>
//     );
// }

export default TimeHomePage;
