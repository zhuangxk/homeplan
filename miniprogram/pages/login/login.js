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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBZ0IsQ0FBQTtBQUNsQyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUUsRUFFTDtJQUNELEtBQUssRUFBTCxVQUFNLENBQU07UUFDVixJQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLGdCQUFnQixFQUFDO1lBQ3JDLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFBO1lBQzNDLEdBQUcsQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQTtZQUM3QixHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ25DLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ1osR0FBRyxFQUFFLG9CQUFvQjthQUMxQixDQUFDLENBQUE7U0FDSDtJQUNILENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBtaW5pcHJvZ3JhbS9wYWdlcy9sb2dpbi9sb2dpbi5qc1xuXG5jb25zdCBhcHAgPSBnZXRBcHAoKSBhcyBJQXBwT3B0aW9uXG5QYWdlKHtcbiAgZGF0YToge1xuXG4gIH0sXG4gIGxvZ2luKGU6IGFueSkge1xuICAgIGlmKGUuZGV0YWlsLmVyck1zZyA9PSAnZ2V0VXNlckluZm86b2snKXtcbiAgICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gZS5kZXRhaWwudXNlckluZm9cbiAgICAgIGFwcC5nbG9iYWxEYXRhLmlzTG9naW4gPSB0cnVlXG4gICAgICBhcHAudXNlckluZm9SZWFkeUNhbGxiYWNrKGUuZGV0YWlsKVxuICAgICAgd3gucmVkaXJlY3RUbyh7XG4gICAgICAgIHVybDogJy9wYWdlcy9pbmRleC9pbmRleCdcbiAgICAgIH0pXG4gICAgfVxuICB9XG59KVxuZXhwb3J0IHsgfVxuXG4iXX0=