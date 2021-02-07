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
      <View style={{ flex: 1 }}>
        <View style={{ flex: 20, backgroundColor: 'crimson' }}>
          <View style={styles.container}>
            <Text style={styles.firstText}>First Line</Text>
          </View>
        </View>
        <View style={{ flex: 20, backgroundColor: 'blue' }}></View>
        {/* first render */}
        <View style={{ height: 123, backgroundColor: 'red' }}>
          <View style={{ flex: 1, flexDirection: 'row', }}>
            <View style={{ width: 20, backgroundColor: 'green' }}></View>
            <View style={{ width: 20, backgroundColor: 'yellow' }}></View>
          </View>
        </View>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    // margin: 50,
  },
  firstText: {
    color: 'red'
  }
});