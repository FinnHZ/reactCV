import React, { Component } from 'react'
import { Link, Route, Routes, Navigate } from 'react-router-dom'
import Test from '../../pages/Test_Com'

export default class NavigateCom extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/test">Navbar</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/test">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/test">Link</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="/test"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" to="/test">Action</Link></li>
                    <li><Link className="dropdown-item" to="/test">Another action</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="/test">Something else here</Link></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link disabled" to="/test" >Disabled</Link>
                </li>
              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/test" element={<Test/>}/>
          <Route path="/test" element={<Test/>}/>
          <Route path="/test" element={<Test/>}/>
          <Route path="/test" element={<Test/>}/>
          <Route path="/test" element={<Test/>}/>
          <Route path="/test" element={<Test/>}/>
          <Route path="/test" element={<Test/>}/>
          <Route path="/" element={<Navigate to="/默认展示路由路径" />} />
        </Routes>

      </div>
    )
  }
}
