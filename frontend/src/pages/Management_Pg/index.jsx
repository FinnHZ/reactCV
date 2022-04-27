import React, { Component } from 'react'
import ManageListCOM from '../../components/ManageList_Com'

export default class ManagementPage extends Component {
  state = {modules:[
                   {id:"001", content:"Cover Letter Module", moduleName: "CoverLetter"},
                   {id:"002", content:"Basic Inforamtion Module", moduleName: "BasicInfo"},
                   {id:"003", content:"Education Module", moduleName: "Education"},
                   {id:"004", content:"Skills&Experience Module", moduleName: "Skills"},
                   {id:"005", content:"Collections Module", moduleName: "Collections"},
                  ]
          }



  render() {
    
    const {modules} = this.state
    return (
      <div style={{height:"100%"}}>
        <div style={{ width:"50%", height:"50%", float:"left"}}>
          <h2>Edit Information</h2>
          {modules.map((moduleItem) => {
            return (<ManageListCOM key={moduleItem.id} modules={moduleItem}/>)
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
