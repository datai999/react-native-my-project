/*
Nguyen Duc Anh tai 
https://www.facebook.com/datai99/
Email:datai28599@gmail.com
*/
import React from 'react'
import { StyleSheet, Text, FlatList, SafeAreaView } from 'react-native'
import PokeCard from './components/PokeCardComponents'
import { getDetailPokes } from '../../server/PokeServer'

const HomeScreen = () => {
  const [pokeList, setPokeList] = React.useState([])

  React.useEffect(() => {
    getDetailPokes()
      .then((pokemon) => {
        setPokeList(pokemon)
      })
      .catch((err) => {
        alert(err)
      })
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Text>Welcome to my PokeDex</Text>
      <FlatList
        data={pokeList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <PokeCard poke={item} index={index}></PokeCard>
        )}
      ></FlatList>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
export default HomeScreen
