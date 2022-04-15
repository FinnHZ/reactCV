import React, { Component } from 'react'
import ExpItemCSS from './index.module.css'

export default class ExpItemCOM extends Component {
  render() {
    const {id, workCompany, workDate, workPosition, workDescription} = this.props  //  workDescription 应该是一个arr形式的，在excel表中应该是一行里面，一个单元格存一个responsibility
    return (
      <div className={ExpItemCSS[id]}>
        <table className="table table-striped">
          <tbody>
            <tr>
              <th className={ExpItemCSS.workCompany}>{workCompany}</th>
              <th className={ExpItemCSS.workDate}>{workDate}</th>
            </tr> 
            <tr>
              <td colSpan="2">{workPosition}</td>
            </tr>
            <tr>
              <td colSpan="2">
                {workDescription.map((des) => {
                  return <li key={workDescription.indexOf(des)}>{des}</li>
                })}
              </td>
            </tr>
          </tbody>
        </table>


      
      </div>
    )
  }
}
