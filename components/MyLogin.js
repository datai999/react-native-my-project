/*
Nguyen Duc Anh tai 
https://www.facebook.com/datai99/
Email:datai28599@gmail.com
*/
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { TextInput } from 'react-native-paper'

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
      <View>
        <TextInputComponent
          context={new Context(this, 'username')}
          label="Email"
        />
        <TextInputComponent
          context={new Context(this, 'password')}
          label="Password"
        />
      </View>
    )
  }
}

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
