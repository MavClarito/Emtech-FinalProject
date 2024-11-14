{/*import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

const Monitoring = () => {
  const [accuracy, setAccuracy] = useState(null);

  useEffect(() => {
    // Function to fetch the data from the Flask API
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/api/ml');
        const data = await response.json();
        setAccuracy(data.accuracy);
      } catch (error) {
        console.error("Error fetching accuracy:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      <Text>Monitoring Data</Text>
      {accuracy !== null ? (
        <Text>Model Accuracy: {accuracy.toFixed(2)}</Text>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default Monitoring;
*/}