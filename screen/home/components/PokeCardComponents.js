/*
Nguyen Duc Anh tai 
https://www.facebook.com/datai99/
Email:datai28599@gmail.com
*/
import React, { useState } from 'react'
import { Text, View } from 'react-native'

const PokeCard = ({ index, pokemon }) => {
  return (
    <View style={{ padding: 10 }}>
      <Text>{pokemon.name + pokemon.weight + pokemon.types}</Text>
    </View>
  )
}

export default PokeCard
