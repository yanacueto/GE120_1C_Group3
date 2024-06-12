// screens/List.js
import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
// import { points } from './points.json'

const List = ({ navigation }) => {

  const points = [
    {"pointNumber": 1, "name": "UP Alumni Engineers' Centennial Hall", "address": "P. Velasquez Street, Diliman, Quezon City, 1800 Metro Manila", "latitude": 14.648687, "longitude": 121.068691},
    {"pointNumber": 2, "name": "National Science Complex Amphitheater", "address": "J3XC+WQ7, Diliman, Quezon City, Metro Manila", "latitude": 14.650043, "longitude": 121.071964},
    {"pointNumber": 3, "name": "UP College of Engineering", "address": "Melchor Hall, Roces St, Diliman, Quezon City, 1101 Metro Manila", "latitude": 14.656363, "longitude": 121.069664}
]

  const Card = ({ item }) => {
    return (
      <TouchableOpacity
        style={{ margin: 10, padding: 10, borderColor: 'black', borderWidth: 1 }}
        onPress={() => navigation.navigate('Map', { item })}
      >
        <Text>Name: {item.name}</Text>
        <Text>Point Number: {item.pointNumber}</Text>
        <Text>Latitude: {item.latitude}</Text>
        <Text>Longitude: {item.longitude}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>List Screen. Design list of points here</Text>

      {points.map((point, index) => <Card key={index} item={point} />)}

    </View>
  );
};

export default List;
