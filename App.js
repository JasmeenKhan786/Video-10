import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import Login from "./screens/Login";
import MyStack from "./navigations/navigate";

import { NavigationContainer } from "@react-navigation/native";

//Steps:
//1. Create Login, Sign up, Forgot Password and Loading screen designs
//2. Create a Stack Navigator between the screens and render it in App.js
//3. Create firebase database. Activate Firestore and Authentication
//4. Link firebase to your app
//5. Implement login and sign up functionality by referring to documentation


export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});
