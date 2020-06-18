"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var echarts = require("../../../components/ec-canvas/echarts");
function initChart(canvas, width, height, dpr) {
    var chart = echarts.init(canvas, undefined, {
        width: width,
        height: height,
        devicePixelRatio: dpr
    });
    canvas.setChart(chart);
    var option = {
        tooltip: {},
        legend: {
            data: ['支出']
        },
        xAxis: {
            data: ["周一", "周二", "周三", "周四"]
        },
        yAxis: {},
        series: [{
                name: '支出',
                type: 'line',
                data: [500, 200, 360, 100]
            }]
    };
    chart.setOption(option);
    return chart;
}
Component({
    lifetimes: {
        created: function () {
            console.log('echarts');
            console.log(echarts);
        }
    },
    data: {
        ec: {
            onInit: initChart
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5hbHlzaXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbmFseXNpcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtEQUFpRTtBQUlqRSxTQUFTLFNBQVMsQ0FBQyxNQUFXLEVBQUUsS0FBYSxFQUFHLE1BQWMsRUFBRyxHQUFXO0lBQzFFLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRTtRQUM1QyxLQUFLLEVBQUUsS0FBSztRQUNaLE1BQU0sRUFBRSxNQUFNO1FBQ2QsZ0JBQWdCLEVBQUUsR0FBRztLQUN0QixDQUFDLENBQUM7SUFDSCxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZCLElBQU0sTUFBTSxHQUFHO1FBSWIsT0FBTyxFQUFDLEVBQUU7UUFDVixNQUFNLEVBQUM7WUFDSCxJQUFJLEVBQUMsQ0FBQyxJQUFJLENBQUM7U0FDZDtRQUNELEtBQUssRUFBQztZQUNGLElBQUksRUFBQyxDQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQztTQUM3QjtRQUNELEtBQUssRUFBQyxFQUVMO1FBQ0QsTUFBTSxFQUFDLENBQUM7Z0JBQ0osSUFBSSxFQUFDLElBQUk7Z0JBQ1QsSUFBSSxFQUFDLE1BQU07Z0JBQ1gsSUFBSSxFQUFDLENBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxDQUFDO2FBQ3pCLENBQUM7S0FDSCxDQUFDO0lBQ0YsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4QixPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7QUFHRCxTQUFTLENBQUM7SUFDUixTQUFTLEVBQUU7UUFDVCxPQUFPO1lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ3RCLENBQUM7S0FDRjtJQUNELElBQUksRUFBRTtRQUNKLEVBQUUsRUFBRTtZQUNGLE1BQU0sRUFBRSxTQUFTO1NBQ2xCO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBlY2hhcnRzIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvZWMtY2FudmFzL2VjaGFydHMnO1xyXG5cclxuLy8gY29uc3QgZWNoYXJ0ID0gcmVxdWlyZSgnLi4vLi4vLi4vY29tcG9uZW50cy9lYy1jYW52YXMvZWNoYXJ0cycpXHJcblxyXG5mdW5jdGlvbiBpbml0Q2hhcnQoY2FudmFzOiBhbnksIHdpZHRoOiBudW1iZXIgLCBoZWlnaHQ6IG51bWJlciAsIGRwcjogbnVtYmVyICk6IGVjaGFydHMuRUNoYXJ0cyB7XHJcbiAgY29uc3QgY2hhcnQgPSBlY2hhcnRzLmluaXQoY2FudmFzLCB1bmRlZmluZWQsIHtcclxuICAgIHdpZHRoOiB3aWR0aCxcclxuICAgIGhlaWdodDogaGVpZ2h0LFxyXG4gICAgZGV2aWNlUGl4ZWxSYXRpbzogZHByIC8vIOWDj+e0oFxyXG4gIH0pO1xyXG4gIGNhbnZhcy5zZXRDaGFydChjaGFydCk7XHJcbiAgY29uc3Qgb3B0aW9uID0ge1xyXG4gICAgLy8gdGl0bGU6e1xyXG4gICAgLy8gICB0ZXh0OifotKbmnKzmlK/lh7rmm7Lnur8nXHJcbiAgICAvLyB9LFxyXG4gICAgdG9vbHRpcDp7fSxcclxuICAgIGxlZ2VuZDp7XHJcbiAgICAgICAgZGF0YTpbJ+aUr+WHuiddXHJcbiAgICB9LFxyXG4gICAgeEF4aXM6e1xyXG4gICAgICAgIGRhdGE6W1wi5ZGo5LiAXCIsXCLlkajkuoxcIixcIuWRqOS4iVwiLFwi5ZGo5ZubXCJdXHJcbiAgICB9LFxyXG4gICAgeUF4aXM6e1xyXG5cclxuICAgIH0sXHJcbiAgICBzZXJpZXM6W3tcclxuICAgICAgICBuYW1lOifmlK/lh7onLFxyXG4gICAgICAgIHR5cGU6J2xpbmUnLFxyXG4gICAgICAgIGRhdGE6WzUwMCwyMDAsMzYwLDEwMF1cclxuICAgIH1dXHJcbiAgfTtcclxuICBjaGFydC5zZXRPcHRpb24ob3B0aW9uKTtcclxuICByZXR1cm4gY2hhcnQ7XHJcbn1cclxuXHJcblxyXG5Db21wb25lbnQoe1xyXG4gIGxpZmV0aW1lczoge1xyXG4gICAgY3JlYXRlZCgpIHtcclxuICAgICAgY29uc29sZS5sb2coJ2VjaGFydHMnKVxyXG4gICAgICBjb25zb2xlLmxvZyhlY2hhcnRzKVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZGF0YToge1xyXG4gICAgZWM6IHtcclxuICAgICAgb25Jbml0OiBpbml0Q2hhcnRcclxuICAgIH1cclxuICB9XHJcbn0pIl19