import React, { useState, useEffect } from 'react';
import { AppRegistry, Appearance } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import AppNavigator from './components/AppNavigator';

// Main App Component
function App() {
  const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme());

  // Listen for system color scheme changes
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setColorScheme(colorScheme);
    });

    return () => subscription.remove();
  }, []);

  return (
    <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {/* Dynamic Status Bar */}
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      <AppNavigator />
    </NavigationContainer>
  );
}

// Registering the App Component
AppRegistry.registerComponent('ALGSAT', () => App);

export default App;
