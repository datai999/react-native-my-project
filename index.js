import { registerRootComponent } from "expo";

import App from "./App";

// lesson from https://www.youtube.com/watch?v=kNHuLOXR5T0&list=PLWBrqglnjNl31S91FFE63DtuRc9v9LSGl&index=1&ab_channel=NguyenDucHoang
//lesson 1-5
import HelloWord from "./components/HelloWord";
import MyImage from "./components/MyImage";
import MultiGreeting from "./components/MultiGreeting";
import TextBlink from "./components/TextBlink";
//lesson 6-9
import MyStyleSheet from "./components/StyleSheet";
//lesson 10-15
import MyTextInput from "./components/MyTextInput";
import VerticalScrollView from "./components/VerticalScrollView";
//...

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(VerticalScrollView);
