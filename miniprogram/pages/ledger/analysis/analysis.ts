import * as echarts from '../../../components/ec-canvas/echarts';

// const echart = require('../../../components/ec-canvas/echarts')

function initChart(canvas: any, width: number , height: number , dpr: number ): echarts.ECharts {
  const chart = echarts.init(canvas, undefined, {
    width: width,
    height: height,
    devicePixelRatio: dpr // 像素
  });
  canvas.setChart(chart);
  const option = {
    // title:{
    //   text:'账本支出曲线'
    // },
    tooltip:{},
    legend:{
        data:['支出']
    },
    xAxis:{
        data:["周一","周二","周三","周四"]
    },
    yAxis:{

    },
    series:[{
        name:'支出',
        type:'line',
        data:[500,200,360,100]
    }]
  };
  chart.setOption(option);
  return chart;
}


Component({
  lifetimes: {
    created() {
      console.log('echarts')
      console.log(echarts)
    }
  },
  data: {
    ec: {
      onInit: initChart
    }
  }
})