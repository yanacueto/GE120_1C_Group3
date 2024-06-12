// screens/Map.js
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
// Import necessary components from react-native-maps
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const Map = ({ navigation, route }) => {

  const [currentLocation, setCurrentLocation] = useState({
    coords: {
      latitude: 14.656363,
      longitude: 121.069664,
    },
  });

  // Destructure item from route params
  const { item } = route.params;

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status!== 'granted') {
        console.error('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setCurrentLocation(location);
    })();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {/* Use MapView to render the map */}
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: currentLocation.coords.latitude,
          longitude: currentLocation.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {/* Marker for the current location */}
        <Marker
          coordinate={{ latitude: currentLocation.coords.latitude, longitude: currentLocation.coords.longitude }}
          pinColor='red'
          title="Current Location"
        />
        {/* Marker for the specific point */}
        <Marker
          coordinate={{ latitude: item.latitude, longitude: item.longitude }}
          pinColor='green'
          title={item.title}
          onPress={() => {
            navigation.navigate('Details', { item })
          }}
        />
      </MapView>
    </View>
  );
};

export default Map;