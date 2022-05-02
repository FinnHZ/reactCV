import React, { Component } from 'react'
import * as echarts from 'echarts';
import "./index.css"
import PubSub from 'pubsub-js'


export default class SkillsDetailCOM extends Component {

  constructor(props){
    super(props)
    this.state = {initialSkills: this.props.currentSkills}
  }
  
  componentWillUnmount() {
    PubSub.unsubscribe(this.chartSub)
  }

  componentDidMount() {
    let detailChart = this.initMap_d(this.state.initialSkills)
    this.chartSub = PubSub.subscribe('submarker', (msg, data)=>{
      console.log("0000000000000qqqqqqqqqqqqqqqqq")
      let option
      option = {
        title : {
          show:true, //显示策略，默认值true,可选为：true（显示） | false（隐藏）
          text: 'Skills Useage Frequnecy -- '+ data[0], //主标题文本，'\n'指定换行
        },
        xAxis: {    
          type: "category",
          data: data[1]
        },
        yAxis: {
          type: 'value'
        },
        label: {
          show: false,
          position: 'top'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '40',
            fontWeight: 'bold',
          },
          itemStyle: {
            color: 'rgba(230, 145, 77)',
          }
        },
        series: [
          {
            data: data[2],
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
    var dom2 = document.getElementById("detailChart");
    //用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    var resizeWorldMapContainer2 = function () {
      dom2.style.width = ((window.innerWidth-500)/2) +'px';
      dom2.style.height =(window.innerHeight-120) +'px';
    };
    //设置容器高宽
    resizeWorldMapContainer2();


    let option
    let myChart = echarts.init(document.getElementById('detailChart'));
    option = {
      title : {
        show:true, //显示策略，默认值true,可选为：true（显示） | false（隐藏）
        text: 'Skills Useage Frequnecy -- '+ dataDetailArr[0], //主标题文本，'\n'指定换行
      },
      xAxis: {    
        type: "category",
        data: dataDetailArr[1]
      },
      yAxis: {
        type: 'value'
      },
      label: {
        show: false,
        position: 'top'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '40',
          fontWeight: 'bold',
        },
        itemStyle: {
          color: 'rgba(230, 145, 77)',
        }
      },
      series: [
        {
          data: dataDetailArr[2],
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
        <div id="detailChart" style={{flex: 1, height: '500px', width: '500px'}} ></div>
      </div>
    )
  }
}

