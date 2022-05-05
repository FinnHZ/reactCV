import React, { Component, Fragment } from 'react'

export default class EditTableItemCOM extends Component {
  render() {
    const {ei} = this.props
    return (//* there should not be whitespce between labels
      <Fragment><tr>{ei.map((e, index) => {if(index === 0){
                return(<th key={index}>{e}</th>)
            }else{
                if(e === ""){
                    return(<td key={index}></td>)
                }else{
                    return(<td key={index}><input defaultValue={e}/></td>)
                }
            }
          })}</tr></Fragment>
    )
  }
}
