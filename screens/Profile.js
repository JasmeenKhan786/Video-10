import React from "react";
import {
  StyleSheet, 
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import firebase from "firebase";
//main axis - justifyContent
//cross axis - alignItems

//alignSelf, justifyContent, alignItems, margin and padding
export default class Profile extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
            <Text> Profile  Screen</Text>

            <TouchableOpacity
            style={{
              backgroundColor: "blue",
              width: "90%",
              height: 40,
              marginTop: 30,
              borderRadius: 10,
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              firebase.auth().signOut().then(() => {
               this.props.navigation.replace('Login')
              }).catch((error) => {
                alert('Something went wrong! Try Later!')
              });
            }}
          >
            <Text style={{ fontSize: 18, color: "white" }}>Logout</Text>
          </TouchableOpacity>

        </ScrollView>
      </View>
    );
  }
}
