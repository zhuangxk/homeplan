"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = getApp();
var index_1 = require("../../../api/index");
var util_1 = require("../../../utils/util");
var dialog_1 = require("@vant/weapp/dialog/dialog");
var year = new Date().getFullYear();
var month = new Date().getMonth();
Component({
    data: {
        keyboardShow: false,
        CustomBar: app.globalData.CustomBar,
        bills: [],
        dateMap: {},
        monthMap: {},
        dateMapKeys: [],
        loading: false,
        total: 0,
        slideReset: true,
        params: {
            "year": year,
            "month": month + 1,
            "page": 1,
            "page_size": -1
        },
        localDay: ["日", "一", "二", "三", "四", "五", "六"],
        actionType: 'add',
        curEditItem: {},
        lastTouchId: 0,
        pickerVal: year + '年' + (month + 1) + '月',
        months: [
            {
                values: [year - 2 + '年', year - 1 + '年', year + '年'],
                defaultIndex: 2
            },
            {
                values: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                defaultIndex: month
            }
        ],
        monthShow: false
    },
    properties: {
        ledgerId: {
            type: Number
        }
    },
    lifetimes: {},
    observers: {
        ledgerId: function () {
            this.getBills();
        }
    },
    methods: {
        onClick: function (e) {
            var bill = e.currentTarget.dataset.item;
            wx.navigateTo({
                url: '/pages/ledger/bill_detail/bill_detail',
                events: {
                    acceptDataFromOpenedPage: function (data) {
                        console.log(data);
                    },
                    someEvent: function (data) {
                        console.log(data);
                    }
                },
                success: function (res) {
                    res.eventChannel.emit('acceptDataFromOpenerPage', { bill: bill });
                }
            });
        },
        getBills: function () {
            var _this = this;
            if (!this.data.ledgerId) {
                return;
            }
            if (this.data.loading) {
                return;
            }
            this.setData({
                loading: true
            }, function () {
                wx.showLoading({
                    title: '加载中'
                });
                index_1.getBills(_this.data.ledgerId, _this.data.params).then(function (res) {
                    _this.handleBillsRes(res);
                    wx.hideLoading();
                    _this.setData({
                        loading: false
                    });
                });
            });
        },
        handleBillsRes: function (res) {
            var _this = this;
            var list = res.list;
            var dateCount = res.date_count;
            var monthCount = res.month_count;
            var dateMap = {};
            dateCount.forEach(function (item) {
                dateMap[_this.getDateKey(item.date)] = {
                    list: [],
                    total: item.total,
                    sumIn: item.sum_in,
                    sumOut: item.sum_out,
                };
            });
            list.forEach(function (item) {
                var date = dateMap[_this.getDateKey(item.bill_time)];
                if (date.list) {
                    date.list.push(item);
                }
                else {
                    wx.showToast({
                        title: "计数出错"
                    });
                }
            });
            this.setData({
                total: res.total,
                dateMap: dateMap,
                dateMapKeys: Object.keys(dateMap),
                monthMap: monthCount[0] || {},
            });
        },
        getDateKey: function (iosdate) {
            var date = new Date(iosdate);
            var dateKey = util_1.formatMonthDate(date) + "  星期" + this.data.localDay[date.getDay()];
            if (util_1.formatMonthDate(date) == util_1.formatMonthDate(new Date())) {
                dateKey = "今日  星期" + this.data.localDay[new Date().getDay()];
            }
            return dateKey;
        },
        onAdd: function () {
            this.setData({
                curEditItem: {},
                actionType: 'add',
                keyboardShow: true
            });
        },
        onClose: function () {
            this.setData({
                keyboardShow: false
            });
        },
        onSave: function () {
            this.setData({
                keyboardShow: false,
                slideReset: true,
            });
            this.getBills();
        },
        onClickDelete: function (e) {
            var self = this;
            var id = e.currentTarget.dataset.id;
            dialog_1.default({
                showCancelButton: true,
                title: '提示',
                message: '确定要删除吗？',
                asyncClose: true
            })
                .then(function () {
                if (dialog_1.default.confirm)
                    index_1.delBill(id).then(function (_) {
                        if (dialog_1.default.close)
                            dialog_1.default.close();
                        self.getBills();
                    });
            })
                .catch(function () {
                if (dialog_1.default.close)
                    dialog_1.default.close();
            });
        },
        onClickEdit: function (e) {
            this.setData({
                curEditItem: e.currentTarget.dataset.item,
                actionType: 'edit',
                keyboardShow: true
            });
        },
        onTouchstart: function (e) {
            var id = e.currentTarget.dataset.id;
            if (id == this.data.lastTouchId) {
                return;
            }
            this.setData({
                lastTouchId: id,
                slideReset: true,
            });
        },
        onMonthCancel: function () {
            this.setData({
                monthShow: false
            });
        },
        onMonthShow: function () {
            this.setData({
                monthShow: true
            });
        },
        onMonthConfirm: function (e) {
            var _this = this;
            var _a = e.detail.index, yi = _a[0], mi = _a[1];
            this.setData({
                monthShow: false,
                pickerVal: [year - 2, year - 1, year][yi] + '年' + (mi + 1) + '月',
                params: {
                    "page_size": -1,
                    page: 1,
                    month: mi + 1,
                    year: [year - 2, year - 1, year][yi]
                }
            }, function () {
                _this.getBills();
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJpbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQWdCLENBQUE7QUFDbEMsNENBQXNEO0FBQ3RELDRDQUFxRDtBQUNyRCxvREFBOEM7QUFHOUMsSUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtBQUNyQyxJQUFNLEtBQUssR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFBO0FBQ25DLFNBQVMsQ0FBQztJQUNOLElBQUksRUFBRTtRQUNGLFlBQVksRUFBRSxLQUFLO1FBQ25CLFNBQVMsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLFNBQVM7UUFDbkMsS0FBSyxFQUFFLEVBQWM7UUFDckIsT0FBTyxFQUFFLEVBQStCO1FBQ3hDLFFBQVEsRUFBRSxFQUErQjtRQUN6QyxXQUFXLEVBQUUsRUFBbUI7UUFDaEMsT0FBTyxFQUFFLEtBQUs7UUFDZCxLQUFLLEVBQUUsQ0FBQztRQUNSLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLE1BQU0sRUFBRTtZQUNKLE1BQU0sRUFBRSxJQUFJO1lBQ1osT0FBTyxFQUFFLEtBQUssR0FBRSxDQUFDO1lBQ2pCLE1BQU0sRUFBRSxDQUFDO1lBQ1QsV0FBVyxFQUFFLENBQUMsQ0FBQztTQUNsQjtRQUNELFFBQVEsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQztRQUN4QyxVQUFVLEVBQUUsS0FBSztRQUNqQixXQUFXLEVBQUUsRUFBRTtRQUNmLFdBQVcsRUFBRSxDQUFDO1FBQ2QsU0FBUyxFQUFFLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRztRQUN6QyxNQUFNLEVBQUU7WUFDSjtnQkFDSSxNQUFNLEVBQUcsQ0FB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LFNBQVMsRUFBRSxLQUFLO2dCQUNoQixTQUFTLEVBQUUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUc7Z0JBQzlELE1BQU0sRUFBRTtvQkFDSixXQUFXLEVBQUUsQ0FBQyxDQUFDO29CQUNmLElBQUksRUFBQyxDQUFDO29CQUNOLEtBQUssRUFBRSxFQUFFLEdBQUcsQ0FBQztvQkFDYixJQUFJLEVBQUUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDO2lCQUN2QzthQUNKLEVBQUU7Z0JBQ0MsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO1lBQ25CLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQztLQUdKO0NBRUosQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXBwID0gZ2V0QXBwKCkgYXMgSUFwcE9wdGlvblxuaW1wb3J0IHsgZ2V0QmlsbHMsIGRlbEJpbGwgfSBmcm9tIFwiLi4vLi4vLi4vYXBpL2luZGV4XCJcbmltcG9ydCB7IGZvcm1hdE1vbnRoRGF0ZSB9IGZyb20gXCIuLi8uLi8uLi91dGlscy91dGlsXCJcbmltcG9ydCBEaWFsb2cgZnJvbSBcIkB2YW50L3dlYXBwL2RpYWxvZy9kaWFsb2dcIlxuLy8gY29uc3QgRGlhbG9nID0gcmVxdWlyZSgnQHZhbnQvd2VhcHAvZGlhbG9nL2RpYWxvZycpXG5cbmNvbnN0IHllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKClcbmNvbnN0IG1vbnRoID0gbmV3IERhdGUoKS5nZXRNb250aCgpXG5Db21wb25lbnQoe1xuICAgIGRhdGE6IHtcbiAgICAgICAga2V5Ym9hcmRTaG93OiBmYWxzZSxcbiAgICAgICAgQ3VzdG9tQmFyOiBhcHAuZ2xvYmFsRGF0YS5DdXN0b21CYXIsXG4gICAgICAgIGJpbGxzOiBbXSBhcyBBbnlBcnJheSxcbiAgICAgICAgZGF0ZU1hcDoge30gYXMgUmVjb3JkPHN0cmluZywgQW55T2JqZWN0PixcbiAgICAgICAgbW9udGhNYXA6IHt9IGFzIFJlY29yZDxzdHJpbmcsIEFueU9iamVjdD4sXG4gICAgICAgIGRhdGVNYXBLZXlzOiBbXSBhcyBBcnJheTxzdHJpbmc+LFxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgdG90YWw6IDAsXG4gICAgICAgIHNsaWRlUmVzZXQ6IHRydWUsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgXCJ5ZWFyXCI6IHllYXIsXG4gICAgICAgICAgICBcIm1vbnRoXCI6IG1vbnRoICsxLFxuICAgICAgICAgICAgXCJwYWdlXCI6IDEsXG4gICAgICAgICAgICBcInBhZ2Vfc2l6ZVwiOiAtMVxuICAgICAgICB9LFxuICAgICAgICBsb2NhbERheTogW1wi5pelXCIsIFwi5LiAXCIsXCLkuoxcIixcIuS4iVwiLFwi5ZubXCIsXCLkupRcIixcIuWFrVwiXSxcbiAgICAgICAgYWN0aW9uVHlwZTogJ2FkZCcsXG4gICAgICAgIGN1ckVkaXRJdGVtOiB7fSxcbiAgICAgICAgbGFzdFRvdWNoSWQ6IDAsXG4gICAgICAgIHBpY2tlclZhbDogeWVhciArICflubQnICsgKG1vbnRoICsgMSkgKyAn5pyIJyxcbiAgICAgICAgbW9udGhzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFsdWVzOiAgW3llYXIgLSAyICsgJ+W5tCcsIHllYXIgLSAxICsgJ+W5tCcsIHllYXIgKyAn5bm0J10sXG4gICAgICAgICAgICAgICAgZGVmYXVsdEluZGV4OiAyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhbHVlczogW1wi5LiA5pyIXCIsXCLkuozmnIhcIixcIuS4ieaciFwiLFwi5Zub5pyIXCIsXCLkupTmnIhcIixcIuWFreaciFwiLFwi5LiD5pyIXCIsXCLlhavmnIhcIixcIuS5neaciFwiLFwi5Y2B5pyIXCIsXCLljYHkuIDmnIhcIixcIuWNgeS6jOaciFwiXSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0SW5kZXg6IG1vbnRoXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIG1vbnRoU2hvdzogZmFsc2VcbiAgICB9LFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgbGVkZ2VySWQ6IHsgXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXJcbiAgICAgICAgfSAgXG4gICAgfSxcbiAgICBsaWZldGltZXM6IHtcbiAgICAgICAgLy8gcmVhZHkoKTogdm9pZHtcbiAgICAgICAgLy8gICB0aGlzLmdldEJpbGxzKClcbiAgICAgICAgLy8gfVxuICAgIH0sXG4gICAgb2JzZXJ2ZXJzOiB7XG4gICAgICAgIGxlZGdlcklkKCk6IHZvaWQge1xuICAgICAgICAgICAgdGhpcy5nZXRCaWxscygpIFxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG9uQ2xpY2soZSk6IHZvaWR7XG4gICAgICAgICAgICBjb25zdCBiaWxsID0gIGUuY3VycmVudFRhcmdldC5kYXRhc2V0Lml0ZW1cbiAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9sZWRnZXIvYmlsbF9kZXRhaWwvYmlsbF9kZXRhaWwnLFxuICAgICAgICAgICAgICAgIGV2ZW50czoge1xuICAgICAgICAgICAgICAgICAgICAvLyDkuLrmjIflrprkuovku7bmt7vliqDkuIDkuKrnm5HlkKzlmajvvIzojrflj5booqvmiZPlvIDpobXpnaLkvKDpgIHliLDlvZPliY3pobXpnaLnmoTmlbDmja5cbiAgICAgICAgICAgICAgICAgICAgYWNjZXB0RGF0YUZyb21PcGVuZWRQYWdlOiBmdW5jdGlvbihkYXRhOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzb21lRXZlbnQ6IGZ1bmN0aW9uKGRhdGE6IGFueSk6IHZvaWQge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g6YCa6L+HZXZlbnRDaGFubmVs5ZCR6KKr5omT5byA6aG16Z2i5Lyg6YCB5pWw5o2uXG4gICAgICAgICAgICAgICAgICAgIHJlcy5ldmVudENoYW5uZWwuZW1pdCgnYWNjZXB0RGF0YUZyb21PcGVuZXJQYWdlJywgeyBiaWxsOiBiaWxsIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBnZXRCaWxscygpOiB2b2lke1xuICAgICAgICAgICAgaWYoIXRoaXMuZGF0YS5sZWRnZXJJZCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZih0aGlzLmRhdGEubG9hZGluZyl7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWVcbiAgICAgICAgICAgIH0sKCk9PntcbiAgICAgICAgICAgICAgICB3eC5zaG93TG9hZGluZyh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5Yqg6L295LitJ1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgZ2V0QmlsbHModGhpcy5kYXRhLmxlZGdlcklkLCB0aGlzLmRhdGEucGFyYW1zKS50aGVuKHJlcz0+e1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUJpbGxzUmVzKHJlcylcbiAgICAgICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KSAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfSxcbiAgICAgICAgaGFuZGxlQmlsbHNSZXMocmVzOiBBbnlPYmplY3QpOiB2b2lke1xuICAgICAgICAgICAgY29uc3QgbGlzdCA9IHJlcy5saXN0IGFzIEFueUFycmF5XG4gICAgICAgICAgICBjb25zdCBkYXRlQ291bnQgPSByZXMuZGF0ZV9jb3VudCBhcyBBbnlBcnJheVxuICAgICAgICAgICAgY29uc3QgbW9udGhDb3VudCA9IHJlcy5tb250aF9jb3VudCBhcyBBbnlBcnJheVxuICAgICAgICAgICAgY29uc3QgZGF0ZU1hcCA9IHt9IGFzIFJlY29yZDxzdHJpbmcsIEFueU9iamVjdD5cbiAgICAgICAgICAgIGRhdGVDb3VudC5mb3JFYWNoKGl0ZW09PntcbiAgICAgICAgICAgICAgICBkYXRlTWFwW3RoaXMuZ2V0RGF0ZUtleShpdGVtLmRhdGUpXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdDpbXSxcbiAgICAgICAgICAgICAgICAgICAgdG90YWw6IGl0ZW0udG90YWwsXG4gICAgICAgICAgICAgICAgICAgIHN1bUluOiBpdGVtLnN1bV9pbixcbiAgICAgICAgICAgICAgICAgICAgc3VtT3V0OiBpdGVtLnN1bV9vdXQsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGlzdC5mb3JFYWNoKCBpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlID0gZGF0ZU1hcFt0aGlzLmdldERhdGVLZXkoaXRlbS5iaWxsX3RpbWUpXVxuICAgICAgICAgICAgICAgIGlmKGRhdGUubGlzdCl7XG4gICAgICAgICAgICAgICAgICAgIGRhdGUubGlzdC5wdXNoKGl0ZW0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIuiuoeaVsOWHuumUmVwiXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgdG90YWw6IHJlcy50b3RhbCxcbiAgICAgICAgICAgICAgICBkYXRlTWFwLFxuICAgICAgICAgICAgICAgIGRhdGVNYXBLZXlzOiBPYmplY3Qua2V5cyhkYXRlTWFwKSxcbiAgICAgICAgICAgICAgICBtb250aE1hcDogbW9udGhDb3VudFswXSB8fCB7fSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgXG4gICAgICAgIH0sXG4gICAgICAgIGdldERhdGVLZXkoaW9zZGF0ZTogc3RyaW5nKTogc3RyaW5ne1xuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGlvc2RhdGUpXG4gICAgICAgICAgICBsZXQgZGF0ZUtleSA9IGZvcm1hdE1vbnRoRGF0ZShkYXRlKSArIFwiICDmmJ/mnJ9cIiArIHRoaXMuZGF0YS5sb2NhbERheVtkYXRlLmdldERheSgpXVxuICAgICAgICAgICAgaWYoZm9ybWF0TW9udGhEYXRlKGRhdGUpID09IGZvcm1hdE1vbnRoRGF0ZShuZXcgRGF0ZSgpKSl7XG4gICAgICAgICAgICAgICAgZGF0ZUtleSA9IFwi5LuK5pelICDmmJ/mnJ9cIiArIHRoaXMuZGF0YS5sb2NhbERheVtuZXcgRGF0ZSgpLmdldERheSgpXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRhdGVLZXlcbiAgICAgICAgfSxcbiAgICAgICAgb25BZGQoKTogdm9pZHtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgY3VyRWRpdEl0ZW06IHt9LFxuICAgICAgICAgICAgICAgIGFjdGlvblR5cGU6ICdhZGQnLFxuICAgICAgICAgICAgICAgIGtleWJvYXJkU2hvdzogdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgXG4gICAgICAgIG9uQ2xvc2UoKTogdm9pZHtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAga2V5Ym9hcmRTaG93OiBmYWxzZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcblxuICAgICAgICBvblNhdmUoKTogdm9pZHtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAga2V5Ym9hcmRTaG93OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzbGlkZVJlc2V0OiB0cnVlLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMuZ2V0QmlsbHMoKVxuICAgICAgICB9LFxuXG4gICAgICAgIG9uQ2xpY2tEZWxldGUoZSk6IHZvaWR7XG4gICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgICAgICAgICAgY29uc3QgaWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZFxuICAgICAgICAgICAgRGlhbG9nKHtcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAn56Gu5a6a6KaB5Yig6Zmk5ZCX77yfJyxcbiAgICAgICAgICAgICAgICBhc3luY0Nsb3NlOiB0cnVlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoRGlhbG9nLmNvbmZpcm0pXG4gICAgICAgICAgICAgICAgICAgIGRlbEJpbGwoaWQpLnRoZW4oXz0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoRGlhbG9nLmNsb3NlKVxuICAgICAgICAgICAgICAgICAgICAgICAgRGlhbG9nLmNsb3NlKClcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZ2V0QmlsbHMoKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoRGlhbG9nLmNsb3NlKVxuICAgICAgICAgICAgICAgIERpYWxvZy5jbG9zZSgpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBvbkNsaWNrRWRpdChlKTogdm9pZHtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgY3VyRWRpdEl0ZW06IGUuY3VycmVudFRhcmdldC5kYXRhc2V0Lml0ZW0sXG4gICAgICAgICAgICAgICAgYWN0aW9uVHlwZTogJ2VkaXQnLFxuICAgICAgICAgICAgICAgIGtleWJvYXJkU2hvdzogdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcblxuICAgICAgICBvblRvdWNoc3RhcnQoZSl7XG4gICAgICAgICAgICBjb25zdCBpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkXG4gICAgICAgICAgICBpZihpZCA9PSB0aGlzLmRhdGEubGFzdFRvdWNoSWQpe1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICBsYXN0VG91Y2hJZDogaWQsXG4gICAgICAgICAgICAgICAgc2xpZGVSZXNldDogdHJ1ZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG5cbiAgICAgICAgb25Nb250aENhbmNlbCgpOiB2b2lke1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICBtb250aFNob3c6IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBvbk1vbnRoU2hvdygpOiB2b2lke1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICBtb250aFNob3c6IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIG9uTW9udGhDb25maXJtKGUpOiB2b2lke1xuICAgICAgICAgICAgY29uc3QgW3lpLCBtaV0gPSBlLmRldGFpbC5pbmRleFxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICBtb250aFNob3c6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHBpY2tlclZhbDogW3llYXIgLSAyLCB5ZWFyIC0gMSwgeWVhcl1beWldICsgJ+W5tCcgKyAobWkrMSkgKyAn5pyIJyxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJwYWdlX3NpemVcIjogLTEsXG4gICAgICAgICAgICAgICAgICAgIHBhZ2U6MSxcbiAgICAgICAgICAgICAgICAgICAgbW9udGg6IG1pICsgMSxcbiAgICAgICAgICAgICAgICAgICAgeWVhcjogW3llYXIgLSAyLCB5ZWFyIC0gMSwgeWVhcl1beWldXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgKCk9PntcbiAgICAgICAgICAgICAgICB0aGlzLmdldEJpbGxzKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuXG4gICAgfVxuXG59KVxuXG5leHBvcnQgeyB9XG5cbiJdfQ==