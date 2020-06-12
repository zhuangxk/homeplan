"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var BaseUrl = 'http://172.16.151.161:5000';
var base64_1 = require("../utils/base64");
var index_1 = require("./index");
function getToken(noToken) {
    return new Promise(function (resolve, reject) {
        if (noToken) {
            return resolve();
        }
        try {
            var token = wx.getStorageSync('token');
            var str = token.split('.')[1];
            str = base64_1.default.decode(str);
            str = str.replace(new RegExp(String.fromCharCode(0), "g"), "");
            var j = JSON.parse(str);
            var cur = new Date().getTime();
            var exp = j.exp * 1000;
            if ((exp - cur) > 1000 * 60 * 10) {
                return resolve(token);
            }
            else {
                index_1.login().then(function (t) {
                    return resolve(t);
                });
            }
        }
        catch (error) {
            console.log('token 解析失败, 自动登录');
            index_1.login().then(function (t) {
                resolve(t);
            }).catch(reject);
        }
    });
}
exports.default = (function (option, noToken) {
    return new Promise(function (resolve, reject) {
        getToken(noToken).then(function (token) {
            wx.request(__assign(__assign({}, option), { url: BaseUrl + option.url, header: {
                    Authorization: token
                }, success: function (res) {
                    var data = res.data;
                    if (data.code == 0) {
                        return resolve(data.data);
                    }
                    else if (data.code == 10002) {
                        wx.showToast({
                            title: '用户鉴权错误，请稍后再试',
                            icon: 'none',
                            duration: 3000
                        });
                        index_1.login();
                        return;
                    }
                    else {
                        wx.showToast({
                            title: '网络错误',
                            icon: 'none',
                            duration: 2000
                        });
                    }
                },
                fail: function (e) {
                    wx.showToast({
                        title: '网络错误',
                        icon: 'none',
                        duration: 2000
                    });
                    reject(e);
                } }));
        }).catch(reject);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImh0dHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUVBLElBQU0sT0FBTyxHQUFHLDRCQUE0QixDQUFBO0FBQzVDLDBDQUFvQztBQUNwQyxpQ0FBK0I7QUFHL0IsU0FBUyxRQUFRLENBQUMsT0FBaUI7SUFDakMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1FBQ2pDLElBQUksT0FBTyxFQUFDO1lBQ1YsT0FBTyxPQUFPLEVBQUUsQ0FBQTtTQUNqQjtRQUNELElBQUk7WUFDRixJQUFNLEtBQUssR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQ3hDLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDN0IsR0FBRyxHQUFHLGdCQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ3hCLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7WUFDOUQsSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUN6QixJQUFNLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFBO1lBQ2hDLElBQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFBO1lBQ3hCLElBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7Z0JBQy9CLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO2FBQ3RCO2lCQUFNO2dCQUNMLGFBQUssRUFBRSxDQUFDLElBQUksQ0FBRSxVQUFBLENBQUM7b0JBQ2IsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQ25CLENBQUMsQ0FBQyxDQUFBO2FBQ0g7U0FDRjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO1lBQy9CLGFBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7Z0JBQ1osT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ1osQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1NBQ2pCO0lBQ0gsQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDO0FBRUQsbUJBQWUsVUFBQyxNQUF1QyxFQUFFLE9BQWlCO0lBQ3hFLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtRQUNqQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsS0FBSztZQUMzQixFQUFFLENBQUMsT0FBTyx1QkFDTCxNQUFNLEtBQ1QsR0FBRyxFQUFFLE9BQU8sR0FBRyxNQUFNLENBQUMsR0FBRyxFQUN6QixNQUFNLEVBQUM7b0JBQ0wsYUFBYSxFQUFFLEtBQUs7aUJBQ3JCLEVBQ0QsT0FBTyxFQUFQLFVBQVEsR0FBRztvQkFDVCxJQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBMkIsQ0FBQTtvQkFDNUMsSUFBRyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBQzt3QkFDaEIsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO3FCQUMxQjt5QkFBSyxJQUFHLElBQUksQ0FBQyxJQUFJLElBQUksS0FBSyxFQUFDO3dCQUMxQixFQUFFLENBQUMsU0FBUyxDQUFDOzRCQUNYLEtBQUssRUFBRSxjQUFjOzRCQUNyQixJQUFJLEVBQUUsTUFBTTs0QkFDWixRQUFRLEVBQUUsSUFBSTt5QkFDZixDQUFDLENBQUE7d0JBQ0YsYUFBSyxFQUFFLENBQUE7d0JBQ1AsT0FBTTtxQkFDUDt5QkFBSTt3QkFDSCxFQUFFLENBQUMsU0FBUyxDQUFDOzRCQUNYLEtBQUssRUFBRSxNQUFNOzRCQUNiLElBQUksRUFBRSxNQUFNOzRCQUNaLFFBQVEsRUFBRSxJQUFJO3lCQUNmLENBQUMsQ0FBQTtxQkFDSDtnQkFDSCxDQUFDO2dCQUNELElBQUksWUFBQyxDQUFDO29CQUNKLEVBQUUsQ0FBQyxTQUFTLENBQUM7d0JBQ1gsS0FBSyxFQUFFLE1BQU07d0JBQ2IsSUFBSSxFQUFFLE1BQU07d0JBQ1osUUFBUSxFQUFFLElBQUk7cUJBQ2YsQ0FBQyxDQUFBO29CQUNGLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFDWCxDQUFDLElBQ0QsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUVsQixDQUFDLENBQUMsQ0FBQTtBQUVKLENBQUMsRUFBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IEJhc2VVcmwgPSAnaHR0cDovLzE3Mi4xNy4xMy4xODc6NTAwMCdcclxuLy8gY29uc3QgQmFzZVVybCA9ICdodHRwOi8vbG9jYWxob3N0OjUwMDAnXHJcbmNvbnN0IEJhc2VVcmwgPSAnaHR0cDovLzE3Mi4xNi4xNTEuMTYxOjUwMDAnXHJcbmltcG9ydCBCYXNlNjQgZnJvbSAnLi4vdXRpbHMvYmFzZTY0J1xyXG5pbXBvcnQgeyBsb2dpbiB9IGZyb20gJy4vaW5kZXgnXHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0VG9rZW4obm9Ub2tlbj86IGJvb2xlYW4pOiBQcm9taXNlPHN0cmluZz57XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XHJcbiAgICBpZiAobm9Ub2tlbil7XHJcbiAgICAgIHJldHVybiByZXNvbHZlKClcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHRva2VuID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuJylcclxuICAgICAgbGV0IHN0ciA9IHRva2VuLnNwbGl0KCcuJylbMV1cclxuICAgICAgc3RyID0gQmFzZTY0LmRlY29kZShzdHIpXHJcbiAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoU3RyaW5nLmZyb21DaGFyQ29kZSgwKSwgXCJnXCIpLCBcIlwiKVxyXG4gICAgICBjb25zdCBqID0gSlNPTi5wYXJzZShzdHIpXHJcbiAgICAgIGNvbnN0IGN1ciA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXHJcbiAgICAgIGNvbnN0IGV4cCA9IGouZXhwICogMTAwMFxyXG4gICAgICBpZigoZXhwIC0gY3VyKSA+IDEwMDAgKiA2MCAqIDEwICl7XHJcbiAgICAgICAgcmV0dXJuIHJlc29sdmUodG9rZW4pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbG9naW4oKS50aGVuKCB0ID0+IHtcclxuICAgICAgICAgIHJldHVybiByZXNvbHZlKHQpXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coJ3Rva2VuIOino+aekOWksei0pSwg6Ieq5Yqo55m75b2VJylcclxuICAgICAgbG9naW4oKS50aGVuKHQgPT4ge1xyXG4gICAgICAgIHJlc29sdmUodClcclxuICAgICAgfSkuY2F0Y2gocmVqZWN0KVxyXG4gICAgfSAgICBcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAob3B0aW9uOiBXZWNoYXRNaW5pcHJvZ3JhbS5SZXF1ZXN0T3B0aW9uLCBub1Rva2VuPzogYm9vbGVhbik6IFByb21pc2U8YW55PiA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XHJcbiAgICBnZXRUb2tlbihub1Rva2VuKS50aGVuKCh0b2tlbik9PntcclxuICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgLi4ub3B0aW9uLFxyXG4gICAgICAgIHVybDogQmFzZVVybCArIG9wdGlvbi51cmwsXHJcbiAgICAgICAgaGVhZGVyOntcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246IHRva2VuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzKHJlcyl7XHJcbiAgICAgICAgICBjb25zdCBkYXRhID0gcmVzLmRhdGEgYXMgUmVjb3JkPHN0cmluZywgYW55PlxyXG4gICAgICAgICAgaWYoZGF0YS5jb2RlID09IDApe1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShkYXRhLmRhdGEpXHJcbiAgICAgICAgICB9ZWxzZSBpZihkYXRhLmNvZGUgPT0gMTAwMDIpe1xyXG4gICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgIHRpdGxlOiAn55So5oi36Ym05p2D6ZSZ6K+v77yM6K+356iN5ZCO5YaN6K+VJyxcclxuICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgZHVyYXRpb246IDMwMDBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgbG9naW4oKVxyXG4gICAgICAgICAgICByZXR1cm4gXHJcbiAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICB0aXRsZTogJ+e9kee7nOmUmeivrycsXHJcbiAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxyXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICAgICAgICAgIH0pICAgICAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFpbChlKXtcclxuICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn572R57uc6ZSZ6K+vJyxcclxuICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJlamVjdChlKVxyXG4gICAgICAgIH1cclxuICAgICAgfSkgICAgICAgIFxyXG4gICAgfSkuY2F0Y2gocmVqZWN0KVxyXG4gXHJcbiAgfSlcclxuXHJcbn1cclxuIl19