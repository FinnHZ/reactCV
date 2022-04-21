import React, { Component } from 'react'
import SkillsMainCOM from '../../components/SkillsMain_Com';
import SkillsDetailCOM from '../../components/SkillsDetail_Com';


// import ReactEcharts from "echarts-for-react";
// import CustomBreadcrumb from '@/components/CustomBreadcrumb'

export default class SkillsPage extends Component {

  state ={numProjects: 0}

  componentDidMount() {
    const numOfProjects = 6   // this number should from experience module?
    this.setState({numProjects: numOfProjects})

  }


  render() {
    const {numProjects} = this.state
    return (
      <div>
        <SkillsMainCOM/>
        <h1>Total number of projects: {numProjects}</h1>
        <SkillsDetailCOM />
      </div>
    )
  }
}
