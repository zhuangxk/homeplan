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
exports.default = (function (url, option) {
    return new Promise(function (resolve, reject) {
        wx.request(__assign(__assign({ url: BaseUrl + url }, option), { success: function (res) {
                resolve(res);
            },
            fail: function (e) {
                reject(e);
            } }));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImh0dHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLElBQU0sT0FBTyxHQUFHLHVCQUF1QixDQUFBO0FBR3ZDLG1CQUFnQixVQUFDLEdBQVUsRUFBRSxNQUFXO0lBQ3RDLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtRQUNqQyxFQUFFLENBQUMsT0FBTyxxQkFDUixHQUFHLEVBQUUsT0FBTyxHQUFHLEdBQUcsSUFDZixNQUFNLEtBQ1QsT0FBTyxZQUFDLEdBQUc7Z0JBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ2QsQ0FBQztZQUNELElBQUksWUFBQyxDQUFDO2dCQUNKLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNYLENBQUMsSUFDRCxDQUFBO0lBQ0osQ0FBQyxDQUFDLENBQUE7QUFFSixDQUFDLEVBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBCYXNlVXJsID0gJ2h0dHA6Ly8xMjcuMC4wLjE6ODA4MCdcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCAgKHVybDpTdHJpbmcsIG9wdGlvbjogYW55KSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XHJcbiAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiBCYXNlVXJsICsgdXJsLFxyXG4gICAgICAuLi5vcHRpb24sXHJcbiAgICAgIHN1Y2Nlc3MocmVzKXtcclxuICAgICAgICByZXNvbHZlKHJlcylcclxuICAgICAgfSxcclxuICAgICAgZmFpbChlKXtcclxuICAgICAgICByZWplY3QoZSlcclxuICAgICAgfVxyXG4gICAgfSkgICBcclxuICB9KVxyXG5cclxufVxyXG4iXX0=