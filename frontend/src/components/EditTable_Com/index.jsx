import React, { Component } from 'react'
import EditTableItemCOM from '../EditTableItem_Com'


export default class EditTableCOM extends Component {
  render() {
    const {editObjItem} = this.props
    // we can make any whitespace between labels when we render a table component
    return (
        <table><tbody>{(editObjItem?editObjItem:[]).map((it, index) => {return <EditTableItemCOM key={index} ei={it}/>})}</tbody></table> 
    ) 
  }
}
