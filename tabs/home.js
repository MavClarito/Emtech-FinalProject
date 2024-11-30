import React, { useState } from 'react'; 
import { View, Text, TouchableOpacity, Image, Linking, ScrollView, ImageBackground } from 'react-native';
import Animated, { withSpring, useSharedValue, useAnimatedStyle } from 'react-native-reanimated'; 
import { styles } from './HomeStyle'; 

import logo from './../assets/images/logo.png';  
import threeBG from './../assets/images/threeBG.png';

const Home = ({ navigation }) => {
  const scale = useSharedValue(1); 

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withSpring(scale.value) }],
    };
  });

  const handlePress = () => {
    scale.value = 1.2;
    setTimeout(() => {
      scale.value = 1; 
    }, 100);
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.headerText}>ALGSAT</Text>
      </View>

      {/* Main Content Section */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.mapContainer}>
          <Text style={styles.titleText}>
            "Protect Your Fish & Prevent Algal Blooms with the Touch of your Fingertips."
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handlePress();
              navigation.navigate('Monitoring');
            }}>
            <Animated.View style={animatedStyle}>
              <Text style={styles.buttonText}>Start Monitoring Now!</Text>
            </Animated.View>
          </TouchableOpacity>
        </View>

        {/* Contact Us Section */}
        <View style={styles.contactContainer}>
          <Text style={styles.contactText}>CONTACT US:</Text>
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
            We are a group of passionate innovators dedicated to harnessing the power of technology for environmental sustainability. 
            Our mission is to develop cutting-edge solutions that address pressing ecological challenges, particularly in water quality monitoring and management.
          </Text>
        </View>
      </ScrollView>

      {/* Background Image at the Bottom */}
      <ImageBackground source={threeBG} style={styles.backgroundImage} />
    </View>
  );
};

export default Home;
