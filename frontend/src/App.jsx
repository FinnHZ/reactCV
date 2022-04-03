import React, { Component,Fragment } from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'  //NavLink,
import apps from './App.module.css'
import {MyNavLink} from './components/MyNavLink_Com'
import HomePage from './pages/Home_Pg'
import BasicPage from './pages/Basic_Pg'
import CoverLetterPage from './pages/Cover_Pg'
import EducationPage from './pages/Education_Pg'
import ExperiencePage from './pages/Experience_Pg'
import SkillsPage from './pages/Skills_Pg'
import CollectionPage from './pages/Collection_pg'
import ManagementPage from './pages/Management_Pg'
import developerImage from './img/developerImage.jpg'

export default class App extends Component {
  // state={boundarytest:''}
  // static getDerivedStateFromError(error){ return {boundarytest: error}}

  state = {}

  toOtherLink = (otherlink) => {
    return ( ()=>{
      window.open(otherlink)
    }) 
  }

  render() {
    // const testboundary = <h2>兜底善后文字</h2>
    return (
      <Fragment>
        <div className={apps.navigateArea}> 
          <div className={apps.navtitle}>
              <img className={apps.developer} src={developerImage} alt="Developer"/>
              <div className={apps.develpoerFont}>
                Full-Stack Developer 
               & Software Developer
              </div>
              <div className={apps.contact}>
                <div>LinkedIn: <button className={apps.linkButton} onClick={this.toOtherLink("https://www.linkedin.com/in/chiyu-he-3b1695232/")}>Click me</button></div>
                <div>GitHub:<button className={apps.linkButton}  onClick={this.toOtherLink("https://github.com/FinnHZ")}>Click me</button></div>
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
        <div className={apps.displayArea}>
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
