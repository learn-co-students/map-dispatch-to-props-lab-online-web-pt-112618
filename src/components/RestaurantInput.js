import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRestaurant } from '../actions/restaurants';

export class RestaurantInput extends Component {

  state = {
    name: '',
    location: ''
  }

  handleOnNameChange = event => {
    this.setState({
      name: event.target.value
    });
  }

  handleOnLocationChange = event => {
    this.setState({
      location: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    // add missing code
    console.log(this.state)
    console.log({...this.state})
    console.log(addRestaurant({...this.state}))
    const restaurant = {...this.state}
    this.props.addRestaurant(restaurant)
    // or this.props.addRestaurant(this.state)
  }

  render() {
    return(
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnNameChange(event)}
            id="name"
            placeholder="restaurant name" />
        </p>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnLocationChange(event)}
            id="location"
            placeholder="location" />
        </p>
        <input type="submit" />
      </form>
    );
  }
};


const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: (restaurant) => {
      dispatch(addRestaurant(restaurant))
    }
  }
}


//connect this component by wrapping RestaurantInput below
export default connect(state => ({ restaurants: state.restaurants }), mapDispatchToProps)(RestaurantInput);
