import React, { Component } from 'react'

export default class ManageListCOM extends Component {

  editModuleFunc = (clickInfo) => {
    return () => {
      alert(clickInfo)    // send this info to the back-end to match file we need to edit!!!!????
    }
  }

  render() {
    return (
      <div style={{width:"100%", background:"gray", float:"left"}}>
        <span style={{float:"left"}}>{this.props.moduleName}</span>
        <button style={{float:"right", height:"100%"}} onClick={this.editModuleFunc(this.props.moduleName)}>Edit</button>
        <hr />
      </div>
    )
  }
}
