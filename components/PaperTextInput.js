/*
Nguyen Duc Anh tai 
https://www.facebook.com/datai99/
Email:datai28599@gmail.com
*/
import React from 'react'
import { TextInput } from 'react-native-paper'
import SingleStateContext from '../dto/SingleStateContext'

/**
 * @param {Context} context The context class
 */
export default function PaperTextInput({ context, ...props }) {
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
