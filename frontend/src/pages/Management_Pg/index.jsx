import React, { Component } from 'react'
import ManageListCOM from '../../components/ManageList_Com'

export default class ManagementPage extends Component {
  state = {modules:["Cover Letter Module", "Basic Inforamtion Module", "Education Module", "Skills&Experience Module", "Collections Module"]}



  render() {
    const {modules} = this.state
    return (
      <div style={{height:"100%"}}>
        <div style={{ width:"50%", height:"50%", float:"left"}}>
          <h2>Edit Information</h2>
          {modules.map((moduleItem, index) => {
            return (<ManageListCOM key={index} moduleName={moduleItem}/>)
          })}
        </div>
        <div style={{background:"red", width:"50%", height:"50%", float:"right"}}>
        visit calendar
        </div>
        <div style={{background:"yellow", width:"100%", height:"50%", float:"left"}}>
        stay time statistic
        </div>
      </div>
    )
  }
}
