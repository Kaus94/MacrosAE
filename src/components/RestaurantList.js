import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import RestDetail from './RestDetail';

class RestaurantList extends Component {
  state = { restlist: [] };

  componentWillMount() {
    axios.get('http://localhost:3000/rest-list')
    .then(response => this.setState({ restlist: response.data }));
  }

  renderRestaurants() {
    return this.state.restlist.map(restlist =>
      <RestDetail key={restlist.rest_name} restaurantlist={restlist} />
    );
  }

  render() {
  return (
    <View>
      {this.renderRestaurants()}
    </View>
    );
  }
}

export default RestaurantList;
