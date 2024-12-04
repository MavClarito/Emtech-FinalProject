import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { styles } from './MonitoringStyle'; 

export default function MonitoringTab() {
  const [imageSource, setImageSource] = useState(null);
  const [selectedParam, setSelectedParam] = useState(null); 

  // list ng WQP with recos
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

  // shows recos once button pressed
  const handleParameterSelect = (param) => {
    setImageSource(param.image);
    setSelectedParam(param.name); 
  };

  return (
    <View style={styles.container}>
      {/* Image Placeholder */}
      <View style={styles.imageContainer}>
        <Image source={imageSource || require('../assets/images/LagunaLake.jpg')} style={styles.image} />
      </View>

      {/* List of params*/}
      <ScrollView style={styles.parameterList}>
        {parameters.map((param, index) => (
          <View key={index} style={styles.parameterContainer}>
            <Text style={styles.parameterText}>{param.name}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleParameterSelect(param)}>
              <Text style={styles.buttonText}>Choose this Parameter</Text>
            </TouchableOpacity>

            {/*Shows list ng recommendations */}
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
