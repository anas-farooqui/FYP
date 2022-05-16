import React from 'react';
import { Login } from './Login';
import { Signup } from './Signup';
import{Stack} from "./Navigation";
import{Help} from './Help';
import{Screen1} from './Screen1';
import{Home} from './Home';
import{DietPlan} from './DietPlan';
import { Exercise } from './Exercise';
import{Profile}from './Profile';
import { Notification } from './Notification';
import { NavigationContainer } from '@react-navigation/native';
import { Admin } from './Admin';
import { Test }from'./test';



// screenOptions={{headerShown:false}}

export default function App() {
  return ( 
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Screen1' >
      <Stack.Group  screenOptions={{headerShown:true}}>
    <Stack.Screen name="Screen1" component={Screen1} options={{headerStyle:{height:"20%"},headerShown:false}}/>
    <Stack.Screen name="Home" component={Home} options={{headerStyle:{backgroundColor:"#00A4F9"}}}/>
    <Stack.Screen name="DietPlan" component={DietPlan}/>
    <Stack.Screen name="Profile" component={Profile}options={{headerStyle:{backgroundColor:"#00A4F9",height:"50%"}}}/>
    <Stack.Screen name="Notification" component={Notification} options={{headerStyle:{backgroundColor:"#00A4F9"}}}/>
    <Stack.Screen name="Admin" component={Admin}/>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} /> 
      <Stack.Screen name="Help" component={Help}/>
      <Stack.Screen name="Plan" component={Test}/>
      <Stack.Screen name="Exercise" component={Exercise} options={{headerStyle:{backgroundColor:"grey"}}}/>
  
      
    
      </Stack.Group>

    
    </Stack.Navigator>
  </NavigationContainer>

  );
}