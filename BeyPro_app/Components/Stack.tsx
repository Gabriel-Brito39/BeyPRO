import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Pages/BX';
import BeyStatus from '../Pages/Beyinf';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home" >
      <Stack.Screen name='Home' component={Home} options={{headerShown: false}} />
      <Stack.Screen name='Status' component={BeyStatus} options={{headerShown: false}}  />
    </Stack.Navigator>
  );
}
