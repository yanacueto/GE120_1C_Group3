// screens/List.js
import React from 'react';
import { View, Text, Button, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

// List of Images
import point1 from '../data/photos/point1.jpg';
import point2 from '../data/photos/point2.jpg';
import point3 from '../data/photos/point3.jpg';
// Add more imports as needed

const Summary = ({ navigation, route }) => {

  const points = [
    {"pointNumber": 1, "name": "UP Alumni Engineers' Centennial Hall", "address": "P. Velasquez Street, Diliman, Quezon City, 1800 Metro Manila", "latitude": 14.648687, "longitude": 121.068691},
    {"pointNumber": 2, "name": "National Science Complex Amphitheater", "address": "J3XC+WQ7, Diliman, Quezon City, Metro Manila", "latitude": 14.650043, "longitude": 121.071964},
    {"pointNumber": 3, "name": "UP College of Engineering", "address": "Melchor Hall, Roces St, Diliman, Quezon City, 1101 Metro Manila", "latitude": 14.656363, "longitude": 121.069664}
  ]

  const { item } = route.params;
  const images = [
    point1,
    point2,
    point3,
    // Add more images to the array as needed
  ];
  const imagePath = images[item.pointNumber - 1]; // Adjust indexing based on your pointNumber starting index

  const Card = ({ item }) => {
    return (
      <TouchableOpacity
        style={[styles.cardContainer, {width: '100%', alignSelf: 'stretch'}]}
        onPress={() => navigation.navigate('Map', { item })}
      >
        <Image source={imagePath} style={styles.image} />
        <Text>Name: {item.name}</Text>
        <Text>Address: {item.address}</Text>
        <Text>Point Number: {item.pointNumber}</Text>
        <Text>Latitude: {item.latitude}</Text>
        <Text>Longitude: {item.longitude}</Text>

      </TouchableOpacity>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>List Screen. Design list of points here</Text>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {points.map((point, index) => (
          <Card key={index} item={point} />
        ))}
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingHorizontal: 10, // Adds horizontal padding to the content inside ScrollView
  },
  cardContainer: {
    margin: 10,
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: '#fff', // Optional: adds a white background color to the cards
    borderRadius: 5, // Optional: rounds the corners of the cards
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20
  },
});

export default Summary;
