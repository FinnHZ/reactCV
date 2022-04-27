import React, { Component } from 'react'  

export default class ManageListCOM extends Component {

  gotoEdit = (moduleFlag) => {

      
      console.log(this.props)
  }
  

  render() {

    return (
      <div style={{width:"100%", background:"gray", float:"left"}}>
        <span style={{float:"left"}}>{this.props.modules.content}</span>
{/* 下面这种用法，是将要导航去的路由组件在这个组件渲染之前的上级组件中就先渲染定位好，然后并不在其渲染同级的地方安排导航，而是分离出导航部分到这里，这是一种特殊用法，可以用于组件间页面跳转使用 */}
        {/* <Link to={`/ManageEditPage/${testNav}`}> 
            <button style={{float:"right", height:"100%"}} >Edit</button>
        </Link> */}
        <button style={{float:"right", height:"100%"}} onClick={() => this.gotoEdit(this.props.modules.moduleName)}>Edit</button>
        <hr />
      </div>
    )
  }
}
