"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = getApp();
Page({
    data: {},
    login: function (e) {
        if (e.detail.errMsg == 'getUserInfo:ok') {
            app.globalData.userInfo = e.detail.userInfo;
            app.globalData.isLogin = true;
            app.userInfoReadyCallback(e.detail);
            wx.redirectTo({
                url: '/pages/index/index'
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBZ0IsQ0FBQTtBQUNsQyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUUsRUFFTDtJQUNELEtBQUssRUFBTCxVQUFNLENBQU07UUFDVixJQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLGdCQUFnQixFQUFDO1lBQ3JDLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFBO1lBQzNDLEdBQUcsQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQTtZQUM3QixHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ25DLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ1osR0FBRyxFQUFFLG9CQUFvQjthQUMxQixDQUFDLENBQUE7U0FDSDtJQUNILENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBtaW5pcHJvZ3JhbS9wYWdlcy9sb2dpbi9sb2dpbi5qc1xyXG5cclxuY29uc3QgYXBwID0gZ2V0QXBwKCkgYXMgSUFwcE9wdGlvblxyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcblxyXG4gIH0sXHJcbiAgbG9naW4oZTogYW55KSB7XHJcbiAgICBpZihlLmRldGFpbC5lcnJNc2cgPT0gJ2dldFVzZXJJbmZvOm9rJyl7XHJcbiAgICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gZS5kZXRhaWwudXNlckluZm9cclxuICAgICAgYXBwLmdsb2JhbERhdGEuaXNMb2dpbiA9IHRydWVcclxuICAgICAgYXBwLnVzZXJJbmZvUmVhZHlDYWxsYmFjayhlLmRldGFpbClcclxuICAgICAgd3gucmVkaXJlY3RUbyh7XHJcbiAgICAgICAgdXJsOiAnL3BhZ2VzL2luZGV4L2luZGV4J1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuZXhwb3J0IHsgfVxyXG5cclxuIl19