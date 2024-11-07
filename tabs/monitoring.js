import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const Monitoring = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [stationLocations, setStationLocations] = useState([
    { id: '1', latitude: 121.174044303934, longitude: 14.4170143281305, label: "Station 1" },
    { id: '2', latitude: 121.336441311657, longitude: 14.2719829588474, label: "Station 2" },
    { id: '3', latitude: 121.280191611938, longitude: 14.3857986672338, label: "Station 3" },
    { id: '4', latitude: 121.138937613763, longitude: 14.4883257902075, label: "Station 4" },
    { id: '5', latitude: 121.238218191067, longitude: 14.2383151722609, label: "Station 5" },
    { id: '6', latitude: 121.118335016667, longitude: 14.5115683801749, label: "Station 6" },
    { id: '7', latitude: 121.094389843182, longitude: 14.3702764359331, label: "Station 7" },
    { id: '8', latitude: 121.13377260203, longitude: 14.3253846091818, label: "Station 8" },
    { id: '9', latitude: 121.269697927342, longitude: 14.2912739731556, label: "Station 9" },
    { id: '10', latitude: 121.384511963434, longitude: 14.3123547745184, label: "Station 10" },
    { id: '11', latitude: 121.096000143057, longitude: 14.4121682301603, label: "Station 11" },
    { id: '12', latitude: 121.222973759663, longitude: 14.4222049481406, label: "Station 12" },
    { id: '13', latitude: 121.28667809836, longitude: 14.3424716427714, label: "Station 13" },
    { id: '14', latitude: 121.27118783988, longitude: 14.2551321939837, label: "Station 14" },
    { id: '15', latitude: 121.414493346243, longitude: 14.3250210743066, label: "Station 15" },
  ]);

  useEffect(() => {
    // Set the initial location to [121.2810, 14.3424]
    setUserLocation({
      latitude: 121.2810,
      longitude: 14.3424,
      latitudeDelta: 0.0922,  // Adjusted zoom level
      longitudeDelta: 0.0421, // Adjusted zoom level
    });
  }, []);

  if (!userLocation) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6200ee" />
      </View>
    );
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={userLocation} // Setting the initial region to the specified coordinates
      showsUserLocation={true}
    >
      {stationLocations.map(station => (
        <Marker
          key={station.id}
          coordinate={{ latitude: station.latitude, longitude: station.longitude }}
          title={station.label}
          description={station.label}
          image={require('./../assets/icons/marker.png')} // Ensure the path is correct
        />
      ))}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Monitoring;
