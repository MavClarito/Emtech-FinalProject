// AppNavigator.js
import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { AuthStackScreen } from '../tabs/auth/login';
import Home from '../tabs/home';
import Profile from '../tabs/profile';
import AboutUs from '../tabs/aboutUs';
import Monitoring from '../tabs/monitoring';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Auth"
            screenOptions={{
                headerShown: false,
                ...TransitionPresets.SlideFromRightIOS, 
            }}
        >
            <Stack.Screen name="Auth" component={AuthStackScreen} options={{ headerShown: false }}  />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="AboutUs" component={AboutUs} />
            <Stack.Screen name="Monitoring" component={Monitoring} />
        </Stack.Navigator>
    );
}

export default AppNavigator;
