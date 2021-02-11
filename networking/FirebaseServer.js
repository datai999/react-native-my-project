/*
Nguyen Duc Anh tai 
https://www.facebook.com/datai99/
Email:datai28599@gmail.com
*/
import * as firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDtfc-lIPDRHCctH0_kdUyQ6nxxcQ6BDd0',
  authDomain: 'react-native-my-project-b975c.firebaseapp.com',
  projectId: 'react-native-my-project-b975c',
  storageBucket: 'react-native-my-project-b975c.appspot.com',
  messagingSenderId: '400536339071',
  appId: '1:400536339071:web:dd0523996773b22336f54a',
  measurementId: 'G-P49ZC1P09G',
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)
