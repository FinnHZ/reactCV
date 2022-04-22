import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import * as echarts from 'echarts';
import "./index.css"

export default class SkillsMainCOM extends Component {

  constructor(props){
    super(props)
    this.state = {distributions_main:this.props.skillsDis, moreDetails_main:this.props.moreSkills}
  }

  componentDidMount() {
    const {distributions_main, moreDetails_main} = this.state
    this.initMap(distributions_main, moreDetails_main)
  }
  
  initMap = (dataArr_dis, detailDataArr) => {
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
            data: dataArr_dis
        }
        ]
    };
    
    myChart.setOption(option); // 绘制画布 or 更新图表

    myChart.on('click', (param) =>  {
        this.publishInfo(detailDataArr[param.name])
    });
  }
    
  publishInfo = (sepcificData) => {
    PubSub.publish('submarker', sepcificData)
  }

  render() {
    return (
        <div id="mainChart" style={{flex: 1, height: '800px', width: '800px'}} ></div>
    )
  }
}
