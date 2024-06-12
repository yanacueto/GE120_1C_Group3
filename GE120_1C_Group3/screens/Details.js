// screens/Details.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const Details = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Go back to List</Text>
      <Button
        title="Return to List"
        onPress={() => navigation.navigate('List')}
      />
    </View>
  );
};

export default Details;
