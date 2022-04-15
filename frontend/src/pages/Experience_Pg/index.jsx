import React, { Component } from 'react'
import { MyNavLink } from '../../components/MyNavLink_Com'
import { Route, Routes, Navigate } from 'react-router-dom'
import experienceCSS from './index.module.css'
import SmallExpTechPage from '../SmallExpTech_Pg'
import SmallExpWorkPage from '../SmallExpWork_Pg'


export default class ExperiencePage extends Component {
  render() {
    return (
      <div>
        <div className="nav nav-tabs">
          <MyNavLink to="techExp" style={{width:"50%", textAlign:"center", fontSize:"1.5em"}}>PROFESSIONAL EXPERIENCE</MyNavLink>
          <MyNavLink to="workExp" style={{width:"50%", textAlign:"center", fontSize:"1.5em"}}>WORK EXPERIENCE</MyNavLink>
        </div>

        <div className={experienceCSS.display}>
          <Routes>
            <Route path="techExp/*" element={<SmallExpTechPage />} />
            <Route path="workExp/*" element={<SmallExpWorkPage />} />
            <Route path="/" element={<Navigate to="techExp" />} />
          </Routes>
        </div>




      </div>
    )
  }
}
