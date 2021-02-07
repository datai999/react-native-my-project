/*
Nguyen Duc Anh tai 
https://www.facebook.com/datai99/
Email:datai28599@gmail.com
*/
import React, { Component } from "react";
import { TextInput, View, Text, Alert, Button } from "react-native";

export default class MyTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typedText: "Init text email",
      typedPass: "Init text pass",
      typedMulti: "Init text multi",
    };
  }
  _onPressBtn = () => {
    Alert.alert(this.state.typedText);
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", margin: 20 }}>
        <TextInput
          style={{ borderColor: "blue", borderWidth: 1, padding: 10 }}
          keyboardType="email-address"
          placeholder="Enter your email"
          autofocus={true}
          onChangeText={(text) => {
            this.setState({ typedText: text });
          }}
        ></TextInput>
        <TextInput
          style={{ borderColor: "blue", borderWidth: 1, padding: 10 }}
          keyboardType="default"
          placeholder="Enter your password"
          secureTextEntry={true}
          onChangeText={(text) => {
            this.setState({ typedPass: text });
          }}
        ></TextInput>
        <TextInput
          style={{ borderColor: "blue", borderWidth: 1, padding: 10 }}
          keyboardType="default"
          placeholder="Enter multi line"
          multiline={true}
          onChangeText={(text) => {
            this.setState({ typedMulti: text });
          }}
        ></TextInput>
        <Text>{this.state.typedText}</Text>
        <Text>{this.state.typedPass}</Text>
        <Text>{this.state.typedMulti}</Text>
        <Button title="Submit" color="blue" onPress={this._onPressBtn}></Button>
      </View>
    );
  }
}
