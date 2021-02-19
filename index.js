import { registerRootComponent } from 'expo'

// lesson from https://www.youtube.com/watch?v=kNHuLOXR5T0&list=PLWBrqglnjNl31S91FFE63DtuRc9v9LSGl&index=1&ab_channel=NguyenDucHoang
//lesson 1-5
import HelloWord from './components/MyHelloWord'
import MyImage from './components/MyImage'
import MultiGreeting from './components/MyMultiGreeting'
import TextBlink from './components/MyTextBlink'
//lesson 6-9
import MyStyleSheet from './components/MyStyleSheet'
//lesson 10-16
import MyTextInput from './components/MyTextInput'
import MyScrollView from './components/MyScrollView'
//lesson 17-25
import MyFlatList from './components/MyFlatList'
//lesson 26-28
import MyPokeFlatList from './components/MyPokeFlatList'
//lesson 29-30
import LoginScreen from './screen/login/LoginScreen'
import RegisterScreen from './screen/register/RegisterScreen'
//lesson 31-34 login facebook, gg, realtime db
//lesson 35-39 redux
//lesson 40-45 redux saga
//lesson 46-49 navigation
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ScreenName from './constants/ScreenName.js'
//lesson 50-56 redux form and validate

const Tab = createBottomTabNavigator()
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={ScreenName.Login} component={LoginScreen} />
        <Tab.Screen name={ScreenName.Register} component={RegisterScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
registerRootComponent(App)
