"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = getApp();
var index_1 = require("../../../api/index");
Component({
    data: {
        show: false,
        CustomBar: app.globalData.CustomBar,
        BillTypes: [],
        accounts: []
    },
    properties: {
        ledgerId: Number
    },
    observers: {
        "ledgerId": function (val) {
            var _this = this;
            if (val) {
                index_1.getBillTypes(val).then(function (res) {
                    _this.setData({
                        BillTypes: res
                    });
                });
            }
        }
    },
    methods: {
        onAdd: function () {
            this.setData({
                show: true
            });
        },
        onClose: function () {
            this.setData({
                show: false
            });
        }
    },
    lifetimes: {
        attached: function () {
            console.log('bill show');
            console.log(this);
        },
        ready: function () {
            console.log(this);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJpbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQWdCLENBQUE7QUFDbEMsNENBQWlEO0FBRWpELFNBQVMsQ0FBQztJQUNOLElBQUksRUFBRTtRQUNGLElBQUksRUFBRSxLQUFLO1FBQ1gsU0FBUyxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsU0FBUztRQUNuQyxTQUFTLEVBQUUsRUFBRTtRQUNiLFFBQVEsRUFBRSxFQUFFO0tBQ2Y7SUFDRCxVQUFVLEVBQUU7UUFDUixRQUFRLEVBQUUsTUFBTTtLQUNuQjtJQUNELFNBQVMsRUFBRTtRQUNQLFVBQVUsRUFBVixVQUFZLEdBQUc7WUFBZixpQkFRQztZQVBHLElBQUcsR0FBRyxFQUFDO2dCQUNILG9CQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUUsR0FBUTtvQkFDN0IsS0FBSSxDQUFDLE9BQU8sQ0FBQzt3QkFDVCxTQUFTLEVBQUUsR0FBRztxQkFDakIsQ0FBQyxDQUFBO2dCQUNOLENBQUMsQ0FBQyxDQUFBO2FBQ0w7UUFDTCxDQUFDO0tBQ0o7SUFDRCxPQUFPLEVBQUU7UUFDTCxLQUFLLEVBQUw7WUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNULElBQUksRUFBRSxJQUFJO2FBQ2IsQ0FBQyxDQUFBO1FBQ04sQ0FBQztRQUVELE9BQU8sRUFBUDtZQUNJLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1QsSUFBSSxFQUFFLEtBQUs7YUFDZCxDQUFDLENBQUE7UUFDTixDQUFDO0tBQ0o7SUFDRCxTQUFTLEVBQUU7UUFDUCxRQUFRLEVBQVI7WUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFBO1lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDckIsQ0FBQztRQUNELEtBQUssRUFBTDtZQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDckIsQ0FBQztLQUNKO0NBRUosQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXBwID0gZ2V0QXBwKCkgYXMgSUFwcE9wdGlvblxyXG5pbXBvcnQgeyBnZXRCaWxsVHlwZXMgfSBmcm9tICcuLi8uLi8uLi9hcGkvaW5kZXgnXHJcblxyXG5Db21wb25lbnQoe1xyXG4gICAgZGF0YToge1xyXG4gICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgIEN1c3RvbUJhcjogYXBwLmdsb2JhbERhdGEuQ3VzdG9tQmFyLFxyXG4gICAgICAgIEJpbGxUeXBlczogW10sXHJcbiAgICAgICAgYWNjb3VudHM6IFtdXHJcbiAgICB9LFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGxlZGdlcklkOiBOdW1iZXJcclxuICAgIH0sXHJcbiAgICBvYnNlcnZlcnM6IHtcclxuICAgICAgICBcImxlZGdlcklkXCIgKHZhbCk6IHZvaWR7XHJcbiAgICAgICAgICAgIGlmKHZhbCl7XHJcbiAgICAgICAgICAgICAgICBnZXRCaWxsVHlwZXModmFsKS50aGVuKCggcmVzOiBhbnkgKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBCaWxsVHlwZXM6IHJlc1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBvbkFkZCgpOiB2b2lke1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgc2hvdzogdHJ1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgXHJcbiAgICAgICAgb25DbG9zZSgpOiB2b2lke1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH0sXHJcbiAgICBsaWZldGltZXM6IHtcclxuICAgICAgICBhdHRhY2hlZCgpOiB2b2lke1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYmlsbCBzaG93JylcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcylcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlYWR5KCk6IHZvaWR7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSlcclxuXHJcbmV4cG9ydCB7IH1cclxuIl19