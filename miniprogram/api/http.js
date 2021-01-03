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
var BaseUrl = 'https://wxapi.toko.wang';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImh0dHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUVBLElBQU0sT0FBTyxHQUFHLHlCQUF5QixDQUFBO0FBQ3pDLDBDQUFvQztBQUNwQyxpQ0FBK0I7QUFHL0IsU0FBUyxRQUFRLENBQUMsT0FBaUI7SUFDakMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1FBQ2pDLElBQUksT0FBTyxFQUFDO1lBQ1YsT0FBTyxPQUFPLEVBQUUsQ0FBQTtTQUNqQjtRQUNELElBQUk7WUFDRixJQUFNLEtBQUssR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQ3hDLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDN0IsR0FBRyxHQUFHLGdCQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ3hCLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7WUFDOUQsSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUN6QixJQUFNLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFBO1lBQ2hDLElBQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFBO1lBQ3hCLElBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7Z0JBQy9CLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO2FBQ3RCO2lCQUFNO2dCQUNMLGFBQUssRUFBRSxDQUFDLElBQUksQ0FBRSxVQUFBLENBQUM7b0JBQ2IsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQ25CLENBQUMsQ0FBQyxDQUFBO2FBQ0g7U0FDRjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO1lBQy9CLGFBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7Z0JBQ1osT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ1osQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1NBQ2pCO0lBQ0gsQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDO0FBRUQsbUJBQWUsVUFBQyxNQUF1QyxFQUFFLE9BQWlCO0lBQ3hFLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtRQUNqQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsS0FBSztZQUMzQixFQUFFLENBQUMsT0FBTyx1QkFDTCxNQUFNLEtBQ1QsR0FBRyxFQUFFLE9BQU8sR0FBRyxNQUFNLENBQUMsR0FBRyxFQUN6QixNQUFNLEVBQUM7b0JBQ0wsYUFBYSxFQUFFLEtBQUs7aUJBQ3JCLEVBQ0QsT0FBTyxFQUFQLFVBQVEsR0FBRztvQkFDVCxJQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBMkIsQ0FBQTtvQkFDNUMsSUFBRyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBQzt3QkFDaEIsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO3FCQUMxQjt5QkFBSyxJQUFHLElBQUksQ0FBQyxJQUFJLElBQUksS0FBSyxFQUFDO3dCQUMxQixFQUFFLENBQUMsU0FBUyxDQUFDOzRCQUNYLEtBQUssRUFBRSxjQUFjOzRCQUNyQixJQUFJLEVBQUUsTUFBTTs0QkFDWixRQUFRLEVBQUUsSUFBSTt5QkFDZixDQUFDLENBQUE7d0JBQ0YsYUFBSyxFQUFFLENBQUE7d0JBQ1AsT0FBTTtxQkFDUDt5QkFBSTt3QkFDSCxFQUFFLENBQUMsU0FBUyxDQUFDOzRCQUNYLEtBQUssRUFBRSxNQUFNOzRCQUNiLElBQUksRUFBRSxNQUFNOzRCQUNaLFFBQVEsRUFBRSxJQUFJO3lCQUNmLENBQUMsQ0FBQTtxQkFDSDtnQkFDSCxDQUFDO2dCQUNELElBQUksWUFBQyxDQUFDO29CQUNKLEVBQUUsQ0FBQyxTQUFTLENBQUM7d0JBQ1gsS0FBSyxFQUFFLE1BQU07d0JBQ2IsSUFBSSxFQUFFLE1BQU07d0JBQ1osUUFBUSxFQUFFLElBQUk7cUJBQ2YsQ0FBQyxDQUFBO29CQUNGLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFDWCxDQUFDLElBQ0QsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUVsQixDQUFDLENBQUMsQ0FBQTtBQUVKLENBQUMsRUFBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IEJhc2VVcmwgPSAnaHR0cDovLzE3Mi4xNy4xMy4xODc6NTAwMCdcbi8vIGNvbnN0IEJhc2VVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDo1MDAwJ1xuY29uc3QgQmFzZVVybCA9ICdodHRwczovL3d4YXBpLnRva28ud2FuZydcbmltcG9ydCBCYXNlNjQgZnJvbSAnLi4vdXRpbHMvYmFzZTY0J1xuaW1wb3J0IHsgbG9naW4gfSBmcm9tICcuL2luZGV4J1xuXG5cbmZ1bmN0aW9uIGdldFRva2VuKG5vVG9rZW4/OiBib29sZWFuKTogUHJvbWlzZTxzdHJpbmc+e1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICBpZiAobm9Ub2tlbil7XG4gICAgICByZXR1cm4gcmVzb2x2ZSgpXG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBjb25zdCB0b2tlbiA9IHd4LmdldFN0b3JhZ2VTeW5jKCd0b2tlbicpXG4gICAgICBsZXQgc3RyID0gdG9rZW4uc3BsaXQoJy4nKVsxXVxuICAgICAgc3RyID0gQmFzZTY0LmRlY29kZShzdHIpXG4gICAgICBzdHIgPSBzdHIucmVwbGFjZShuZXcgUmVnRXhwKFN0cmluZy5mcm9tQ2hhckNvZGUoMCksIFwiZ1wiKSwgXCJcIilcbiAgICAgIGNvbnN0IGogPSBKU09OLnBhcnNlKHN0cilcbiAgICAgIGNvbnN0IGN1ciA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gICAgICBjb25zdCBleHAgPSBqLmV4cCAqIDEwMDBcbiAgICAgIGlmKChleHAgLSBjdXIpID4gMTAwMCAqIDYwICogMTAgKXtcbiAgICAgICAgcmV0dXJuIHJlc29sdmUodG9rZW4pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2dpbigpLnRoZW4oIHQgPT4ge1xuICAgICAgICAgIHJldHVybiByZXNvbHZlKHQpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKCd0b2tlbiDop6PmnpDlpLHotKUsIOiHquWKqOeZu+W9lScpXG4gICAgICBsb2dpbigpLnRoZW4odCA9PiB7XG4gICAgICAgIHJlc29sdmUodClcbiAgICAgIH0pLmNhdGNoKHJlamVjdClcbiAgICB9ICAgIFxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCAob3B0aW9uOiBXZWNoYXRNaW5pcHJvZ3JhbS5SZXF1ZXN0T3B0aW9uLCBub1Rva2VuPzogYm9vbGVhbik6IFByb21pc2U8YW55PiA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgIGdldFRva2VuKG5vVG9rZW4pLnRoZW4oKHRva2VuKT0+e1xuICAgICAgd3gucmVxdWVzdCh7XG4gICAgICAgIC4uLm9wdGlvbixcbiAgICAgICAgdXJsOiBCYXNlVXJsICsgb3B0aW9uLnVybCxcbiAgICAgICAgaGVhZGVyOntcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiB0b2tlblxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzKHJlcyl7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IHJlcy5kYXRhIGFzIFJlY29yZDxzdHJpbmcsIGFueT5cbiAgICAgICAgICBpZihkYXRhLmNvZGUgPT0gMCl7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShkYXRhLmRhdGEpXG4gICAgICAgICAgfWVsc2UgaWYoZGF0YS5jb2RlID09IDEwMDAyKXtcbiAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgIHRpdGxlOiAn55So5oi36Ym05p2D6ZSZ6K+v77yM6K+356iN5ZCO5YaN6K+VJyxcbiAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgICBkdXJhdGlvbjogMzAwMFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGxvZ2luKClcbiAgICAgICAgICAgIHJldHVybiBcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgIHRpdGxlOiAn572R57uc6ZSZ6K+vJyxcbiAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxuICAgICAgICAgICAgfSkgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBmYWlsKGUpe1xuICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogJ+e9kee7nOmUmeivrycsXG4gICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxuICAgICAgICAgIH0pXG4gICAgICAgICAgcmVqZWN0KGUpXG4gICAgICAgIH1cbiAgICAgIH0pICAgICAgICBcbiAgICB9KS5jYXRjaChyZWplY3QpXG4gXG4gIH0pXG5cbn1cbiJdfQ==