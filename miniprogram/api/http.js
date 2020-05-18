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
var BaseUrl = 'http://localhost:5000';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImh0dHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLElBQU0sT0FBTyxHQUFHLHVCQUF1QixDQUFBO0FBRXZDLDBDQUFvQztBQUNwQyxpQ0FBK0I7QUFHL0IsU0FBUyxRQUFRLENBQUMsT0FBaUI7SUFDakMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1FBQ2pDLElBQUksT0FBTyxFQUFDO1lBQ1YsT0FBTyxPQUFPLEVBQUUsQ0FBQTtTQUNqQjtRQUNELElBQUk7WUFDRixJQUFNLEtBQUssR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQ3hDLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDN0IsR0FBRyxHQUFHLGdCQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ3hCLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7WUFDOUQsSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUN6QixJQUFNLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFBO1lBQ2hDLElBQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFBO1lBQ3hCLElBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7Z0JBQy9CLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO2FBQ3RCO2lCQUFNO2dCQUNMLGFBQUssRUFBRSxDQUFDLElBQUksQ0FBRSxVQUFBLENBQUM7b0JBQ2IsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQ25CLENBQUMsQ0FBQyxDQUFBO2FBQ0g7U0FDRjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO1lBQy9CLGFBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7Z0JBQ1osT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ1osQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1NBQ2pCO0lBQ0gsQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDO0FBRUQsbUJBQWUsVUFBQyxNQUF1QyxFQUFFLE9BQWlCO0lBQ3hFLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtRQUNqQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsS0FBSztZQUMzQixFQUFFLENBQUMsT0FBTyx1QkFDTCxNQUFNLEtBQ1QsR0FBRyxFQUFFLE9BQU8sR0FBRyxNQUFNLENBQUMsR0FBRyxFQUN6QixNQUFNLEVBQUM7b0JBQ0wsYUFBYSxFQUFFLEtBQUs7aUJBQ3JCLEVBQ0QsT0FBTyxFQUFQLFVBQVEsR0FBRztvQkFDVCxJQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBMkIsQ0FBQTtvQkFDNUMsSUFBRyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBQzt3QkFDaEIsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO3FCQUMxQjt5QkFBSyxJQUFHLElBQUksQ0FBQyxJQUFJLElBQUksS0FBSyxFQUFDO3dCQUMxQixFQUFFLENBQUMsU0FBUyxDQUFDOzRCQUNYLEtBQUssRUFBRSxjQUFjOzRCQUNyQixJQUFJLEVBQUUsTUFBTTs0QkFDWixRQUFRLEVBQUUsSUFBSTt5QkFDZixDQUFDLENBQUE7d0JBQ0YsYUFBSyxFQUFFLENBQUE7d0JBQ1AsT0FBTTtxQkFDUDt5QkFBSTt3QkFDSCxFQUFFLENBQUMsU0FBUyxDQUFDOzRCQUNYLEtBQUssRUFBRSxNQUFNOzRCQUNiLElBQUksRUFBRSxNQUFNOzRCQUNaLFFBQVEsRUFBRSxJQUFJO3lCQUNmLENBQUMsQ0FBQTtxQkFDSDtnQkFDSCxDQUFDO2dCQUNELElBQUksWUFBQyxDQUFDO29CQUNKLEVBQUUsQ0FBQyxTQUFTLENBQUM7d0JBQ1gsS0FBSyxFQUFFLE1BQU07d0JBQ2IsSUFBSSxFQUFFLE1BQU07d0JBQ1osUUFBUSxFQUFFLElBQUk7cUJBQ2YsQ0FBQyxDQUFBO29CQUNGLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFDWCxDQUFDLElBQ0QsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUVsQixDQUFDLENBQUMsQ0FBQTtBQUVKLENBQUMsRUFBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IEJhc2VVcmwgPSAnaHR0cDovLzE3Mi4xNy4xMy4xODc6NTAwMCdcclxuY29uc3QgQmFzZVVybCA9ICdodHRwOi8vbG9jYWxob3N0OjUwMDAnXHJcbi8vIGNvbnN0IEJhc2VVcmwgPSAnaHR0cDovLzE5Mi4xNjguMS41MDo1MDAwJ1xyXG5pbXBvcnQgQmFzZTY0IGZyb20gJy4uL3V0aWxzL2Jhc2U2NCdcclxuaW1wb3J0IHsgbG9naW4gfSBmcm9tICcuL2luZGV4J1xyXG5cclxuXHJcbmZ1bmN0aW9uIGdldFRva2VuKG5vVG9rZW4/OiBib29sZWFuKTogUHJvbWlzZTxzdHJpbmc+e1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xyXG4gICAgaWYgKG5vVG9rZW4pe1xyXG4gICAgICByZXR1cm4gcmVzb2x2ZSgpXHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB0b2tlbiA9IHd4LmdldFN0b3JhZ2VTeW5jKCd0b2tlbicpXHJcbiAgICAgIGxldCBzdHIgPSB0b2tlbi5zcGxpdCgnLicpWzFdXHJcbiAgICAgIHN0ciA9IEJhc2U2NC5kZWNvZGUoc3RyKVxyXG4gICAgICBzdHIgPSBzdHIucmVwbGFjZShuZXcgUmVnRXhwKFN0cmluZy5mcm9tQ2hhckNvZGUoMCksIFwiZ1wiKSwgXCJcIilcclxuICAgICAgY29uc3QgaiA9IEpTT04ucGFyc2Uoc3RyKVxyXG4gICAgICBjb25zdCBjdXIgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxyXG4gICAgICBjb25zdCBleHAgPSBqLmV4cCAqIDEwMDBcclxuICAgICAgaWYoKGV4cCAtIGN1cikgPiAxMDAwICogNjAgKiAxMCApe1xyXG4gICAgICAgIHJldHVybiByZXNvbHZlKHRva2VuKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxvZ2luKCkudGhlbiggdCA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0KVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCd0b2tlbiDop6PmnpDlpLHotKUsIOiHquWKqOeZu+W9lScpXHJcbiAgICAgIGxvZ2luKCkudGhlbih0ID0+IHtcclxuICAgICAgICByZXNvbHZlKHQpXHJcbiAgICAgIH0pLmNhdGNoKHJlamVjdClcclxuICAgIH0gICAgXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKG9wdGlvbjogV2VjaGF0TWluaXByb2dyYW0uUmVxdWVzdE9wdGlvbiwgbm9Ub2tlbj86IGJvb2xlYW4pOiBQcm9taXNlPGFueT4gPT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xyXG4gICAgZ2V0VG9rZW4obm9Ub2tlbikudGhlbigodG9rZW4pPT57XHJcbiAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgIC4uLm9wdGlvbixcclxuICAgICAgICB1cmw6IEJhc2VVcmwgKyBvcHRpb24udXJsLFxyXG4gICAgICAgIGhlYWRlcjp7XHJcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiB0b2tlblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzcyhyZXMpe1xyXG4gICAgICAgICAgY29uc3QgZGF0YSA9IHJlcy5kYXRhIGFzIFJlY29yZDxzdHJpbmcsIGFueT5cclxuICAgICAgICAgIGlmKGRhdGEuY29kZSA9PSAwKXtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZGF0YS5kYXRhKVxyXG4gICAgICAgICAgfWVsc2UgaWYoZGF0YS5jb2RlID09IDEwMDAyKXtcclxuICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICB0aXRsZTogJ+eUqOaIt+mJtOadg+mUmeivr++8jOivt+eojeWQjuWGjeivlScsXHJcbiAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxyXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGxvZ2luKClcclxuICAgICAgICAgICAgcmV0dXJuIFxyXG4gICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgdGl0bGU6ICfnvZHnu5zplJnor68nLFxyXG4gICAgICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgICAgICAgICB9KSAgICAgICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWwoZSl7XHJcbiAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICB0aXRsZTogJ+e9kee7nOmUmeivrycsXHJcbiAgICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZWplY3QoZSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pICAgICAgICBcclxuICAgIH0pLmNhdGNoKHJlamVjdClcclxuIFxyXG4gIH0pXHJcblxyXG59XHJcbiJdfQ==