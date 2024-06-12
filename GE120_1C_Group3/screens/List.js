// screens/List.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const List = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>List Screen. Design list of points here</Text>
      <Button
        title="Go to Point"
        onPress={() => navigation.navigate('Map')}
      />
    </View>
  );
};

export default List;
