import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView, ImageBackground, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './AuthStyle';  
import logo from '../../assets/images/logo.png';
import backgroundImage from '../../assets/images/1.png';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();

  const handleRegister = () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    console.log('Registering with', username, email, password, confirmPassword);

    // Alert after user registration
    Alert.alert('Success', 'Account created successfully! Please log in.');
    navigation.navigate('Login');  //bumalik sa login page
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerContainer}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.headerText}>ALGSAT</Text>
        </View>

        <View style={styles.authContainer}>
          <Text style={styles.appTitle}>ALGAL BLOOM ESTIMATION USING SATELLITE IN LAKE</Text>
          <View style={styles.authForm}>
            <View style={styles.iconContainer}>
              <Text style={styles.userIcon}>👤</Text>
            </View>
            <Text style={styles.heading}>SIGN UP</Text>
            <TextInput
              placeholder="Username"
              value={username}
              onChangeText={(text) => setUsername(text)}
              style={styles.inputField}
            />
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={styles.inputField}
            />
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              style={styles.inputField}
              secureTextEntry
            />
            <TextInput
              placeholder="Confirm Password"
              value={confirmPassword}
              onChangeText={(text) => setConfirmPassword(text)}
              style={styles.inputField}
              secureTextEntry
            />
            <TouchableOpacity style={styles.authButton} onPress={handleRegister}>
              <Text style={styles.authButtonText}>SIGN UP</Text>
            </TouchableOpacity>
            <Text style={styles.divider}>OR</Text>
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
