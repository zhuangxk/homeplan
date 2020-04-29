"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJpbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBZ0IsQ0FBQTtBQUNsQyxJQUFJLENBQUM7SUFDRCxJQUFJLEVBQUU7UUFDRixJQUFJLEVBQUUsS0FBSztRQUNYLFNBQVMsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLFNBQVM7S0FDdEM7SUFNRCxLQUFLO1FBQ0QsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNWLEdBQUcsRUFBRSx3Q0FBd0M7U0FDaEQsQ0FBQyxDQUFBO0lBSU4sQ0FBQztJQUNELE9BQU87UUFDSCxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1QsSUFBSSxFQUFFLEtBQUs7U0FDZCxDQUFDLENBQUE7SUFDTixDQUFDO0NBQ0osQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXBwID0gZ2V0QXBwKCkgYXMgSUFwcE9wdGlvblxyXG5QYWdlKHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICBDdXN0b21CYXI6IGFwcC5nbG9iYWxEYXRhLkN1c3RvbUJhclxyXG4gICAgfSxcclxuICAgIC8vIG9uQ2xvc2UoKXtcclxuICAgIC8vICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgLy8gICAgICAgICBzaG93OiB0cnVlXHJcbiAgICAvLyAgICAgfSlcclxuICAgIC8vIH1cclxuICAgIG9uQWRkKCl7XHJcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgIHVybDogXCIvcGFnZXMvbGVkZ2VyL2JpbGwvYmlsbF9mb3JtL2JpbGxfZm9ybVwiXHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIC8vICAgICBzaG93OiB0cnVlXHJcbiAgICAgICAgLy8gfSlcclxuICAgIH0sXHJcbiAgICBvbkNsb3NlKCl7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgc2hvdzogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59KSJdfQ==