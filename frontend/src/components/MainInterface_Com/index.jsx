import React, { Component, Fragment } from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'  //NavLink,
import mains from './index.module.css'
import {MyNavLink} from '../MyNavLink_Com'
import HomePage from '../../pages/Home_Pg'
import BasicPage from '../../pages/Basic_Pg'
import CoverLetterPage from '../../pages/Cover_Pg'
import EducationPage from '../../pages/Education_Pg'
import ExperiencePage from '../../pages/Experience_Pg'
import SkillsPage from '../../pages/Skills_Pg'
import CollectionPage from '../../pages/Collection_pg'
import ManagementPage from '../../pages/Management_Pg'
import developerImage from '../../img/developerImage.jpg'


import { loginChange, logoutChange } from '../../redux/actions/login_ac'
import { validationAdd, validationRemove } from '../../redux/actions/validate_ac'
import { connect } from 'react-redux'


// export default class MainInterfaceCOM extends Component {

//   componentDidMount() {
//     console.log(this.props.loginState, "+++", this.props.validateArr)

//   }


//   toOtherLink = (otherlink) => {
//     return ( ()=>{
//         window.open(otherlink)
//     }) 
//   }

//   render() {
//     return (
//         <Fragment>
//         <div className={mains.navigateArea}> 
//           <div className={mains.navtitle}>
//               <img className={mains.developer} src={developerImage} alt="Developer"/>
//               <div className={mains.develpoerFont}>
//                 Full-Stack Developer <br/> & Software Developer
//               </div>
//               <div className={mains.contact}>
//                 <div>LinkedIn: <button className={mains.linkButton} onClick={this.toOtherLink("https://www.linkedin.com/in/chiyu-he-3b1695232/")}>Click me</button></div>
//                 <div>GitHub:<button className={mains.linkButton}  onClick={this.toOtherLink("https://github.com/FinnHZ")}>Click me</button></div>
//                 <div>E-mail: finn.he0102@gmail.com</div>
//               </div>
//           </div>
//           <hr/>
//           <div className="nav flex-column nav-pills me-3"  aria-orientation="vertical" style={{width:"100%"}}>
//               <MyNavLink to="/HomePage">Home</MyNavLink>
//               <MyNavLink to="/CoverLetter">Cover Letter</MyNavLink>
//               <MyNavLink to="/BasicInfo">Basic Information</MyNavLink>
//               <MyNavLink to="/Education">Education</MyNavLink>
//               <MyNavLink to="/Experience">Experience</MyNavLink>
//               <MyNavLink to="/Skills">Skills & Demo</MyNavLink>
//               <MyNavLink to="/Collection">Collection & Resource</MyNavLink>
//               <MyNavLink to="/Management">Management</MyNavLink>
//           </div>
//         </div>
        
//         {/* {this.state.boundarytest? testboundary:<HomePage/>} */}
//         <div className={mains.displayArea}>
//           <Routes>
//               <Route path="/HomePage" element={<HomePage/>}/>
//               <Route path="/CoverLetter" element={<CoverLetterPage/>}/>
//               <Route path="/BasicInfo" element={<BasicPage/>}/>
//               <Route path="/Education" element={<EducationPage/>}/>
//               <Route path="/Experience" element={<ExperiencePage/>}/>
//               <Route path="/Skills" element={<SkillsPage/>}/>
//               <Route path="/Collection" element={<CollectionPage/>}/>
//               <Route path="/Management" element={<ManagementPage/>}/>
//               <Route path="/" element={<Navigate to="/HomePage" />} />
//           </Routes>
//         </div>
//       </Fragment>
//     )
//   }
// }


class MainInterfaceCOM extends Component {

  componentDidMount() {
    console.log(this.props.loginState, "+++", this.props.validateArr)

  }


  openOtherLink = (otherlink) => {
    return ( ()=>{
        window.open(otherlink)
    }) 
  }

  render() {
    return (
        <Fragment>
        <div className={mains.navigateArea}> 
          <div className={mains.navtitle}>
              <img className={mains.developer} src={developerImage} alt="Developer"/>
              <div className={mains.develpoerFont}>
                Full-Stack Developer <br/> & Software Developer
              </div>
              <div className={mains.contact}>
                <div>LinkedIn: <button className={mains.linkButton} onClick={this.openOtherLink("https://www.linkedin.com/in/chiyu-he-3b1695232/")}>Click me</button></div>
                <div>GitHub:<button className={mains.linkButton}  onClick={this.openOtherLink("https://github.com/FinnHZ")}>Click me</button></div>
                <div>E-mail: finn.he0102@gmail.com</div>
              </div>
          </div>
          <hr/>
          <div className="nav flex-column nav-pills me-3"  aria-orientation="vertical" style={{width:"100%"}}>
              <MyNavLink to="/HomePage">Home</MyNavLink>
              <MyNavLink to="/CoverLetter">Cover Letter</MyNavLink>
              <MyNavLink to="/BasicInfo">Basic Information</MyNavLink>
              <MyNavLink to="/Education">Education</MyNavLink>
              <MyNavLink to="/Experience">Experience</MyNavLink>
              <MyNavLink to="/Skills">Skills & Demo</MyNavLink>
              <MyNavLink to="/Collection">Collection & Resource</MyNavLink>
              <MyNavLink to="/Management">Management</MyNavLink>
          </div>
        </div>
        
        {/* {this.state.boundarytest? testboundary:<HomePage/>} */}
        <div className={mains.displayArea}>
          <Routes>
              <Route path="/HomePage" element={<HomePage/>}/>
              <Route path="/CoverLetter" element={<CoverLetterPage/>}/>
              <Route path="/BasicInfo" element={<BasicPage/>}/>
              <Route path="/Education" element={<EducationPage/>}/>
              <Route path="/Experience" element={<ExperiencePage/>}/>
              <Route path="/Skills" element={<SkillsPage/>}/>
              <Route path="/Collection" element={<CollectionPage/>}/>
              <Route path="/Management" element={<ManagementPage/>}/>
              <Route path="/" element={<Navigate to="/HomePage" />} />
          </Routes>
        </div>
      </Fragment>
    )
  }
}




export default connect(
  state => {return {loginState: state.loginReducer, validateArr: state.validateReducer}},
    {loginChange, logoutChange, validationAdd, validationRemove}
)(MainInterfaceCOM)
