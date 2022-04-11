import React, { Component,Fragment } from 'react'

import LoginCOM from './components/Login_Com'
import MainInterfaceCOM from './components/MainInterface_Com'

import {validation} from '../src/redux/actions/login_ac'
import { connect } from 'react-redux'

class App extends Component {
  // state={boundarytest:''}
  // static getDerivedStateFromError(error){ return {boundarytest: error}}


  render() {
    // const testboundary = <h2>兜底善后文字</h2>
    if (this.props.validateLogin.indexOf("abcd") === -1){   //应该在redux中另外建一个login状态属性，布尔值，这里的验证就直接改成验证布尔值的true或false
      return (
        <Fragment>
          <LoginCOM />
        </Fragment>
      )
    }else{
      return (
        <Fragment>
          <MainInterfaceCOM />
        </Fragment>
      )
    }

  }
}


export default connect(
  state => {return {validateLogin: state.loginReducer}},
    {validation}
)(App)