"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./api/index");
App({
    globalData: {
        logged: false
    },
    userInfoReadyCallback: function (data) {
        index_1.uploadUserInfo(data.userInfo).then(function (res) {
            console.log(res);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEscUNBQTRDO0FBQzVDLEdBQUcsQ0FBYTtJQUNkLFVBQVUsRUFBRTtRQUNWLE1BQU0sRUFBRSxLQUFLO0tBQ2Q7SUFDRCxxQkFBcUIsRUFBckIsVUFBc0IsSUFBd0Q7UUFDNUUsc0JBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUNoQyxVQUFDLEdBQUc7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2xCLENBQUMsQ0FDRixDQUFBO0lBQ0gsQ0FBQztJQUNELFdBQVc7UUFBWCxpQkFxQkM7UUFwQkMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ1osT0FBTyxFQUFFLFVBQUEsR0FBRztvQkFDVixJQUFJLEdBQUcsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsRUFBRTt3QkFDckMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs0QkFDYixPQUFPLEVBQUUsVUFBQSxHQUFHO2dDQUNWLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUE7Z0NBQ3ZDLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBOzRCQUNyQixDQUFDO3lCQUNGLENBQUMsQ0FBQTtxQkFDSDt5QkFBTTt3QkFDTCxNQUFNLEVBQUUsQ0FBQTt3QkFDUixFQUFFLENBQUMsUUFBUSxDQUFDOzRCQUNWLEdBQUcsRUFBRSxvQkFBb0I7eUJBQzFCLENBQUMsQ0FBQTtxQkFDSDtnQkFDSCxDQUFDO2dCQUNELElBQUksRUFBRSxNQUFNO2FBQ2IsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsUUFBUSxFQUFSO1FBQUEsaUJBa0JDO1FBaEJDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFRO1lBQy9CLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNqQyxDQUFDLENBQUMsQ0FBQTtRQUNGLEVBQUUsQ0FBQyxhQUFhLENBQUM7WUFDZixPQUFPLEVBQUUsVUFBQSxDQUFDO2dCQUNSLEtBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxlQUFlLENBQUM7Z0JBQzlDLElBQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQywrQkFBK0IsRUFBRSxDQUFDO2dCQUNyRCxJQUFJLE9BQU8sRUFBRTtvQkFDWCxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7b0JBQ2pDLEtBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsZUFBZSxDQUFDO2lCQUM5RTtxQkFBTTtvQkFDTCxLQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztpQkFDcEQ7WUFDSCxDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBRUosQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFwcC50c1xyXG5cclxuaW1wb3J0IHsgdXBsb2FkVXNlckluZm8gfSBmcm9tICcuL2FwaS9pbmRleCdcclxuQXBwPElBcHBPcHRpb24+KHtcclxuICBnbG9iYWxEYXRhOiB7IFxyXG4gICAgbG9nZ2VkOiBmYWxzZVxyXG4gIH0sXHJcbiAgdXNlckluZm9SZWFkeUNhbGxiYWNrKGRhdGE6IFdlY2hhdE1pbmlwcm9ncmFtLkdldFVzZXJJbmZvU3VjY2Vzc0NhbGxiYWNrUmVzdWx0KXtcclxuICAgIHVwbG9hZFVzZXJJbmZvKGRhdGEudXNlckluZm8pLnRoZW4oXHJcbiAgICAgIChyZXMpPT57XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICB9XHJcbiAgICApICAgICAgXHJcbiAgfSxcclxuICBnZXRVc2VySW5mbygpe1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgd3guZ2V0U2V0dGluZyh7XHJcbiAgICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICAgIGlmIChyZXMuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJJbmZvJ10pIHtcclxuICAgICAgICAgICAgd3guZ2V0VXNlckluZm8oe1xyXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHJlcylcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVqZWN0KClcclxuICAgICAgICAgICAgd3gucmVMYXVuY2goe1xyXG4gICAgICAgICAgICAgIHVybDogXCIvcGFnZXMvbG9naW4vbG9naW5cIixcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWw6IHJlamVjdFxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9LFxyXG4gIG9uTGF1bmNoKCkge1xyXG4gICAgICAvLyDojrflj5bnlKjmiLfkv6Hmga9cclxuICAgIHRoaXMuZ2V0VXNlckluZm8oKS50aGVuKChyZXM6IGFueSk9PntcclxuICAgICAgdGhpcy51c2VySW5mb1JlYWR5Q2FsbGJhY2socmVzKVxyXG4gICAgfSlcclxuICAgIHd4LmdldFN5c3RlbUluZm8oe1xyXG4gICAgICBzdWNjZXNzOiBlID0+IHtcclxuICAgICAgICB0aGlzLmdsb2JhbERhdGEuU3RhdHVzQmFyID0gZS5zdGF0dXNCYXJIZWlnaHQ7XHJcbiAgICAgICAgY29uc3QgY2Fwc3VsZSA9IHd4LmdldE1lbnVCdXR0b25Cb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBpZiAoY2Fwc3VsZSkge1xyXG4gICAgICAgICAgdGhpcy5nbG9iYWxEYXRhLkN1c3RvbSA9IGNhcHN1bGU7XHJcbiAgICAgICAgICB0aGlzLmdsb2JhbERhdGEuQ3VzdG9tQmFyID0gY2Fwc3VsZS5ib3R0b20gKyBjYXBzdWxlLnRvcCAtIGUuc3RhdHVzQmFySGVpZ2h0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmdsb2JhbERhdGEuQ3VzdG9tQmFyID0gZS5zdGF0dXNCYXJIZWlnaHQgKyA1MDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICBcclxuICB9LFxyXG59KSJdfQ==