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
  render() {
    // const testboundary = <h2>兜底善后文字</h2>
    return (
      <Fragment>
        <div className={apps.navigateArea}> 
          <div className={apps.navtitle} style={{width:"100%"}}>
            <img src={developerImage} alt="Developer" style={{width:"30%", height:"30%"}}/>

          </div>
          <hr/>
          <div className="nav flex-column nav-pills me-3"  aria-orientation="vertical" style={{width:"100%"}}>
              <MyNavLink to="/HomePage">Home</MyNavLink>
              <MyNavLink to="/BasicInfo">Basic Information</MyNavLink>
              <MyNavLink to="/CoverLetter">Cover Letter</MyNavLink>
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
              <Route path="/BasicInfo" element={<BasicPage/>}/>
              <Route path="/CoverLetter" element={<CoverLetterPage/>}/>
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
