"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = getApp();
Page({
    data: {},
    login: function (e) {
        if (e.detail.errMsg == 'getUserInfo:ok') {
            app.globalData.userInfo = e.detail.userInfo;
            app.globalData.logged = true;
            if (app.userInfoReadyCallback) {
                app.userInfoReadyCallback(e.detail);
            }
            wx.redirectTo({
                url: '/pages/index/index'
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBZ0IsQ0FBQTtBQUNsQyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUUsRUFFTDtJQUNELEtBQUssRUFBTCxVQUFNLENBQUs7UUFDVCxJQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLGdCQUFnQixFQUFDO1lBQ3JDLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFBO1lBQzNDLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtZQUM1QixJQUFJLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRTtnQkFDN0IsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQTthQUNwQztZQUNELEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ1osR0FBRyxFQUFFLG9CQUFvQjthQUMxQixDQUFDLENBQUE7U0FDSDtJQUNILENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBtaW5pcHJvZ3JhbS9wYWdlcy9sb2dpbi9sb2dpbi5qc1xyXG5cclxuY29uc3QgYXBwID0gZ2V0QXBwKCkgYXMgSUFwcE9wdGlvblxyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcblxyXG4gIH0sXHJcbiAgbG9naW4oZTphbnkpIHtcclxuICAgIGlmKGUuZGV0YWlsLmVyck1zZyA9PSAnZ2V0VXNlckluZm86b2snKXtcclxuICAgICAgYXBwLmdsb2JhbERhdGEudXNlckluZm8gPSBlLmRldGFpbC51c2VySW5mb1xyXG4gICAgICBhcHAuZ2xvYmFsRGF0YS5sb2dnZWQgPSB0cnVlXHJcbiAgICAgIGlmIChhcHAudXNlckluZm9SZWFkeUNhbGxiYWNrKSB7XHJcbiAgICAgICAgYXBwLnVzZXJJbmZvUmVhZHlDYWxsYmFjayhlLmRldGFpbClcclxuICAgICAgfVxyXG4gICAgICB3eC5yZWRpcmVjdFRvKHtcclxuICAgICAgICB1cmw6ICcvcGFnZXMvaW5kZXgvaW5kZXgnXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG5leHBvcnQge307Il19