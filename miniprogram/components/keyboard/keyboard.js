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
Component({
    options: {
        styleIsolation: 'apply-shared'
    },
    lifetimes: {},
    properties: {
        billTypes: Array
    },
    observers: {
        "billTypes": function (val) {
            var types = {};
            val.forEach(function (item) {
                types[item.type] = types[item.type] || [];
                types[item.type].push(item);
            });
            this.setData({
                types: types
            });
        }
    },
    data: {
        types: {
            1: [],
            2: [],
            3: []
        },
        typeActive: 1,
        formdata: {
            "amount": 1313.3,
            "bill_type_id": 1,
            "bill_time": "2020-04-19T16:22:35.591Z",
            "ledger_id": 1,
            "comment": ""
        },
        minDate: new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 30).getTime(),
        maxDate: new Date().getTime(),
        max: 9999999,
        min: 0,
        remark: '',
        acount: '',
        date: '',
        imgPopupShow: false,
        acountPopupShow: false,
        datePopupShow: false,
        typing: false,
        MainCur: 0,
        form: {
            billTypeId: null
        },
        fileList: []
    },
    methods: {
        onInput: function (e) {
            var value = e.currentTarget.dataset.v;
            if (!value)
                return;
            switch (value) {
                case 'date':
                    this.date();
                    return;
                case 'acount':
                    this.acount();
                    return;
                case 'ok':
                    this.ok();
                    return;
                case 'del':
                    this.del();
                    wx.vibrateShort();
                    return;
                default:
                    this.input(value);
                    wx.vibrateShort();
                    return;
            }
        },
        del: function () {
            var value = this.data.acount.substring(0, this.data.acount.length - 1);
            this.setData({
                acount: value
            });
        },
        date: function () {
            this.setData({
                datePopupShow: true
            });
        },
        ok: function () {
            ;
        },
        acount: function () {
            this.setData({
                acountPopupShow: true
            });
        },
        input: function (val) {
            var value = this.format(val);
            this.setData({
                acount: value
            });
        },
        format: function (val) {
            if (this.data.acount.indexOf('.') > -1) {
                if (val === '.') {
                    return this.data.acount;
                }
                if (this.data.acount.split('.')[1].length >= 2) {
                    return this.data.acount;
                }
            }
            var value = this.data.acount + val;
            if (val === '.') {
                return this.data.acount + val;
            }
            if (this.data.acount === '0') {
                if (val !== '.') {
                    return val;
                }
            }
            if (parseInt(value) > 99999999) {
                wx.showToast({
                    title: '钱太多,数不过来啦',
                    icon: 'none'
                });
                return this.data.acount;
            }
            return value;
        },
        onRemarkFocus: function () {
            this.setData({
                typing: true
            });
        },
        onRemarkBlur: function (e) {
            var value = e.detail.value;
            this.setData({
                typing: false,
                remark: value
            });
        },
        onBillTypeTap: function (e) {
            var billTypeId = e.currentTarget.dataset.id;
            if (!billTypeId)
                return;
            this.setData({
                typing: false,
                form: __assign(__assign({}, this.data.form), { billTypeId: billTypeId })
            });
            wx.vibrateShort();
        },
        onImgBtnTap: function () {
            this.setData({
                imgPopupShow: true
            });
        },
        onImgPopupClose: function () {
            this.setData({
                imgPopupShow: false
            });
        },
        onAcountPopupClose: function () {
            this.setData({
                acountPopupShow: false
            });
        },
        onDatePopupClose: function () {
            this.setData({
                datePopupShow: false
            });
        },
        afterRead: function () {
            ;
        },
        onConfirm: function () {
            this.setData({
                datePopupShow: false
            });
        },
        onTabChange: function (e) {
            console.log(e.detail.name);
            this.setData({
                typeActive: e.detail.name
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5Ym9hcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJrZXlib2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQSxTQUFTLENBQUM7SUFDUixPQUFPLEVBQUU7UUFDUCxjQUFjLEVBQUUsY0FBYztLQUMvQjtJQUNELFNBQVMsRUFBRSxFQU1WO0lBQ0QsVUFBVSxFQUFFO1FBQ1IsU0FBUyxFQUFFLEtBQUs7S0FDbkI7SUFDRCxTQUFTLEVBQUU7UUFDUCxXQUFXLEVBQVgsVUFBWSxHQUFhO1lBQ3ZCLElBQU0sS0FBSyxHQUFHLEVBQThCLENBQUE7WUFDNUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7Z0JBQ2QsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQTtnQkFDekMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDN0IsQ0FBQyxDQUFDLENBQUE7WUFDRixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLEtBQUssT0FBQTthQUNOLENBQUMsQ0FBQTtRQUVKLENBQUM7S0FDSjtJQUNELElBQUksRUFBRTtRQUNKLEtBQUssRUFBRTtZQUNMLENBQUMsRUFBRSxFQUFjO1lBQ2pCLENBQUMsRUFBRSxFQUFjO1lBQ2pCLENBQUMsRUFBRSxFQUFjO1NBQ1U7UUFDN0IsVUFBVSxFQUFFLENBQUM7UUFDYixRQUFRLEVBQUU7WUFDUixRQUFRLEVBQUUsTUFBTTtZQUNoQixjQUFjLEVBQUUsQ0FBQztZQUNqQixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFdBQVcsRUFBRSxDQUFDO1lBQ2QsU0FBUyxFQUFFLEVBQUU7U0FDZDtRQUNELE9BQU8sRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUU7UUFDNUUsT0FBTyxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFO1FBQzdCLEdBQUcsRUFBRSxPQUFPO1FBQ1osR0FBRyxFQUFFLENBQUM7UUFDTixNQUFNLEVBQUUsRUFBRTtRQUNWLE1BQU0sRUFBRSxFQUFFO1FBQ1YsSUFBSSxFQUFFLEVBQUU7UUFDUixZQUFZLEVBQUUsS0FBSztRQUNuQixlQUFlLEVBQUUsS0FBSztRQUN0QixhQUFhLEVBQUUsS0FBSztRQUNwQixNQUFNLEVBQUUsS0FBSztRQUNiLE9BQU8sRUFBRSxDQUFDO1FBQ1YsSUFBSSxFQUFFO1lBQ0osVUFBVSxFQUFFLElBQUk7U0FDakI7UUFDRCxRQUFRLEVBQUUsRUFBRTtLQUNiO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsT0FBTyxFQUFQLFVBQVEsQ0FBTTtZQUNaLElBQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4QyxJQUFHLENBQUMsS0FBSztnQkFBRSxPQUFNO1lBQ2pCLFFBQVEsS0FBSyxFQUFFO2dCQUNiLEtBQUssTUFBTTtvQkFDVCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUE7b0JBQ1gsT0FBTTtnQkFDUixLQUFLLFFBQVE7b0JBQ1gsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFBO29CQUNiLE9BQU07Z0JBQ1IsS0FBSyxJQUFJO29CQUNQLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQTtvQkFDVCxPQUFNO2dCQUNSLEtBQUssS0FBSztvQkFDUixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUE7b0JBQ1YsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFBO29CQUNqQixPQUFPO2dCQUNUO29CQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7b0JBQ2pCLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQTtvQkFDakIsT0FBTzthQUNWO1FBQ0gsQ0FBQztRQUNELEdBQUcsRUFBSDtZQUNFLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBO1lBQ3hFLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsTUFBTSxFQUFFLEtBQUs7YUFDZCxDQUFDLENBQUE7UUFDSixDQUFDO1FBQ0QsSUFBSSxFQUFKO1lBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxhQUFhLEVBQUUsSUFBSTthQUNwQixDQUFDLENBQUE7UUFDSixDQUFDO1FBQ0QsRUFBRSxFQUFGO1lBQ0UsQ0FBQztRQUNILENBQUM7UUFDRCxNQUFNLEVBQU47WUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLGVBQWUsRUFBRSxJQUFJO2FBQ3RCLENBQUMsQ0FBQTtRQUNKLENBQUM7UUFDRCxLQUFLLEVBQUwsVUFBTSxHQUFXO1lBQ2YsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLE1BQU0sRUFBRSxLQUFLO2FBQ2QsQ0FBQyxDQUFBO1FBQ0osQ0FBQztRQUNELE1BQU0sRUFBRSxVQUFVLEdBQVE7WUFDeEIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3RDLElBQUksR0FBRyxLQUFLLEdBQUcsRUFBQztvQkFDZCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFBO2lCQUN4QjtnQkFDRCxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFDO29CQUM1QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFBO2lCQUN4QjthQUNGO1lBQ0QsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFBO1lBQ3BDLElBQUksR0FBRyxLQUFLLEdBQUcsRUFBRTtnQkFDZixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQTthQUM5QjtZQUNELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssR0FBRyxFQUFDO2dCQUMzQixJQUFHLEdBQUcsS0FBSyxHQUFHLEVBQUU7b0JBQ2QsT0FBTyxHQUFHLENBQUE7aUJBQ1g7YUFDRjtZQUNELElBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLFFBQVEsRUFBQztnQkFDNUIsRUFBRSxDQUFDLFNBQVMsQ0FBQztvQkFDWCxLQUFLLEVBQUUsV0FBVztvQkFDbEIsSUFBSSxFQUFFLE1BQU07aUJBQ2IsQ0FBQyxDQUFBO2dCQUNGLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUE7YUFDeEI7WUFFRCxPQUFPLEtBQUssQ0FBQTtRQUVkLENBQUM7UUFDRCxhQUFhLEVBQWI7WUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLE1BQU0sRUFBRSxJQUFJO2FBQ2IsQ0FBQyxDQUFBO1FBQ0osQ0FBQztRQUNELFlBQVksRUFBWixVQUFhLENBQU07WUFDakIsSUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUE7WUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxNQUFNLEVBQUUsS0FBSztnQkFDYixNQUFNLEVBQUUsS0FBSzthQUNkLENBQUMsQ0FBQTtRQUNKLENBQUM7UUFDRCxhQUFhLEVBQWIsVUFBYyxDQUFNO1lBQ2xCLElBQU0sVUFBVSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUM5QyxJQUFHLENBQUMsVUFBVTtnQkFBRSxPQUFNO1lBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsSUFBSSx3QkFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksS0FDakIsVUFBVSxZQUFBLEdBQ1g7YUFDRixDQUFDLENBQUE7WUFDRixFQUFFLENBQUMsWUFBWSxFQUFFLENBQUE7UUFDbkIsQ0FBQztRQUNELFdBQVcsRUFBWDtZQUNFLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsWUFBWSxFQUFFLElBQUk7YUFDbkIsQ0FBQyxDQUFBO1FBQ0osQ0FBQztRQUNELGVBQWUsRUFBZjtZQUNFLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsWUFBWSxFQUFFLEtBQUs7YUFDcEIsQ0FBQyxDQUFBO1FBQ0osQ0FBQztRQUNELGtCQUFrQixFQUFsQjtZQUNFLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsZUFBZSxFQUFFLEtBQUs7YUFDdkIsQ0FBQyxDQUFBO1FBQ0osQ0FBQztRQUNELGdCQUFnQixFQUFoQjtZQUNFLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsYUFBYSxFQUFFLEtBQUs7YUFDckIsQ0FBQyxDQUFBO1FBQ0osQ0FBQztRQUNELFNBQVMsRUFBVDtZQUNFLENBQUM7UUFDSCxDQUFDO1FBQ0QsU0FBUyxFQUFUO1lBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxhQUFhLEVBQUUsS0FBSzthQUNyQixDQUFDLENBQUE7UUFDSixDQUFDO1FBQ0QsV0FBVyxFQUFYLFVBQVksQ0FBTTtZQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxVQUFVLEVBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJO2FBQzNCLENBQUMsQ0FBQTtRQUNKLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IGdldEJpbGxUeXBlcyB9IGZyb20gJy4uLy4uL2FwaS9pbmRleCdcclxuQ29tcG9uZW50KHtcclxuICBvcHRpb25zOiB7XHJcbiAgICBzdHlsZUlzb2xhdGlvbjogJ2FwcGx5LXNoYXJlZCdcclxuICB9LFxyXG4gIGxpZmV0aW1lczoge1xyXG4gICAgLy8gYXR0YWNoZWQoKTogdm9pZHtcclxuICAgIC8vICAgZ2V0QmlsbFR5cGVzKCkudGhlbihyZXM9PntcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAvLyAgIH0pXHJcbiAgICAvLyB9XHJcbiAgfSxcclxuICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgIGJpbGxUeXBlczogQXJyYXlcclxuICB9LFxyXG4gIG9ic2VydmVyczoge1xyXG4gICAgICBcImJpbGxUeXBlc1wiKHZhbDogQW55QXJyYXkpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB0eXBlcyA9IHt9IGFzIFJlY29yZDxudW1iZXIsIEFueUFycmF5PlxyXG4gICAgICAgIHZhbC5mb3JFYWNoKGl0ZW09PntcclxuICAgICAgICAgIHR5cGVzW2l0ZW0udHlwZV0gPSB0eXBlc1tpdGVtLnR5cGVdIHx8IFtdXHJcbiAgICAgICAgICB0eXBlc1tpdGVtLnR5cGVdLnB1c2goaXRlbSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICB0eXBlc1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICB9XHJcbiAgfSxcclxuICBkYXRhOiB7XHJcbiAgICB0eXBlczoge1xyXG4gICAgICAxOiBbXSBhcyBBbnlBcnJheSxcclxuICAgICAgMjogW10gYXMgQW55QXJyYXksXHJcbiAgICAgIDM6IFtdIGFzIEFueUFycmF5XHJcbiAgICB9IGFzIFJlY29yZDxudW1iZXIsIEFueUFycmF5PixcclxuICAgIHR5cGVBY3RpdmU6IDEsXHJcbiAgICBmb3JtZGF0YToge1xyXG4gICAgICBcImFtb3VudFwiOiAxMzEzLjMsXHJcbiAgICAgIFwiYmlsbF90eXBlX2lkXCI6IDEsXHJcbiAgICAgIFwiYmlsbF90aW1lXCI6IFwiMjAyMC0wNC0xOVQxNjoyMjozNS41OTFaXCIsXHJcbiAgICAgIFwibGVkZ2VyX2lkXCI6IDEsXHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlwiXHJcbiAgICB9LFxyXG4gICAgbWluRGF0ZTogbmV3IERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCkgLSAxMDAwICogNjAgKiA2MCAqIDI0ICogMzApLmdldFRpbWUoKSxcclxuICAgIG1heERhdGU6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxyXG4gICAgbWF4OiA5OTk5OTk5LFxyXG4gICAgbWluOiAwLFxyXG4gICAgcmVtYXJrOiAnJyxcclxuICAgIGFjb3VudDogJycsXHJcbiAgICBkYXRlOiAnJyxcclxuICAgIGltZ1BvcHVwU2hvdzogZmFsc2UsXHJcbiAgICBhY291bnRQb3B1cFNob3c6IGZhbHNlLFxyXG4gICAgZGF0ZVBvcHVwU2hvdzogZmFsc2UsXHJcbiAgICB0eXBpbmc6IGZhbHNlLFxyXG4gICAgTWFpbkN1cjogMCxcclxuICAgIGZvcm06IHtcclxuICAgICAgYmlsbFR5cGVJZDogbnVsbFxyXG4gICAgfSxcclxuICAgIGZpbGVMaXN0OiBbXVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgb25JbnB1dChlOiBhbnkpOiB2b2lke1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnY7XHJcbiAgICAgIGlmKCF2YWx1ZSkgcmV0dXJuXHJcbiAgICAgIHN3aXRjaCAodmFsdWUpIHtcclxuICAgICAgICBjYXNlICdkYXRlJzpcclxuICAgICAgICAgIHRoaXMuZGF0ZSgpXHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICBjYXNlICdhY291bnQnOlxyXG4gICAgICAgICAgdGhpcy5hY291bnQoKVxyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgY2FzZSAnb2snOlxyXG4gICAgICAgICAgdGhpcy5vaygpXHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICBjYXNlICdkZWwnOlxyXG4gICAgICAgICAgdGhpcy5kZWwoKVxyXG4gICAgICAgICAgd3gudmlicmF0ZVNob3J0KClcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgdGhpcy5pbnB1dCh2YWx1ZSlcclxuICAgICAgICAgIHd4LnZpYnJhdGVTaG9ydCgpXHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkZWwoKTogdm9pZHtcclxuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmRhdGEuYWNvdW50LnN1YnN0cmluZygwLCB0aGlzLmRhdGEuYWNvdW50Lmxlbmd0aCAtIDEpXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgYWNvdW50OiB2YWx1ZVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIGRhdGUoKTogdm9pZHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBkYXRlUG9wdXBTaG93OiB0cnVlXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgb2soKTogdm9pZHtcclxuICAgICAgO1xyXG4gICAgfSxcclxuICAgIGFjb3VudCgpOiB2b2lke1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGFjb3VudFBvcHVwU2hvdzogdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIGlucHV0KHZhbDogc3RyaW5nKTogdm9pZHtcclxuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmZvcm1hdCh2YWwpXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgYWNvdW50OiB2YWx1ZVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIGZvcm1hdDogZnVuY3Rpb24gKHZhbDogYW55KSB7XHJcbiAgICAgIGlmICh0aGlzLmRhdGEuYWNvdW50LmluZGV4T2YoJy4nKSA+IC0xKSB7XHJcbiAgICAgICAgaWYgKHZhbCA9PT0gJy4nKXtcclxuICAgICAgICAgIHJldHVybiB0aGlzLmRhdGEuYWNvdW50XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuZGF0YS5hY291bnQuc3BsaXQoJy4nKVsxXS5sZW5ndGggPj0gMil7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmFjb3VudFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZGF0YS5hY291bnQgKyB2YWxcclxuICAgICAgaWYgKHZhbCA9PT0gJy4nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5hY291bnQgKyB2YWxcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5kYXRhLmFjb3VudCA9PT0gJzAnKXtcclxuICAgICAgICBpZih2YWwgIT09ICcuJyApe1xyXG4gICAgICAgICAgcmV0dXJuIHZhbFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZihwYXJzZUludCh2YWx1ZSkgPiA5OTk5OTk5OSl7XHJcbiAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgIHRpdGxlOiAn6ZKx5aSq5aSaLOaVsOS4jei/h+adpeWVpicsXHJcbiAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEuYWNvdW50XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB2YWx1ZVxyXG5cclxuICAgIH0sXHJcbiAgICBvblJlbWFya0ZvY3VzKCk6IHZvaWQge1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHR5cGluZzogdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIG9uUmVtYXJrQmx1cihlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgY29uc3QgdmFsdWUgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHR5cGluZzogZmFsc2UsXHJcbiAgICAgICAgcmVtYXJrOiB2YWx1ZVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIG9uQmlsbFR5cGVUYXAoZTogYW55KTogdm9pZCB7XHJcbiAgICAgIGNvbnN0IGJpbGxUeXBlSWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZDtcclxuICAgICAgaWYoIWJpbGxUeXBlSWQpIHJldHVyblxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHR5cGluZzogZmFsc2UsXHJcbiAgICAgICAgZm9ybToge1xyXG4gICAgICAgICAgLi4udGhpcy5kYXRhLmZvcm0sXHJcbiAgICAgICAgICBiaWxsVHlwZUlkXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICB3eC52aWJyYXRlU2hvcnQoKVxyXG4gICAgfSxcclxuICAgIG9uSW1nQnRuVGFwKCk6IHZvaWR7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgaW1nUG9wdXBTaG93OiB0cnVlXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgb25JbWdQb3B1cENsb3NlKCk6IHZvaWR7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgaW1nUG9wdXBTaG93OiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIG9uQWNvdW50UG9wdXBDbG9zZSgpOiB2b2lke1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGFjb3VudFBvcHVwU2hvdzogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBvbkRhdGVQb3B1cENsb3NlKCk6IHZvaWR7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgZGF0ZVBvcHVwU2hvdzogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBhZnRlclJlYWQoKTogdm9pZHtcclxuICAgICAgO1xyXG4gICAgfSxcclxuICAgIG9uQ29uZmlybSgpOiB2b2lke1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGRhdGVQb3B1cFNob3c6IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgb25UYWJDaGFuZ2UoZTogYW55KTogdm9pZHtcclxuICAgICAgY29uc29sZS5sb2coZS5kZXRhaWwubmFtZSlcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB0eXBlQWN0aXZlIDogZS5kZXRhaWwubmFtZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxufSkiXX0=