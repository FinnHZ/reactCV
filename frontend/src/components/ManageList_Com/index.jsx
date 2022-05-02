import React, { Component } from 'react'  
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {change_manage} from '../../redux/actions/manageTable_ac'

class ManageListCOM extends Component {

  gotoEdit = (moduleFlag) => {
    console.log("rttuyutyuyu")
    this.props.change_manage(moduleFlag)
  }
  

  render() {
    return (
      <div style={{width:"100%", background:"gray", float:"left"}}>
        <span style={{float:"left"}}>{this.props.modules.content}</span>
{/* 下面这种用法，是将要导航去的路由组件在这个组件渲染之前的上级组件中就先渲染定位好，然后并不在其渲染同级的地方安排导航，而是分离出导航部分到这里，这是一种特殊用法，可以用于组件间页面跳转使用 */}
        <Link to="/ManageEditPage"> 
            <button style={{float:"right", height:"100%"}} onClick={() => this.gotoEdit(this.props.modules.moduleName)}>Edit</button>
        </Link>
        {/* <button style={{float:"right", height:"100%"}} onClick={() => this.gotoEdit(this.props.modules.moduleName)}>Edit</button> */}
        <hr />
      </div>
    )
  }
}

export default connect(
  state => {return {manageState: state.changeManageReducer}},
  {change_manage}
)(ManageListCOM)
