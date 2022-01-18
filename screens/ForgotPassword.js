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
import firebase from 'firebase'
//main axis - justifyContent
//cross axis - alignItems

//alignSelf, justifyContent, alignItems, margin and padding
export default class ForgotPassword extends React.Component {
  constructor(){
    super()
    this.state={email:''}
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <Image
            source={require("../assets/logo3.png")}
            style={{
              width: "80%",
              height: 250,
              marginTop: "20%",
              alignSelf: "center",
              resizeMode: "contain",
            }}
          />

          <Text style={{ fontSize: 22, fontWeight: "bold", marginLeft: "5%" }}>
            Login
          </Text>

          <View
            style={{
              flexDirection: "row",
              width: "90%",
              alignSelf: "center",
              marginTop: 30,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Feather name="at-sign" size={20} color="grey" />
            <TextInput
              style={{
                width: "90%",
                height: 30,
                borderBottomWidth: 1,
                paddingLeft: 10,
                borderBottomColor: "grey",
              }}
              placeholder="Email ID"
              onChangeText={(val)=>{
                this.setState({email:val})
              }}
            />
          </View>

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
            onPress={()=>{
              firebase.auth().sendPasswordResetEmail(this.state.email)
              .then(() => {
               alert('Password reset link sent!')
              })
              .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage)
              });
            }}
          >
            <Text style={{ fontSize: 18, color: "white" }}>Send Reset Password Link</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
