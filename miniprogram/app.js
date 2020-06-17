"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./api/index");
App({
    globalData: {
        isLogin: false,
        ledger: {},
    },
    userInfoReadyCallback: function (data) {
        var _this = this;
        index_1.uploadUserInfo(data.userInfo).then(function (res) {
            console.log(res);
            _this.globalData.userInfo = res;
        });
    },
    getUserInfo: function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            wx.getSetting({
                success: function (res) {
                    if (res.authSetting['scope.userInfo']) {
                        wx.getUserInfo({
                            success: function (res) {
                                _this.globalData.userInfo = res.userInfo;
                                return resolve(res);
                            },
                        });
                    }
                    else {
                        reject();
                        wx.reLaunch({
                            url: "/pages/login/login",
                        });
                    }
                },
                fail: reject
            });
        });
    },
    onLaunch: function () {
        var _this = this;
        this.getUserInfo().then(function (res) {
            console.log('获取用户信息', res);
            _this.globalData.userInfo = res.userInfo;
            _this.userInfoReadyCallback(res);
        });
        wx.getSystemInfo({
            success: function (e) {
                _this.globalData.StatusBar = e.statusBarHeight;
                var capsule = wx.getMenuButtonBoundingClientRect();
                if (capsule) {
                    _this.globalData.Custom = capsule;
                    _this.globalData.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
                }
                else {
                    _this.globalData.CustomBar = e.statusBarHeight + 50;
                }
            }
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEscUNBQTRDO0FBQzVDLEdBQUcsQ0FBYTtJQUNkLFVBQVUsRUFBRTtRQUNWLE9BQU8sRUFBRSxLQUFLO1FBQ2QsTUFBTSxFQUFFLEVBQUU7S0FDWDtJQUNELHFCQUFxQixFQUFyQixVQUFzQixJQUF3RDtRQUE5RSxpQkFPQztRQU5DLHNCQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FDaEMsVUFBQyxHQUFHO1lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNoQixLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUE7UUFDaEMsQ0FBQyxDQUNGLENBQUE7SUFDSCxDQUFDO0lBQ0QsV0FBVztRQUFYLGlCQXFCQztRQXBCQyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDakMsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQkFDWixPQUFPLEVBQUUsVUFBQSxHQUFHO29CQUNWLElBQUksR0FBRyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO3dCQUNyQyxFQUFFLENBQUMsV0FBVyxDQUFDOzRCQUNiLE9BQU8sRUFBRSxVQUFBLEdBQUc7Z0NBQ1YsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQTtnQ0FDdkMsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7NEJBQ3JCLENBQUM7eUJBQ0YsQ0FBQyxDQUFBO3FCQUNIO3lCQUFNO3dCQUNMLE1BQU0sRUFBRSxDQUFBO3dCQUNSLEVBQUUsQ0FBQyxRQUFRLENBQUM7NEJBQ1YsR0FBRyxFQUFFLG9CQUFvQjt5QkFDMUIsQ0FBQyxDQUFBO3FCQUNIO2dCQUNILENBQUM7Z0JBQ0QsSUFBSSxFQUFFLE1BQU07YUFDYixDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxRQUFRLEVBQVI7UUFBQSxpQkFvQkM7UUFsQkMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVE7WUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUE7WUFDMUIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQTtZQUN2QyxLQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDakMsQ0FBQyxDQUFDLENBQUE7UUFDRixFQUFFLENBQUMsYUFBYSxDQUFDO1lBQ2YsT0FBTyxFQUFFLFVBQUEsQ0FBQztnQkFDUixLQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsZUFBZSxDQUFDO2dCQUM5QyxJQUFNLE9BQU8sR0FBRyxFQUFFLENBQUMsK0JBQStCLEVBQUUsQ0FBQztnQkFDckQsSUFBSSxPQUFPLEVBQUU7b0JBQ1gsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO29CQUNqQyxLQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLGVBQWUsQ0FBQztpQkFDOUU7cUJBQU07b0JBQ0wsS0FBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7aUJBQ3BEO1lBQ0gsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUVKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAudHNcclxuXHJcbmltcG9ydCB7IHVwbG9hZFVzZXJJbmZvIH0gZnJvbSAnLi9hcGkvaW5kZXgnXHJcbkFwcDxJQXBwT3B0aW9uPih7XHJcbiAgZ2xvYmFsRGF0YTogeyBcclxuICAgIGlzTG9naW46IGZhbHNlLFxyXG4gICAgbGVkZ2VyOiB7fSxcclxuICB9LFxyXG4gIHVzZXJJbmZvUmVhZHlDYWxsYmFjayhkYXRhOiBXZWNoYXRNaW5pcHJvZ3JhbS5HZXRVc2VySW5mb1N1Y2Nlc3NDYWxsYmFja1Jlc3VsdCl7XHJcbiAgICB1cGxvYWRVc2VySW5mbyhkYXRhLnVzZXJJbmZvKS50aGVuKFxyXG4gICAgICAocmVzKT0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICB0aGlzLmdsb2JhbERhdGEudXNlckluZm8gPSByZXNcclxuICAgICAgfVxyXG4gICAgKSAgICAgIFxyXG4gIH0sXHJcbiAgZ2V0VXNlckluZm8oKXtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHd4LmdldFNldHRpbmcoe1xyXG4gICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzLmF1dGhTZXR0aW5nWydzY29wZS51c2VySW5mbyddKSB7XHJcbiAgICAgICAgICAgIHd4LmdldFVzZXJJbmZvKHtcclxuICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXMpXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlamVjdCgpXHJcbiAgICAgICAgICAgIHd4LnJlTGF1bmNoKHtcclxuICAgICAgICAgICAgICB1cmw6IFwiL3BhZ2VzL2xvZ2luL2xvZ2luXCIsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWlsOiByZWplY3RcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSxcclxuICBvbkxhdW5jaCgpIHtcclxuICAgICAgLy8g6I635Y+W55So5oi35L+h5oGvXHJcbiAgICB0aGlzLmdldFVzZXJJbmZvKCkudGhlbigocmVzOiBhbnkpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKCfojrflj5bnlKjmiLfkv6Hmga8nLCByZXMpXHJcbiAgICAgIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xyXG4gICAgICB0aGlzLnVzZXJJbmZvUmVhZHlDYWxsYmFjayhyZXMpXHJcbiAgICB9KVxyXG4gICAgd3guZ2V0U3lzdGVtSW5mbyh7XHJcbiAgICAgIHN1Y2Nlc3M6IGUgPT4ge1xyXG4gICAgICAgIHRoaXMuZ2xvYmFsRGF0YS5TdGF0dXNCYXIgPSBlLnN0YXR1c0JhckhlaWdodDtcclxuICAgICAgICBjb25zdCBjYXBzdWxlID0gd3guZ2V0TWVudUJ1dHRvbkJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIGlmIChjYXBzdWxlKSB7XHJcbiAgICAgICAgICB0aGlzLmdsb2JhbERhdGEuQ3VzdG9tID0gY2Fwc3VsZTtcclxuICAgICAgICAgIHRoaXMuZ2xvYmFsRGF0YS5DdXN0b21CYXIgPSBjYXBzdWxlLmJvdHRvbSArIGNhcHN1bGUudG9wIC0gZS5zdGF0dXNCYXJIZWlnaHQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuZ2xvYmFsRGF0YS5DdXN0b21CYXIgPSBlLnN0YXR1c0JhckhlaWdodCArIDUwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIFxyXG4gIH0sXHJcbn0pIl19