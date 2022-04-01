import React, { Component,Fragment } from 'react'
// import apps from './App.module.css'
import NavigateCom from './components/Navigate_Com/index'

export default class App extends Component {
  state={boundarytest:''}

  static getDerivedStateFromError(error){ return {boundarytest: error}}

  render() {
    const testboundary = <h2>兜底善后文字</h2>

    return (
      <Fragment>
        {/* <div className={apps.navigateArea}> </div>*/}
        {this.state.boundarytest? testboundary:<NavigateCom/>}
          
          {/* <NavigateCom /> */}
        
        {/* <div className={apps.displayArea}></div> */}
      </Fragment>
    )
  }
}
