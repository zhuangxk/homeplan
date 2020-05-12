"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../api/index");
Page({
    data: {
        PageCur: "main",
        active: 0,
        defaultLedger: {}
    },
    onChange: function (event) {
        this.setData({ active: event.detail });
    },
    onLoad: function () {
        var _this = this;
        index_1.getDefaultLedger().then(function (res) {
            _this.setData({
                defaultLedger: res
            });
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSx5Q0FBa0Q7QUFDbEQsSUFBSSxDQUFDO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsT0FBTyxFQUFFLE1BQU07UUFDZixNQUFNLEVBQUUsQ0FBQztRQUNULGFBQWEsRUFBRSxFQUVkO0tBQ0o7SUFDRCxRQUFRLEVBQVIsVUFBUyxLQUFVO1FBRWYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ0QsTUFBTSxFQUFOO1FBQUEsaUJBTUM7UUFMRyx3QkFBZ0IsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDdkIsS0FBSSxDQUFDLE9BQU8sQ0FBQztnQkFDVCxhQUFhLEVBQUUsR0FBRzthQUNyQixDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7Q0FDSixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgZ2V0RGVmYXVsdExlZGdlciB9IGZyb20gJy4uLy4uL2FwaS9pbmRleCdcclxuUGFnZSh7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgUGFnZUN1cjogXCJtYWluXCIsXHJcbiAgICAgICAgYWN0aXZlOiAwLFxyXG4gICAgICAgIGRlZmF1bHRMZWRnZXI6IHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uQ2hhbmdlKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICAvLyBldmVudC5kZXRhaWwg55qE5YC85Li65b2T5YmN6YCJ5Lit6aG555qE57Si5byVXHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHsgYWN0aXZlOiBldmVudC5kZXRhaWwgfSk7XHJcbiAgICB9LFxyXG4gICAgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIGdldERlZmF1bHRMZWRnZXIoKS50aGVuKHJlcz0+e1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdExlZGdlcjogcmVzXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSkiXX0=