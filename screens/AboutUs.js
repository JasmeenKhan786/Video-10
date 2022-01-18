import React from "react";
import {
  Text,
  View,
  ScrollView,
} from "react-native";

//main axis - justifyContent
//cross axis - alignItems

//alignSelf, justifyContent, alignItems, margin and padding
export default class AboutUs extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
            <Text>About Us  Screen</Text>
        </ScrollView>
      </View>
    );
  }
}
