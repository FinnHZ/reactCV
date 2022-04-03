import React, { Component } from 'react'
import covers from './index.module.css'
// import axios from 'axios'
import moment from 'moment'

export default class CoverLetterPage extends Component {

  // componentDidMount() {
  //     axios.get("http://127.0.0.1:5000/coverletter").then(
  //         response => {console.log('successfully', response.data)},
  //         error => {console.log('Unsuccessfully')}
  //     )
  // }
  
  state = {currentDate:''}

  componentDidMount() {
    const dateDict = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    const currentDate = moment().date().toString() + " " + dateDict[moment().month()] + " " + moment().year().toString()
    this.setState({currentDate})
  }



  render() {
    const {currentDate} = this.state
    return (
      <div style={{height:"100%"}}>
        <div className={covers.letterBackground}>
          <div className={covers.currentDate}>{currentDate}</div>
          <div className={covers.letterAsk}>
            Dear <div className={covers.companyName}></div>
          </div>
          <div className={covers.letterContent}></div>
          <div className={covers.letterLast}>
            Best Regards,
              Finn
          </div>
        </div>
      </div>
    )
  }
}
