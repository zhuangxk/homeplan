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
var BaseUrl = 'http://127.0.0.1:8080';
var index_1 = require("./index");
exports.default = (function (option) {
    return new Promise(function (resolve, reject) {
        var token = wx.getStorageSync("token");
        wx.request(__assign(__assign({}, option), { url: BaseUrl + option.url, header: {
                Authorization: token
            }, success: function (res) {
                console.log(res);
                var data = res.data;
                if (data.code == 0) {
                    return resolve(data.data);
                }
                else if (data.code == 10002) {
                    wx.showToast({
                        title: '用户鉴权错误，正在重新换取，，请稍后再试',
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
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImh0dHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLElBQU0sT0FBTyxHQUFHLHVCQUF1QixDQUFBO0FBQ3ZDLGlDQUE2QjtBQUU3QixtQkFBZSxVQUFDLE1BQXVDO0lBQ3JELE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtRQUNqQyxJQUFNLEtBQUssR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ3hDLEVBQUUsQ0FBQyxPQUFPLHVCQUNMLE1BQU0sS0FDVCxHQUFHLEVBQUUsT0FBTyxHQUFHLE1BQU0sQ0FBQyxHQUFHLEVBQ3pCLE1BQU0sRUFBQztnQkFDTCxhQUFhLEVBQUUsS0FBSzthQUNyQixFQUNELE9BQU8sRUFBUCxVQUFRLEdBQUc7Z0JBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDaEIsSUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQTJCLENBQUE7Z0JBQzVDLElBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUM7b0JBQ2hCLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtpQkFDMUI7cUJBQUssSUFBRyxJQUFJLENBQUMsSUFBSSxJQUFJLEtBQUssRUFBQztvQkFDMUIsRUFBRSxDQUFDLFNBQVMsQ0FBQzt3QkFDWCxLQUFLLEVBQUUsc0JBQXNCO3dCQUM3QixJQUFJLEVBQUUsTUFBTTt3QkFDWixRQUFRLEVBQUUsSUFBSTtxQkFDZixDQUFDLENBQUE7b0JBQ0YsYUFBSyxFQUFFLENBQUE7b0JBQ1AsT0FBTTtpQkFDUDtxQkFBSTtvQkFDSCxFQUFFLENBQUMsU0FBUyxDQUFDO3dCQUNYLEtBQUssRUFBRSxNQUFNO3dCQUNiLElBQUksRUFBRSxNQUFNO3dCQUNaLFFBQVEsRUFBRSxJQUFJO3FCQUNmLENBQUMsQ0FBQTtpQkFDSDtZQUdILENBQUM7WUFDRCxJQUFJLFlBQUMsQ0FBQztnQkFDSixFQUFFLENBQUMsU0FBUyxDQUFDO29CQUNYLEtBQUssRUFBRSxNQUFNO29CQUNiLElBQUksRUFBRSxNQUFNO29CQUNaLFFBQVEsRUFBRSxJQUFJO2lCQUNmLENBQUMsQ0FBQTtnQkFDRixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDWCxDQUFDLElBQ0QsQ0FBQTtJQUNKLENBQUMsQ0FBQyxDQUFBO0FBRUosQ0FBQyxFQUFBIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQmFzZVVybCA9ICdodHRwOi8vMTI3LjAuMC4xOjgwODAnXHJcbmltcG9ydCB7bG9naW59IGZyb20gJy4vaW5kZXgnXHJcblxyXG5leHBvcnQgZGVmYXVsdCAob3B0aW9uOiBXZWNoYXRNaW5pcHJvZ3JhbS5SZXF1ZXN0T3B0aW9uKTogUHJvbWlzZTxGdW5jdGlvbj4gPT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xyXG4gICAgY29uc3QgdG9rZW4gPSB3eC5nZXRTdG9yYWdlU3luYyhcInRva2VuXCIpXHJcbiAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgLi4ub3B0aW9uLFxyXG4gICAgICB1cmw6IEJhc2VVcmwgKyBvcHRpb24udXJsLFxyXG4gICAgICBoZWFkZXI6e1xyXG4gICAgICAgIEF1dGhvcml6YXRpb246IHRva2VuXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Y2Nlc3MocmVzKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlcy5kYXRhIGFzIFJlY29yZDxzdHJpbmcsIGFueT5cclxuICAgICAgICBpZihkYXRhLmNvZGUgPT0gMCl7XHJcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZShkYXRhLmRhdGEpXHJcbiAgICAgICAgfWVsc2UgaWYoZGF0YS5jb2RlID09IDEwMDAyKXtcclxuICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn55So5oi36Ym05p2D6ZSZ6K+v77yM5q2j5Zyo6YeN5paw5o2i5Y+W77yM77yM6K+356iN5ZCO5YaN6K+VJyxcclxuICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMzAwMFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIGxvZ2luKClcclxuICAgICAgICAgIHJldHVybiBcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn572R57uc6ZSZ6K+vJyxcclxuICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgICAgICAgfSkgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWwoZSl7XHJcbiAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgIHRpdGxlOiAn572R57uc6ZSZ6K+vJyxcclxuICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZWplY3QoZSlcclxuICAgICAgfVxyXG4gICAgfSkgICBcclxuICB9KVxyXG5cclxufVxyXG4iXX0=