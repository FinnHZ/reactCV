import React, { Component } from 'react'
import { connect } from 'react-redux'
import EditTableCOM from '../../components/EditTable_Com'

class ManageEditPage extends Component {

  state = {editObj:[]}

  submitFunc = () => {

  }

  cancelFunc = () => {


  }
  componentDidMount(){
    // thiseditTableItems is the data that should be in the back-end, and we only neet to take one of them according to the this.props.manageState. don't take all of them like below, below is just temporary solution.
    const editTableItems = {"CoverLetter":[
                                            ["Paragraph_1","This is a special cover letter for you. I'm Finn who is from China and a new man for IT. I want to be a full-stack developer, of course, I'm also can do software development if the software is interesting."],
                                            ["Paragraph_2","Actually, I was a Hotel Product Manager of the biggest online travel agency (Trip.com Group) in China 2.5 years ago. However, I want to see a more interesting world, so I come to  New Zealand through a WHV chance. I met some developers in my workplace in New Zealand. I found programming in NZ is a very interesting thing after communicating with them, so I start my IT life with the Master of Applied Computing at Lincoln University."],
                                            ["Paragraph_3","For the past 1.5 years, I have gotten good programming skills and good intern developer experience. The reason why I create this website and looking for a programming job is not only because I just got a Master's degree in Applied Computing from Lincoln University, but also because I like the feeling of creating websites and software. The joy from creating can make me keep moving."],
                                            ["Paragraph_4","I want to create more websites and software that can bring more joy and convenience to people. If that is also what you want, please see more detail about me. If I am the developer you want, please contact me through my e-mail. I would enjoy having the opportunity to discuss more with you and how I could use my skills to benefit our team. I look forward to hearing from you. "]
                                          ],
                            "BasicInfo":[
                                         ["Name","Chiyu He"], 
                                         ["PreferName","Finn"],
                                         ["Birthday","Jan 2nd, 1991"],
                                         ["Address","7/35 Buffon St, Waltham, Christchurch"],
                                         ["Email","finn.he0102@gmail.com"],
                                         ["Summary_1","Over 50% of courses arrive A grade (4/6). "],
                                         ["Summary_2","3 web projects development experience - full-stack developer (1 simulation + 2 real )."],
                                         ["Summary_3","1 desk application development experience - software developer (tkinter )."],
                                         ["Summary_4","Over half year internship experience."]
                                        ],
                            "Education":[
                                          ["Education_1",""],
                                          ["University","Xihua University, China "],
                                          ["DateMonth","Sep 2009 - Jun 2013"], 
                                          ["Degree","Bachelor of Engineering (Automation Engineer Technology/Technician)"], 
                                          ["Magior","Advanced Mathematics, Neural Networks(basic), PLC, C++(basic), VB(basic ), Analog electronic circuit, Digital electronic circuit, Circuit principle"],
                                          ["Education_2",""],
                                          ["University","Lincoln University , New Zealand "],
                                          ["DateMonth","Nov 2020 - Feb 2022"], 
                                          ["Degree","Master of Computer Applications - MCA"], 
                                          ["Magior","Advanced Programming, Arc GIS, Industry Project, Software Development, Studio Project, Business Analysis"]
                                        ],
                            "Collections":[
                                            ["abstract1","type1","address1"], 
                                            ["abstract2","type2","address2"]
                                          ]
                          }
    this.setState({editObj:editTableItems[this.props.manageState]})

  }
  
  render() {
    const {editObj} = this.state
    return (
      <div>
        <h1>{this.props.manageState} EDIT PAGE</h1>
        <EditTableCOM editObjItem={editObj}/>
        <button onClick = {this.submitFunc}>submit</button>
        <button onClick = {this.cancelFunc}>cancel</button>
      </div>
      
    )
  }
}

export default connect(
  state => {return {manageState: state.changeManageReducer}}
)(ManageEditPage)
