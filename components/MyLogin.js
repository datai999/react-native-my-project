/*
Nguyen Duc Anh tai 
https://www.facebook.com/datai99/
Email:datai28599@gmail.com
*/
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { TextInput, Button, Avatar } from 'react-native-paper'

export default class MyLogin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }

  login = () => {
    console.log('login' + this.state.username + this.state.password)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Avatar.Icon icon="alpha-t-circle-outline" />
          <Avatar.Icon icon="alpha-a-circle-outline" />
          <Avatar.Icon icon="alpha-i-circle-outline" />
        </View>
        <Text style={styles.title}>Well come to my application!!!</Text>
        <TextInputComponent
          style={styles.input}
          context={new SingleStateContext(this, 'username')}
          label="Email"
        />
        <TextInputComponent
          style={styles.input}
          secureTextEntry={true}
          context={new SingleStateContext(this, 'password')}
          label="Password"
        />
        <Button
          style={(styles.input, styles.button)}
          mode="contained"
          onPress={this.login}
        >
          Login
        </Button>
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

class SingleStateContext {
  constructor(context, stateName) {
    this.context = context
    this.stateName = stateName
  }
  getStateValue() {
    return this.context.state[this.stateName]
  }
  setStateValue = (value) => {
    this.context.setState({ [this.stateName]: value })
  }
}

/**
 * @param {Context} context The context class
 */
function TextInputComponent({ context, ...props }) {
  const defaultProps = {
    value: 'No context',
  }

  let contextProps
  if (context != null && context instanceof SingleStateContext) {
    contextProps = {
      value: context.getStateValue(),
      onChangeText: context.setStateValue,
    }
  }
  return <TextInput {...defaultProps} {...contextProps} {...props} />
}
