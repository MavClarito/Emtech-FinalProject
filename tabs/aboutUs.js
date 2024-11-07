// aboutUs.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import footerImage from '../assets/images/LoginBG.png'; // Example image

function AboutUs() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.description}>
        We are dedicated to providing the best solutions for algal bloom estimation using satellite data. Our goal is to ensure healthy water ecosystems.
      </Text>
      <Image source={footerImage} style={styles.footerImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  footerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
});

export default AboutUs;
