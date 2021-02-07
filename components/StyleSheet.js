/*
Nguyen Duc Anh tai 
https://www.facebook.com/datai99/
Email:datai28599@gmail.com
*/
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class MyStyleSheet extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.firstText}>First Line</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 50,
  },
  firstText: {
    color: 'red'
  }
});