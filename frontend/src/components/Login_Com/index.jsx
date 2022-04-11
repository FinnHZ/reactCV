import React, { Component } from 'react'
import { loginChange, logoutChange } from '../../redux/actions/login_ac'
import { validationAdd, validationRemove } from '../../redux/actions/validate_ac'
import { connect } from 'react-redux'

class LoginCOM extends Component {

  sendCode = () => {

  }


  validateCode = () => {
    //axios 发送用户输入的验证码到后端验证，等待后端返回一个布尔值，凭此布尔值判断是否应该改变redux中的共享状态 这里暂时假设这个
    const logoinFlag =  false
    if (logoinFlag === true){
      this.props.validationAdd({"用户名": "验证码"})
      this.props.loginChange("success")
      
    }
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
  state => {return {loginState: state.loginReducer, validateArr: state.validateReducer}},
    {loginChange, logoutChange, validationAdd, validationRemove}
)(LoginCOM)
