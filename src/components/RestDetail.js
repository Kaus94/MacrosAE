import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import RestSection from './RestSection';

const RestDetail = ({ restaurantlist }) => {
  const { rest_name, description, image } = restaurantlist;
  const { imageStyle,
    restDetailStyle,
    restHeaderStyle,
    restDescriptionStyle } = styles;

  return (
    <Card>
      <RestSection>
        <View>
          <Image
            style={imageStyle}
            source={{ uri: image }}
          />
        </View>
        <View style={restDetailStyle}>
      <Text style={restHeaderStyle}>{rest_name}</Text>
      <Text style={restDescriptionStyle}>{description}</Text>
    </View>
    </RestSection>
</Card>
  );
};

const styles = {
  restDetailStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    flex: 1,
    paddingLeft: 10
  },
  imageStyle: {
    height: 100,
    width: 120
  },
  restHeaderStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    paddingBottom: 7
  },
  restDescriptionStyle: {
    fontStyle: 'italic',
    color: 'grey'
  },
};

export default RestDetail;
