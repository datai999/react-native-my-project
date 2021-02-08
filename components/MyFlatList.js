/*
Nguyen Duc Anh tai 
https://www.facebook.com/datai99/
Email:datai28599@gmail.com
*/
import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import flatListData from '../data/MyFlatListData'

export default class MyFlatList extends Component {
  render() {
    return (
      <View style={{ flex: 1, marginTop: 50 }}>
        <Text>Welcome to my deck</Text>
        <FlatList
          data={flatListData}
          renderItem={({ item, index }) => (
            <FlatListItem item={item} index={index}></FlatListItem>
          )}
        ></FlatList>
      </View>
    )
  }
}

class FlatListItem extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>{this.props.index + '  ' + this.props.item.name}</Text>
      </View>
    )
  }
}
