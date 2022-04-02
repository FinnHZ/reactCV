import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class MyNavLink extends Component {
  render() {
    return (
      <NavLink className="nav-link"  activeclassname="pill" style={{textAlign:"center"}} {...this.props} /> 
    )
  }
}
