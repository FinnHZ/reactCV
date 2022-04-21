import React, { Component } from 'react'
import * as echarts from 'echarts';
import "./index.css"
import { connect } from 'react-redux'
import { updateDetail } from '../../redux/actions/detailChart_ac';


class SkillsDetailCOM extends Component {
  
  componentDidMount() {
    const detailChartInfo = {
      "Language": {name:"Language", column:["Python", "HTML", "CSS", "JavaScript", "C#"], data:[1,2,3,4,5]},
      "Frameworks/libraries": {name:"Frameworks/libraries", column:["Flask", "jQuery", "react", "Tkinter", "eChart", "Matplotlib"], data:[1,2,3,4,5,6]},
      "Database": {name:"Database", column:["PostgreSQL", "Microsoft SQL server"], data:[1,2]},
      "Tools": {name:"Tools", column:["Jira", "Git/GitHub", "ArcGIS", "Apache"], data:[1,2,3,4]}
    }
  

    console.log(detailChartInfo.Language)
    this.initMap_d(detailChartInfo.Language)  // initial the detail bar chart
    
  }


  initMap_d = (dataDict={name:"", column:[], data:[]}) => {
    let option
    let myChart = echarts.init(document.getElementById('detailChart'));
    option = {
      xAxis: {    
        type: "category",
        data: dataDict.column
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: dataDict.data,
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          }
        }
      ]
    };
    myChart.setOption(option); // 绘制画布
  }



  render() {
    return (
      <div>
        <div id="detailChart" style={{flex: 1, height: '800px', width: '800px'}} ></div>
      </div>
    )
  }
}

export default connect(
  state => {return {detailInfo: state.updateDetailChartReducer }},  //！！！注意这里state的名字是这里才取出来方便调用的，之前reducer里面只负责了初始化，然后操作这个state属性对应的reducer名如果在上述3.3中引入的时候另取了名，则需要使用那个名字，否则就是上面暴露出来的reducer名字
    {updateDetail}
)(SkillsDetailCOM)
