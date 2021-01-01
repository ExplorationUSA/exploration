/* eslint-disable max-len */
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import EachActivity from './EachActivity';

class ActivityList extends Component {
  // fetch using the location name and then map each item in one activity
  constructor(props) {
    super(props);
    this.state = { activities: [] };
  }

  componentDidMount() {
    // console.log(this.props.location.state.param);
    console.log('props',this.props.location.state.param);
    const tripId = this.props.location.state.param;
    console.log('LOcation state params all new', tripId);
    fetch(`api/activity/${tripId}`)
      .then((result) => result.json())
      .then((data) => {
        console.log('all available activities', data);
        return data;
      })
      .then(({ activities }) => this.setState({ ...this.state, activities }))
      .catch((err) => console.log(err));
  }

  render() {
    // {console.log("state", this.state)}
    // const allActivities = this.state.activities;
    // console.log(allActivities);
    // return (
    //   <div>
    //     {allActivities.map(({id, image_url, location, rating, review_count, title, trip_id, url}) => <div>
    //         <EachActivity id={id} imageURL={image_url} location={location} rating={rating} reviewCount={review_count} title={title} tripID={trip_id} url={url} />                                                                                            </div>
    //       )
    //     };
    //   </div>
    return (
      <div>
        <EachActivity/>
      </div>
    );
}
}
export default withRouter(ActivityList);