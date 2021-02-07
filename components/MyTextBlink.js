/*
Nguyen Duc Anh tai 
https://www.facebook.com/datai99/
Email:datai28599@gmail.com
*/
import React, { Component } from "react";
import { Text, View } from "react-native";

interface IBlinkProps { inputText: string }
interface IBlinkState { showText: boolean }

class Blink extends Component<IBlinkProps, IBlinkState> {

  constructor(props: IBlinkProps) {
    super(props);
    this.state = { showText: true };

    var taskToDo = () => {
      this.setState({
        showText: !this.state.showText
      });
    };

    const timeToBlink = 500;
    setInterval(taskToDo, timeToBlink);
  }

  render() {
    let textToDisplay = this.state.showText ? this.props.inputText : 'hidden';
    return (
      <Text style={{ padding: 150 }}>
        {textToDisplay}
      </Text>
    );
  }
}

export default class MyTextBlink extends Component {
  render() {
    return (
      <View>
        <Blink inputText='Blink text ok'></Blink>
      </View>
    )
  }
}