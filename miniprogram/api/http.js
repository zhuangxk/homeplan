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
var BaseUrl = 'http://172.17.13.187:5000';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImh0dHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLElBQU0sT0FBTyxHQUFHLDJCQUEyQixDQUFBO0FBQzNDLDBDQUFvQztBQUNwQyxpQ0FBK0I7QUFHL0IsU0FBUyxRQUFRLENBQUMsT0FBaUI7SUFDakMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1FBQ2pDLElBQUksT0FBTyxFQUFDO1lBQ1YsT0FBTyxPQUFPLEVBQUUsQ0FBQTtTQUNqQjtRQUNELElBQUk7WUFDRixJQUFNLEtBQUssR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQ3hDLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDN0IsR0FBRyxHQUFHLGdCQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ3hCLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7WUFDOUQsSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUN6QixJQUFNLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFBO1lBQ2hDLElBQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFBO1lBQ3hCLElBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7Z0JBQy9CLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO2FBQ3RCO2lCQUFNO2dCQUNMLGFBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLENBQU07b0JBQ2xCLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUNuQixDQUFDLENBQUMsQ0FBQTthQUNIO1NBQ0Y7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtZQUMvQixhQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFNO2dCQUNsQixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDWixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7U0FDakI7SUFDSCxDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUM7QUFFRCxtQkFBZSxVQUFDLE1BQXVDLEVBQUUsT0FBaUI7SUFDeEUsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1FBQ2pDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxLQUFLO1lBQzNCLEVBQUUsQ0FBQyxPQUFPLHVCQUNMLE1BQU0sS0FDVCxHQUFHLEVBQUUsT0FBTyxHQUFHLE1BQU0sQ0FBQyxHQUFHLEVBQ3pCLE1BQU0sRUFBQztvQkFDTCxhQUFhLEVBQUUsS0FBSztpQkFDckIsRUFDRCxPQUFPLEVBQVAsVUFBUSxHQUFHO29CQUNULElBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUEyQixDQUFBO29CQUM1QyxJQUFHLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFDO3dCQUNoQixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7cUJBQzFCO3lCQUFLLElBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxLQUFLLEVBQUM7d0JBQzFCLEVBQUUsQ0FBQyxTQUFTLENBQUM7NEJBQ1gsS0FBSyxFQUFFLGNBQWM7NEJBQ3JCLElBQUksRUFBRSxNQUFNOzRCQUNaLFFBQVEsRUFBRSxJQUFJO3lCQUNmLENBQUMsQ0FBQTt3QkFDRixhQUFLLEVBQUUsQ0FBQTt3QkFDUCxPQUFNO3FCQUNQO3lCQUFJO3dCQUNILEVBQUUsQ0FBQyxTQUFTLENBQUM7NEJBQ1gsS0FBSyxFQUFFLE1BQU07NEJBQ2IsSUFBSSxFQUFFLE1BQU07NEJBQ1osUUFBUSxFQUFFLElBQUk7eUJBQ2YsQ0FBQyxDQUFBO3FCQUNIO2dCQUNILENBQUM7Z0JBQ0QsSUFBSSxZQUFDLENBQUM7b0JBQ0osRUFBRSxDQUFDLFNBQVMsQ0FBQzt3QkFDWCxLQUFLLEVBQUUsTUFBTTt3QkFDYixJQUFJLEVBQUUsTUFBTTt3QkFDWixRQUFRLEVBQUUsSUFBSTtxQkFDZixDQUFDLENBQUE7b0JBQ0YsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUNYLENBQUMsSUFDRCxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBRWxCLENBQUMsQ0FBQyxDQUFBO0FBRUosQ0FBQyxFQUFBIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQmFzZVVybCA9ICdodHRwOi8vMTcyLjE3LjEzLjE4Nzo1MDAwJ1xyXG5pbXBvcnQgQmFzZTY0IGZyb20gJy4uL3V0aWxzL2Jhc2U2NCdcclxuaW1wb3J0IHsgbG9naW4gfSBmcm9tICcuL2luZGV4J1xyXG5cclxuXHJcbmZ1bmN0aW9uIGdldFRva2VuKG5vVG9rZW4/OiBib29sZWFuKTogUHJvbWlzZTxGdW5jdGlvbj57XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XHJcbiAgICBpZiAobm9Ub2tlbil7XHJcbiAgICAgIHJldHVybiByZXNvbHZlKClcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHRva2VuID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuJylcclxuICAgICAgbGV0IHN0ciA9IHRva2VuLnNwbGl0KCcuJylbMV1cclxuICAgICAgc3RyID0gQmFzZTY0LmRlY29kZShzdHIpXHJcbiAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoU3RyaW5nLmZyb21DaGFyQ29kZSgwKSwgXCJnXCIpLCBcIlwiKVxyXG4gICAgICBjb25zdCBqID0gSlNPTi5wYXJzZShzdHIpXHJcbiAgICAgIGNvbnN0IGN1ciA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXHJcbiAgICAgIGNvbnN0IGV4cCA9IGouZXhwICogMTAwMFxyXG4gICAgICBpZigoZXhwIC0gY3VyKSA+IDEwMDAgKiA2MCAqIDEwICl7XHJcbiAgICAgICAgcmV0dXJuIHJlc29sdmUodG9rZW4pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbG9naW4oKS50aGVuKCh0OiBhbnkpID0+IHtcclxuICAgICAgICAgIHJldHVybiByZXNvbHZlKHQpXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coJ3Rva2VuIOino+aekOWksei0pSwg6Ieq5Yqo55m75b2VJylcclxuICAgICAgbG9naW4oKS50aGVuKCh0OiBhbnkpID0+IHtcclxuICAgICAgICByZXNvbHZlKHQpXHJcbiAgICAgIH0pLmNhdGNoKHJlamVjdClcclxuICAgIH0gICAgXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKG9wdGlvbjogV2VjaGF0TWluaXByb2dyYW0uUmVxdWVzdE9wdGlvbiwgbm9Ub2tlbj86IGJvb2xlYW4pOiBQcm9taXNlPEZ1bmN0aW9uPiA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XHJcbiAgICBnZXRUb2tlbihub1Rva2VuKS50aGVuKCh0b2tlbik9PntcclxuICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgLi4ub3B0aW9uLFxyXG4gICAgICAgIHVybDogQmFzZVVybCArIG9wdGlvbi51cmwsXHJcbiAgICAgICAgaGVhZGVyOntcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246IHRva2VuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzKHJlcyl7XHJcbiAgICAgICAgICBjb25zdCBkYXRhID0gcmVzLmRhdGEgYXMgUmVjb3JkPHN0cmluZywgYW55PlxyXG4gICAgICAgICAgaWYoZGF0YS5jb2RlID09IDApe1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShkYXRhLmRhdGEpXHJcbiAgICAgICAgICB9ZWxzZSBpZihkYXRhLmNvZGUgPT0gMTAwMDIpe1xyXG4gICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgIHRpdGxlOiAn55So5oi36Ym05p2D6ZSZ6K+v77yM6K+356iN5ZCO5YaN6K+VJyxcclxuICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgZHVyYXRpb246IDMwMDBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgbG9naW4oKVxyXG4gICAgICAgICAgICByZXR1cm4gXHJcbiAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICB0aXRsZTogJ+e9kee7nOmUmeivrycsXHJcbiAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxyXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICAgICAgICAgIH0pICAgICAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFpbChlKXtcclxuICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn572R57uc6ZSZ6K+vJyxcclxuICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJlamVjdChlKVxyXG4gICAgICAgIH1cclxuICAgICAgfSkgICAgICAgIFxyXG4gICAgfSkuY2F0Y2gocmVqZWN0KVxyXG4gXHJcbiAgfSlcclxuXHJcbn1cclxuIl19