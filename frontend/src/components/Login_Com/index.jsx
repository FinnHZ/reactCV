import React, { Component } from 'react'
import {validation} from '../../redux/actions/login_ac'
import { connect } from 'react-redux'

class LoginCOM extends Component {

  sendCode = () => {

  }


  validateCode = () => {
    this.props.validation("abcd");   //////////////////////////////////这里应该先axios通信将用户输入的验证码发到后端，在后端的验证码储存载体里面搜索，如果用户名和验证码正好都有，且能match上，则进行这一步将验证码/用户名添加到前端的redux共享state数组中，并且将Appz中提到的布尔值共享状态改为true(注意这部分的redux还没有做，记得做！！！！)
    console.log(this.props.validateLogin)
  }

  //render waiting for modifying!!!!!!!!!!!!!!!!!!!!!????????????????????????
  render() {
    return (
      <div>
        {/* 完整过程应该是这里click之后，axios通知后端生成一个临时的验证码 在发给用户的同时 也 放到后端的储存载体中（可以是数组，也可以单独建一个文件储存），注意最好是用户名和验证码对应*/}
        <button onClick={this.sendCode}>sendCode</button>   
        
        
        {/* 再有一个button 等用于将收到的验证码输入提交之后，拿来到 验证数组中去寻找，找得到 就 跳转，找不到就等待 */}
        <button onClick={this.validateCode}>validateCode</button>   


      </div>
    )
  }
}


export default connect(
  state => {return {validateLogin: state.loginReducer}},
    {validation}
)(LoginCOM)
