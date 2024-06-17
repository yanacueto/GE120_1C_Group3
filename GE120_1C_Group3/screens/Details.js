// screens/Details.js
import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

// List of Images
import point1 from '../data/photos/point1.jpg';
import point2 from '../data/photos/point2.jpg';
import point3 from '../data/photos/point3.jpg';
import point4 from '../data/photos/point4.jpg';
import point5 from '../data/photos/point5.jpg';
import point6 from '../data/photos/point6.jpg';
import point7 from '../data/photos/point7.jpg';
import point8 from '../data/photos/point8.jpg';
import point9 from '../data/photos/point9.jpg';
import point10 from '../data/photos/point10.jpg';
import point11 from '../data/photos/point11.jpg';
import point12 from '../data/photos/point12.jpg';
import point13 from '../data/photos/point13.jpg';
import point14 from '../data/photos/point14.jpg';
import point15 from '../data/photos/point15.jpg';
// Add more imports as needed



const Details = ({ navigation, route }) => {

  // Destructure item from route params
  const { item } = route.params;
  const images = [
    point1,
    point2,
    point3,
    point4,
    point5,
    point6,
    point7,
    point8,
    point9,
    point10,
    point11,
    point12,
    point13,
    point14,
    point15,
    // Add more images to the array as needed
  ];
  const imagePath = images[item.pointNumber - 1]; // Adjust indexing based on your pointNumber starting index

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Location</Text>
      <Image source={imagePath} style={styles.image} />
      <Text style={styles.location}><Text style={styles.location}>{item.name}</Text></Text>
      <Text style={styles.details}>Address: <Text style={styles.details}>{item.address}</Text></Text>
      <Text style={styles.details}>Latitude: <Text style={styles.details}>{item.latitude}</Text></Text>
      <Text style={styles.details}>Longitude: <Text style={styles.details}>{item.longitude}</Text></Text>
      <Text style={styles.point}>Point Number: <Text style={styles.point}>{item.pointNumber}</Text></Text>
      <Button
        color = '#FE5F55'
        title ="Return to List"
        onPress={() => navigation.navigate('List')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20,
    backgroundColor: '#b8d8d8' 
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20 
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20
  },
  details: { 
    fontSize: 15, 
    marginVertical: 5,
    textAlign: 'center',
    marginHorizontal: 5 
  },
  location: { 
    fontSize: 18, 
    fontWeight: 'bold',
    textAlign: 'center', 
    marginVertical: 5
  },
  return: {
    color: 'black',
    marginVertical: 10
  },
  point: {
    fontSize: 15, 
    marginVertical: 5,
    marginBottom: 15
  }
});

export default Details;
