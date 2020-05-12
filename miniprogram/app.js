"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./api/index");
App({
    globalData: {
        isLogin: false,
        ledger: {}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEscUNBQTRDO0FBQzVDLEdBQUcsQ0FBYTtJQUNkLFVBQVUsRUFBRTtRQUNWLE9BQU8sRUFBRSxLQUFLO1FBQ2QsTUFBTSxFQUFFLEVBQUU7S0FDWDtJQUNELHFCQUFxQixFQUFyQixVQUFzQixJQUF3RDtRQUM1RSxzQkFBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQ2hDLFVBQUMsR0FBRztZQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDbEIsQ0FBQyxDQUNGLENBQUE7SUFDSCxDQUFDO0lBQ0QsV0FBVztRQUFYLGlCQXFCQztRQXBCQyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDakMsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQkFDWixPQUFPLEVBQUUsVUFBQSxHQUFHO29CQUNWLElBQUksR0FBRyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO3dCQUNyQyxFQUFFLENBQUMsV0FBVyxDQUFDOzRCQUNiLE9BQU8sRUFBRSxVQUFBLEdBQUc7Z0NBQ1YsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQTtnQ0FDdkMsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7NEJBQ3JCLENBQUM7eUJBQ0YsQ0FBQyxDQUFBO3FCQUNIO3lCQUFNO3dCQUNMLE1BQU0sRUFBRSxDQUFBO3dCQUNSLEVBQUUsQ0FBQyxRQUFRLENBQUM7NEJBQ1YsR0FBRyxFQUFFLG9CQUFvQjt5QkFDMUIsQ0FBQyxDQUFBO3FCQUNIO2dCQUNILENBQUM7Z0JBQ0QsSUFBSSxFQUFFLE1BQU07YUFDYixDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxRQUFRLEVBQVI7UUFBQSxpQkFrQkM7UUFoQkMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVE7WUFDL0IsS0FBSSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2pDLENBQUMsQ0FBQyxDQUFBO1FBQ0YsRUFBRSxDQUFDLGFBQWEsQ0FBQztZQUNmLE9BQU8sRUFBRSxVQUFBLENBQUM7Z0JBQ1IsS0FBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLGVBQWUsQ0FBQztnQkFDOUMsSUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDLCtCQUErQixFQUFFLENBQUM7Z0JBQ3JELElBQUksT0FBTyxFQUFFO29CQUNYLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztvQkFDakMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxlQUFlLENBQUM7aUJBQzlFO3FCQUFNO29CQUNMLEtBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO2lCQUNwRDtZQUNILENBQUM7U0FDRixDQUFDLENBQUE7SUFFSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBwLnRzXHJcblxyXG5pbXBvcnQgeyB1cGxvYWRVc2VySW5mbyB9IGZyb20gJy4vYXBpL2luZGV4J1xyXG5BcHA8SUFwcE9wdGlvbj4oe1xyXG4gIGdsb2JhbERhdGE6IHsgXHJcbiAgICBpc0xvZ2luOiBmYWxzZSxcclxuICAgIGxlZGdlcjoge31cclxuICB9LFxyXG4gIHVzZXJJbmZvUmVhZHlDYWxsYmFjayhkYXRhOiBXZWNoYXRNaW5pcHJvZ3JhbS5HZXRVc2VySW5mb1N1Y2Nlc3NDYWxsYmFja1Jlc3VsdCl7XHJcbiAgICB1cGxvYWRVc2VySW5mbyhkYXRhLnVzZXJJbmZvKS50aGVuKFxyXG4gICAgICAocmVzKT0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgfVxyXG4gICAgKSAgICAgIFxyXG4gIH0sXHJcbiAgZ2V0VXNlckluZm8oKXtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHd4LmdldFNldHRpbmcoe1xyXG4gICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzLmF1dGhTZXR0aW5nWydzY29wZS51c2VySW5mbyddKSB7XHJcbiAgICAgICAgICAgIHd4LmdldFVzZXJJbmZvKHtcclxuICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXMpXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlamVjdCgpXHJcbiAgICAgICAgICAgIHd4LnJlTGF1bmNoKHtcclxuICAgICAgICAgICAgICB1cmw6IFwiL3BhZ2VzL2xvZ2luL2xvZ2luXCIsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWlsOiByZWplY3RcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSxcclxuICBvbkxhdW5jaCgpIHtcclxuICAgICAgLy8g6I635Y+W55So5oi35L+h5oGvXHJcbiAgICB0aGlzLmdldFVzZXJJbmZvKCkudGhlbigocmVzOiBhbnkpPT57XHJcbiAgICAgIHRoaXMudXNlckluZm9SZWFkeUNhbGxiYWNrKHJlcylcclxuICAgIH0pXHJcbiAgICB3eC5nZXRTeXN0ZW1JbmZvKHtcclxuICAgICAgc3VjY2VzczogZSA9PiB7XHJcbiAgICAgICAgdGhpcy5nbG9iYWxEYXRhLlN0YXR1c0JhciA9IGUuc3RhdHVzQmFySGVpZ2h0O1xyXG4gICAgICAgIGNvbnN0IGNhcHN1bGUgPSB3eC5nZXRNZW51QnV0dG9uQm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgaWYgKGNhcHN1bGUpIHtcclxuICAgICAgICAgIHRoaXMuZ2xvYmFsRGF0YS5DdXN0b20gPSBjYXBzdWxlO1xyXG4gICAgICAgICAgdGhpcy5nbG9iYWxEYXRhLkN1c3RvbUJhciA9IGNhcHN1bGUuYm90dG9tICsgY2Fwc3VsZS50b3AgLSBlLnN0YXR1c0JhckhlaWdodDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5nbG9iYWxEYXRhLkN1c3RvbUJhciA9IGUuc3RhdHVzQmFySGVpZ2h0ICsgNTA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgfSxcclxufSkiXX0=