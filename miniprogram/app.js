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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEscUNBQTRDO0FBQzVDLEdBQUcsQ0FBYTtJQUNkLFVBQVUsRUFBRTtRQUNWLE9BQU8sRUFBRSxLQUFLO1FBQ2QsTUFBTSxFQUFFLEVBQUU7S0FDWDtJQUNELHFCQUFxQixFQUFyQixVQUFzQixJQUF3RDtRQUE5RSxpQkFPQztRQU5DLHNCQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FDaEMsVUFBQyxHQUFHO1lBRUYsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFBO1FBQ2hDLENBQUMsQ0FDRixDQUFBO0lBQ0gsQ0FBQztJQUNELFdBQVc7UUFBWCxpQkFxQkM7UUFwQkMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ1osT0FBTyxFQUFFLFVBQUEsR0FBRztvQkFDVixJQUFJLEdBQUcsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsRUFBRTt3QkFDckMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs0QkFDYixPQUFPLEVBQUUsVUFBQSxHQUFHO2dDQUNWLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUE7Z0NBQ3ZDLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBOzRCQUNyQixDQUFDO3lCQUNGLENBQUMsQ0FBQTtxQkFDSDt5QkFBTTt3QkFDTCxNQUFNLEVBQUUsQ0FBQTt3QkFDUixFQUFFLENBQUMsUUFBUSxDQUFDOzRCQUNWLEdBQUcsRUFBRSxvQkFBb0I7eUJBQzFCLENBQUMsQ0FBQTtxQkFDSDtnQkFDSCxDQUFDO2dCQUNELElBQUksRUFBRSxNQUFNO2FBQ2IsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsUUFBUSxFQUFSO1FBQUEsaUJBb0JDO1FBbEJDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFRO1lBRS9CLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUE7WUFDdkMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2pDLENBQUMsQ0FBQyxDQUFBO1FBQ0YsRUFBRSxDQUFDLGFBQWEsQ0FBQztZQUNmLE9BQU8sRUFBRSxVQUFBLENBQUM7Z0JBQ1IsS0FBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLGVBQWUsQ0FBQztnQkFDOUMsSUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDLCtCQUErQixFQUFFLENBQUM7Z0JBQ3JELElBQUksT0FBTyxFQUFFO29CQUNYLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztvQkFDakMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxlQUFlLENBQUM7aUJBQzlFO3FCQUFNO29CQUNMLEtBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO2lCQUNwRDtZQUNILENBQUM7U0FDRixDQUFDLENBQUE7SUFFSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBwLnRzXHJcblxyXG5pbXBvcnQgeyB1cGxvYWRVc2VySW5mbyB9IGZyb20gJy4vYXBpL2luZGV4J1xyXG5BcHA8SUFwcE9wdGlvbj4oe1xyXG4gIGdsb2JhbERhdGE6IHsgXHJcbiAgICBpc0xvZ2luOiBmYWxzZSxcclxuICAgIGxlZGdlcjoge30sXHJcbiAgfSxcclxuICB1c2VySW5mb1JlYWR5Q2FsbGJhY2soZGF0YTogV2VjaGF0TWluaXByb2dyYW0uR2V0VXNlckluZm9TdWNjZXNzQ2FsbGJhY2tSZXN1bHQpe1xyXG4gICAgdXBsb2FkVXNlckluZm8oZGF0YS51c2VySW5mbykudGhlbihcclxuICAgICAgKHJlcyk9PntcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzXHJcbiAgICAgIH1cclxuICAgICkgICAgICBcclxuICB9LFxyXG4gIGdldFVzZXJJbmZvKCl7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB3eC5nZXRTZXR0aW5nKHtcclxuICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlcy5hdXRoU2V0dGluZ1snc2NvcGUudXNlckluZm8nXSkge1xyXG4gICAgICAgICAgICB3eC5nZXRVc2VySW5mbyh7XHJcbiAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzKVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZWplY3QoKVxyXG4gICAgICAgICAgICB3eC5yZUxhdW5jaCh7XHJcbiAgICAgICAgICAgICAgdXJsOiBcIi9wYWdlcy9sb2dpbi9sb2dpblwiLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFpbDogcmVqZWN0XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgb25MYXVuY2goKSB7XHJcbiAgICAgIC8vIOiOt+WPlueUqOaIt+S/oeaBr1xyXG4gICAgdGhpcy5nZXRVc2VySW5mbygpLnRoZW4oKHJlczogYW55KT0+e1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygn6I635Y+W55So5oi35L+h5oGvJywgcmVzKVxyXG4gICAgICB0aGlzLmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cclxuICAgICAgdGhpcy51c2VySW5mb1JlYWR5Q2FsbGJhY2socmVzKVxyXG4gICAgfSlcclxuICAgIHd4LmdldFN5c3RlbUluZm8oe1xyXG4gICAgICBzdWNjZXNzOiBlID0+IHtcclxuICAgICAgICB0aGlzLmdsb2JhbERhdGEuU3RhdHVzQmFyID0gZS5zdGF0dXNCYXJIZWlnaHQ7XHJcbiAgICAgICAgY29uc3QgY2Fwc3VsZSA9IHd4LmdldE1lbnVCdXR0b25Cb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBpZiAoY2Fwc3VsZSkge1xyXG4gICAgICAgICAgdGhpcy5nbG9iYWxEYXRhLkN1c3RvbSA9IGNhcHN1bGU7XHJcbiAgICAgICAgICB0aGlzLmdsb2JhbERhdGEuQ3VzdG9tQmFyID0gY2Fwc3VsZS5ib3R0b20gKyBjYXBzdWxlLnRvcCAtIGUuc3RhdHVzQmFySGVpZ2h0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmdsb2JhbERhdGEuQ3VzdG9tQmFyID0gZS5zdGF0dXNCYXJIZWlnaHQgKyA1MDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICBcclxuICB9LFxyXG59KSJdfQ==