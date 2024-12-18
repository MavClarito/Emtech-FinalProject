import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Modal, Button, Alert } from 'react-native';
import { styles } from './MonitoringStyle';

export default function MonitoringTab({ navigation }) {
  const [imageSource, setImageSource] = useState(null);
  const [selectedParam, setSelectedParam] = useState(null);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  // List of params with recos
  const parameters = [
    {
      name: 'Algal Bloom',
      image: require('../assets/images/algalBloom.png'),
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
      image: require('../assets/images/tss.png'),
      recommendations: [
        'Minimize sedimentation by building barriers near tributary mouths.',
        'Launch reforestation to stabilize soil and reduce erosion.',
      ],
    },
    {
      name: 'Phosphate',
      image: require('../assets/images/phosphate.png'),
      recommendations: [
        'Control artificial feeding to reduce nutrient levels.',
        'Enforce pollution laws to reduce nitrate contamination.',
        'Launch reforestation along the shore to absorb excess nitrates.',
      ],
    },
    {
      name: 'Nitrate',
      image: require('../assets/images/nitrate.png'),
      recommendations: [
        'Control artificial feeding to reduce nutrient levels.',
        'Strict enforcement of pollution laws to reduce untreated waste.',
        'Launch reforestation along the shore to absorb excess nitrates.',
        'Conduct public awareness campaigns to reduce phosphate use.',
      ],
    },
    {
      name: 'Dissolved Oxygen',
      image: require('../assets/images/dissolvedOxygen.png'),
      recommendations: [
        'Minimize sedimentation to avoid depleting oxygen levels.',
        'Promote public awareness to avoid practices causing eutrophication.',
        'Active participation of stakeholders to improve water quality management.',
      ],
    },
  ];

  // oaram selction
  const handleParameterSelect = (param) => {
    if (selectedParam === param.name) {
      setImageSource(require('../assets/images/LagunaLake.jpg'));
      setSelectedParam(null);
    } else {
      setImageSource(param.image);
      setSelectedParam(param.name);
      showAlert(param.name);
    }
  };

  const showAlert = (paramName) => {
    const emojis = {
      'Algal Bloom': '🌱',
      'Total Suspended Solids': '💧',
      'Phosphate': '⚡',
      'Nitrate': '💨',
      'Dissolved Oxygen': '💨',
    };

    const emoji = emojis[paramName] || '⚠️'; 


    Alert.alert(
      'Attention Required!',
      `The ${paramName} is very high! ${emoji} Please be advised that urgent actions are needed.`
    );
  };

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
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

      {/* Image Container */}
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
