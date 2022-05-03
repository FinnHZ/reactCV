import React, { Component } from 'react'
import { connect } from 'react-redux'

class ManageEditPage extends Component {


  submitFunc = () => {

  }

  cancelFunc = () => {


  }
  componentDidMount(){
    // thiseditTableItems is the data that should be in the back-end, and we only neet to take one of them according to the this.props.manageState. don't take all of them like below, below is just temporary solution.
    const editTableItems = {"CoverLetter":[ "This is a special cover letter for you. I'm Finn who is from China and a new man for IT. I want to be a full-stack developer, of course, I'm also can do software development if the software is interesting.",
                                           "Actually, I was a Hotel Product Manager of the biggest online travel agency (Trip.com Group) in China 2.5 years ago. However, I want to see a more interesting world, so I come to  New Zealand through a WHV chance. I met some developers in my workplace in New Zealand. I found programming in NZ is a very interesting thing after communicating with them, so I start my IT life with the Master of Applied Computing at Lincoln University.",
                                           "For the past 1.5 years, I have gotten good programming skills and good intern developer experience. The reason why I create this website and looking for a programming job is not only because I just got a Master's degree in Applied Computing from Lincoln University, but also because I like the feeling of creating websites and software. The joy from creating can make me keep moving.",
                                           "I want to create more websites and software that can bring more joy and convenience to people. If that is also what you want, please see more detail about me. If I am the developer you want, please contact me through my e-mail. I would enjoy having the opportunity to discuss more with you and how I could use my skills to benefit our team. I look forward to hearing from you. "
                                          ],
                            "BasicInfo":{name:"Chiyu He", 
                                         preferName:"Finn",
                                         birthday:"Jan 2nd, 1991",
                                         address:"7/35 Buffon St, Waltham, Christchurch",
                                         email:"finn.he0102@gmail.com",
                                         summary:[{id:"s1", content:"Over 50% of courses arrive A grade (4/6). "},
                                                  {id:"s2", content:"3 web projects development experience - full-stack developer (1 simulation + 2 real )."},
                                                  {id:"s3", content:"1 desk application development experience - software developer (tkinter )."},
                                                  {id:"s4", content:"Over half year internship experience."}]
                                        },
                            "Education":[
                                          {
                                            id:"d0",
                                            uni:"Xihua University, China ",
                                            dateMonth:"Sep 2009 - Jun 2013", 
                                            degree:"Bachelor of Engineering (Automation Engineer Technology/Technician)", 
                                            magior:"Advanced Mathematics, Neural Networks(basic), PLC, C++(basic), VB(basic ), Analog electronic circuit, Digital electronic circuit, Circuit principle"
                                          },
                                          {
                                            id:"d1",
                                            uni:"Lincoln University , New Zealand ",
                                            dateMonth:"Nov 2020 - Feb 2022", 
                                            degree:"Master of Computer Applications - MCA", 
                                            magior:"Advanced Programming, Arc GIS, Industry Project, Software Development, Studio Project, Business Analysis"
                                          }
                                        ],
                            "Collections":[["abstract1","type1","address1"], ["abstract2","type2","address2"]]
                          }
    if (this.props.manageState){

    }
    
                        



  }
  




  render() {
    return (
      <div>
        <h1>{this.props.manageState} EDIT PAGE</h1>
        <button onClick = {this.submitFunc}>submit</button>
        <button onClick = {this.cancelFunc}>cancel</button>
      </div>
      
    )
  }
}

export default connect(
  state => {return {manageState: state.changeManageReducer}}
)(ManageEditPage)
