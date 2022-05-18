import React, { Component, Fragment } from 'react'
import * as echarts from 'echarts';

export default class ManageVisitBBCOM extends Component {

  constructor(props){
    super(props)
    let currentDate = new Date();
    let cYear = currentDate.getFullYear().toString();
    this.state = {currentYear:cYear, dataDict_bb:this.props.bubbleData_bb, bbChart:''}  // use a state to store the echart instance, that is convenient for update chart
  }


  componentDidMount() {
    const {currentYear, dataDict_bb} = this.state
    const bubbleDataArr = dataDict_bb[currentYear]
    let chartVar_bb = this.init_BB(bubbleDataArr)
    this.setState({bbChart:chartVar_bb})
  }


  init_BB = (bubbleData) => {
    let dom_bb = document.getElementById("bubbleChart");
    //用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    let resizeWorldMapContainer_bb = function () {
        dom_bb.style.width = ((window.innerWidth-500)*0.55) +'px';
        dom_bb.style.height =(window.innerHeight*0.55) +'px';
    };
    //设置容器高宽
    resizeWorldMapContainer_bb();
    
    const hours = [
        '12a', '1a', '2a', '3a', '4a', '5a', '6a',
        '7a', '8a', '9a', '10a', '11a',
        '12p', '1p', '2p', '3p', '4p', '5p',
        '6p', '7p', '8p', '9p', '10p', '11p'
    ];
    // prettier-ignore
    const days = [
        'Saturday', 'Friday', 'Thursday',
        'Wednesday', 'Tuesday', 'Monday', 'Sunday'
    ];



    let option_bb
    let myChart_bb = echarts.init(document.getElementById('bubbleChart'));
    option_bb = {
        title: {
          text: 'Visit Time Distribution'
        },
        legend: {
          data: ['Visitors'],
          left: 'right'
        },
        polar: {},
        tooltip: {
          formatter: function (params) {
            return (
              params.value[2] +
              ' commits in ' +
              hours[params.value[1]] +
              ' of ' +
              days[params.value[0]]
            );
          }
        },
        angleAxis: {
          type: 'category',
          data: hours,
          boundaryGap: false,
          splitLine: {
            show: true
          },
          axisLine: {
            show: false
          }
        },
        radiusAxis: {
          type: 'category',
          data: days,
          axisLine: {
            show: false
          },
          axisLabel: {
            rotate: 45
          }
        },
        series: [
          {
            name: 'Visitors',
            type: 'scatter',
            coordinateSystem: 'polar',
            symbolSize: function (val) {
              return val[2] * 2;
            },
            data: bubbleData,
            animationDelay: function (idx) {
              return idx * 5;
            }
          }
        ]
      };
      
      option_bb && myChart_bb.setOption(option_bb);
    return myChart_bb
  }



  yearChange_bb =(e) => { // 选择
    const {dataDict_bb, bbChart} = this.state
    const newYearData_bb = dataDict_bb[e.target.value]


    const hours = [
        '12a', '1a', '2a', '3a', '4a', '5a', '6a',
        '7a', '8a', '9a', '10a', '11a',
        '12p', '1p', '2p', '3p', '4p', '5p',
        '6p', '7p', '8p', '9p', '10p', '11p'
    ];
    // prettier-ignore
    const days = [
        'Saturday', 'Friday', 'Thursday',
        'Wednesday', 'Tuesday', 'Monday', 'Sunday'
    ];

    let option_bb
    option_bb = {
        title: {
            text: 'Visit Time Distribution'
          },
        legend: {
            data: ['Visitors'],
            left: 'right'
        },
        polar: {},
        tooltip: {
          formatter: function (params) {
            return (
              params.value[2] +
              ' commits in ' +
              hours[params.value[1]] +
              ' of ' +
              days[params.value[0]]
            );
          }
        },
        angleAxis: {
          type: 'category',
          data: hours,
          boundaryGap: false,
          splitLine: {
            show: true
          },
          axisLine: {
            show: false
          }
        },
        radiusAxis: {
          type: 'category',
          data: days,
          axisLine: {
            show: false
          },
          axisLabel: {
            rotate: 45
          }
        },
        series: [
          {
            name: 'Visitors',
            type: 'scatter',
            coordinateSystem: 'polar',
            symbolSize: function (val) {
              return val[2] * 2;
            },
            data: newYearData_bb,
            animationDelay: function (idx) {
              return idx * 5;
            }
          }
        ]
      };
      
      option_bb && bbChart.setOption(option_bb); // we just need to give a new option and then use the chartname.setOption(option) when we want to update the chart
  }


  render() {
    const {currentYear, dataDict_bb} =  this.state
    const yearList = Object.keys(dataDict_bb)
    return (
        <Fragment>
          <select onChange={this.yearChange_bb} defaultValue={currentYear}>   {/* 注意 defaultvalue 是设置在select里面，不是在 option里面的  */}
            {yearList.map((item, index) => {
                return (<option key={index} value={item}>{item}</option>)
            })}
          </select> 
          {/* <span style={{fontSize:25, margin:"2% 0 0 5%", fontWeight:700,background:"gray" }}>Visit Time Distribution</span> */}
          <div id="bubbleChart" style={{flex: 1, height: '500px', width: '500px'}} ></div>
        </Fragment>
    )
  }
}
