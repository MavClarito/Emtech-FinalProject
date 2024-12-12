import React, { useState } from 'react';
import { Alert, View, Text, TextInput, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { styles } from './AuthStyle';
import backgroundImage from '../../assets/images/1.png';
import logo from '../../assets/images/logo.png';
import Register from './register';  
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <View>
      <Text>Welcome to Home!</Text>
    </View>
  );
}

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }

    try {
      const storedEmail = await AsyncStorage.getItem('userEmail');
      const storedPassword = await AsyncStorage.getItem('userPassword');

      if (email === storedEmail && password === storedPassword) {
        console.log('Logged in with', email);
        Alert.alert('Success', 'Logged in successfully!');
        navigation.navigate('Home');
      } else {
        Alert.alert('Error', 'Invalid email or password');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to retrieve user details');
    }
  };

  return (
    <View style={{ flex: 1 }}>
    {/* Header positioned at the top */}
    <View style={styles.headerContainer}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.headerText}>ALGSAT</Text>
    </View>

    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header removed */}
        <View style={styles.authContainer}>
          <View style={styles.authForm}>
            <View style={styles.iconContainer}>
              <Text style={styles.userIcon}>👤</Text>
            </View>

            <Text style={styles.heading}>LOGIN</Text>
            <TextInput
              placeholder="Email ID"
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
            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.authButton} onPress={handleLogin}>
              <Text style={styles.authButtonText}>LOGIN</Text>
            </TouchableOpacity>
            <Text style={styles.divider}>OR</Text>
            <Text style={styles.switchAuth}>
              Need an Account?{' '}
              <Text onPress={() => navigation.navigate('Register')} style={styles.signUpText}>
                SIGN UP
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
    </View>
  );
}

export function AuthStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'ALGSAT',
          headerStyle: { backgroundColor: '#004481' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      />
    </Stack.Navigator>
  );
}
