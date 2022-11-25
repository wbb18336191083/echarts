// 水滴图
(function(){
    var myChart=echarts.init(document.querySelector('.water'))
    var option = {
        
        series: [
            {
                type: 'liquidFill', //水位图
                radius: '80%', //显示比例
                center: ['50%', '50%'], //中心点
                amplitude: 10, //水波振幅
                data: [0.8], // data个数代表波浪数
                color: [
                    {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#446bf5',
                            },
                            {
                                offset: 1,
                                color: '#2ca3e2',
                            },
                        ],
                        globalCoord: false,
                    },
                ], //波浪颜色
                backgroundStyle: {
                    color: {
                        type: "linearGradient",
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 1,
                                color: "rgba(17,65,86,0.64)",
                            },
                            {
                                offset: 0.51,
                                color: "rgba(32,70,84,0)",
                            },
                            {
                                offset: 0,
                                color: "rgba(99,254,254,0.35)",
                            },
                        ],
                        globalCoord: false,
                    },
                },
                label: {
                    //标签设置
                    position: ['50%', '50%'],
                    formatter: '50%', //显示文本,
                    textStyle: {
                        fontSize: '35px', //文本字号,
                        color: '#fff',
                    },
                },
                outline: {
                    // show: false
                    borderDistance: 0,
                    itemStyle: {
                        borderWidth: 2,
                        borderColor: '#112165',
                    },
                },
            },
        ],
    };
myChart.setOption(option);
window.addEventListener('resize',function(){
    myChart.resize();
})
window.addEventListener('load',function(){
    myChart.resize();
})

})()