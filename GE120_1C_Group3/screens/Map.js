// screens/Map.js
import React from 'react';
import { View, Text, Button } from 'react-native';

// Import necessary components from react-native-maps
import MapView, { Marker } from 'react-native-maps';

const Map = ({ navigation }) => {

  return (
    <View style={{ flex: 1 }}>
      {/* Use MapView to render the map */}
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 14.655361,
          longitude: 121.061804,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {/* Marker for the current location */}
        <Marker
          coordinate={{ latitude: 14.655361, longitude: 121.061804 }}
          title="Current Location"
        />
        {/* Marker for the specific point */}
        <Marker
          coordinate={{ latitude: 14.655361, longitude: 121.071804 }}
          title="Specific Point"
          onPress={() => {
            navigation.navigate('Details')
          }}
        />
      </MapView>
    </View>
  );
};

export default Map;