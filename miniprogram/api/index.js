"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("./http");
var app = getApp();
function login() {
    wx.login({
        success: function (res) {
            http_1.default({
                url: '/auth',
                data: { code: res.code }
            })
                .then(function (r) {
                wx.setStorage({
                    key: "token",
                    data: r.token
                });
                app.globalData.logged = true;
            });
        },
    });
}
exports.login = login;
function uploadUserInfo(data) {
    return http_1.default({
        url: '/v1/user',
        method: 'POST',
        data: data
    });
}
exports.uploadUserInfo = uploadUserInfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUF5QjtBQUN6QixJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQUUsQ0FBQTtBQUNwQixTQUFnQixLQUFLO0lBQ25CLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUFDUCxPQUFPLEVBQUUsVUFBQSxHQUFHO1lBQ1YsY0FBSSxDQUFDO2dCQUNILEdBQUcsRUFBQyxPQUFPO2dCQUNYLElBQUksRUFBRSxFQUFDLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxFQUFFO2FBQ3hCLENBQUM7aUJBQ0QsSUFBSSxDQUFDLFVBQUMsQ0FBTTtnQkFDVCxFQUFFLENBQUMsVUFBVSxDQUFDO29CQUNWLEdBQUcsRUFBRSxPQUFPO29CQUNaLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSztpQkFDaEIsQ0FBQyxDQUFBO2dCQUNGLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtZQUM5QixDQUFDLENBQ0YsQ0FBQTtRQUNILENBQUM7S0FDRixDQUFDLENBQUE7QUFDSixDQUFDO0FBakJELHNCQWlCQztBQUVELFNBQWdCLGNBQWMsQ0FBQyxJQUFnQztJQUM3RCxPQUFPLGNBQUksQ0FBRTtRQUNYLEdBQUcsRUFBRSxVQUFVO1FBQ2YsTUFBTSxFQUFFLE1BQU07UUFDZCxJQUFJLEVBQUUsSUFBSTtLQUNYLENBQUMsQ0FBQTtBQUNKLENBQUM7QUFORCx3Q0FNQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBodHRwIGZyb20gJy4vaHR0cCdcclxuY29uc3QgYXBwID0gZ2V0QXBwKClcclxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2luKCl7XHJcbiAgd3gubG9naW4oe1xyXG4gICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgaHR0cCh7XHJcbiAgICAgICAgdXJsOicvYXV0aCcsXHJcbiAgICAgICAgZGF0YToge2NvZGU6IHJlcy5jb2RlIH1cclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHI6IGFueSApID0+IHtcclxuICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgIGtleTogXCJ0b2tlblwiLFxyXG4gICAgICAgICAgICAgIGRhdGE6IHIudG9rZW5cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBhcHAuZ2xvYmFsRGF0YS5sb2dnZWQgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICB9LFxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGxvYWRVc2VySW5mbyhkYXRhOiBXZWNoYXRNaW5pcHJvZ3JhbS5Vc2VySW5mbyk6IFByb21pc2U8RnVuY3Rpb24+e1xyXG4gIHJldHVybiBodHRwKCB7XHJcbiAgICB1cmw6ICcvdjEvdXNlcicsXHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGRhdGE6IGRhdGFcclxuICB9KVxyXG59Il19