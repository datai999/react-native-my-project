/*
Nguyen Duc Anh tai 
https://www.facebook.com/datai99/
Email:datai28599@gmail.com
*/
import React, { Component } from 'react'
import { Text, View, FlatList, RefreshControl } from 'react-native'
import { getAllPoke } from '../networking/PokeServer'

export default class MyPokeFlatList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      deletedRowKey: null,
      refreshing: false,
      pokeList: [],
    }
  }
  componentDidMount() {
    this.refreshDataFromServer()
  }
  refreshDataFromServer = () => {
    this.setState({ refreshing: true })
    getAllPoke()
      .then((pokes) => {
        this.setState({ pokeList: pokes })
      })
      .catch((err) => {
        this.setState({ pokeList: [] })
      })
    this.setState({ refreshing: false })
  }
  refreshFlatList = (deletedKey) => {
    this.setState({ deletedRowKey: deletedKey })
  }
  render() {
    return (
      <View style={{ flex: 1, marginTop: 50 }}>
        <Text>Welcome to my pokeList</Text>
        <FlatList
          data={this.state.pokeList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <FlatListItem
              item={item}
              index={index}
              parentFlatList={this}
            ></FlatListItem>
          )}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refresh}
              onRefresh={this.refreshDataFromServer}
            />
          }
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
    return (
      <View style={{ flex: 1 }}>
        <Text>{this.props.index + '  ' + this.props.item.name}</Text>
      </View>
    )
  }
}
