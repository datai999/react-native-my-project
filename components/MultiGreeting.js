/*
Nguyen Duc Anh tai 
https://www.facebook.com/datai99/
Email:datai28599@gmail.com
*/
import React, { Component } from "react";
import { Text, View } from "react-native";

type GreetingProps = { name: string };
class Greeting extends Component<GreetingProps> {
  render() {
    return <Text>Hello {this.props.name} </Text>;
  }
}

export default class MultiGreeting extends Component {
  render() {
    return (
      <View style={{ alignItems: "center" }}>
        <Greeting name="Nguyen Duc Anh Tai"></Greeting>
        <Greeting name="Nguyen Duc Anh Tai 2nd"></Greeting>
      </View>
    );
  }
}
