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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEscUNBQTRDO0FBQzVDLEdBQUcsQ0FBYTtJQUNkLFVBQVUsRUFBRTtRQUNWLE9BQU8sRUFBRSxLQUFLO1FBQ2QsTUFBTSxFQUFFLEVBQUU7S0FDWDtJQUNELHFCQUFxQixFQUFyQixVQUFzQixJQUF3RDtRQUE5RSxpQkFPQztRQU5DLHNCQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FDaEMsVUFBQyxHQUFHO1lBRUYsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFBO1FBQ2hDLENBQUMsQ0FDRixDQUFBO0lBQ0gsQ0FBQztJQUNELFdBQVc7UUFBWCxpQkFxQkM7UUFwQkMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ1osT0FBTyxFQUFFLFVBQUEsR0FBRztvQkFDVixJQUFJLEdBQUcsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsRUFBRTt3QkFDckMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs0QkFDYixPQUFPLEVBQUUsVUFBQSxHQUFHO2dDQUNWLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUE7Z0NBQ3ZDLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBOzRCQUNyQixDQUFDO3lCQUNGLENBQUMsQ0FBQTtxQkFDSDt5QkFBTTt3QkFDTCxNQUFNLEVBQUUsQ0FBQTt3QkFDUixFQUFFLENBQUMsUUFBUSxDQUFDOzRCQUNWLEdBQUcsRUFBRSxvQkFBb0I7eUJBQzFCLENBQUMsQ0FBQTtxQkFDSDtnQkFDSCxDQUFDO2dCQUNELElBQUksRUFBRSxNQUFNO2FBQ2IsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsUUFBUSxFQUFSO1FBQUEsaUJBb0JDO1FBbEJDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFRO1lBRS9CLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUE7WUFDdkMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2pDLENBQUMsQ0FBQyxDQUFBO1FBQ0YsRUFBRSxDQUFDLGFBQWEsQ0FBQztZQUNmLE9BQU8sRUFBRSxVQUFBLENBQUM7Z0JBQ1IsS0FBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLGVBQWUsQ0FBQztnQkFDOUMsSUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDLCtCQUErQixFQUFFLENBQUM7Z0JBQ3JELElBQUksT0FBTyxFQUFFO29CQUNYLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztvQkFDakMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxlQUFlLENBQUM7aUJBQzlFO3FCQUFNO29CQUNMLEtBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO2lCQUNwRDtZQUNILENBQUM7U0FDRixDQUFDLENBQUE7SUFFSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBwLnRzXG5cbmltcG9ydCB7IHVwbG9hZFVzZXJJbmZvIH0gZnJvbSAnLi9hcGkvaW5kZXgnXG5BcHA8SUFwcE9wdGlvbj4oe1xuICBnbG9iYWxEYXRhOiB7IFxuICAgIGlzTG9naW46IGZhbHNlLFxuICAgIGxlZGdlcjoge30sXG4gIH0sXG4gIHVzZXJJbmZvUmVhZHlDYWxsYmFjayhkYXRhOiBXZWNoYXRNaW5pcHJvZ3JhbS5HZXRVc2VySW5mb1N1Y2Nlc3NDYWxsYmFja1Jlc3VsdCl7XG4gICAgdXBsb2FkVXNlckluZm8oZGF0YS51c2VySW5mbykudGhlbihcbiAgICAgIChyZXMpPT57XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzXG4gICAgICB9XG4gICAgKSAgICAgIFxuICB9LFxuICBnZXRVc2VySW5mbygpe1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB3eC5nZXRTZXR0aW5nKHtcbiAgICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgICBpZiAocmVzLmF1dGhTZXR0aW5nWydzY29wZS51c2VySW5mbyddKSB7XG4gICAgICAgICAgICB3eC5nZXRVc2VySW5mbyh7XG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVqZWN0KClcbiAgICAgICAgICAgIHd4LnJlTGF1bmNoKHtcbiAgICAgICAgICAgICAgdXJsOiBcIi9wYWdlcy9sb2dpbi9sb2dpblwiLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGZhaWw6IHJlamVjdFxuICAgICAgfSlcbiAgICB9KVxuICB9LFxuICBvbkxhdW5jaCgpIHtcbiAgICAgIC8vIOiOt+WPlueUqOaIt+S/oeaBr1xuICAgIHRoaXMuZ2V0VXNlckluZm8oKS50aGVuKChyZXM6IGFueSk9PntcbiAgICAgIC8vIGNvbnNvbGUubG9nKCfojrflj5bnlKjmiLfkv6Hmga8nLCByZXMpXG4gICAgICB0aGlzLmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cbiAgICAgIHRoaXMudXNlckluZm9SZWFkeUNhbGxiYWNrKHJlcylcbiAgICB9KVxuICAgIHd4LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzczogZSA9PiB7XG4gICAgICAgIHRoaXMuZ2xvYmFsRGF0YS5TdGF0dXNCYXIgPSBlLnN0YXR1c0JhckhlaWdodDtcbiAgICAgICAgY29uc3QgY2Fwc3VsZSA9IHd4LmdldE1lbnVCdXR0b25Cb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgaWYgKGNhcHN1bGUpIHtcbiAgICAgICAgICB0aGlzLmdsb2JhbERhdGEuQ3VzdG9tID0gY2Fwc3VsZTtcbiAgICAgICAgICB0aGlzLmdsb2JhbERhdGEuQ3VzdG9tQmFyID0gY2Fwc3VsZS5ib3R0b20gKyBjYXBzdWxlLnRvcCAtIGUuc3RhdHVzQmFySGVpZ2h0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZ2xvYmFsRGF0YS5DdXN0b21CYXIgPSBlLnN0YXR1c0JhckhlaWdodCArIDUwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgICBcbiAgfSxcbn0pIl19