/*
Nguyen Duc Anh tai 
https://www.facebook.com/datai99/
Email:datai28599@gmail.com
*/

export default class SingleStateContext {
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
