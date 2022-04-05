import React, { Component } from 'react'
import {validation} from '../../redux/actions/login_ac'
import { connect } from 'react-redux'

class LoginCOM extends Component {

  validateCode = () => {
    this.props.validation("abcd");   //////////////////////////////////!!!???????????
    console.log(this.props.validateLogin)
  }

  //render waiting for modifying!!!!!!!!!!!!!!!!!!!!!????????????????????????
  render() {
    return (
      <div>
        <button onClick={this.validateCode}>Click me</button>
      </div>
    )
  }
}


export default connect(
  state => {return {validateLogin: state.loginReducer}},
    {validation}
)(LoginCOM)
