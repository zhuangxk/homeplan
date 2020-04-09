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
        wx.getSetting({
            success: function (res) {
                if (res.authSetting['scope.userInfo']) {
                    wx.getUserInfo({
                        success: function (res) {
                            console.log(res);
                            _this.globalData.userInfo = res.userInfo;
                            _this.globalData.logged = true;
                            if (_this.userInfoReadyCallback) {
                                _this.userInfoReadyCallback(res);
                            }
                        },
                    });
                }
                else {
                    console.log('没有授权');
                    wx.reLaunch({
                        url: "/pages/login/login",
                    });
                }
            },
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEscUNBQTRDO0FBQzVDLEdBQUcsQ0FBYTtJQUNkLFVBQVUsRUFBRTtRQUNWLE1BQU0sRUFBRSxLQUFLO0tBQ2Q7SUFDRCxxQkFBcUIsRUFBckIsVUFBc0IsSUFBd0Q7UUFDNUUsc0JBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUNoQyxVQUFDLEdBQUc7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2xCLENBQUMsQ0FDRixDQUFBO0lBQ0gsQ0FBQztJQUNELFFBQVE7UUFBUixpQkF1Q0M7UUFyQ0MsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLE9BQU8sRUFBRSxVQUFBLEdBQUc7Z0JBQ1YsSUFBSSxHQUFHLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLEVBQUU7b0JBRXJDLEVBQUUsQ0FBQyxXQUFXLENBQUM7d0JBQ2IsT0FBTyxFQUFFLFVBQUEsR0FBRzs0QkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBOzRCQUNoQixLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFBOzRCQUN2QyxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7NEJBQzdCLElBQUksS0FBSSxDQUFDLHFCQUFxQixFQUFFO2dDQUM5QixLQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUE7NkJBQ2hDO3dCQUNILENBQUM7cUJBQ0YsQ0FBQyxDQUFBO2lCQUNIO3FCQUFNO29CQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7b0JBQ25CLEVBQUUsQ0FBQyxRQUFRLENBQUM7d0JBQ1YsR0FBRyxFQUFDLG9CQUFvQjtxQkFDekIsQ0FBQyxDQUFBO2lCQUVIO1lBQ0gsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQWVKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAudHNcclxuXHJcbmltcG9ydCB7IHVwbG9hZFVzZXJJbmZvIH0gZnJvbSAnLi9hcGkvaW5kZXgnXHJcbkFwcDxJQXBwT3B0aW9uPih7XHJcbiAgZ2xvYmFsRGF0YTogeyBcclxuICAgIGxvZ2dlZDogZmFsc2VcclxuICB9LFxyXG4gIHVzZXJJbmZvUmVhZHlDYWxsYmFjayhkYXRhOiBXZWNoYXRNaW5pcHJvZ3JhbS5HZXRVc2VySW5mb1N1Y2Nlc3NDYWxsYmFja1Jlc3VsdCl7XHJcbiAgICB1cGxvYWRVc2VySW5mbyhkYXRhLnVzZXJJbmZvKS50aGVuKFxyXG4gICAgICAocmVzKT0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgfVxyXG4gICAgKVxyXG4gIH0sXHJcbiAgb25MYXVuY2goKSB7XHJcbiAgICAvLyDojrflj5bnlKjmiLfkv6Hmga9cclxuICAgIHd4LmdldFNldHRpbmcoe1xyXG4gICAgICBzdWNjZXNzOiByZXMgPT4ge1xyXG4gICAgICAgIGlmIChyZXMuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJJbmZvJ10pIHtcclxuICAgICAgICAgIC8vIOW3sue7j+aOiOadg++8jOWPr+S7peebtOaOpeiwg+eUqCBnZXRVc2VySW5mbyDojrflj5blpLTlg4/mmLXnp7DvvIzkuI3kvJrlvLnmoYZcclxuICAgICAgICAgIHd4LmdldFVzZXJJbmZvKHtcclxuICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgICAgdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXHJcbiAgICAgICAgICAgICAgdGhpcy5nbG9iYWxEYXRhLmxvZ2dlZCA9IHRydWVcclxuICAgICAgICAgICAgICBpZiAodGhpcy51c2VySW5mb1JlYWR5Q2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXNlckluZm9SZWFkeUNhbGxiYWNrKHJlcylcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygn5rKh5pyJ5o6I5p2DJylcclxuICAgICAgICAgIHd4LnJlTGF1bmNoKHtcclxuICAgICAgICAgICAgdXJsOlwiL3BhZ2VzL2xvZ2luL2xvZ2luXCIsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuXHJcbiAgICAvLyB3eC5nZXRTeXN0ZW1JbmZvKHtcclxuICAgIC8vICAgc3VjY2VzczogZSA9PiB7XHJcbiAgICAvLyAgICAgdGhpcy5nbG9iYWxEYXRhLlN0YXR1c0JhciA9IGUuc3RhdHVzQmFySGVpZ2h0O1xyXG4gICAgLy8gICAgIGNvbnN0IGNhcHN1bGUgPSB3eC5nZXRNZW51QnV0dG9uQm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAvLyAgICAgaWYgKGNhcHN1bGUpIHtcclxuICAgIC8vICAgICAgIHRoaXMuZ2xvYmFsRGF0YS5DdXN0b20gPSBjYXBzdWxlO1xyXG4gICAgLy8gICAgICAgdGhpcy5nbG9iYWxEYXRhLkN1c3RvbUJhciA9IGNhcHN1bGUuYm90dG9tICsgY2Fwc3VsZS50b3AgLSBlLnN0YXR1c0JhckhlaWdodDtcclxuICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgdGhpcy5nbG9iYWxEYXRhLkN1c3RvbUJhciA9IGUuc3RhdHVzQmFySGVpZ2h0ICsgNTA7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9KVxyXG4gICAgXHJcbiAgfSxcclxufSkiXX0=