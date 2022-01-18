import React from "react";
import { Text, View, ScrollView, TouchableOpacity, Alert } from "react-native";
import db from "../config";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

// if(condition){
//   true

// }
// else{
// false
// }

// condition?true:false


export default class Home extends React.Component {
  constructor() {  
    super();
    this.state = {
      ideas: [],
    };
  }
  getData = async () => {
    this.setState({ ideas: [] });
    var response = await db.collection("ideas").get();
    //  console.log(response.docs);
    //Map function - arrays
    response.docs.map((d) => {
      //  console.log(d.data())
      var tempArr = this.state.ideas;
      var data = d.data();
      data.id = d.id;
      tempArr.push(data); 
      this.setState({ ideas: tempArr });
    });
  };
  componentDidMount() {
    this.getData();

    this._unsubscribe = this.props.navigation.addListener("focus", () => {
      this.getData();
    });
  }
  componentWillUnmount() {
    this._unsubscribe();
  }
  deleteData = (id) => {
    db.collection("ideas")
      .doc(id)
      .delete()
      .then(() => {
        alert("Deleted Successfully!");
      })
      .catch((error) => {
        alert("Something went wrong! Try later!");
      });
    this.getData();
  };
  render() {
    if (this.state.ideas.length === 0) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>All Ideas will appear here!</Text>
        </View>
      );
    } else {
      console.log(this.state.ideas);
      return (
        <View style={{ flex: 1, marginTop: "10%" }}>
          <ScrollView>
            {this.state.ideas.map((a) => {
              return (
                <View
                  style={{
                    backgroundColor: "pink",
                    marginTop: 10,
                    width: "90%",
                    alignSelf: "center",
                    borderRadius: 10,
                    padding: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                      {a.title}
                    </Text>
                    <Text
                      style={{
                        color: "grey",
                        backgroundColor: a.genre === "Action" ? "yellow":"white",
                        padding: 5,
                        borderRadius: 5,
                      }}
                    >
                      {a.genre}
                    </Text>
                  </View>
                  <Text style={{ color: "grey" }}>By: {a.email}</Text>
                  <Text
                    style={{ color: "grey", fontSize: 14, marginTop: 10 }}
                    numberOfLines={2}
                  >
                    {a.description}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      marginTop: 10,
                    }}
                  >
                    <TouchableOpacity
                      style={{ marginHorizontal: 10 }}
                      onPress={() => {
                        this.props.navigation.navigate("EditIdea", {selectedId:a.id});
                      }}
                    >
                      <Feather name="edit" size={24} color="black" />
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                      style={{ marginHorizontal: 10 }}
                      onPress={() => {
                        this.deleteData(a.id);
                      }}
                    >
                      <AntDesign name="delete" size={24} color="black" />
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
          </ScrollView>

          <TouchableOpacity
            style={{
              backgroundColor: "blue",
              width: "30%",
              height: 40,
              marginVertical: 10,
              borderRadius: 10,
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              this.props.navigation.navigate("AddIdea");
            }}
          >
            <Text style={{ fontSize: 24, color: "white" }}>+</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
}
