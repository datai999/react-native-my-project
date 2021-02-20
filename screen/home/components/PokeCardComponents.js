/*
Nguyen Duc Anh tai 
https://www.facebook.com/datai99/
Email:datai28599@gmail.com
*/
import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  FlatList,
} from 'react-native'

const PokeCard = ({ index, poke }) => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imageBackground}>
        <Image style={styles.image} source={poke.imageURL} />
      </ImageBackground>
      <Text style={styles.name}>{poke.name}</Text>
      <FlatList
        style={styles.types}
        data={poke.types}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Text style={getTypePokeColor(item)}>{item}</Text>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
    marginHorizontal: 10,
    paddingVertical: 2,
    paddingHorizontal: 10,
    backgroundColor: 'skyblue',
    borderRadius: 10,
  },
  imageBackground: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'aliceblue',
  },
  image: {
    width: 80,
    height: 80,
  },
  name: {
    flex: 3,
    paddingLeft: 30,
    fontWeight: 'bold',
    fontSize: 18,
  },
  types: { flex: 1, alignItems: 'center' },
})

function getTypePokeColor(type) {
  let defaultStyle = {
    margin: 2,
    borderRadius: 6,
    padding: 2,
  }
  let result
  switch (type.toLowerCase()) {
    case 'normal': {
      result = {
        backgroundColor: '#A8A878',
        border: '1px solid #6D6D4E',
      }
      break
    }
    case 'fire': {
      result = {
        backgroundColor: '#F08030',
        border: '1px solid #9C531F',
      }
      break
    }
    case 'water': {
      result = {
        backgroundColor: '#6890F0',
        border: '1px solid #445E9C',
      }
      break
    }
    case 'electric': {
      result = {
        backgroundColor: '#F8D030',
        border: '1px solid #A1871F',
      }
      break
    }
    case 'grass': {
      result = {
        backgroundColor: '#78C850',
        border: '1px solid #4E8234',
      }
      break
    }
    case 'ice': {
      result = {
        backgroundColor: '#98D8D8',
        border: '1px solid #638D8D',
      }
      break
    }
    case 'ground': {
      result = {
        backgroundColor: '#E0C068',
        border: '1px solid #927D44',
      }
      break
    }
    case 'flying': {
      result = {
        backgroundColor: '#A890F0',
        border: '1px solid #6D5E9C',
      }
      break
    }
    case 'ghost': {
      result = {
        backgroundColor: '#705898',
        border: '1px solid #493963',
      }
      break
    }
    case 'rock': {
      result = {
        backgroundColor: '#B8A038',
        border: '1px solid #786824',
      }
      break
    }
    case 'fighting': {
      result = {
        backgroundColor: '#C03028',
        border: '1px solid #7D1F1A',
      }
      break
    }
    case 'poison': {
      result = {
        backgroundColor: '#A040A0',
        border: '1px solid #682A68',
      }
      break
    }
    case 'psychic': {
      result = {
        backgroundColor: '#F85888',
        border: '1px solid #A13959',
      }
      break
    }
    case 'bug': {
      result = {
        backgroundColor: '#A8B820',
        border: '1px solid #6D7815',
      }
      break
    }
    case 'dark': {
      result = {
        backgroundColor: '#705848',
        border: '1px solid #49392F',
      }
      break
    }
    case 'steel': {
      result = {
        backgroundColor: '#B8B8D0',
        border: '1px solid #787887',
      }
      break
    }
    case 'dragon': {
      result = {
        backgroundColor: '#7038F8',
        border: '1px solid #4924A1',
      }
      break
    }
  }
  return { ...result, ...defaultStyle }
}

export default PokeCard
