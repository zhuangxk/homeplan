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
    onLaunch: function () {
        var _this = this;
        wx.redirectTo({
            url: '/pages/login/login'
        });
        wx.getSetting({
            success: function (res) {
                if (res.authSetting['scope.userInfo']) {
                    wx.getUserInfo({
                        success: function (res) {
                            console.log(res);
                            _this.globalData.userInfo = res.userInfo;
                            if (_this.userInfoReadyCallback) {
                                _this.userInfoReadyCallback(res);
                            }
                        },
                    });
                }
            },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEscUNBQTRDO0FBQzVDLEdBQUcsQ0FBYTtJQUNkLFVBQVUsRUFBRTtRQUNWLE1BQU0sRUFBRSxLQUFLO0tBQ2Q7SUFDRCxxQkFBcUIsRUFBckIsVUFBc0IsSUFBd0Q7UUFDNUUsc0JBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUNoQyxVQUFDLEdBQUc7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2xCLENBQUMsQ0FDRixDQUFBO0lBQ0gsQ0FBQztJQUNELFFBQVE7UUFBUixpQkF5Q0M7UUFsQ0MsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxvQkFBb0I7U0FDMUIsQ0FBQyxDQUFBO1FBRUYsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLE9BQU8sRUFBRSxVQUFBLEdBQUc7Z0JBQ1YsSUFBSSxHQUFHLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLEVBQUU7b0JBRXJDLEVBQUUsQ0FBQyxXQUFXLENBQUM7d0JBQ2IsT0FBTyxFQUFFLFVBQUEsR0FBRzs0QkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBOzRCQUNoQixLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFBOzRCQUN2QyxJQUFJLEtBQUksQ0FBQyxxQkFBcUIsRUFBRTtnQ0FDOUIsS0FBSSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxDQUFBOzZCQUNoQzt3QkFDSCxDQUFDO3FCQUNGLENBQUMsQ0FBQTtpQkFDSDtZQUNILENBQUM7U0FDRixDQUFDLENBQUE7UUFFRixFQUFFLENBQUMsYUFBYSxDQUFDO1lBQ2YsT0FBTyxFQUFFLFVBQUEsQ0FBQztnQkFDUixLQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsZUFBZSxDQUFDO2dCQUM5QyxJQUFNLE9BQU8sR0FBRyxFQUFFLENBQUMsK0JBQStCLEVBQUUsQ0FBQztnQkFDckQsSUFBSSxPQUFPLEVBQUU7b0JBQ1gsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO29CQUNqQyxLQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLGVBQWUsQ0FBQztpQkFDOUU7cUJBQU07b0JBQ0wsS0FBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7aUJBQ3BEO1lBQ0gsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUVKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAudHNcclxuXHJcbmltcG9ydCB7IHVwbG9hZFVzZXJJbmZvIH0gZnJvbSAnLi9hcGkvaW5kZXgnXHJcbkFwcDxJQXBwT3B0aW9uPih7XHJcbiAgZ2xvYmFsRGF0YTogeyBcclxuICAgIGxvZ2dlZDogZmFsc2VcclxuICB9LFxyXG4gIHVzZXJJbmZvUmVhZHlDYWxsYmFjayhkYXRhOiBXZWNoYXRNaW5pcHJvZ3JhbS5HZXRVc2VySW5mb1N1Y2Nlc3NDYWxsYmFja1Jlc3VsdCl7XHJcbiAgICB1cGxvYWRVc2VySW5mbyhkYXRhLnVzZXJJbmZvKS50aGVuKFxyXG4gICAgICAocmVzKT0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgfVxyXG4gICAgKVxyXG4gIH0sXHJcbiAgb25MYXVuY2goKSB7XHJcbiAgICAvLyDlsZXnpLrmnKzlnLDlrZjlgqjog73liptcclxuICAgIC8vIGNvbnN0IGxvZ3MgPSB3eC5nZXRTdG9yYWdlU3luYygnbG9ncycpIHx8IFtdXHJcbiAgICAvLyBsb2dzLnVuc2hpZnQoRGF0ZS5ub3coKSlcclxuICAgIC8vIHd4LnNldFN0b3JhZ2VTeW5jKCdsb2dzJywgbG9ncylcclxuXHJcbiAgICAvLyDnmbvlvZVcclxuICAgIHd4LnJlZGlyZWN0VG8oe1xyXG4gICAgICB1cmw6ICcvcGFnZXMvbG9naW4vbG9naW4nXHJcbiAgICB9KVxyXG4gICAgLy8g6I635Y+W55So5oi35L+h5oGvXHJcbiAgICB3eC5nZXRTZXR0aW5nKHtcclxuICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICBpZiAocmVzLmF1dGhTZXR0aW5nWydzY29wZS51c2VySW5mbyddKSB7XHJcbiAgICAgICAgICAvLyDlt7Lnu4/mjojmnYPvvIzlj6/ku6Xnm7TmjqXosIPnlKggZ2V0VXNlckluZm8g6I635Y+W5aS05YOP5pi156ew77yM5LiN5Lya5by55qGGXHJcbiAgICAgICAgICB3eC5nZXRVc2VySW5mbyh7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgICAgIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xyXG4gICAgICAgICAgICAgIGlmICh0aGlzLnVzZXJJbmZvUmVhZHlDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VySW5mb1JlYWR5Q2FsbGJhY2socmVzKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuXHJcbiAgICB3eC5nZXRTeXN0ZW1JbmZvKHtcclxuICAgICAgc3VjY2VzczogZSA9PiB7XHJcbiAgICAgICAgdGhpcy5nbG9iYWxEYXRhLlN0YXR1c0JhciA9IGUuc3RhdHVzQmFySGVpZ2h0O1xyXG4gICAgICAgIGNvbnN0IGNhcHN1bGUgPSB3eC5nZXRNZW51QnV0dG9uQm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgaWYgKGNhcHN1bGUpIHtcclxuICAgICAgICAgIHRoaXMuZ2xvYmFsRGF0YS5DdXN0b20gPSBjYXBzdWxlO1xyXG4gICAgICAgICAgdGhpcy5nbG9iYWxEYXRhLkN1c3RvbUJhciA9IGNhcHN1bGUuYm90dG9tICsgY2Fwc3VsZS50b3AgLSBlLnN0YXR1c0JhckhlaWdodDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5nbG9iYWxEYXRhLkN1c3RvbUJhciA9IGUuc3RhdHVzQmFySGVpZ2h0ICsgNTA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgfSxcclxufSkiXX0=