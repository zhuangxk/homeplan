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
var BaseUrl = 'http://127.0.0.1:5000';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImh0dHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLElBQU0sT0FBTyxHQUFHLHVCQUF1QixDQUFBO0FBQ3ZDLDBDQUFvQztBQUNwQyxpQ0FBK0I7QUFHL0IsU0FBUyxRQUFRLENBQUMsT0FBaUI7SUFDakMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1FBQ2pDLElBQUksT0FBTyxFQUFDO1lBQ1YsT0FBTyxPQUFPLEVBQUUsQ0FBQTtTQUNqQjtRQUNELElBQUk7WUFDRixJQUFNLEtBQUssR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQ3hDLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDN0IsR0FBRyxHQUFHLGdCQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ3hCLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7WUFDOUQsSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUN6QixJQUFNLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFBO1lBQ2hDLElBQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFBO1lBQ3hCLElBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7Z0JBQy9CLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO2FBQ3RCO2lCQUFNO2dCQUNMLGFBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLENBQU07b0JBQ2xCLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUNuQixDQUFDLENBQUMsQ0FBQTthQUNIO1NBQ0Y7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtZQUMvQixhQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFNO2dCQUNsQixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDWixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7U0FDakI7SUFDSCxDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUM7QUFFRCxtQkFBZSxVQUFDLE1BQXVDLEVBQUUsT0FBaUI7SUFDeEUsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1FBQ2pDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxLQUFLO1lBQzNCLEVBQUUsQ0FBQyxPQUFPLHVCQUNMLE1BQU0sS0FDVCxHQUFHLEVBQUUsT0FBTyxHQUFHLE1BQU0sQ0FBQyxHQUFHLEVBQ3pCLE1BQU0sRUFBQztvQkFDTCxhQUFhLEVBQUUsS0FBSztpQkFDckIsRUFDRCxPQUFPLEVBQVAsVUFBUSxHQUFHO29CQUNULElBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUEyQixDQUFBO29CQUM1QyxJQUFHLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFDO3dCQUNoQixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7cUJBQzFCO3lCQUFLLElBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxLQUFLLEVBQUM7d0JBQzFCLEVBQUUsQ0FBQyxTQUFTLENBQUM7NEJBQ1gsS0FBSyxFQUFFLGNBQWM7NEJBQ3JCLElBQUksRUFBRSxNQUFNOzRCQUNaLFFBQVEsRUFBRSxJQUFJO3lCQUNmLENBQUMsQ0FBQTt3QkFDRixhQUFLLEVBQUUsQ0FBQTt3QkFDUCxPQUFNO3FCQUNQO3lCQUFJO3dCQUNILEVBQUUsQ0FBQyxTQUFTLENBQUM7NEJBQ1gsS0FBSyxFQUFFLE1BQU07NEJBQ2IsSUFBSSxFQUFFLE1BQU07NEJBQ1osUUFBUSxFQUFFLElBQUk7eUJBQ2YsQ0FBQyxDQUFBO3FCQUNIO2dCQUNILENBQUM7Z0JBQ0QsSUFBSSxZQUFDLENBQUM7b0JBQ0osRUFBRSxDQUFDLFNBQVMsQ0FBQzt3QkFDWCxLQUFLLEVBQUUsTUFBTTt3QkFDYixJQUFJLEVBQUUsTUFBTTt3QkFDWixRQUFRLEVBQUUsSUFBSTtxQkFDZixDQUFDLENBQUE7b0JBQ0YsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUNYLENBQUMsSUFDRCxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBRWxCLENBQUMsQ0FBQyxDQUFBO0FBRUosQ0FBQyxFQUFBIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQmFzZVVybCA9ICdodHRwOi8vMTI3LjAuMC4xOjUwMDAnXHJcbmltcG9ydCBCYXNlNjQgZnJvbSAnLi4vdXRpbHMvYmFzZTY0J1xyXG5pbXBvcnQgeyBsb2dpbiB9IGZyb20gJy4vaW5kZXgnXHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0VG9rZW4obm9Ub2tlbj86IGJvb2xlYW4pOiBQcm9taXNlPEZ1bmN0aW9uPntcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcclxuICAgIGlmIChub1Rva2VuKXtcclxuICAgICAgcmV0dXJuIHJlc29sdmUoKVxyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdG9rZW4gPSB3eC5nZXRTdG9yYWdlU3luYygndG9rZW4nKVxyXG4gICAgICBsZXQgc3RyID0gdG9rZW4uc3BsaXQoJy4nKVsxXVxyXG4gICAgICBzdHIgPSBCYXNlNjQuZGVjb2RlKHN0cilcclxuICAgICAgc3RyID0gc3RyLnJlcGxhY2UobmV3IFJlZ0V4cChTdHJpbmcuZnJvbUNoYXJDb2RlKDApLCBcImdcIiksIFwiXCIpXHJcbiAgICAgIGNvbnN0IGogPSBKU09OLnBhcnNlKHN0cilcclxuICAgICAgY29uc3QgY3VyID0gbmV3IERhdGUoKS5nZXRUaW1lKClcclxuICAgICAgY29uc3QgZXhwID0gai5leHAgKiAxMDAwXHJcbiAgICAgIGlmKChleHAgLSBjdXIpID4gMTAwMCAqIDYwICogMTAgKXtcclxuICAgICAgICByZXR1cm4gcmVzb2x2ZSh0b2tlbilcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsb2dpbigpLnRoZW4oKHQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUodClcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZygndG9rZW4g6Kej5p6Q5aSx6LSlLCDoh6rliqjnmbvlvZUnKVxyXG4gICAgICBsb2dpbigpLnRoZW4oKHQ6IGFueSkgPT4ge1xyXG4gICAgICAgIHJlc29sdmUodClcclxuICAgICAgfSkuY2F0Y2gocmVqZWN0KVxyXG4gICAgfSAgICBcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAob3B0aW9uOiBXZWNoYXRNaW5pcHJvZ3JhbS5SZXF1ZXN0T3B0aW9uLCBub1Rva2VuPzogYm9vbGVhbik6IFByb21pc2U8RnVuY3Rpb24+ID0+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcclxuICAgIGdldFRva2VuKG5vVG9rZW4pLnRoZW4oKHRva2VuKT0+e1xyXG4gICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAuLi5vcHRpb24sXHJcbiAgICAgICAgdXJsOiBCYXNlVXJsICsgb3B0aW9uLnVybCxcclxuICAgICAgICBoZWFkZXI6e1xyXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW5cclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3MocmVzKXtcclxuICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXMuZGF0YSBhcyBSZWNvcmQ8c3RyaW5nLCBhbnk+XHJcbiAgICAgICAgICBpZihkYXRhLmNvZGUgPT0gMCl7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGRhdGEuZGF0YSlcclxuICAgICAgICAgIH1lbHNlIGlmKGRhdGEuY29kZSA9PSAxMDAwMil7XHJcbiAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgdGl0bGU6ICfnlKjmiLfpibTmnYPplJnor6/vvIzor7fnqI3lkI7lho3or5UnLFxyXG4gICAgICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgICAgICBkdXJhdGlvbjogMzAwMFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBsb2dpbigpXHJcbiAgICAgICAgICAgIHJldHVybiBcclxuICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgIHRpdGxlOiAn572R57uc6ZSZ6K+vJyxcclxuICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcclxuICAgICAgICAgICAgfSkgICAgICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWlsKGUpe1xyXG4gICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgdGl0bGU6ICfnvZHnu5zplJnor68nLFxyXG4gICAgICAgICAgICBpY29uOiAnbm9uZScsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmVqZWN0KGUpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSAgICAgICAgXHJcbiAgICB9KS5jYXRjaChyZWplY3QpXHJcbiBcclxuICB9KVxyXG5cclxufVxyXG4iXX0=