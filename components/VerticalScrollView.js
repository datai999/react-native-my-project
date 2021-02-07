/*
Nguyen Duc Anh tai 
https://www.facebook.com/datai99/
Email:datai28599@gmail.com
*/
import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  TextInput,
} from "react-native";

export default class VerticalScrollView extends Component {
  render() {
    let screenWidth = Dimensions.get("window").width;
    return (
      <ScrollView style={{ marginTop: 50 }} keyboardDismissMode="on-drag">
        <Image
          source={require("../images/d3.jpg")}
          style={{ width: screenWidth, height: (screenWidth / 800) * 450 }}
        ></Image>
        <TextInput
          style={{
            padding: 10,
            margin: 10,
            borderColor: "red",
            borderWidth: 1,
          }}
          placeholder="Enter your text"
        ></TextInput>
        <Image
          source={require("../images/d3.jpg")}
          style={{ width: screenWidth, height: (screenWidth / 800) * 450 }}
        ></Image>
        <Image
          source={require("../images/d3.jpg")}
          style={{ width: screenWidth, height: (screenWidth / 800) * 450 }}
        ></Image>
        <Image
          source={require("../images/d3.jpg")}
          style={{ width: screenWidth, height: (screenWidth / 800) * 450 }}
        ></Image>
      </ScrollView>
    );
  }
}
