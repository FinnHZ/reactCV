import React, { Component} from 'react'
import basicCSS from './index.module.css'

export default class BasicPage extends Component {
  
  state = {basicInfo:{name:"", preferName:"",birthday:"",address:"",email:"",summary:[]}}

  componentDidMount() {
    let info_bg = {}
    //the info_bg should be updated by the data from background through axios
    info_bg = {name:"Chiyu He", 
               preferName:"Finn",
               birthday:"Jan 2nd, 1991",
               address:"7/35 Buffon St, Waltham, Christchurch",
               email:"finn.he0102@gmail.com",
               summary:[{id:"s1", content:"Over 50% of courses arrive A grade (4/6). "},
                        {id:"s2", content:"3 web projects development experience - full-stack developer (1 simulation + 2 real )."},
                        {id:"s3", content:"1 desk application development experience - software developer (tkinter )."},
                        {id:"s4", content:"Over half year internship experience."}]
              }

    this.setState({basicInfo:info_bg})
  }


  render() {
    const {basicInfo} = this.state
    return (
      <div className={basicCSS.tableArea}>
        <table className="table table-striped">
          <tbody>
            <tr>
              <th className={basicCSS.tableHead}>Name:</th>
              <td>{basicInfo.name}</td>
            </tr>
            <tr>
              <th className={basicCSS.tableHead}>Prefer Name:</th>
              <td>{basicInfo.preferName}</td>
            </tr>
            <tr>
              <th className={basicCSS.tableHead}>Birthday:</th>
              <td>{basicInfo.birthday}</td>
            </tr>
            <tr>
              <th className={basicCSS.tableHead}>Address:</th>
              <td>{basicInfo.address}</td>
            </tr>
            <tr>
              <th className={basicCSS.tableHead}>E-mail:</th>
              <td>{basicInfo.email}</td>
            </tr>
            <tr>
              <th className={basicCSS.tableHead}>Summary:</th> 
              <td>
                {basicInfo.summary?.map((item) => {
                  return <li key={item.id}>{item.content}</li>
                })} 
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
