import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';

import HomeScreen from './screens/HomeScreen';
import DonateScreen from './screens/DonateScreen';
import VolunteerScreen from './screens/VolunteerScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ headerShown:false }}
        />
        <Stack.Screen 
          name="Donate" 
          component={DonateScreen}
          options={{ headerShown:false }}
        />
        <Stack.Screen 
          name="Volunteer" 
          component={VolunteerScreen}
          options={{ headerShown:false }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
