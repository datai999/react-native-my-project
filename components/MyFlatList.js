/*
Nguyen Duc Anh tai 
https://www.facebook.com/datai99/
Email:datai28599@gmail.com
*/
import React, { Component } from 'react'
import { Text, View, FlatList, Alert } from 'react-native'
import flatListData from '../data/MyFlatListData'
//this is no longer supported, please consider using https://github.com/jemise111/react-native-swipe-list-view instead.
import Swipeout from 'react-native-swipeout'

export default class MyFlatList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      deletedRowKey: null,
    }
  }
  refreshFlatList = (deletedKey) => {
    this.setState({ deletedRowKey: deletedKey })
  }
  render() {
    return (
      <View style={{ flex: 1, marginTop: 50 }}>
        <Text>Welcome to my deck</Text>
        <FlatList
          data={flatListData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <FlatListItem
              item={item}
              index={index}
              parentFlatList={this}
            ></FlatListItem>
          )}
        ></FlatList>
      </View>
    )
  }
}

class FlatListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeRowKey: null,
    }
  }
  render() {
    const swipeSetting = {
      autoClose: true,
      rowId: this.props.index,
      sectionId: 1,
      onOpen: (secId, rowId, direction) =>
        this.setState({ activeRowKey: this.props.index.toString }),
      onClose: (secId, rowId, direction) => {
        if (this.state.activeRowKey != null)
          this.setState({ activeRowKey: null })
      },
      right: [
        {
          text: 'Delete',
          type: 'delete',
          onPress: () => {
            Alert.alert(
              'Alert',
              'Are you sure you want to delete ?',
              [
                {
                  text: 'No',
                  style: 'cancel',
                  onPress: () => console.log('Cancel'),
                },
                {
                  text: 'Yes',
                  onPress: () => {
                    flatListData.splice(this.props.index, 1)
                    this.props.parentFlatList.refreshFlatList(
                      this.state.activeRowKey,
                    )
                  },
                },
              ],
              { cancelable: true },
            )
          },
        },
      ],
    }
    return (
      <Swipeout {...swipeSetting}>
        <View style={{ flex: 1 }}>
          <Text>{this.props.index + '  ' + this.props.item.name}</Text>
        </View>
      </Swipeout>
    )
  }
}
