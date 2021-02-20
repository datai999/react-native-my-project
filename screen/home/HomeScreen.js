/*
Nguyen Duc Anh tai 
https://www.facebook.com/datai99/
Email:datai28599@gmail.com
*/
import React from 'react'
import { StyleSheet, Text, FlatList, SafeAreaView } from 'react-native'
import EventCard from './components/EvenCardComponents'
import { getAllPoke } from '../../server/PokeServer'

const HomeScreen = () => {
  const [pokeList, setPokeList] = React.useState([])

  React.useEffect(() => {
    getAllPoke()
      .then((pokes) => {
        setPokeList(pokes)
      })
      .catch((err) => {
        alert(err)
      })
  })

  return (
    <SafeAreaView style={styles.container}>
      <Text>Welcome to my pokeList</Text>
      <FlatList
        data={pokeList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <EventCard
            item={item}
            index={index}
            parentFlatList={this}
          ></EventCard>
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
