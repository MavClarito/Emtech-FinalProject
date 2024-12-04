import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Modal, Button } from 'react-native';
import { styles } from './MonitoringStyle'; 

export default function MonitoringTab({ navigation }) { // Assuming you are using react-navigation
  const [imageSource, setImageSource] = useState(null);
  const [selectedParam, setSelectedParam] = useState(null); 
  const [isMenuVisible, setIsMenuVisible] = useState(false); // State to control the visibility of the menu

  // List ng WQP with recos
  const parameters = [
    {
      name: 'Algal Bloom',
      image: require('../assets/images/algalBloom.jpg'),
      recommendations: [
        'Manage and control the artificial feeding in aquaculture to reduce the nutrient level that contributes to algal growth.',
        'Strict enforcement of pollution laws to control untreated waste entry.',
        'Launch reforestation and green planting to absorb excess nutrients.',
        'Take actions to minimize sedimentation.',
        'Active participation of stakeholders to curb nutrient pollution.',
      ],
    },
    {
      name: 'Total Suspended Solids',
      image: require('../assets/images/tss.jpg'),
      recommendations: [
        'Minimize sedimentation by building barriers near tributary mouths.',
        'Launch reforestation to stabilize soil and reduce erosion.',
      ],
    },
    {
      name: 'Phosphate',
      image: require('../assets/images/phosphate.jpg'),
      recommendations: [
        'Control artificial feeding to reduce nutrient levels.',
        'Enforce pollution laws to reduce nitrate contamination.',
        'Launch reforestation along the shore to absorb excess nitrates.',
      ],
    },
    {
      name: 'Nitrate',
      image: require('../assets/images/nitrate.jpg'),
      recommendations: [
        'Control artificial feeding to reduce nutrient levels.',
        'Strict enforcement of pollution laws to reduce untreated waste.',
        'Launch reforestation along the shore to absorb excess nitrates.',
        'Conduct public awareness campaigns to reduce phosphate use.',
      ],
    },
    {
      name: 'Dissolved Oxygen',
      image: require('../assets/images/dissolvedOxygen.jpg'),
      recommendations: [
        'Minimize sedimentation to avoid depleting oxygen levels.',
        'Promote public awareness to avoid practices causing eutrophication.',
        'Active participation of stakeholders to improve water quality management.',
      ],
    },
  ];

  // Shows recos once button pressed
  const handleParameterSelect = (param) => {
    setImageSource(param.image);
    setSelectedParam(param.name); 
  };

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  // Handle logout and redirect to login screen
  const handleLogout = () => {
    // Assuming 'Login' is your login screen name
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      {/* Hamburger Menu Button */}
      <TouchableOpacity
        style={styles.hamburgerButton}
        onPress={toggleMenu}
      >
          <View style={styles.hamburgerIcon}></View>
          <View style={styles.hamburgerIconMiddle}></View>
          <View style={styles.hamburgerIconBottom}></View>
      </TouchableOpacity>

      {/* Menu */}
      {isMenuVisible && (
        <View style={styles.menuContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.menuItem}>
            <Text style={styles.menuItemText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('AboutUs')} style={styles.menuItem}>
            <Text style={styles.menuItemText}>About Us</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogout} style={styles.menuItem}>
            <Text style={styles.menuItemText}>Logout</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* lagayan ng image */}
      <View style={styles.imageContainer}>
        <Image source={imageSource || require('../assets/images/LagunaLake.jpg')} style={styles.image} />
      </View>

      {/* List of params */}
      <ScrollView style={styles.parameterList}>
        {parameters.map((param, index) => (
          <View key={index} style={styles.parameterContainer}>
            <Text style={styles.parameterText}>{param.name}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleParameterSelect(param)}
            >
              <Text style={styles.buttonText}>Choose this Parameter</Text>
            </TouchableOpacity>

            {/* Shows list of recommendations */}
            {selectedParam === param.name && (
              <View style={styles.recommendationContainer}>
                <Text style={styles.recommendationTitle}>Recommendation</Text>
                <View style={styles.recommendationList}>
                  {param.recommendations.map((recommendation, idx) => (
                    <Text key={idx} style={styles.recommendationText}>
                      - {recommendation}
                    </Text>
                  ))}
                </View>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
