import React, { Component } from 'react'
import * as echarts from 'echarts';
import "./index.css"
import PubSub from 'pubsub-js'


export default class SkillsDetailCOM extends Component {

  constructor(props){
    super(props)
    this.state = {initialSkills: this.props.currentSkills}
  }
  
  componentDidMount() {
    let detailChart = this.initMap_d(this.state.initialSkills)
    PubSub.subscribe('submarker', (msg, data)=>{
      let option
      option = {
        xAxis: {    
          type: "category",
          data: data[0]
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: data[1],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            }
          }
        ]
      };
      detailChart.setOption(option)
    })
  }

  initMap_d = (dataDetailArr) => {
    let option
    let myChart = echarts.init(document.getElementById('detailChart'));
    option = {
      xAxis: {    
        type: "category",
        data: dataDetailArr[0]
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: dataDetailArr[1],
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          }
        }
      ]
    };
    myChart.setOption(option); // 绘制画布
    return myChart
  }

  render() {
    return (
      <div>
        <div id="detailChart" style={{flex: 1, height: '800px', width: '800px'}} ></div>
      </div>
    )
  }
}

