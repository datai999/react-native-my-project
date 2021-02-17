/*
Nguyen Duc Anh tai 
https://www.facebook.com/datai99/
Email:datai28599@gmail.com
*/
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { TextInput, Button } from 'react-native-paper'

export default class MyLogin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInputComponent
          style={styles.input}
          context={new Context(this, 'username')}
          label="Email"
        />
        <TextInputComponent
          style={styles.input}
          context={new Context(this, 'password')}
          label="Password"
        />
        <Button
          style={(styles.input, styles.button)}
          mode="contained"
          onPress={() => console.log('Pressed')}
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

class Context {
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
  if (context != null && context instanceof Context) {
    contextProps = {
      value: context.getStateValue(),
      onChangeText: context.setStateValue,
    }
  }
  return <TextInput {...defaultProps} {...contextProps} {...props} />
}
