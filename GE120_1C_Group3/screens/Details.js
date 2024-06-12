// screens/Details.js
import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

// List of Images
import point1 from '../data/photos/point1.jpg';
import point2 from '../data/photos/point2.jpg';
import point3 from '../data/photos/point3.jpg';
// Add more imports as needed



const Details = ({ navigation, route }) => {

  // Destructure item from route params
  const { item } = route.params;
  const images = [
    point1,
    point2,
    point3,
    // Add more images to the array as needed
  ];
  const imagePath = images[item.pointNumber - 1]; // Adjust indexing based on your pointNumber starting index

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Place Details</Text>
      <Image source={imagePath} style={styles.image} />
      <Text style={styles.label}>Name: <Text style={styles.value}>{item.name}</Text></Text>
      <Text style={styles.label}>Address: <Text style={styles.value}>{item.address}</Text></Text>
      <Text style={styles.label}>Latitude: <Text style={styles.value}>{item.latitude}</Text></Text>
      <Text style={styles.label}>Longitude: <Text style={styles.value}>{item.longitude}</Text></Text>
      <Text style={styles.label}>Point Number: <Text style={styles.value}>{item.pointNumber}</Text></Text>
      <Button
        title="Return to List"
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
    padding: 20 
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20 
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20
  },
  label: { 
    fontSize: 18, 
    marginVertical: 5 
  },
  value: {
    fontWeight: 'normal'
  }
});

export default Details;
