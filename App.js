import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AppStack from './src/navigation/AppStack';
import AuthStack from './src/navigation/AuthStack';

export default function App() {
  return (
    <NavigationContainer>
      {/* <AppStack /> */}
      <AuthStack />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();
