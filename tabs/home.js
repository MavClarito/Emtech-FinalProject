//home.js
import React from 'react';
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native';
import { styles } from './HomeStyle'; 
import logo from './../assets/images/logo.png';  

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <Image source={logo} style={styles.logo} /> 
        <Text style={styles.headerText}>ALGSAT</Text> 
      </View>

      {/* Main Content Section */}
      <View style={styles.mapContainer}>
        <Text style={styles.titleText}>
          "Protect Your Fish & Prevent Algal Blooms with the Touch of your Fingertips."
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Monitoring')}>
          <Text style={styles.buttonText}>Start Monitoring Now!</Text>
        </TouchableOpacity>
      </View>

      {/* Contact Us Section */}
      <View style={styles.contactContainer}>
        <Text style={styles.contactText}>CONTACT US :</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => Linking.openURL('https://youtube.com')}>
            <Image source={require('./../assets/icons/youtube.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://facebook.com')}>
            <Image source={require('./../assets/icons/facebook.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('mailto:info@algsat.com')}>
            <Image source={require('./../assets/icons/gmail.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      {/* About Us Section */}
      <View style={styles.aboutContainer}>
        <Text style={styles.aboutText}>
          We are a group of passionate innovators dedicated to harnessing the power of technology for environmental sustainability. Our mission is to develop cutting-edge solutions that address pressing ecological challenges, particularly in water quality monitoring and management.
        </Text>
      </View>
    </View>
  );
};

export default Home;
