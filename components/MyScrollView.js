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

export default class MyScrollView extends Component {
  render() {
    let screenWidth = Dimensions.get("window").width;
    return (
      <ScrollView
        keyboardDismissMode="on-drag"
        horizontal={false}
        pagingEnabled={false}
        pageVerticalScrollIndicator={true}
        pageHorizontalScrollIndicator={true}
        style={{ marginTop: 50 }}
      >
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
