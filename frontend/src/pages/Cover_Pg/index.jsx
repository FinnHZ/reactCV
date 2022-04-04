import React, { Component } from 'react'
import covers from './index.module.css'
// import axios from 'axios'
import moment from 'moment'

export default class CoverLetterPage extends Component {


  
  state = {currentDate:"", companyName:"developer"}

  componentDidMount() {
    // axios.get("http://127.0.0.1:5000/coverletter").then(
    //       response => {console.log('successfully',typeof(response.data), response.data)},
    //       error => {console.log('Unsuccessfully')}
    // )

    const dateDict = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    const currentDate = moment().date().toString() + " " + dateDict[moment().month()] + " " + moment().year().toString()
    this.setState({currentDate})

  }



  render() {
    const {currentDate, companyName} = this.state
    const content_0 = "This is a special cover letter for you. I'm Finn who is from China and a new man for IT. I want to be a full-stack developer, of course, I'm also can do software development if the software is interesting."
    const content_1 = "Actually, I was a Hotel Product Manager of the biggest online travel agency (Trip.com Group) in China 2.5 years ago. However, I want to see a more interesting world, so I come to  New Zealand through a WHV chance. I met some developers in my workplace in New Zealand. I found programming in NZ is a very interesting thing after communicating with them, so I start my IT life with the Master of Applied Computing at Lincoln University."
    const content_2 = "For the past 1.5 years, I have gotten good programming skills and good intern developer experience. The reason why I create this website and looking for a programming job is not only because I just got a Master's degree in Applied Computing from Lincoln University, but also because I like the feeling of creating websites and software. The joy from creating can make me keep moving."
    const content_3 = "I want to create more websites and software that can bring more joy and convenience to people. If that is also what you want, please see more detail about me. If I am the developer you want, please contact me through my e-mail. I would enjoy having the opportunity to discuss more with you and how I could use my skills to benefit our team. I look forward to hearing from you. "


    return (
      <div style={{height:"100%"}}>
        <div className={covers.letterBackground}>
          <div className={covers.currentDate}>{currentDate}</div>
          <div className={covers.letterAsk}>
            <span className={covers.companyName}>Dear {companyName} team,</span>
          </div>
          <div className={covers.letterContent}>{content_0}</div>
          <div className={covers.letterContent}>{content_1}</div>
          <div className={covers.letterContent}>{content_2}</div>
          <div className={covers.letterContent}>{content_3}</div>

          <div className={covers.letterLast}>Best Regards,<br/> Finn</div>
        </div>
      </div>
    )
  }
}
