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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5hbHlzaXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbmFseXNpcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtEQUFpRTtBQUlqRSxTQUFTLFNBQVMsQ0FBQyxNQUFXLEVBQUUsS0FBYSxFQUFHLE1BQWMsRUFBRyxHQUFXO0lBQzFFLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRTtRQUM1QyxLQUFLLEVBQUUsS0FBSztRQUNaLE1BQU0sRUFBRSxNQUFNO1FBQ2QsZ0JBQWdCLEVBQUUsR0FBRztLQUN0QixDQUFDLENBQUM7SUFDSCxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZCLElBQU0sTUFBTSxHQUFHO1FBSWIsT0FBTyxFQUFDLEVBQUU7UUFDVixNQUFNLEVBQUM7WUFDSCxJQUFJLEVBQUMsQ0FBQyxJQUFJLENBQUM7U0FDZDtRQUNELEtBQUssRUFBQztZQUNGLElBQUksRUFBQyxDQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQztTQUM3QjtRQUNELEtBQUssRUFBQyxFQUVMO1FBQ0QsTUFBTSxFQUFDLENBQUM7Z0JBQ0osSUFBSSxFQUFDLElBQUk7Z0JBQ1QsSUFBSSxFQUFDLE1BQU07Z0JBQ1gsSUFBSSxFQUFDLENBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxDQUFDO2FBQ3pCLENBQUM7S0FDSCxDQUFDO0lBQ0YsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4QixPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7QUFHRCxTQUFTLENBQUM7SUFDUixTQUFTLEVBQUU7UUFDVCxPQUFPO1lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ3RCLENBQUM7S0FDRjtJQUNELElBQUksRUFBRTtRQUNKLEVBQUUsRUFBRTtZQUNGLE1BQU0sRUFBRSxTQUFTO1NBQ2xCO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBlY2hhcnRzIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvZWMtY2FudmFzL2VjaGFydHMnO1xuXG4vLyBjb25zdCBlY2hhcnQgPSByZXF1aXJlKCcuLi8uLi8uLi9jb21wb25lbnRzL2VjLWNhbnZhcy9lY2hhcnRzJylcblxuZnVuY3Rpb24gaW5pdENoYXJ0KGNhbnZhczogYW55LCB3aWR0aDogbnVtYmVyICwgaGVpZ2h0OiBudW1iZXIgLCBkcHI6IG51bWJlciApOiBlY2hhcnRzLkVDaGFydHMge1xuICBjb25zdCBjaGFydCA9IGVjaGFydHMuaW5pdChjYW52YXMsIHVuZGVmaW5lZCwge1xuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICBkZXZpY2VQaXhlbFJhdGlvOiBkcHIgLy8g5YOP57SgXG4gIH0pO1xuICBjYW52YXMuc2V0Q2hhcnQoY2hhcnQpO1xuICBjb25zdCBvcHRpb24gPSB7XG4gICAgLy8gdGl0bGU6e1xuICAgIC8vICAgdGV4dDon6LSm5pys5pSv5Ye65puy57q/J1xuICAgIC8vIH0sXG4gICAgdG9vbHRpcDp7fSxcbiAgICBsZWdlbmQ6e1xuICAgICAgICBkYXRhOlsn5pSv5Ye6J11cbiAgICB9LFxuICAgIHhBeGlzOntcbiAgICAgICAgZGF0YTpbXCLlkajkuIBcIixcIuWRqOS6jFwiLFwi5ZGo5LiJXCIsXCLlkajlm5tcIl1cbiAgICB9LFxuICAgIHlBeGlzOntcblxuICAgIH0sXG4gICAgc2VyaWVzOlt7XG4gICAgICAgIG5hbWU6J+aUr+WHuicsXG4gICAgICAgIHR5cGU6J2xpbmUnLFxuICAgICAgICBkYXRhOls1MDAsMjAwLDM2MCwxMDBdXG4gICAgfV1cbiAgfTtcbiAgY2hhcnQuc2V0T3B0aW9uKG9wdGlvbik7XG4gIHJldHVybiBjaGFydDtcbn1cblxuXG5Db21wb25lbnQoe1xuICBsaWZldGltZXM6IHtcbiAgICBjcmVhdGVkKCkge1xuICAgICAgY29uc29sZS5sb2coJ2VjaGFydHMnKVxuICAgICAgY29uc29sZS5sb2coZWNoYXJ0cylcbiAgICB9XG4gIH0sXG4gIGRhdGE6IHtcbiAgICBlYzoge1xuICAgICAgb25Jbml0OiBpbml0Q2hhcnRcbiAgICB9XG4gIH1cbn0pIl19