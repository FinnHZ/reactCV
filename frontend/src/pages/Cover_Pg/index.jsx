import React, { Component } from 'react'
import covers from './index.module.css'
import axios from 'axios'

export default class CoverLetterPage extends Component {

  componentDidMount() {
      axios.get("http://127.0.0.1:5000/coverletter").then(
          response => {console.log('successfully', response.data)},
          error => {console.log('Unsuccessfully')}
      )
  }



  render() {
    return (
      <div style={{height:"100%"}}>
        <div className={covers.letterBackground}></div>
      </div>
    )
  }
}
