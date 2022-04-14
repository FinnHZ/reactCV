import React, { Component } from 'react'
import educateCSS from './index.module.css'

export default class EducationItemCOM extends Component {
  render() {
    const  {id, uni, dateMonth, degree, magior} = this.props   //在引入了module.css文件的组件中，如果className的值是一个变量，则需要使用 css名[类变量名] 来动态表示类名
    return (
       <div className={educateCSS[id]}>  
          <table className="table table-striped">
          <tbody>
            <tr>
              <th className={educateCSS.uni}>{uni}</th>
              <th className={educateCSS.dateMonth}>{dateMonth}</th>
            </tr> 
            <tr>
              <td colSpan="2">{degree}</td>
            </tr>
            <tr>
              <td>Main Course:</td>
              <td>{magior}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
