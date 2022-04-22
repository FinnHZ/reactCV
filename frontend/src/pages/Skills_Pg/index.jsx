import React, { Component } from 'react'
import SkillsDetailCOM from '../../components/SkillsDetail_Com';
import SkillsMainCOM from '../../components/SkillsMain_Com';


// import ReactEcharts from "echarts-for-react";
// import CustomBreadcrumb from '@/components/CustomBreadcrumb'

export default class SkillsPage extends Component {

  constructor(props){
    super(props)
    
    const skillsDistribution = [   // this data should be from the axios data of backend
      { value: 5, name: 'Language' },
      { value: 6, name: 'Frameworks/libraries' },
      { value: 2, name: 'Database' },
      { value: 4, name: 'Tools' }
    ]

    const numOfProjects = 6   // this number should from experience module?
    
    const detailChartInfo = {  // this data should be from the axios data of backend
      "Language": [["Python", "HTML", "CSS", "JavaScript", "C#"], [1,2,3,4,5]],
      "Frameworks/libraries": [["Flask", "jQuery", "react", "Tkinter", "eChart", "Matplotlib"],[1,2,3,4,5,6]],
      "Database": [["PostgreSQL", "Microsoft SQL server"],[1,2]],
      "Tools": [["Jira", "Git/GitHub", "ArcGIS", "Apache"],[1,2,3,4]]
    }

    this.state = {numProjects: numOfProjects, distributions:skillsDistribution, moreDetails:detailChartInfo, currentDetail:detailChartInfo.Language}
  }

  render() {
    const {distributions, moreDetails, numProjects, currentDetail} = this.state
    return (
      <div>
        <SkillsMainCOM skillsDis={distributions} moreSkills={moreDetails}/>
        <h1>Total number of projects: {numProjects}</h1>
        <SkillsDetailCOM currentSkills={currentDetail}/>
      </div>
    )
  }
}

