import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView, ImageBackground, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './AuthStyle';  
import logo from '../../assets/images/logo.png';
import backgroundImage from '../../assets/images/1.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Register() {
  const [username, setUsername] = useState(''); // Added username state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    if (!email || !password || !username) {
      Alert.alert('Error', 'Please fill out all fields');
      return;
    }

    try {
      await AsyncStorage.setItem('userEmail', email);
      await AsyncStorage.setItem('userPassword', password);
      await AsyncStorage.setItem('username', username);

      Alert.alert('Success', 'Account created successfully! Please log in.');
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Error', 'Failed to save user details');
    }
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerContainer}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.headerText}>ALGSAT</Text>
        </View>

        <View style={styles.authContainer}>
          <View style={styles.authForm}>
            <View style={styles.iconContainer}>
              <Text style={styles.userIcon}>👤</Text>
            </View>
            <Text style={styles.heading}>SIGN UP</Text>
            
            {/* Username Input */}
            <TextInput
              placeholder="Username"
              value={username}
              onChangeText={(text) => setUsername(text)}
              style={styles.inputField}
            />
            {/* Email Input */}
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={styles.inputField}
            />
            {/* Password Input */}
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              style={styles.inputField}
              secureTextEntry
            />
            {/* Confirm Password Input */}
            <TextInput
              placeholder="Confirm Password"
              value={confirmPassword}
              onChangeText={(text) => setConfirmPassword(text)}
              style={styles.inputField}
              secureTextEntry
            />
            {/* Sign Up Button */}
            <TouchableOpacity style={styles.authButton} onPress={handleRegister}>
              <Text style={styles.authButtonText}>SIGN UP</Text>
            </TouchableOpacity>
            
            {/* Divider */}
            <Text style={styles.divider}>OR</Text>

            {/* Switch to Login Page */}
            <Text style={styles.switchAuth}>
              Already have an Account?{' '}
              <Text onPress={() => navigation.navigate('Login')} style={styles.loginText}>
                LOGIN
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

export default Register;
