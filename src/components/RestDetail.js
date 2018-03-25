import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import RestSection from './RestSection';

const RestDetail = (props) => {
  return (
    <Card>
      <RestSection>
      <Text>{props.restaurantlist.rest_name}</Text>
    </RestSection>
</Card>
  );
};

export default RestDetail;
