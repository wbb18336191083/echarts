// 监控点击切换
var closeTab=document.getElementsByClassName('closeTab');
var showTap=document.getElementsByClassName('showTap');
for(var i=0;i<closeTab.length;i++){
    closeTab[i].setAttribute('index',i)
    closeTab[i].onclick=function(){
var index=this.getAttribute('index')
for(var j=0;j<closeTab.length;j++){
    closeTab[j].classList.remove('active')
    closeTab[index].classList.add('active')
}
for(var k=0;k<showTap.length;k++){
    showTap[k].style.display = 'none';
    showTap[index].style.display = 'block';
}
    }
}
// 点位状态分布 饼图
(function(){
    var myChart=echarts.init(document.querySelector('.pie'));
    var option = {
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
        series: [
          {
            name: '点位统计',
            type: 'pie',
            radius: ['10%', '60%'],
            center: ['50%', '50%'],
            roseType: "radius",
            itemStyle: {
              borderRadius: 8
            },
            label:{
                fontSize:10
            },
            labelLine: {
                length: 6,
                length2: 8
              },
            data: [
                { value: 20, name: '云南' },
          { value: 26, name: '北京' },
          { value: 24, name: '山东' },
          { value: 25, name: '河北' },
          { value: 20, name: '江苏' },
          { value: 25, name: '浙江' },
          { value: 30, name: '四川' },
          { value: 42, name: '湖北' }
            ]
          }
        ]
      };
      myChart.setOption(option);
     window.addEventListener('resize',function(){
        myChart.resize()
     });
     window.addEventListener('load',function(){
        myChart.resize()
     })
})();
// 全国用户总量统计 柱形图
(function(){
  var item = {
    name: '',
    value: '1200',
    itemStyle: {
        color: "#254065"
    },
    emphasis:{
      itemStyle: {
        color: "#fff"
    },
    },
    tooltip: {
        extraCssText: 'opacity:0'
    }
}
  var myChart=echarts.init(document.querySelector('.bar'));
  var option = {
   color:{
    
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [{
          offset: 0, color: '#00fffb' // 0% 处的颜色
      }, {
          offset: 1, color: '#0061ce' // 100% 处的颜色
      }],
      global: false // 缺省为 false
    
   },
    tooltip: {
      trigger: 'item',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      top:'3%',
      containLabel: true,
      borderColor: 'rgba(0, 240, 255, 0.3)'
    },
    xAxis: [
      {
        type: 'category',
        data: ['郑州', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          color: "#71f2fb"
      },
      axisLine: {
          lineStyle: {
              color: 'rgba(0, 240, 255, 0.3)'
          }
      },
      axisTick: {
        alignWithLabel: false,
        show: false
    },
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          color: "#71f2fb"
      },
      axisTick:{
          show: false
      },
      axisLine: {
          lineStyle: {
              color: 'rgba(0, 240, 255, 0.3)'
          }
      },
      },
    ],
    series: [
      {
        name: 'Direct',
        type: 'bar',
        barWidth: '60%',
        data: [2100, 1900, 1700, 1560, 1400, item, item, item, 900, 750, 600, 480, 240]      }
       
    ]
   

  };
  myChart.setOption(option);
  window.addEventListener('resize',function(){
    myChart.resize();
  });window.addEventListener('load',function(){
    myChart.resize();
  })

})();
// 订单区域
(function(){
  var index=0
  var timer=null
  var time=document.getElementsByClassName('timeTab');
var data=document.getElementsByClassName('conceal');
for(var i=0; i<time.length;i++){
  time[i].setAttribute('index',i)
  time[i].onclick=function(){
  index=this.getAttribute('index');
    for(var j=0;j<time.length;j++){
      time[j].classList.remove('active_')
      time[index].classList.add('active_')
    }
    for(var k=0;k<data.length;k++){
      data[k].classList.add('dataTab')
      data[index].classList.remove('dataTab')
    }
  }
}
var order=document.getElementsByClassName('order')[0]
function auto(){
  timer=setInterval(function(){
    index++
    if(index>=time.length){
      index=0
    }
    time[index].click();
    },1500)
}
auto()
order.onmouseenter=function(){
  clearInterval(timer)
  }
order.onmouseleave=function(){
  auto(),1500;
}
})();
// 销售额统计 折线图
(function(){
  var data = {
    year: [
        [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
    ],
    quarter: [
        [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
        [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
    ],
    month: [
        [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
        [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
    ],
    week: [
        [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
        [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
    ]
}
  var myChart=echarts.init(document.querySelector('.line_'))
  var option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
          type: 'line'
      }
  },
    color: ['#00f2f1', '#ed3f35'],
    title: {
      text: '单位：万',
      textStyle:{
color:'#4996f5',
fontSize:14,
lineHeight:5,
fontWeight:400
      }
    },
    legend: {
      data: ['预期销售额', '实际销售额'],
      right: '10%',
      textStyle: {
          color: "#4c9bfd"
      },  
      },
    grid: {
      top:'20%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
      borderColor: '#012f4a',
      show: true,
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      axisTick: {
        show: false 
      },
      axisLabel: {
        color: '#4c9bfd'
      },
      axisLine: {
        show: false 
      },
data:data.year[0]       },
    yAxis: {
      type: 'value',
      axisTick: {
        show: false  
      },
      axisLabel: {
        color: '#4c9bfd'
      },
      splitLine: {
        lineStyle: {
          color: '#012f4a' 
        }
      }
    },
    series: [
      {
        name: '预期销售额',
        type: 'line',
        smooth: true,
        data:  [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],      },
      {
        name: '实际销售额',
        type: 'line',
        data: data.year[1],           },
    ]
  };
  myChart.setOption(option);
  //点击切换 年 季 月 周
  var seasonTab=document.getElementsByClassName('seasonTab');
  var index=0
  var timer=null
  for(var i=0;i<seasonTab.length;i++){
    seasonTab[i].setAttribute('index',i)
    seasonTab[i].onclick=function(){
       index=this.getAttribute('index')
      for(var j=0;j<seasonTab.length;j++){
        seasonTab[j].classList.remove('active_')
        seasonTab[index].classList.add('active_')
      }
      var time = this.getAttribute('data-time');
      // console.log(time);
      // console.log(data[time]);  根据时间的数据
      // 修改图表1的数据
      option.series[0].data = data[time][0];
      // 修改图表2的数据
      option.series[1].data = data[time][1];
      //重新调用option
      myChart.setOption(option);

    }
  }
  // 自动切换
  function auto(){
timer=setInterval(function(){
  index++
  if(index>=seasonTab.length){
    index=0
  }
  seasonTab[index].click()
  
},1500)
  }
  auto()
  var broken=document.getElementsByClassName('broken')[0];
  broken.onmouseenter=function(){
    clearInterval(timer)
  }
  broken.onmouseleave=function(){
    auto(),1500
  }
  window.addEventListener('resize',function(){
    myChart.resize();
  });
  window.addEventListener('load',function(){
    myChart.resize();
  })
})();
//渠道分布 雷达图
(function(){
  var myChart=echarts.init(document.querySelector('.radar'))
  const dataBJ = [
    [55, 9, 56, 0.46, 18, 6, 1],
  ];
  var option = {
    radar: {
      center: ['50%', '50%'],
      // 外半径占据容器大小
      radius: '55%',
      indicator: [
        { name: '机场', max: 100 },
        { name: '商场', max: 100 },
        { name: '火车站', max: 100 },
        { name: '汽车站', max: 100 },
        { name: '地铁', max: 100 }
 ], 
      shape: 'circle',
      splitNumber: 4,
      axisName: {
        color: '#4c9bfd' ,
        fontSize:10
           },
      splitLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.5)',
        }
      },
      splitArea: {
        show: false
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.5)'        }
      }
    },
    tooltip: {
      show: true,
      // 控制提示框组件的显示位置
      position: ['60%', '10%'],
  },
    series: [
      {
        name: 'Beijing',
        type: 'radar',
        lineStyle: {
          normal: {
               color: '#fff',
            
          }
 },
 data: [[90, 19, 56, 11, 34]], 
        symbol: 'circle', 
        // 拐点的大小  
        symbolSize: 5, 
        // 小圆点（拐点）设置为白色
        itemStyle: {
               color: '#fff'
        },
        areaStyle: {
          color: 'rgba(238, 197, 102, 0.6)',        },
          label: {
            show: true,
            color: '#fff',
            fontSize: 10
       },    

      }
    ]
  };
  myChart.setOption(option);
  window.addEventListener('resize',function(){
    myChart.resize();
  });
  window.addEventListener('load',function(){
    myChart.resize();
  })
})()