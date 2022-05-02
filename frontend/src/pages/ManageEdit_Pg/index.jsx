import React, { Component } from 'react'
import { connect } from 'react-redux'

class ManageEditPage extends Component {


  submitFunc = () => {

  }

  cancelFunc = () => {


  }
  componentDidMount(){
    console.log("successful", this.props.manageState)
  }
  




  render() {
    return (
      <div>
        <h1>{this.props.manageState}</h1>
        <button onClick = {this.submitFunc}>submit</button>
        <button onClick = {this.cancelFunc}>cancel</button>
      </div>
      
    )
  }
}

export default connect(
  state => {return {manageState: state.changeManageReducer}}
)(ManageEditPage)
