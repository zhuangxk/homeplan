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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImh0dHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLElBQU0sT0FBTyxHQUFHLHVCQUF1QixDQUFBO0FBQ3ZDLDBDQUFvQztBQUNwQyxpQ0FBK0I7QUFHL0IsU0FBUyxRQUFRLENBQUMsT0FBaUI7SUFDakMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1FBQ2pDLElBQUksT0FBTyxFQUFDO1lBQ1YsT0FBTyxPQUFPLEVBQUUsQ0FBQTtTQUNqQjtRQUNELElBQUk7WUFDRixJQUFNLEtBQUssR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQ3hDLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDN0IsR0FBRyxHQUFHLGdCQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ3hCLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7WUFDOUQsSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUN6QixJQUFNLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFBO1lBQ2hDLElBQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFBO1lBQ3hCLElBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7Z0JBQy9CLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO2FBQ3RCO2lCQUFNO2dCQUNMLGFBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLENBQU07b0JBQ2xCLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUNuQixDQUFDLENBQUMsQ0FBQTthQUNIO1NBQ0Y7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtZQUMvQixhQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFNO2dCQUNsQixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDWixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7U0FDakI7SUFDSCxDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUM7QUFFRCxtQkFBZSxVQUFDLE1BQXVDLEVBQUUsT0FBaUI7SUFDeEUsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1FBQ2pDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxLQUFLO1lBQzNCLEVBQUUsQ0FBQyxPQUFPLHVCQUNMLE1BQU0sS0FDVCxHQUFHLEVBQUUsT0FBTyxHQUFHLE1BQU0sQ0FBQyxHQUFHLEVBQ3pCLE1BQU0sRUFBQztvQkFDTCxhQUFhLEVBQUUsS0FBSztpQkFDckIsRUFDRCxPQUFPLEVBQVAsVUFBUSxHQUFHO29CQUNULElBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUEyQixDQUFBO29CQUM1QyxJQUFHLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFDO3dCQUNoQixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7cUJBQzFCO3lCQUFLLElBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxLQUFLLEVBQUM7d0JBQzFCLEVBQUUsQ0FBQyxTQUFTLENBQUM7NEJBQ1gsS0FBSyxFQUFFLGNBQWM7NEJBQ3JCLElBQUksRUFBRSxNQUFNOzRCQUNaLFFBQVEsRUFBRSxJQUFJO3lCQUNmLENBQUMsQ0FBQTt3QkFDRixhQUFLLEVBQUUsQ0FBQTt3QkFDUCxPQUFNO3FCQUNQO3lCQUFJO3dCQUNILEVBQUUsQ0FBQyxTQUFTLENBQUM7NEJBQ1gsS0FBSyxFQUFFLE1BQU07NEJBQ2IsSUFBSSxFQUFFLE1BQU07NEJBQ1osUUFBUSxFQUFFLElBQUk7eUJBQ2YsQ0FBQyxDQUFBO3FCQUNIO2dCQUNILENBQUM7Z0JBQ0QsSUFBSSxZQUFDLENBQUM7b0JBQ0osRUFBRSxDQUFDLFNBQVMsQ0FBQzt3QkFDWCxLQUFLLEVBQUUsTUFBTTt3QkFDYixJQUFJLEVBQUUsTUFBTTt3QkFDWixRQUFRLEVBQUUsSUFBSTtxQkFDZixDQUFDLENBQUE7b0JBQ0YsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUNYLENBQUMsSUFDRCxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBRWxCLENBQUMsQ0FBQyxDQUFBO0FBRUosQ0FBQyxFQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29uc3QgQmFzZVVybCA9ICdodHRwOi8vMTcyLjE3LjEzLjE4Nzo1MDAwJ1xyXG5jb25zdCBCYXNlVXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMCdcclxuaW1wb3J0IEJhc2U2NCBmcm9tICcuLi91dGlscy9iYXNlNjQnXHJcbmltcG9ydCB7IGxvZ2luIH0gZnJvbSAnLi9pbmRleCdcclxuXHJcblxyXG5mdW5jdGlvbiBnZXRUb2tlbihub1Rva2VuPzogYm9vbGVhbik6IFByb21pc2U8RnVuY3Rpb24+e1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xyXG4gICAgaWYgKG5vVG9rZW4pe1xyXG4gICAgICByZXR1cm4gcmVzb2x2ZSgpXHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB0b2tlbiA9IHd4LmdldFN0b3JhZ2VTeW5jKCd0b2tlbicpXHJcbiAgICAgIGxldCBzdHIgPSB0b2tlbi5zcGxpdCgnLicpWzFdXHJcbiAgICAgIHN0ciA9IEJhc2U2NC5kZWNvZGUoc3RyKVxyXG4gICAgICBzdHIgPSBzdHIucmVwbGFjZShuZXcgUmVnRXhwKFN0cmluZy5mcm9tQ2hhckNvZGUoMCksIFwiZ1wiKSwgXCJcIilcclxuICAgICAgY29uc3QgaiA9IEpTT04ucGFyc2Uoc3RyKVxyXG4gICAgICBjb25zdCBjdXIgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxyXG4gICAgICBjb25zdCBleHAgPSBqLmV4cCAqIDEwMDBcclxuICAgICAgaWYoKGV4cCAtIGN1cikgPiAxMDAwICogNjAgKiAxMCApe1xyXG4gICAgICAgIHJldHVybiByZXNvbHZlKHRva2VuKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxvZ2luKCkudGhlbigodDogYW55KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0KVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCd0b2tlbiDop6PmnpDlpLHotKUsIOiHquWKqOeZu+W9lScpXHJcbiAgICAgIGxvZ2luKCkudGhlbigodDogYW55KSA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZSh0KVxyXG4gICAgICB9KS5jYXRjaChyZWplY3QpXHJcbiAgICB9ICAgIFxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IChvcHRpb246IFdlY2hhdE1pbmlwcm9ncmFtLlJlcXVlc3RPcHRpb24sIG5vVG9rZW4/OiBib29sZWFuKTogUHJvbWlzZTxGdW5jdGlvbj4gPT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xyXG4gICAgZ2V0VG9rZW4obm9Ub2tlbikudGhlbigodG9rZW4pPT57XHJcbiAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgIC4uLm9wdGlvbixcclxuICAgICAgICB1cmw6IEJhc2VVcmwgKyBvcHRpb24udXJsLFxyXG4gICAgICAgIGhlYWRlcjp7XHJcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiB0b2tlblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzcyhyZXMpe1xyXG4gICAgICAgICAgY29uc3QgZGF0YSA9IHJlcy5kYXRhIGFzIFJlY29yZDxzdHJpbmcsIGFueT5cclxuICAgICAgICAgIGlmKGRhdGEuY29kZSA9PSAwKXtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZGF0YS5kYXRhKVxyXG4gICAgICAgICAgfWVsc2UgaWYoZGF0YS5jb2RlID09IDEwMDAyKXtcclxuICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICB0aXRsZTogJ+eUqOaIt+mJtOadg+mUmeivr++8jOivt+eojeWQjuWGjeivlScsXHJcbiAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxyXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGxvZ2luKClcclxuICAgICAgICAgICAgcmV0dXJuIFxyXG4gICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgdGl0bGU6ICfnvZHnu5zplJnor68nLFxyXG4gICAgICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgICAgICAgICB9KSAgICAgICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWwoZSl7XHJcbiAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICB0aXRsZTogJ+e9kee7nOmUmeivrycsXHJcbiAgICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZWplY3QoZSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pICAgICAgICBcclxuICAgIH0pLmNhdGNoKHJlamVjdClcclxuIFxyXG4gIH0pXHJcblxyXG59XHJcbiJdfQ==