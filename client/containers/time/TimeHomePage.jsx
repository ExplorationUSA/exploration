import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import IntroText from "../../components/IntroText";
import NewTripDrawer from "../../components/NewTrip";
import TripListContainer from "./TripList";

class TimeHomePage extends Component {
  componentDidMount() {
    this.props.handleFetchState();
  }

  handleNewTrip = (tripName, location, datesKnown, tripStart, tripEnd) => {
    fetch("/imagefetch/" + location.value.place_id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((body) => {
        const results = body.result.photos;
        let photos = [];
        for (let i = 0; i < results.length; i++) {
          photos.push(
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=200&photoreference=${results[i].photo_reference}&key=AIzaSyCftYGY9WZGwrfAtDLsFR7DKplydOraNw8`
          );
        }

        let tripStartFrontEnd, tripEndFrontEnd;
        datesKnown === "day" || datesKnown === "month"
          ? (tripStartFrontEnd = tripStart.toLocaleDateString("en-US"))
          : (tripStartFrontEnd = "Soon!");
        datesKnown === "day" || datesKnown === "month"
          ? (tripEndFrontEnd = tripEnd.toLocaleDateString("en-US"))
          : (tripEndFrontEnd = "Soon!");

        this.handleTripToBackEnd(
          tripName,
          location,
          location.value.place_id,
          tripStart,
          tripEnd,
          photos,
          datesKnown
        );
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  handleTripToBackEnd = (
    tripName,
    location,
    place_id,
    tripStartBackEnd,
    tripEndBackEnd,
    photos,
    datesKnown
  ) => {
    const newTripForBackEnd = {
      title: tripName,
      destination: location.label,
      placeId: place_id,
      startDate: tripStartBackEnd,
      endDate: tripEndBackEnd,
      locationphotos: photos,
      dates_known: datesKnown,
    };
    fetch("/api/trips/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTripForBackEnd),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        const trips = [...this.props.trips];
        const newTrip = {};
        newTrip.location = data.trip.destination;
        newTrip.tripName = data.trip.title;
        newTrip.place_id = data.trip.place_id;
        newTrip.tripStartFrontEnd = data.trip.start_date;
        newTrip.tripEndFrontEnd = data.trip.end_date;
        newTrip.locationphotos = data.trip.locationphotos;
        newTrip.datesKnown = data.trip.dates_known;
        newTrip.id = data.trip.id;
        trips.push(newTrip);
        this.props.handleNewTrip(trips);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  deleteTripHandler = (event) => {
    const deleteTripId = Number(event.target.id);
    fetch(`/api/trips/${deleteTripId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) return res.json();
        return res.json().then((data) => {
          throw data;
        });
      })
      .then((data) => {
        const trips = this.props.trips.filter((el) => el.id !== deleteTripId);
        const message = data.message;
        this.props.handleDelete(trips, message);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    // console.log('this.props.trips',this.props.trips);
    return (
      <>
        <NavBar />
        <IntroText />
        <NewTripDrawer handleNewTrip={this.handleNewTrip} />
        <TripListContainer
          deleteTripHandler={this.deleteTripHandler}
          trips={this.props.trips}
          message={this.props.message}
        />
        <Footer />
      </>
    );
  }
}

export default TimeHomePage;
