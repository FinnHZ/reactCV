import React, { Component,Fragment } from 'react'

import LoginCOM from './components/Login_Com'
import MainInterfaceCOM from './components/MainInterface_Com'

import { loginChange, logoutChange } from './redux/actions/login_ac'
import { connect } from 'react-redux'

class App extends Component {
  // state={boundarytest:''}
  // static getDerivedStateFromError(error){ return {boundarytest: error}}


  render() {
    // const testboundary = <h2>兜底善后文字</h2>
    if (this.props.loginState === "unsuccess"){   //this.props.validateLogin.indexOf("abcd") === -1
      return (
        <Fragment>
          <LoginCOM />
        </Fragment>
      )
    }else if(this.props.loginState === "success"){
      return (
        <Fragment>
          <MainInterfaceCOM />
        </Fragment>
      )
    }else{
      <h1>Please restart your browser!</h1>
    }

  }
}


export default connect(
  state => {return {loginState: state.loginReducer}},
    {loginChange, logoutChange}
)(App)