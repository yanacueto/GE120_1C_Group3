// screens/List.js
import React from 'react';
import { View, Text, Button, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const List = ({ navigation }) => {

  const points = [
    {"pointNumber": 1, "name": "UP Alumni Engineers' Centennial Hall", "address": "P. Velasquez Street, Diliman, Quezon City, 1800 Metro Manila", "latitude": 14.648687, "longitude": 121.068691},
    {"pointNumber": 2, "name": "National Science Complex Amphitheater", "address": "J3XC+WQ7, Diliman, Quezon City, Metro Manila", "latitude": 14.650043, "longitude": 121.071964},
    {"pointNumber": 3, "name": "UP College of Engineering", "address": "Melchor Hall, Roces St, Diliman, Quezon City, 1101 Metro Manila", "latitude": 14.656363, "longitude": 121.069664},
    {"pointNumber": 4, "name": "UP Diliman Office of the University Registrar", "address": "M328+JHM, T.H. Pardo de Tavera St, Diliman, Quezon City, Metro Manila", "latitude": 14.651783, "longitude": 121.066428},
    {"pointNumber": 5, "name": "UP College of Law", "address": "M34C+HVH, Osmeña Avenue, Diliman, Quezon City, Metro Manila", "latitude": 14.656605, "longitude": 121.072217},
    {"pointNumber": 6, "name": "UP Sunken Garden", "address": "M34C+3PQ, Roxas Ave, Diliman, Quezon City, Metro Manila", "latitude": 14.655361, "longitude": 121.071804},
    {"pointNumber": 7, "name": "UP College of Social Sciences and Philosophy", "address": "Pavillion 1, 18 Roxas Ave, Diliman, Quezon City, Metro Manila", "latitude": 14.653855, "longitude": 121.069891},
    {"pointNumber": 8, "name": "Institute of Mathematics", "address": "J3XC+9F4, C.P. Garcia Ave, Diliman, Quezon City, 1101 Metro Manila", "latitude": 14.648688, "longitude": 121.071465},
    {"pointNumber": 9, "name": "UP Amphitheater", "address": "Roxas Ave, Diliman, Quezon City, Metro Manila", "latitude": 14.65522, "longitude": 121.065569},
    {"pointNumber": 10, "name": "UPFI FIlm Center", "address": "M348+JRM, Osmeña Avenue, Diliman, Quezon City, 1101 Metro Manila", "latitude": 14.656817, "longitude": 121.066954},
    {"pointNumber": 11, "name": "UP School of Economics", "address": "168 Osmeña Avenue, Diliman, Quezon City, Metro Manila", "latitude": 14.656205, "longitude": 121.073331},
    {"pointNumber": 12, "name": "Vinzons Hall", "address": "M33F+P88, Diliman, Quezon City, Metro Manila", "latitude": 14.65447, "longitude": 121.073417},
    {"pointNumber": 13, "name": "UP CHK Gym", "address": "Diliman, Quezon City, Metro Manila", "latitude": 14.659183, "longitude": 121.063043},
    {"pointNumber": 14, "name": "UP College of Education", "address": "M33C+CVV, Roxas Ave, Diliman, Quezon City, Metro Manila", "latitude": 14.653901, "longitude": 121.072158},
    {"pointNumber": 15, "name": "Lagmay Hall", "address": "M33C+CGP, Africa St, Diliman, Quezon City, Metro Manila", "latitude": 14.653761, "longitude": 121.0713845}
  ]

  const Card = ({ item }) => {
    return (
      <TouchableOpacity
        style={[styles.cardContainer, {width: '100%', alignSelf: 'stretch'}]}
        onPress={() => navigation.navigate('Map', { item })}
      >
        <Text>{item.name}</Text>
        <Text>Point Number: {item.pointNumber}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#4F6367' }}>
      <Text style={{justifyContent: 'center', alignItems: 'center', marginTop: 10, color: 'white' }}>Possible Locations for Control Points in UP Diliman</Text>
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
    backgroundColor: '#4F6367'
  },
  cardContainer: {
    margin: 6,
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: '#b8d8d8', // Optional: adds a white background color to the cards
    borderRadius: 5, // Optional: rounds the corners of the cards
  },
});

export default List;
