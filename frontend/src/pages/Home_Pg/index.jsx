import React, { Component} from 'react'
import homepage from './index.module.css'
import LoginCOM from '../../components/Login_Com'
import PubSub from 'pubsub-js'

import { connect } from 'react-redux'

class HomePage extends Component {


  componentDidMount() {
    PubSub.subscribe('editFlag', (msg, data) => {
      console.log("111111111", data)
    })
  }



  toOtherLink = (otherlink) => {
    return ( ()=>{
      window.location.href= otherlink
    })
  }

  render() {
    if(this.props.loginState === "unsuccess"){     ////////////?????????怎么处理让路由自动跳转会login界面的路由？？？
      return (
        <div>
          <LoginCOM />
        </div>
      )
    }else if(this.props.loginState === "success"){
      return (
        <div>
          <h1 className={homepage.title}>Welcome to Finn's world!</h1>
        </div>
      )}
  }
}


export default connect(
  state => {return {loginState: state.loginReducer}}
)(HomePage)
