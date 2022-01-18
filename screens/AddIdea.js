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
import db from '../config'
import firebase from "firebase";

//main axis - justifyContent
//cross axis - alignItems

//alignSelf, justifyContent, alignItems, margin and padding
export default class AddIdea extends React.Component {
  constructor(){
    super();
    this.state={
      title:'',
      description:'',
      genre:''
    }
  } 
  addData=()=>{

    db.collection('ideas').add({
      title:this.state.title,
      description:this.state.description,
      genre:this.state.genre,
      email:firebase.auth().currentUser.email
    })

    alert('Thank you for submitting an amazing idea!');
    this.props.navigation.navigate('Home')


  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
            <Text style={{marginTop:'20%', marginHorizontal:'5%', fontSize:16, alignSelf:'center'}}>Please fill the below details to submit your idea</Text>
        
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
              placeholder="Title"
              onChangeText={(val) => {
                this.setState({ title: val });
              }} 
            />
          </View>
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
              placeholder="Description"
              onChangeText={(val) => {
                this.setState({ description: val });
              }}
            />
          </View>
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
              placeholder="Genre"
              onChangeText={(val) => {
                this.setState({ genre: val });
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
            onPress={() => {
              if(this.state.title && this.state.description && this.state.genre){
                if(this.state.title.length >4 && this.state.description.length>4 && this.state.genre.length>4){
                  this.addData()
                }
                else{
                  alert('Atleast 4 characters required!')
                }
              

              }
              else{
                alert('Please fill all the details!')
              }
            }}
          >
            <Text style={{ fontSize: 18, color: "white" }}>Submit</Text>
          </TouchableOpacity>

        </ScrollView>
      </View>
    );
  }
}
