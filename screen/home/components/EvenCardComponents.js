/*
Nguyen Duc Anh tai 
https://www.facebook.com/datai99/
Email:datai28599@gmail.com
*/
import React, { useState } from 'react'
import { Text, View } from 'react-native'

const EventCard = ({ index, item }) => {
  const [text, setText] = useState('')
  return (
    <View style={{ padding: 10 }}>
      <Text>{item.name}</Text>
    </View>
  )
}

export default EventCard
