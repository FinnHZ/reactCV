import React, { Component, Fragment } from 'react'
import homepage from './index.module.css'
import LoginCOM from '../../components/Login_Com'

import { connect } from 'react-redux'

class HomePage extends Component {

  toOtherLink = (otherlink) => {
    return ( ()=>{
      window.location.href= otherlink
    })
  }

  render() {
    if(this.props.loginState === "unsuccess"){     ////////////?????????怎么处理让路由自动跳转会login界面的路由？？？
      return (
        <Fragment>
          <LoginCOM />
        </Fragment>
      )
    }else if(this.props.loginState === "success"){
    return (
      <h1 className={homepage.title}>Welcome to Finn's world!</h1>
    )}
  }
}


export default connect(
  state => {return {loginState: state.loginReducer}}
)(HomePage)
