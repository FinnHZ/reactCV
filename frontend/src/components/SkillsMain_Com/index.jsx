import React, { Component } from 'react'
import * as echarts from 'echarts';
import "./index.css"
import { connect } from 'react-redux'
import { updateDetail } from '../../redux/actions/detailChart_ac';



class SkillsMainCOM extends Component {


  state = {detailStore:{}, test:{}}

  componentDidMount() {
    const skillsDistribution = [   // this data should be from the axios data of backend
      { value: 5, name: 'Language' },
      { value: 5, name: 'Frameworks/libraries' },
      { value: 2, name: 'Database' },
      { value: 3, name: 'Tools' }
    ]

    // const detailChartInfo = {
    //   "Language": {name:"Language", column:["Python", "HTML", "CSS", "JavaScript", "C#"], data:[1,2,3,4,5]},
    //   "Frameworks/libraries": {name:"Frameworks/libraries", column:["Flask", "jQuery", "react", "Tkinter", "eChart", "Matplotlib"], data:[1,2,3,4,5,6]},
    //   "Database": {name:"Database", column:["PostgreSQL", "Microsoft SQL server"], data:[1,2]},
    //   "Tools": {name:"Tools", column:["Jira", "Git/GitHub", "ArcGIS", "Apache"], data:[1,2,3,4]}
    // }
  
    
   
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

    });
  }



  render() {
    return (
      <div>
        <div id="mainChart" style={{flex: 1, height: '800px', width: '800px'}} ></div>
      </div>
    )
  }
}


export default connect(
  state => {return {detailInfo: state.updateDetailChartReducer }},  //！！！注意这里state的名字是这里才取出来方便调用的，之前reducer里面只负责了初始化，然后操作这个state属性对应的reducer名如果在上述3.3中引入的时候另取了名，则需要使用那个名字，否则就是上面暴露出来的reducer名字
    {updateDetail}
)(SkillsMainCOM)
