import React, { Component } from 'react'
import ExpItemCOM from '../../components/ExpItem_Com'

export default class SmallExpWorkPage extends Component {
  state = {techExp:[{id:"", workCompany:"", workDate:"", workPosition:"", workDescription:[]}]   }

  componentDidMount() {
    const techExpInfo = [    //this information should be taken from background, this is a temporary information
      {
        id:"c0",
        workCompany:"Hongfujin Precision Electronics(Chengdu)Co.,Ltd , China", 
        workDate:"Oct 2013 - July 2014", 
        workPosition:"Automatic Engineer", 
        workDescription:["Be responsible for maintenance for the iPad production line."]
      },
      {
        id:"c1",
        workCompany:"China National Tobacco Corporation , China", 
        workDate:"Aug 2014 - Feb 2018", 
        workPosition:" Management Staff", 
        workDescription:["Be responsible for tobacco product sales work and sales data analysis."]
      },
      {
        id:"c2",
        workCompany:"Trip.com Group , China", 
        workDate:"Mar 2018 - Oct 2019", 
        workPosition:"Product Manager", 
        workDescription:["Be responsible for hotel product development and assist over 100 hotels in analyzing hotel operational data and operating hotels."]
      },
      {
        id:"c3",
        workCompany:"AuCom electronics Ltd , Canterbury", 
        workDate:"July 2021- present", 
        workPosition:"Intern -> Graduate", 
        workDescription:["Be responsible for data upload and background management system developments and machine process system improvement work."]
      }
    ]

    this.setState({techExp: techExpInfo})
  }

  render() {
    const {techExp} = this.state
    return (
      <div>
        {techExp.map((workItem) => {
          return <ExpItemCOM key={workItem.id} {...workItem}/>
        })}
      </div>
    )
  }
}
