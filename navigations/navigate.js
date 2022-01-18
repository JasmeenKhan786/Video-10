import React from 'react';

import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import AboutUs from '../screens/AboutUs';
import Profile from '../screens/Profile';
import Loading from '../screens/Loading';
import ForgotPassword from '../screens/ForgotPassword';
import AddIdea from '../screens/AddIdea';
import EditIdea from '../screens/EditIdea';
import Home from '../screens/Home';


import { createStackNavigator } from '@react-navigation/stack';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack1 = createStackNavigator();

function HomeStack() {
    return (
      <Stack1.Navigator screenOptions={{headerShown:false}}>
        <Stack1.Screen name="Home" component={Home} />
        <Stack1.Screen name="AddIdea" component={AddIdea} /> 
        <Stack1.Screen name="EditIdea" component={EditIdea} /> 
      </Stack1.Navigator>
    );
  }


  const Tab = createBottomTabNavigator();

  function MyTabs() {
    return (
      <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="AboutUs" component={AboutUs} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    ); 
  }


const Stack = createStackNavigator();

function MyStack() { 
    return (
      <Stack.Navigator >
        <Stack.Screen name="Loading" component={Loading} options={{headerShown:false}}/> 
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}} /> 
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{headerShown:true}} /> 
        <Stack.Screen name="Home" component={MyTabs} options={{headerShown:false}}/> 
      </Stack.Navigator>
    );
  }

  export default MyStack;