/*
Nguyen Duc Anh tai 
https://www.facebook.com/datai99/
Email:datai28599@gmail.com
*/
import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native'

const PokeCard = ({ index, poke }) => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imageBackground}>
        <Image style={styles.image} source={{ uri: poke.imageURI }} />
      </ImageBackground>
      <Text style={styles.id}>#{poke.id.toString().padStart(3, '0')}</Text>
      <Text style={styles.name}>{poke.name}</Text>
      <View style={styles.types}>
        {poke.types.map((item) => (
          <Text style={getTypePokeColor(item)} key={item}>
            {item}
          </Text>
        ))}
      </View>
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
  id: {
    width: 40,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'aliceblue',
    margin: 10,
    padding: 1,
    marginLeft: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  name: {
    flex: 2,
    paddingLeft: 10,
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
        borderColor: '#6D6D4E',
      }
      break
    }
    case 'fire': {
      result = {
        backgroundColor: '#F08030',
        borderColor: '#9C531F',
      }
      break
    }
    case 'water': {
      result = {
        backgroundColor: '#6890F0',
        borderColor: '#445E9C',
      }
      break
    }
    case 'electric': {
      result = {
        backgroundColor: '#F8D030',
        borderColor: '#A1871F',
      }
      break
    }
    case 'grass': {
      result = {
        backgroundColor: '#78C850',
        borderColor: '#4E8234',
      }
      break
    }
    case 'ice': {
      result = {
        backgroundColor: '#98D8D8',
        borderColor: '#638D8D',
      }
      break
    }
    case 'ground': {
      result = {
        backgroundColor: '#E0C068',
        borderColor: '#927D44',
      }
      break
    }
    case 'flying': {
      result = {
        backgroundColor: '#A890F0',
        borderColor: '#6D5E9C',
      }
      break
    }
    case 'ghost': {
      result = {
        backgroundColor: '#705898',
        borderColor: '#493963',
      }
      break
    }
    case 'rock': {
      result = {
        backgroundColor: '#B8A038',
        borderColor: '#786824',
      }
      break
    }
    case 'fighting': {
      result = {
        backgroundColor: '#C03028',
        borderColor: '#7D1F1A',
      }
      break
    }
    case 'poison': {
      result = {
        backgroundColor: '#A040A0',
        borderColor: '#682A68',
      }
      break
    }
    case 'psychic': {
      result = {
        backgroundColor: '#F85888',
        borderColor: '#A13959',
      }
      break
    }
    case 'bug': {
      result = {
        backgroundColor: '#A8B820',
        borderColor: '#6D7815',
      }
      break
    }
    case 'dark': {
      result = {
        backgroundColor: '#705848',
        borderColor: '#49392F',
      }
      break
    }
    case 'steel': {
      result = {
        backgroundColor: '#B8B8D0',
        borderColor: '#787887',
      }
      break
    }
    case 'dragon': {
      result = {
        backgroundColor: '#7038F8',
        borderColor: '#4924A1',
      }
      break
    }
  }
  return { ...result, ...defaultStyle }
}

export default PokeCard
