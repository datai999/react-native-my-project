/*
Nguyen Duc Anh tai 
https://www.facebook.com/datai99/
Email:datai28599@gmail.com
*/
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import {
  Button as PaperButton,
  Avatar as PaperAvatar,
} from 'react-native-paper'
import PaperTextInput from '../../components/PaperTextInput'
import SingleStateContext from '../../dto/SingleStateContext'
import { FirebaseApp } from '../../server/FirebaseServer'

export default class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  login = () => {
    FirebaseApp.auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user
        alert('Login success')
        console.log(user)
      })
      .catch((error) => {
        var errorCode = error.code
        var errorMessage = error.message
        alert('Login failed:' + errorCode + errorMessage)
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <PaperAvatar.Icon icon="alpha-t-circle-outline" />
          <PaperAvatar.Icon icon="alpha-a-circle-outline" />
          <PaperAvatar.Icon icon="alpha-i-circle-outline" />
        </View>
        <Text style={styles.title}>Well come to my application!!!</Text>
        <PaperTextInput
          style={styles.input}
          context={new SingleStateContext(this, 'email')}
          label="Email"
        />
        <PaperTextInput
          style={styles.input}
          secureTextEntry={true}
          context={new SingleStateContext(this, 'password')}
          label="Password"
        />
        <PaperButton
          style={(styles.input, styles.button)}
          mode="contained"
          onPress={this.login}
        >
          Login
        </PaperButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    flexDirection: 'row',
    marginBottom: '5%',
  },
  title: { marginBottom: '15%', fontSize: 20, fontWeight: 'bold' },
  input: {
    borderRadius: 10,
    marginVertical: 5,
    width: '80%',
  },
  button: {
    marginTop: 5,
    width: '40%',
  },
})
