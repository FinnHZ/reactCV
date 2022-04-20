import React, { Component } from 'react'
import smallWorkExpCSS from './index.module.css'
import { MyNavLink } from '../../components/MyNavLink_Com'
import ExpItemCOM from '../../components/ExpItem_Com'
import { Routes, Route, Navigate } from 'react-router-dom'

export default class SmallExpTechPage extends Component {
  state = {workExp:[{id:"", workCompany:"", workDate:"", workPosition:"", workDescription:[]}], currentPage: 0 }

  componentDidMount() {
    const workExpInfo = [    //this information should be taken from background, this is a temporary information
      {
        id:"k0",
        workCompany:"Lincoln University , Canterbury", 
        workDate:"Mar 2021- Apr 2021", 
        workPosition:"Full-stack developer. - Python, Flask, PostgreSQL, HTML, CSS, Jira, GitHub", 
        workDescription:["A simulation web project for Lincoln University gym management system.",
                        "Get the requirements from simulation customer's interview document.",
                        "Create an information management system with a different access level.",
                        "Features Include class booking, class management, finance management, member information management, and background service(e-mail and notification).", 
                        "Visualize the static data of the CSV file."
                      ]
      },
      {
        id:"k1",
        workCompany:"Lincoln University , Canterbury", 
        workDate:"May 2021 - Jun 2021", 
        workPosition:"Full-stack except database - Python, Flask, PostgreSQL, HTML, CSS, eChart, JavaScript", 
        workDescription:["A data visualization web project for agriculture data.",
                        "Organize the agriculture data and analyze it.",
                        "Visualize the agriculture data from a database.(line chart / bar chart).",
                      ]
      },
      {
        id:"k2",
        workCompany:"AuCom Electronics Ltd , Canterbury", 
        workDate:"Jul 2021 - Oct 2021", 
        workPosition:"Full-stack developer - Python, Flask, Microsoft SQL server, HTML, CSS, jQuery, eChart", 
        workDescription:["Be responsible for hotel product development and assist over 100 hotels in analyzing hotel operational data and operating hotels.",
                        "A data upload and management web system project.",
                        "Features for analyzing the data of a special type file and uploading it into the database.",
                        "Features for monitoring the process of upload and pass rate of the data in the database.",
                        "Features for exporting the data as CSV file.",
                        "Features for analyzing and visualizing the data.",
                        "Deploy the website on the server through Apache."
                        ]
      },
      {
        id:"k3",
        workCompany:"AuCom Electronics Ltd , Canterbury", 
        workDate:"Nov 2021 - Feb 2022", 
        workPosition:" Software developer - Python, Tkinter", 
        workDescription:["A data upload and visualization desk application(software based on Matplsotlib) project.",
                        "Features for analyzing the data and uploading it.",
                        "Features for monitoring and comparing the dynamic temperature data."
                      ]
      },
      {
        id:"k4",
        workCompany:"AuCom Electronics Ltd , Canterbury", 
        workDate:"Feb 2022 - present", 
        workPosition:" Software developer - C#", 
        workDescription:["The features extension for a hardware test software(based on .Net Framework).",
                        "Fix older Bugs.",
                        "Make the process of machine work become automatic from manual."
                      ]
      },
      {
        id:"k5",
        workCompany:"Self-employee , Canterbury", 
        workDate:"Mar 2022 - present", 
        workPosition:" Full-stack developer - Python, Flask, HTML, CSS, react, eChart", 
        workDescription:["Back-end data process",
                        "react front-end build",
                        "Dynamic validation features",
                        "Dynamic charts",
                        "Background management channel"
                      ]
      }
    ]

    this.setState({workExp: workExpInfo})
  }

  changeWork = (data) => {
    return () => {
      const {workExp, currentPage} = this.state
      const maxLength = workExp.length
      if(data === "last" && currentPage > 0){
        this.setState({currentPage: (currentPage - 1)})
      }else if(data === "next" && currentPage < maxLength -1){
        this.setState({currentPage: (currentPage + 1)})
      }else if((data !=="last" && data !=="next") && (currentPage >=0 && currentPage<=maxLength-1)){
        this.setState({currentPage: data})
      }
    }
  }

  render() {
    const {workExp, currentPage} = this.state
    const maxLength = workExp.length
    console.log(currentPage)
    return (
      <div>
        <div className={smallWorkExpCSS.displayArea} >
          <Routes>
            {
              workExp.map((work,index) => {
                return (
                  <Route path={work.id} element={<ExpItemCOM {...work} key={work.id}/>} key={work.id + index.toString()}/>
                )
              })
            }
             <Route path="/" element={<Navigate to="k0" />} />
          </Routes>
        </div>



        <div className={smallWorkExpCSS.navArea} >
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item" onClick={this.changeWork("last")}>
                <MyNavLink className="page-link" to={"k" + ((currentPage>0)?(currentPage-1).toString():currentPage.toString())} aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </MyNavLink>
              </li>

              {
                workExp.map((workInfo, index) => {
                  return <li key={workInfo.id} className="page-item"><MyNavLink className="page-link" to={workInfo.id} onClick={this.changeWork(index)}>{index+1}</MyNavLink></li>
                })
              }

              <li className="page-item" onClick={this.changeWork("next")}>
                <MyNavLink className="page-link" to={"k" + ((currentPage<maxLength-1)?(currentPage+1).toString():currentPage.toString())} aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </MyNavLink>
              </li>
            </ul>
          </nav>
        </div>

      </div>
    )
  }
}
