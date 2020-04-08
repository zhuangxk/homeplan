"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../api/index");
var app = getApp();
Page({
    data: {},
    login: function () {
        wx.login({
            success: function (res) {
                index_1.login(res.code)
                    .then(function (r) {
                    wx.setStorage({
                        key: "token",
                        data: r.token
                    });
                    app.globalData.logged = true;
                    wx.navigateTo({
                        url: "/pages/index/index"
                    });
                });
            },
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLHlDQUF1QztBQUN2QyxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQUUsQ0FBQTtBQUNwQixJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUUsRUFFTDtJQUNELEtBQUssRUFBTDtRQUNFLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDUCxPQUFPLEVBQUUsVUFBQSxHQUFHO2dCQUNWLGFBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO3FCQUNaLElBQUksQ0FBQyxVQUFDLENBQU07b0JBQ1gsRUFBRSxDQUFDLFVBQVUsQ0FBQzt3QkFDVixHQUFHLEVBQUUsT0FBTzt3QkFDWixJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUs7cUJBQ2hCLENBQUMsQ0FBQTtvQkFDRixHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7b0JBQzVCLEVBQUUsQ0FBQyxVQUFVLENBQUM7d0JBQ1osR0FBRyxFQUFFLG9CQUFvQjtxQkFDMUIsQ0FBQyxDQUFBO2dCQUNKLENBQUMsQ0FDRixDQUFBO1lBQ0gsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUVKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBtaW5pcHJvZ3JhbS9wYWdlcy9sb2dpbi9sb2dpbi5qc1xyXG5cclxuaW1wb3J0IHsgbG9naW4gfSBmcm9tICcuLi8uLi9hcGkvaW5kZXgnXHJcbmNvbnN0IGFwcCA9IGdldEFwcCgpXHJcblBhZ2Uoe1xyXG4gIGRhdGE6IHtcclxuXHJcbiAgfSxcclxuICBsb2dpbigpIHtcclxuICAgIHd4LmxvZ2luKHtcclxuICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICBsb2dpbihyZXMuY29kZSlcclxuICAgICAgICAgIC50aGVuKChyOiBhbnkgKSA9PiB7XHJcbiAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAga2V5OiBcInRva2VuXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiByLnRva2VuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGFwcC5nbG9iYWxEYXRhLmxvZ2dlZCA9IHRydWVcclxuICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgdXJsOiBcIi9wYWdlcy9pbmRleC9pbmRleFwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuXHJcbiAgfVxyXG59KSJdfQ==