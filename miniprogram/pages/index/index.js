"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Page({
    data: {
        PageCur: 'main',
    },
    NavChange: function (e) {
        this.setData({
            PageCur: e.currentTarget.dataset.cur
        });
    },
    onLoad: function () {
        console.log('page index 已加载');
    },
    onShareAppMessage: function () {
        return {
            title: 'demo',
            imageUrl: '/images/share.jpg',
            path: '/pages/index/index'
        };
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLE9BQU8sRUFBRSxNQUFNO0tBQ2hCO0lBQ0QsU0FBUyxFQUFULFVBQVUsQ0FBTTtRQUNkLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxPQUFPLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBRztTQUNyQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsTUFBTTtRQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtJQUMvQixDQUFDO0lBQ0QsaUJBQWlCO1FBQ2YsT0FBTztZQUNMLEtBQUssRUFBRSxNQUFNO1lBQ2IsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixJQUFJLEVBQUUsb0JBQW9CO1NBQzNCLENBQUE7SUFDSCxDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW5kZXgudHNcclxuLy8g6I635Y+W5bqU55So5a6e5L6LXHJcbi8vIGNvbnN0IGFwcCA9IGdldEFwcDxJQXBwT3B0aW9uPigpXHJcblxyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcbiAgICBQYWdlQ3VyOiAnbWFpbicsXHJcbiAgfSxcclxuICBOYXZDaGFuZ2UoZTogYW55KSB7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBQYWdlQ3VyOiBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5jdXJcclxuICAgIH0pXHJcbiAgfSxcclxuICBvbkxvYWQoKXtcclxuICAgIGNvbnNvbGUubG9nKCdwYWdlIGluZGV4IOW3suWKoOi9vScpXHJcbiAgfSxcclxuICBvblNoYXJlQXBwTWVzc2FnZSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRpdGxlOiAnZGVtbycsXHJcbiAgICAgIGltYWdlVXJsOiAnL2ltYWdlcy9zaGFyZS5qcGcnLFxyXG4gICAgICBwYXRoOiAnL3BhZ2VzL2luZGV4L2luZGV4J1xyXG4gICAgfVxyXG4gIH1cclxufSlcclxuXHJcbmV4cG9ydCB7IH07XHJcblxyXG4iXX0=