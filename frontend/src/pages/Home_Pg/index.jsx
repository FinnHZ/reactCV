import React, { Component } from 'react'
import homepage from './index.module.css'

export default class HomePage extends Component {
  render() {
    return (
      <h1 className={homepage.title}>Welcome to Finn's world!</h1>
    )
  }
}
