"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = getApp();
Page({
    data: {
        show: false,
        CustomBar: app.globalData.CustomBar
    },
    onAdd: function () {
        wx.navigateTo({
            url: "/pages/ledger/bill/bill_form/bill_form"
        });
    },
    onClose: function () {
        this.setData({
            show: false
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJpbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQWdCLENBQUE7QUFDbEMsSUFBSSxDQUFDO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsSUFBSSxFQUFFLEtBQUs7UUFDWCxTQUFTLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxTQUFTO0tBQ3RDO0lBTUQsS0FBSztRQUNELEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDVixHQUFHLEVBQUUsd0NBQXdDO1NBQ2hELENBQUMsQ0FBQTtJQUlOLENBQUM7SUFDRCxPQUFPO1FBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNULElBQUksRUFBRSxLQUFLO1NBQ2QsQ0FBQyxDQUFBO0lBQ04sQ0FBQztDQUNKLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFwcCA9IGdldEFwcCgpIGFzIElBcHBPcHRpb25cclxuUGFnZSh7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgQ3VzdG9tQmFyOiBhcHAuZ2xvYmFsRGF0YS5DdXN0b21CYXJcclxuICAgIH0sXHJcbiAgICAvLyBvbkNsb3NlKCl7XHJcbiAgICAvLyAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgIC8vICAgICAgICAgc2hvdzogdHJ1ZVxyXG4gICAgLy8gICAgIH0pXHJcbiAgICAvLyB9XHJcbiAgICBvbkFkZCgpe1xyXG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICB1cmw6IFwiL3BhZ2VzL2xlZGdlci9iaWxsL2JpbGxfZm9ybS9iaWxsX2Zvcm1cIlxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8gdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAvLyAgICAgc2hvdzogdHJ1ZVxyXG4gICAgICAgIC8vIH0pXHJcbiAgICB9LFxyXG4gICAgb25DbG9zZSgpe1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIHNob3c6IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSlcclxuXHJcbmV4cG9ydCB7IH1cclxuIl19