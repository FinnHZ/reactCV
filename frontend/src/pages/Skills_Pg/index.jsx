import React, { Component } from 'react'
import * as echarts from 'echarts';
import "./index.css"

// import ReactEcharts from "echarts-for-react";
// import CustomBreadcrumb from '@/components/CustomBreadcrumb'

export default class SkillsPage extends Component {

  state ={numProjects: 0}

  componentDidMount() {
    const skillsDistribution = [   // this data should be from the axios data of backend
      { value: 5, name: 'Language' },
      { value: 5, name: 'Frameworks/libraries' },
      { value: 2, name: 'Database' },
      { value: 3, name: 'Tools' }
    ]
    
    const numOfProjects = 6
    this.setState({numProjects: numOfProjects})
    
    this.initMap(skillsDistribution) // 初始化图表数据
  }


  initMap = (dataArr) => {
    let option
    let myChart = echarts.init(document.getElementById('mainChart'));
    option = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: 'Skills Distribution',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '40',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: dataArr
        }
      ]
    };
    myChart.setOption(option); // 绘制画布

    myChart.on('click', function (param) {
      console.log(param)
    });
  }



  render() {
    const {numProjects} = this.state
    return (
      <div>
        <div id="mainChart" style={{flex: 1, height: '800px', width: '800px'}} ></div>
        <h1>Total number of projects: {numProjects}</h1>
      </div>
    )
  }
}
