import React, { Component, Fragment } from 'react'
import visitDetailCSS from './index.module.css'

export default class ManageVisitorDetailCOM extends Component {
  

  render() {
    const {vistdetail} = this.props
    return (
      <Fragment>
          <table className={visitDetailCSS.visitTableDislaly}>
              <thead  className={visitDetailCSS.visitTHEAD}><tr className={visitDetailCSS.visitTBodyTr}><th>No.</th><th>Company Name</th><th>Visit Date</th><th>Visit Time</th><th style={{width:"15px"}}></th></tr></thead>{/* <th style={{width:"15px"}}></th>  空单元格用于占位和scrollbar一样宽，方便thead和tbody的对应单元格对齐 */}
              <tbody className={visitDetailCSS.visitTBody}>
                {vistdetail.map((item, index) => {
                  return (
                    <tr key={item.id} className={visitDetailCSS.visitTBodyTr}><td>{index+1}</td><td>{item.companyName}</td><td>{item.visitDate}</td><td>{item.visitTime}</td></tr>
                  )
                })}
              </tbody>
          </table>
      </Fragment>
    )
  }
}
