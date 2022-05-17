import React, { Component } from 'react'
import ManageListCOM from '../../components/ManageList_Com'
import ManageVisitorDetailCOM from '../../components/ManageVisitorDetail_Com'
import ManageVisitHMCOM from '../../components/ManageVisitHM_Com'

export default class ManagementPage extends Component {

  constructor(props){
    super(props)
    const editModules = [
      {id:"001", content:"Cover Letter Module", moduleName: "CoverLetter"},
      {id:"002", content:"Basic Inforamtion Module", moduleName: "BasicInfo"},
      {id:"003", content:"Education Module", moduleName: "Education"},
      {id:"004", content:"Collections Module", moduleName: "Collections"},
     ];
     const visitorsDetail = [                                   // should from back-end 
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
     ];

    const heatMapData = { "2021":[["2021-03-15",50], ["2021-06-17",50]],
                          "2022":[["2022-05-15",10], ["2022-05-17",50]]
                        } // should from back-end 

    const heatMapYearArr = ["2021", "2022"]  // should from back-end 

    this.state = {modules:editModules, visitors:visitorsDetail, visitHeatData:heatMapData, yearList_hm:heatMapYearArr}
  }


  render() {
    const {modules, visitors, visitHeatData, yearList_hm} = this.state
    
    return (
      <div style={{height:"100%"}}>
        <div style={{ width:"50%", height:"50%", float:"left"}}>
          <h2>Edit Information</h2>
          {modules.map((moduleItem) => {
            return (<ManageListCOM key={moduleItem.id} modules={moduleItem}/>)
          })}
        </div>
        <div style={{background:"red", width:"50%", height:"50%", float:"right"}}>
          <ManageVisitorDetailCOM vistdetail={visitors} />
        </div>
        <div style={{background:"yellow", width:"80%", height:"50%", float:"left"}}>
          <ManageVisitHMCOM heatDataArr={visitHeatData} heatYearList={yearList_hm}/>
        </div>
        <div style={{background:"green", width:"20%", height:"50%", float:"left"}}>
        time distribution
        </div>

      </div>
    )
  }
}
