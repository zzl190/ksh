let chart=echarts.init(document.querySelector('.circle'));
let option = {
    title: [{
      text: '综合评分',
      x: 'center',
      y: '58%',
      textStyle: {
        fontSize: 12,
        color: '#fff',
      },
    }],
    series: [{
      type: 'liquidFill',
      radius: '100%',
      center: ['50%', '50%'],
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
              color: '#1EE7E7',
            },
            {
              offset: 1,
              color: '#1890FF',
            },
          ],
          globalCoord: false,
        },
      ],
      data: [0.3, 0.3], // data个数代表波浪数
      backgroundStyle: {
        borderWidth: 1,
        color: '#84daeb',
      },
      label: {
        normal: {
          textStyle: {
            fontSize: 18,
            fontWeight: 'bold',
            color: '#fff',
          },
        },
      },
      outline: {
        borderDistance: 0,
        itemStyle: {
          borderWidth: 4,
          borderColor: 'transparent',
        },
      },
    }],
  };
  
  chart.setOption(option)
  window.addEventListener('load',function(){
    chart.resize();
  })
  window.addEventListener('resize',function(){
    chart.resize();
  })