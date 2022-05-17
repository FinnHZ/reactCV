import React, { Component, Fragment } from 'react'
import * as echarts from 'echarts';

export default class ManageVisitHMCOM extends Component {

  constructor(props){
    super(props)
    let currentDate = new Date();
    let cYear = currentDate.getFullYear().toString();
    this.state = {currentYear:cYear, dataArr_hm:this.props.heatDataArr, selfChart:''}  // use a state to store the echart instance, that is convenient for update chart
  }


  componentDidMount() {
    const {currentYear, dataArr_hm} = this.state
    let chartVar = this.initMap_hm(currentYear, dataArr_hm[currentYear])
    this.setState({selfChart:chartVar})
  }


  initMap_hm = (dataYear, heatDataArr) => {
    let dom_hm = document.getElementById("heatMapChart");
    //用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    let resizeWorldMapContainer_hm = function () {
        dom_hm.style.width = ((window.innerWidth-200)*0.7) +'px';
        dom_hm.style.height =(window.innerHeight*0.4) +'px';
    };
    //设置容器高宽
    resizeWorldMapContainer_hm();
    let option
    let myChart_hm = echarts.init(document.getElementById('heatMapChart'));
    option = {
        title: {
          top: 30,
          left: 'center',
          text: 'The number of Visitors --' + dataYear
        },
        tooltip: {},
        visualMap: {
          min: 0,
          max: 100,
          type: 'piecewise',
          orient: 'horizontal',
          left: 'center',
          top: 65
        },
        calendar: {
          top: 120,
          left: 30,
          right: 30,
          cellSize: ['auto', 25],
          range: dataYear,
          itemStyle: {
            borderWidth: 0.5
          },
          yearLabel: { show: false }
        },
        series: {
          type: 'heatmap',
          coordinateSystem: 'calendar',
          data: heatDataArr,
        }
      };
      myChart_hm.setOption(option); // 绘制画布
    return myChart_hm
  }

  yearChange =(e) => { // 选择
    const {dataArr_hm, selfChart} = this.state
    const newYear = e.target.value
    let option
    option = {                                  // we just need to give a new option and then use the chartname.setOption(option) when we want to update the chart
        title: {
          top: 30,
          left: 'center',
          text: 'The number of Visitors --' + newYear
        },
        tooltip: {},
        visualMap: {
          min: 0,
          max: 100,
          type: 'piecewise',
          orient: 'horizontal',
          left: 'center',
          top: 65
        },
        calendar: {
          top: 120,
          left: 30,
          right: 30,
          cellSize: ['auto', 25],
          range: newYear,
          itemStyle: {
            borderWidth: 0.5
          },
          yearLabel: { show: false }
        },
        series: {
          type: 'heatmap',
          coordinateSystem: 'calendar',
          data: dataArr_hm[newYear],
        }
      };
      selfChart.setOption(option); // we just need to give a new option and then use the chartname.setOption(option) when we want to update the chart
  }


  render() {
    const {heatYearList} = this.props
    const {currentYear} =  this.state
    return (
        <Fragment>
          <select onChange={this.yearChange} defaultValue={currentYear}>   {/* 注意 defaultvalue 是设置在select里面，不是在 option里面的  */}
            {heatYearList.map((item, index) => {
                return (<option key={index} value={item}>{item}</option>)
            })}
          </select>
          <div id="heatMapChart" style={{flex: 1, height: '500px', width: '500px', margin:"5% 0 0 2%"}} ></div>
        </Fragment>
    )
  }
}
