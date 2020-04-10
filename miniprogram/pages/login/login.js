"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = getApp();
Page({
    data: {},
    login: function (e) {
        if (e.detail.errMsg == 'getUserInfo:ok') {
            app.globalData.userInfo = e.detail.userInfo;
            app.globalData.logged = true;
            app.userInfoReadyCallback(e.detail);
            wx.redirectTo({
                url: '/pages/index/index'
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBZ0IsQ0FBQTtBQUNsQyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUUsRUFFTDtJQUNELEtBQUssRUFBTCxVQUFNLENBQU07UUFDVixJQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLGdCQUFnQixFQUFDO1lBQ3JDLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFBO1lBQzNDLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtZQUM1QixHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ25DLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ1osR0FBRyxFQUFFLG9CQUFvQjthQUMxQixDQUFDLENBQUE7U0FDSDtJQUNILENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBtaW5pcHJvZ3JhbS9wYWdlcy9sb2dpbi9sb2dpbi5qc1xyXG5cclxuY29uc3QgYXBwID0gZ2V0QXBwKCkgYXMgSUFwcE9wdGlvblxyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcblxyXG4gIH0sXHJcbiAgbG9naW4oZTogYW55KSB7XHJcbiAgICBpZihlLmRldGFpbC5lcnJNc2cgPT0gJ2dldFVzZXJJbmZvOm9rJyl7XHJcbiAgICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gZS5kZXRhaWwudXNlckluZm9cclxuICAgICAgYXBwLmdsb2JhbERhdGEubG9nZ2VkID0gdHJ1ZVxyXG4gICAgICBhcHAudXNlckluZm9SZWFkeUNhbGxiYWNrKGUuZGV0YWlsKVxyXG4gICAgICB3eC5yZWRpcmVjdFRvKHtcclxuICAgICAgICB1cmw6ICcvcGFnZXMvaW5kZXgvaW5kZXgnXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG5leHBvcnQgeyB9XHJcblxyXG4iXX0=