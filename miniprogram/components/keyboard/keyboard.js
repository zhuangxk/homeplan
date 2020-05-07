"use strict";
Component({
    options: {
        styleIsolation: 'apply-shared'
    },
    data: {
        remark: '',
        date: '',
        typing: false
    },
    methods: {
        onRemarkFocus: function (e) {
            console.log(e);
            this.setData({
                typing: true
            });
        },
        onRemarkBlur: function (e) {
            var value = e.detail.value;
            this.setData({
                typing: false,
                remark: value
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5Ym9hcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJrZXlib2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsU0FBUyxDQUFDO0lBQ1IsT0FBTyxFQUFFO1FBQ1AsY0FBYyxFQUFFLGNBQWM7S0FDL0I7SUFDRCxJQUFJLEVBQUU7UUFDSixNQUFNLEVBQUUsRUFBRTtRQUNWLElBQUksRUFBRSxFQUFFO1FBQ1IsTUFBTSxFQUFFLEtBQUs7S0FDZDtJQUNELE9BQU8sRUFBRTtRQU1QLGFBQWEsRUFBYixVQUFjLENBQU07WUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNkLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsTUFBTSxFQUFFLElBQUk7YUFDYixDQUFDLENBQUE7UUFDSixDQUFDO1FBQ0QsWUFBWSxFQUFaLFVBQWEsQ0FBTTtZQUNqQixJQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQTtZQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLE1BQU0sRUFBRSxLQUFLO2dCQUNiLE1BQU0sRUFBRSxLQUFLO2FBQ2QsQ0FBQyxDQUFBO1FBQ0osQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbkNvbXBvbmVudCh7XHJcbiAgb3B0aW9uczoge1xyXG4gICAgc3R5bGVJc29sYXRpb246ICdhcHBseS1zaGFyZWQnXHJcbiAgfSxcclxuICBkYXRhOiB7XHJcbiAgICByZW1hcms6ICcnLFxyXG4gICAgZGF0ZTogJycsXHJcbiAgICB0eXBpbmc6IGZhbHNlXHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICAvLyBvblJlbWFya1RhcCgpOiB2b2lkIHtcclxuICAgIC8vICAgdGhpcy5zZXREYXRhKHtcclxuICAgIC8vICAgICB0eXBpbmc6IHRydWVcclxuICAgIC8vICAgfSlcclxuICAgIC8vIH0sXHJcbiAgICBvblJlbWFya0ZvY3VzKGU6IGFueSk6IHZvaWQge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHR5cGluZzogdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIG9uUmVtYXJrQmx1cihlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgY29uc3QgdmFsdWUgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHR5cGluZzogZmFsc2UsXHJcbiAgICAgICAgcmVtYXJrOiB2YWx1ZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxufSkiXX0=