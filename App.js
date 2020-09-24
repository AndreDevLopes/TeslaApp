
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LogoHome from './components/LogoHome';
import Home from './screen/Home';
import Car from './screen/Car';
import Header from './components/Header';
import Exterior from './screen/Exterior';
import Interior from './screen/Interior';


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
       <Stack.Screen 
        name="Car" 
        component={Car}
        options={{
          headerStyle:{
            height:160,
          },
          headerTitle: props => <Header screenId='0' />
        }}
        />
        <Stack.Screen 
          name="exterior"
          component={Exterior}
          options={{
            headerStyle:{
              height:160,
            },
            headerTitle: props => <Header screenId='1' />
          }}
        />
         <Stack.Screen 
          name="interior"
          component={Interior}
          options={{
            headerStyle:{
              height:160,
            },
            headerTitle: props => <Header screenId='2' />
          }}
        />
     </Stack.Navigator>
   </NavigationContainer>
  );
}

