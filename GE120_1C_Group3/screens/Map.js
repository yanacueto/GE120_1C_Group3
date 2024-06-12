// screens/Map.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const Map = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Use React Native Maps here</Text>
      <Button
        title="Go to Point Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

export default Map;
