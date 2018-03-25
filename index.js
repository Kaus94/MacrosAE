// Import a Library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import RestaurantList from './src/components/RestaurantList';


// create a component
const App = () => (
  <View>
    <Header headerText={'Dashboard'} />
    <RestaurantList />
  </View>
  );


// render it to the device
AppRegistry.registerComponent('Macros', () => App);
