// monitoringTab.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MonitoringTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Monitoring Content Goes Here</Text>
      {/* You can add other components or content here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0F7FA',
  },
  text: {
    fontSize: 18,
    color: '#00509E',
    fontWeight: 'bold',
  },
});

