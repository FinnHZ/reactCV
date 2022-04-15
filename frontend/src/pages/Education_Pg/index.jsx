import React, { Component } from 'react'
import EducationItemCOM from '../../components/EducateItem_Com'

export default class EducationPage extends Component {
  
  state = {educateInfo:[{id:"", startYear:"", endYear:"", degree:"", magior:""}]}

  componentDidMount() {
    let educate_bg = []
    educate_bg = [
      {
        id:"d0",
        uni:"Xihua University, China ",
        dateMonth:"Sep 2009 - Jun 2013", 
        degree:"Bachelor of Engineering (Automation Engineer Technology/Technician)", 
        magior:"Advanced Mathematics, Neural Networks(basic), PLC, C++(basic), VB(basic ), Analog electronic circuit, Digital electronic circuit, Circuit principle"
      },
      {
        id:"d1",
        uni:"Lincoln University , New Zealand ",
        dateMonth:"Nov 2020 - Feb 2022", 
        degree:"Master of Computer Applications - MCA", 
        magior:"Advanced Programming, Arc GIS, Industry Project, Software Development, Studio Project, Business Analysis"
      }
    ]

    this.setState({educateInfo: educate_bg})
  }

  render() {
    const {educateInfo} = this.state
    return (
      <div>
        {educateInfo.map((educate) => {
          return <EducationItemCOM key={educate.id} {...educate} />
        })}
      </div>
    )
  }
}
