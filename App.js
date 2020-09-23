import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LogoHome from './components/LogoHome';
import Home from './screen/Home';
import Car from './screen/Car';


const Stack = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName="Home">
       <Stack.Screen
        name="Home" 
        component={Home} 
        options={{
          headerStyle:{
            backgroundColor:'#000000'
          },
          headerTitle: props => <LogoHome />

          }} />
       <Stack.Screen name="Car" component={Car} />
     </Stack.Navigator>
   </NavigationContainer>
  );
}

