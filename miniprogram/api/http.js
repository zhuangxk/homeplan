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
var token = wx.getStorageSync("token");
exports.default = (function (option) {
    return new Promise(function (resolve, reject) {
        wx.request(__assign(__assign({}, option), { url: BaseUrl + option.url, header: {
                Authorization: token
            }, success: function (res) {
                console.log(res);
                var data = res.data;
                if (data.code == 0) {
                    return resolve(data.data);
                }
                if (data.code == 10002) {
                    wx.navigateTo({
                        url: "/pages/login/login"
                    });
                    return;
                }
                wx.showToast({
                    title: '网络错误',
                    icon: 'none',
                    duration: 2000
                });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImh0dHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLElBQU0sT0FBTyxHQUFHLHVCQUF1QixDQUFBO0FBRXZDLElBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUE7QUFFeEMsbUJBQWUsVUFBQyxNQUF1QztJQUNyRCxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07UUFDakMsRUFBRSxDQUFDLE9BQU8sdUJBQ0wsTUFBTSxLQUNULEdBQUcsRUFBRSxPQUFPLEdBQUcsTUFBTSxDQUFDLEdBQUcsRUFDekIsTUFBTSxFQUFDO2dCQUNMLGFBQWEsRUFBRSxLQUFLO2FBQ3JCLEVBQ0QsT0FBTyxFQUFQLFVBQVEsR0FBRztnQkFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO2dCQUNoQixJQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBMkIsQ0FBQTtnQkFDNUMsSUFBRyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBQztvQkFDaEIsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO2lCQUMxQjtnQkFDRCxJQUFHLElBQUksQ0FBQyxJQUFJLElBQUksS0FBSyxFQUFDO29CQUNwQixFQUFFLENBQUMsVUFBVSxDQUFDO3dCQUNaLEdBQUcsRUFBQyxvQkFBb0I7cUJBQ3pCLENBQUMsQ0FBQTtvQkFDRixPQUFNO2lCQUNQO2dCQUNELEVBQUUsQ0FBQyxTQUFTLENBQUM7b0JBQ1gsS0FBSyxFQUFFLE1BQU07b0JBQ2IsSUFBSSxFQUFFLE1BQU07b0JBQ1osUUFBUSxFQUFFLElBQUk7aUJBQ2YsQ0FBQyxDQUFBO1lBQ0osQ0FBQztZQUNELElBQUksWUFBQyxDQUFDO2dCQUNKLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0JBQ1gsS0FBSyxFQUFFLE1BQU07b0JBQ2IsSUFBSSxFQUFFLE1BQU07b0JBQ1osUUFBUSxFQUFFLElBQUk7aUJBQ2YsQ0FBQyxDQUFBO2dCQUNGLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNYLENBQUMsSUFDRCxDQUFBO0lBQ0osQ0FBQyxDQUFDLENBQUE7QUFFSixDQUFDLEVBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBCYXNlVXJsID0gJ2h0dHA6Ly8xMjcuMC4wLjE6ODA4MCdcclxuXHJcbmNvbnN0IHRva2VuID0gd3guZ2V0U3RvcmFnZVN5bmMoXCJ0b2tlblwiKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKG9wdGlvbjogV2VjaGF0TWluaXByb2dyYW0uUmVxdWVzdE9wdGlvbik6IFByb21pc2U8RnVuY3Rpb24+ID0+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcclxuICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAuLi5vcHRpb24sXHJcbiAgICAgIHVybDogQmFzZVVybCArIG9wdGlvbi51cmwsXHJcbiAgICAgIGhlYWRlcjp7XHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW5cclxuICAgICAgfSxcclxuICAgICAgc3VjY2VzcyhyZXMpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICBjb25zdCBkYXRhID0gcmVzLmRhdGEgYXMgUmVjb3JkPHN0cmluZywgYW55PlxyXG4gICAgICAgIGlmKGRhdGEuY29kZSA9PSAwKXtcclxuICAgICAgICAgIHJldHVybiByZXNvbHZlKGRhdGEuZGF0YSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoZGF0YS5jb2RlID09IDEwMDAyKXtcclxuICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICB1cmw6XCIvcGFnZXMvbG9naW4vbG9naW5cIiBcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZXR1cm4gXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICB0aXRsZTogJ+e9kee7nOmUmeivrycsXHJcbiAgICAgICAgICBpY29uOiAnbm9uZScsXHJcbiAgICAgICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWwoZSl7XHJcbiAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgIHRpdGxlOiAn572R57uc6ZSZ6K+vJyxcclxuICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZWplY3QoZSlcclxuICAgICAgfVxyXG4gICAgfSkgICBcclxuICB9KVxyXG5cclxufVxyXG4iXX0=