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
var BaseUrl = 'http://192.168.0.107:5000';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImh0dHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUVBLElBQU0sT0FBTyxHQUFHLDJCQUEyQixDQUFBO0FBQzNDLDBDQUFvQztBQUNwQyxpQ0FBK0I7QUFHL0IsU0FBUyxRQUFRLENBQUMsT0FBaUI7SUFDakMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1FBQ2pDLElBQUksT0FBTyxFQUFDO1lBQ1YsT0FBTyxPQUFPLEVBQUUsQ0FBQTtTQUNqQjtRQUNELElBQUk7WUFDRixJQUFNLEtBQUssR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQ3hDLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDN0IsR0FBRyxHQUFHLGdCQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ3hCLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7WUFDOUQsSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUN6QixJQUFNLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFBO1lBQ2hDLElBQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFBO1lBQ3hCLElBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7Z0JBQy9CLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO2FBQ3RCO2lCQUFNO2dCQUNMLGFBQUssRUFBRSxDQUFDLElBQUksQ0FBRSxVQUFBLENBQUM7b0JBQ2IsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQ25CLENBQUMsQ0FBQyxDQUFBO2FBQ0g7U0FDRjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO1lBQy9CLGFBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7Z0JBQ1osT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ1osQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1NBQ2pCO0lBQ0gsQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDO0FBRUQsbUJBQWUsVUFBQyxNQUF1QyxFQUFFLE9BQWlCO0lBQ3hFLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtRQUNqQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsS0FBSztZQUMzQixFQUFFLENBQUMsT0FBTyx1QkFDTCxNQUFNLEtBQ1QsR0FBRyxFQUFFLE9BQU8sR0FBRyxNQUFNLENBQUMsR0FBRyxFQUN6QixNQUFNLEVBQUM7b0JBQ0wsYUFBYSxFQUFFLEtBQUs7aUJBQ3JCLEVBQ0QsT0FBTyxFQUFQLFVBQVEsR0FBRztvQkFDVCxJQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBMkIsQ0FBQTtvQkFDNUMsSUFBRyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBQzt3QkFDaEIsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO3FCQUMxQjt5QkFBSyxJQUFHLElBQUksQ0FBQyxJQUFJLElBQUksS0FBSyxFQUFDO3dCQUMxQixFQUFFLENBQUMsU0FBUyxDQUFDOzRCQUNYLEtBQUssRUFBRSxjQUFjOzRCQUNyQixJQUFJLEVBQUUsTUFBTTs0QkFDWixRQUFRLEVBQUUsSUFBSTt5QkFDZixDQUFDLENBQUE7d0JBQ0YsYUFBSyxFQUFFLENBQUE7d0JBQ1AsT0FBTTtxQkFDUDt5QkFBSTt3QkFDSCxFQUFFLENBQUMsU0FBUyxDQUFDOzRCQUNYLEtBQUssRUFBRSxNQUFNOzRCQUNiLElBQUksRUFBRSxNQUFNOzRCQUNaLFFBQVEsRUFBRSxJQUFJO3lCQUNmLENBQUMsQ0FBQTtxQkFDSDtnQkFDSCxDQUFDO2dCQUNELElBQUksWUFBQyxDQUFDO29CQUNKLEVBQUUsQ0FBQyxTQUFTLENBQUM7d0JBQ1gsS0FBSyxFQUFFLE1BQU07d0JBQ2IsSUFBSSxFQUFFLE1BQU07d0JBQ1osUUFBUSxFQUFFLElBQUk7cUJBQ2YsQ0FBQyxDQUFBO29CQUNGLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFDWCxDQUFDLElBQ0QsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUVsQixDQUFDLENBQUMsQ0FBQTtBQUVKLENBQUMsRUFBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IEJhc2VVcmwgPSAnaHR0cDovLzE3Mi4xNy4xMy4xODc6NTAwMCdcclxuLy8gY29uc3QgQmFzZVVybCA9ICdodHRwOi8vbG9jYWxob3N0OjUwMDAnXHJcbmNvbnN0IEJhc2VVcmwgPSAnaHR0cDovLzE5Mi4xNjguMC4xMDc6NTAwMCdcclxuaW1wb3J0IEJhc2U2NCBmcm9tICcuLi91dGlscy9iYXNlNjQnXHJcbmltcG9ydCB7IGxvZ2luIH0gZnJvbSAnLi9pbmRleCdcclxuXHJcblxyXG5mdW5jdGlvbiBnZXRUb2tlbihub1Rva2VuPzogYm9vbGVhbik6IFByb21pc2U8c3RyaW5nPntcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcclxuICAgIGlmIChub1Rva2VuKXtcclxuICAgICAgcmV0dXJuIHJlc29sdmUoKVxyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdG9rZW4gPSB3eC5nZXRTdG9yYWdlU3luYygndG9rZW4nKVxyXG4gICAgICBsZXQgc3RyID0gdG9rZW4uc3BsaXQoJy4nKVsxXVxyXG4gICAgICBzdHIgPSBCYXNlNjQuZGVjb2RlKHN0cilcclxuICAgICAgc3RyID0gc3RyLnJlcGxhY2UobmV3IFJlZ0V4cChTdHJpbmcuZnJvbUNoYXJDb2RlKDApLCBcImdcIiksIFwiXCIpXHJcbiAgICAgIGNvbnN0IGogPSBKU09OLnBhcnNlKHN0cilcclxuICAgICAgY29uc3QgY3VyID0gbmV3IERhdGUoKS5nZXRUaW1lKClcclxuICAgICAgY29uc3QgZXhwID0gai5leHAgKiAxMDAwXHJcbiAgICAgIGlmKChleHAgLSBjdXIpID4gMTAwMCAqIDYwICogMTAgKXtcclxuICAgICAgICByZXR1cm4gcmVzb2x2ZSh0b2tlbilcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsb2dpbigpLnRoZW4oIHQgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUodClcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZygndG9rZW4g6Kej5p6Q5aSx6LSlLCDoh6rliqjnmbvlvZUnKVxyXG4gICAgICBsb2dpbigpLnRoZW4odCA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZSh0KVxyXG4gICAgICB9KS5jYXRjaChyZWplY3QpXHJcbiAgICB9ICAgIFxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IChvcHRpb246IFdlY2hhdE1pbmlwcm9ncmFtLlJlcXVlc3RPcHRpb24sIG5vVG9rZW4/OiBib29sZWFuKTogUHJvbWlzZTxhbnk+ID0+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcclxuICAgIGdldFRva2VuKG5vVG9rZW4pLnRoZW4oKHRva2VuKT0+e1xyXG4gICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAuLi5vcHRpb24sXHJcbiAgICAgICAgdXJsOiBCYXNlVXJsICsgb3B0aW9uLnVybCxcclxuICAgICAgICBoZWFkZXI6e1xyXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW5cclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3MocmVzKXtcclxuICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXMuZGF0YSBhcyBSZWNvcmQ8c3RyaW5nLCBhbnk+XHJcbiAgICAgICAgICBpZihkYXRhLmNvZGUgPT0gMCl7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGRhdGEuZGF0YSlcclxuICAgICAgICAgIH1lbHNlIGlmKGRhdGEuY29kZSA9PSAxMDAwMil7XHJcbiAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgdGl0bGU6ICfnlKjmiLfpibTmnYPplJnor6/vvIzor7fnqI3lkI7lho3or5UnLFxyXG4gICAgICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgICAgICBkdXJhdGlvbjogMzAwMFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBsb2dpbigpXHJcbiAgICAgICAgICAgIHJldHVybiBcclxuICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgIHRpdGxlOiAn572R57uc6ZSZ6K+vJyxcclxuICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcclxuICAgICAgICAgICAgfSkgICAgICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWlsKGUpe1xyXG4gICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgdGl0bGU6ICfnvZHnu5zplJnor68nLFxyXG4gICAgICAgICAgICBpY29uOiAnbm9uZScsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmVqZWN0KGUpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSAgICAgICAgXHJcbiAgICB9KS5jYXRjaChyZWplY3QpXHJcbiBcclxuICB9KVxyXG5cclxufVxyXG4iXX0=