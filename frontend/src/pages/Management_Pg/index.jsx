import React, { Component } from 'react'
import ManageListCOM from '../../components/ManageList_Com'
import ManageVisitorDetailCOM from '../../components/ManageVisitorDetail_Com'

export default class ManagementPage extends Component {
  state = {modules:[
                   {id:"001", content:"Cover Letter Module", moduleName: "CoverLetter"},
                   {id:"002", content:"Basic Inforamtion Module", moduleName: "BasicInfo"},
                   {id:"003", content:"Education Module", moduleName: "Education"},
                   {id:"004", content:"Collections Module", moduleName: "Collections"},
                  ],
           visitors:[
            {id:"v1", companyName:"aaa", visitDate: "2022-05-16", visitTime:"20:00:00"},
            {id:"v2", companyName:"bbb", visitDate: "2022-05-16", visitTime:"20:00:00"},
            {id:"v3", companyName:"ccc", visitDate: "2022-05-16", visitTime:"20:00:00"},
            {id:"v4", companyName:"ddd", visitDate: "2022-05-16", visitTime:"20:00:00"},
            {id:"v5", companyName:"aaa", visitDate: "2022-05-16", visitTime:"20:00:00"},
            {id:"v6", companyName:"bbb", visitDate: "2022-05-16", visitTime:"20:00:00"},
            {id:"v7", companyName:"ccc", visitDate: "2022-05-16", visitTime:"20:00:00"},
            {id:"v8", companyName:"ddd", visitDate: "2022-05-16", visitTime:"20:00:00"},
            {id:"v9", companyName:"aaa", visitDate: "2022-05-16", visitTime:"20:00:00"},
            {id:"v10", companyName:"bbb", visitDate: "2022-05-16", visitTime:"20:00:00"},
            {id:"v11", companyName:"ccc", visitDate: "2022-05-16", visitTime:"20:00:00"},
            {id:"v12", companyName:"ddd", visitDate: "2022-05-16", visitTime:"20:00:00"},
            {id:"v13", companyName:"aaa", visitDate: "2022-05-16", visitTime:"20:00:00"},
            {id:"v14", companyName:"bbb", visitDate: "2022-05-16", visitTime:"20:00:00"},
            {id:"v15", companyName:"ccc", visitDate: "2022-05-16", visitTime:"20:00:00"},
            {id:"v16", companyName:"ddd", visitDate: "2022-05-16", visitTime:"20:00:00"},
            {id:"v17", companyName:"aaa", visitDate: "2022-05-16", visitTime:"20:00:00"},
            {id:"v18", companyName:"bbb", visitDate: "2022-05-16", visitTime:"20:00:00"},
            {id:"v19", companyName:"ccc", visitDate: "2022-05-16", visitTime:"20:00:00"},
            {id:"v20", companyName:"ddd", visitDate:  "2022-05-16", visitTime:"20:00:00"},
           ],
           visitorsCal:{
             2022:[[[1, 123],[2, 123],[3, 123],[4, 123],[5, 123],[6, 123],[7, 123],[8, 123],[9, 123],[10, 123],[11, 123],[12, 123],[13, 123],[14, 123],[15, 123],[16, 123],[17, 123],[18, 123],[19, 123],[20, 123],[21, 123],[22, 123],[23, 123],[24, 123],[25, 123],[26, 123],[27, 123],[28, 123],[29, 123],[30, 123],[31, 123]],
                   [],[],[],[],[],[],[],[],[],[],[]],
             2023:[],
             2024:[],
           }
          }



  render() {
    
    const {modules, visitors} = this.state
    return (
      <div style={{height:"100%"}}>
        <div style={{ width:"50%", height:"50%", float:"left"}}>
          <h2>Edit Information</h2>
          {modules.map((moduleItem) => {
            return (<ManageListCOM key={moduleItem.id} modules={moduleItem}/>)
          })}
        </div>
        <div style={{background:"red", width:"50%", height:"50%", float:"right"}}>
          <ManageVisitorDetailCOM vistdetail= {visitors} />
        </div>
        <div style={{background:"yellow", width:"80%", height:"50%", float:"left"}}>
        heatmap calendar
        </div>
        <div style={{background:"green", width:"20%", height:"50%", float:"left"}}>
        time distribution
        </div>

      </div>
    )
  }
}
