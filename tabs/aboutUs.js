import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // For navigation
import footerImage from '../assets/images/LoginBG.png'; // Example image
import mav from '../assets/images/mav-image.png'; // Example image for team members
import kenneth from '../assets/images/kenneth-image.png'; // Example image for team members
import pau from '../assets/images/pau-image.png'; // Example image for team members
import daniela from '../assets/images/daniela-image.png'; // Example image for team members

function AboutUs() {
  const [menuOpen] = useState(false);
  const navigation = useNavigation(); // React Navigation hook

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <Image source={require('../assets/images/logo.png')} style={styles.logo} />
        <Text style={styles.headerText}>ALGSAT</Text>
      </View>

      {/* Details Section */}
      <View style={styles.detailsSection}>
        <Text style={styles.detailsTitle}>Meet Team 63!</Text>
        <Text style={styles.detailsDescription}>
          We are a group of passionate innovators dedicated to harnessing the power of technology for environmental sustainability.
          Our mission is to develop cutting-edge solutions that address pressing ecological challenges, particularly in water quality monitoring and management.
        </Text>
      </View>

      {/* Person Containers */}
      <View style={styles.teamMembers}>
        {/* Member 1 */}
        <View style={styles.personContainer}>
          <Image source={mav} style={styles.personImage} />
          <View style={styles.personInfo}>
            <Text style={styles.personName}>Vincent Maverick Clarito</Text>
            <Text>Email: qvmdclarito@tip.edu.ph</Text>
            <Text>Contact number: 09292696071</Text>
            <Text>Elective: Intelligent Systems</Text>
          </View>
        </View>

        {/* Member 2 */}
        <View style={styles.personContainer}>
          <Image source={kenneth} style={styles.personImage} />
          <View style={styles.personInfo}>
            <Text style={styles.personName}>Kenneth Estacion</Text>
            <Text>Email: qkestacion@tip.edu.ph</Text>
            <Text>Contact number: 09273178495</Text>
            <Text>Elective: Data Science</Text>
          </View>
        </View>

        {/* Member 3 */}
        <View style={styles.personContainer}>
          <Image source={pau} style={styles.personImage} />
          <View style={styles.personInfo}>
            <Text style={styles.personName}>Paulo Mendoza</Text>
            <Text>Email: qpdcmendoza@tip.edu.ph</Text>
            <Text>Contact number: 09152776896</Text>
            <Text>Elective: Data Science</Text>
          </View>
        </View>

        {/* Member 4 */}
        <View style={styles.personContainer}>
          <Image source={daniela} style={styles.personImage} />
          <View style={styles.personInfo}>
            <Text style={styles.personName}>Daniela Marie Rabang</Text>
            <Text>Email: qdmdrabang@tip.edu.ph</Text>
            <Text>Contact number: 09453181290</Text>
            <Text>Elective: System Administration</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dee8f1',  
    padding: 20,
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#004481',
    paddingVertical: 10,
    paddingHorizontal: 20,
    position: 'absolute',
    top: 0,
    zIndex: 10,
    elevation: 5,
  },
  logo: {
    width: 80,
    height: 50,
    marginRight: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  detailsSection: {
    marginVertical: 10,
    paddingHorizontal: 20,
    textAlign: 'center',
    maxWidth: 600,  
  },
  detailsTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center', 
    marginBottom: 10,
  },
  
  detailsDescription: {
    fontSize: 16,
    textAlign: 'center',
  },
  teamMembers: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 30,
    marginTop: 30,
  },
  personContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f4f4f9',
    padding: 20,
    borderRadius: 20,
    width: 300,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5, 
  },
  personImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 15,
    resizeMode: 'cover',
  },
  personInfo: {
    textAlign: 'center',
  },
  personName: {
    fontSize: 20,
    color: '#333',
    marginBottom: 5,
  },
  footer: {
    marginTop: 'auto',
    textAlign: 'center',
    width: '100%',
  },
  footerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
});

export default AboutUs;
