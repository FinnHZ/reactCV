import React, { Component } from 'react'
import apps from './App.module.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className={apps.navigateArea}></div>
        <div className={apps.displayArea}></div>
      </div>
    )
  }
}
