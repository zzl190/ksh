{
    let choseTabs = document.querySelectorAll('.choseTab');
    let showtab = document.querySelectorAll('.showTab');
    //    遍历并设置下标
    choseTabs.forEach(
        (item, index) => item.setAttribute('index', index)
    );
    // 添加事件
    choseTabs.forEach((item) => {
        item.addEventListener('click', function () {
            choseTabs.forEach((item2, index) => {
                item2.classList.remove('active');
                showtab[index].style.display = 'none'
            })
            // item 改为this
            item.classList.add('active');
            showtab[item.getAttribute('index')].style.display = 'block';
        })
    })
}


{
    let myChart = echarts.init(document.querySelector('.pie'));
    let option = {
        // color:[],
        title: {
            // text: '点位分布统计',s
            // textStyle:{

            // },
            // left: 'center'
        },

        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [
            {
                label: {
                    fontSize: 10
                },
                labelLine: {
                    length: 4,
                    length2: 8
                },
                name: '人数统计图',
                type: 'pie',
                radius: ['10%', '70%'],
                center: ['50%', '50%'],
                roseType: 'area',
                itemStyle: {
                    borderRadius: 5
                },
                data: [
                    { value: 20, name: '云南' },
                    { value: 18, name: '北京' },
                    { value: 16, name: '山东' },
                    { value: 14, name: '河北' },
                    { value: 22, name: '江苏' },
                    { value: 20, name: '浙江' },
                    { value: 18, name: '四川' },
                    { value: 36, name: '河南' }
                ]
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener('load', function () {
        myChart.resize();
    })
    window.addEventListener('resize', function () {
        myChart.resize();
    })
}
{
    let myChart = echarts.init(document.querySelector('.bar'));
    let item = {
        value: 1200,
        name: '',
        itemStyle: {
            color: '#333'
        },
        tooltip: {
            extraCssText: 'opacity:0'
        }
    }
    let option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                show: false,
                type: 'none'
            }
        },
        color: [{
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: '#00f8f9' // 0% 处的颜色
            }, {
                offset: 1, color: '#0067cf' // 100% 处的颜色
            }],
            global: false // 缺省为 false
        }],
        xAxis: [
            {
                type: 'category',
                data: ['郑州', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],
                axisTick: {
                    alignWithLabel: false,
                    show: false
                },
                axisLabel: {
                    color: "#71f2fb"
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(0, 240, 255, 0.3)',
                    }
                }

            }
        ],
        grid: {
            left: '0%',
            right: '3%',
            bottom: '3%',
            top: '3%',
            containLabel: true,
            show: true,
            borderColor: 'rgba(0, 240, 255, 0.3)'
        },

        yAxis: [
            {
                type: 'value',
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: "#71f2fb"
                },
                splitLine: {
                    lineStyle: {
                        // 使用深浅的间隔色
                        color: 'rgba(0, 240, 255, 0.3)'
                    }
                }
            }
        ],
        series: [
            {
                barWidth: '60%',
                data: [2100, 1900, 1700, 1560, 1400, item, item, item, 900, 750, 600, 480, 240],
                type: 'bar'
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener('load', function () {
        myChart.resize();
    })
    window.addEventListener('resize', function () {
        myChart.resize();
    })
}
// order 实现动态改变
{
    let order = document.querySelector('.order_title').children;
    let orderdiv = document.querySelector('.order');
    let data = document.querySelectorAll('.ordata');
    order = Array.from(order);  //转换伪数组 
    // console.log( order instanceof Array);
    order.forEach(
        (item, index) => item.setAttribute('index', index)
    );
    data.forEach(
        (item, index) => item.setAttribute('index', index)
    );
    let timer = null;
    let ind = 0;
    timer = setInterval(() => {
        order.forEach((item) => item.classList.remove('active'))
        data.forEach((item) => item.classList.add('chose'))
        order[ind].classList.add('active')
        data[ind].classList.remove('chose')
        ind++
        if (ind >= order.length) {
            ind = 0;
        }
    }, 1000)
    orderdiv.addEventListener('mouseenter', function () {
        clearInterval(timer)
    })
    orderdiv.addEventListener('mouseleave', function () {
        timer = setInterval(() => {
            order.forEach((item) => item.classList.remove('active'))
            data.forEach((item) => item.classList.add('chose'))
            order[ind].classList.add('active')
            data[ind].classList.remove('chose')
            ind++
            if (ind >= order.length) {
                ind = 0;
            }
            order[ind].addEventListener('click', function () {
                ind = this.getAttribute('index')
                order.forEach((item) => item.classList.remove('active'))
                data.forEach((item) => item.classList.add('chose'))
                order[ind].classList.add('active')
                data[ind].classList.remove('chose')
            })
        }, 1000)
    })
}
{

    let myChart = echarts.init(document.querySelector('.sales_line'));
    
    let option = {
        title: {
            subtext: '单位：万',
            subtextStyle: {
                color: '#85d4fb'
            },
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            // ['1月', '3月', '5月', '7月', '9月']
            top: '10%',
            data: ['预期销售额', '实际销售额',],
            textStyle: {
                color: '#fff'
            }

        },
        color: ['#85d4fb', '#ca5143'],
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
            borderColor: '#0f2c4a',
            show: true,
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            alignTicks: false,
            data: ['1月', ' ', '3月', '', '5月', '', '7月', '', '9月', '', '11月', ''],
            axisTick: {
                show: false
            },
        },
        yAxis: {
            type: 'value',
            show: true,
            splitLine: {
                // y分割线
                lineStyle: {
                    color: '#0f2c4a'
                }
            },
            
        },
        series: [
            {
                name: '预期销售额',
                type: 'line',
                smooth: true,
                data: [30, 74, 60, 50, 90, 70, 90, 70, 50, 70, 90, 70]
            },
            {
                name: '实际销售额',
                type: 'line',
                smooth: true,
                data: [60, 74, 70, 80, 70, 60, 60, 80, 40, 60, 80, 90]
            }
        ]
    };
    // option: {
    //     series: [
    //         {
    //             data:data
    //         }, {
    //             data:data
    //         }
    //     ]
    // }=allData[0];
    let allData = [
        {
            series: [
                {
                    data: [30, 74, 60, 50, 90, 70, 90, 70, 50, 70, 90, 70]
                }, {
                    data: [60, 74, 70, 80, 70, 60, 60, 80, 40, 60, 80, 90]
                }
            ]
        },
        {
            series: [
                {
                    data: [40, 64, 50, 50, 80, 20, 40, 50, 30, 60, 80, 60]
                }, {
                    data: [30, 54, 40, 50, 70, 45, 34, 60, 50, 40, 60, 70]
                }
            ]
        },
        {
            series: [
                {
                    data: [60, 74, 70, 80, 70, 60, 60, 80, 40, 60, 80, 90]
                }, {
                    data: [70, 34, 50, 50, 80, 50, 80, 50, 80, 50, 60, 90]
                }
            ]
        },
        {
            series: [
                {
                    data: [60, 74, 60, 50, 50, 80, 60, 70, 50, 70, 90, 70]
                }, {
                    data: [40, 44, 60, 70, 70, 50, 70, 55, 46, 67, 80, 90]
                }
            ]
        },

    ]
    myChart.setOption(option)
    window.addEventListener('load', function () {
        myChart.resize();
    })
    window.addEventListener('resize', function () {
        myChart.resize();
    })
  let alla=  document.querySelector('.sales_title').querySelectorAll('a');
  let alltitle=Array.from(alla)
  alltitle.forEach((item,index)=>item.setAttribute('index',index));
    let timer=null;
    let ind=0;
  timer=setInterval(()=>{
    alltitle.forEach((item,index)=>item.classList.remove('active'));
    alltitle[ind].classList.add('active');
    ind++;
    if(ind>=allData.length){
        ind=0;
    }
    option.series[0].data=allData[ind].series[0].data;
    option.series[1].data=allData[ind].series[1].data;
    myChart.setOption(option)
  },2000)
}
{
    let myChart = echarts.init(document.querySelector('.channel_chart'));
    let option = {
        radar: {
          shape: 'circle',
          center:['50%','50%'],
           zlevel:[1,2,3,4,5],
           splitNumber:4,
          indicator: [
            { name: '机场', max: 100 },
            { name: '地铁', max: 100 },
            { name: '汽车', max: 100 },
            { name: '火车站', max: 100 },
            { name: '商场', max: 100 },
          ],
          // 雷达图文字颜色
          
          axisName:{
            show:true,
            color:'#4c9bfd'
          },
          axisLine:{
           lineStyle:{
             cap:'butt'
           }
          }
        },
        tooltip:{
          show: true,
                  // 控制提示框组件的显示位置
                  position: ['60%', '0%'],
                  backgroundColor: 'rgba(255, 255, 255, 0.3)'
        },
        series: [
          {
                      name: 'Beijing',
                      type: 'radar',
                      lineStyle: {
                          normal: {
                              color: '#fff',
                              // width: 1
                          }
                      },
                      data: [[90, 100, 56, 11, 34]],
                      symbol: 'circle',
                      symbolSize: 5,
                      itemStyle: {
                          color: '#fff'
                      },
                      label: {
                          show: true,
                          color: '#fff',
                          fontSize: 10
                      },
                      areaStyle: {
                          color: 'rgba(238, 197, 102, 0.6)',
                      },
      
      
                  }
        ]
      };
      myChart.setOption(option);
      window.addEventListener('load', function () {
        myChart.resize();
    })
    window.addEventListener('resize', function () {
        myChart.resize();
    })
}
