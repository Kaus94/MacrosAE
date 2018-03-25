// Import Libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = (props) => {
  const { headerTextStyle, headerViewStyle } = styles;
   return (
     <View style={headerViewStyle}>
     <Text style={headerTextStyle}>{props.headerText}</Text>
     </View>
   );
};

const styles = {
  headerViewStyle: {
    backgroundColor: '#f9f9f9',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    paddingTop: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    elevation: 2,
    position: 'relative'
  },

  headerTextStyle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: 'black',
  }
};

// Flex Box Rules Below -
// Justify Content - Vertical Movement ('flex-end', 'center', 'flex-start')
// align Items - Horizontal Movement - ('flex-end', 'center', 'flex-start')


// make a component available to other parts of the App
export default Header;
