import { registerRootComponent } from 'expo'

import App from './App'

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
//lesson 26-30
import MyPokeFlatList from './components/MyPokeFlatList'
//...

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(MyPokeFlatList)
