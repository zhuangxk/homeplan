"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../../../utils/util");
var index_1 = require("../../../api/index");
Page({
    data: {
        bill: {},
        downloadHost: 'https://oss.toko.wang/',
        fileList: [],
        list: [],
        showAction: false,
        saveType: 'add',
        id: 0,
        form: {
            name: '',
            amount: 1,
            money: "",
        }
    },
    onPreviewImage: function () {
        var fileList = this.data.fileList;
        wx.previewImage({
            urls: fileList,
            current: fileList[0],
            fail: function () {
                wx.showToast({ title: '预览图片失败', icon: 'none' });
            }
        });
    },
    onAdd: function () {
        this.setData({
            showAction: true,
            saveType: 'add'
        });
    },
    edit: function () {
        this.setData({
            showAction: true,
            saveType: 'edit'
        });
    },
    onDel: function () {
        index_1.delBillDeltail(this.data.id).then(function (res) {
            console.log(res);
        });
    },
    onSave: function () {
        var _this = this;
        if (this.data.saveType == 'add') {
            var _a = this.data, bill = _a.bill, form = _a.form;
            index_1.addBillDeltail(bill.id, form).then(function () {
                _this.getList();
            });
        }
        if (this.data.saveType == 'edit') {
            var _b = this.data, id = _b.id, form = _b.form;
            index_1.updateillDeltail(id, form).then(function () {
                _this.getList();
            });
        }
    },
    getList: function () {
        var _this = this;
        index_1.getBillDeltails(this.data.bill.id).then(function (res) {
            _this.setData({
                list: res
            });
        });
    },
    onClose: function () {
        this.setData({
            showAction: false
        });
    },
    onInput: function (e) {
        console.log(e);
        var value = e.detail;
        var key = e.currentTarget.id;
        var form = this.data.form;
        form[key] = value;
        this.setData({
            form: form
        });
    },
    onLoad: function () {
        var downloadHost = this.data.downloadHost;
        var bill = { "id": 82, "created_at": "2020-06-15T01:41:14+08:00", "updated_at": "2020-06-15T01:41:14+08:00", "deleted_at": null, "user_id": 1, "ledger_id": 1, "amount": "12", "amount_type": 1, "bill_type_id": 3, "bill_time": "2020-06-15T01:40:38+08:00", "comment": "我的美照", "account_id": 2, "pic_id1": 44, "pic_id2": -1, "Pic1": { "id": 44, "created_at": "2020-06-15T01:40:54+08:00", "updated_at": "2020-06-15T01:40:54+08:00", "deleted_at": null, "user_id": 1, "bucket": "tokyoq", "file_name": "bill_pic/tmp_24ac37a330362f679bd6a0cf3d3ab7ff0ebf1fcf96971330.jpg", "size": 63543, "mime_type": "image/jpeg", "height": 854, "width": 640, "User": null }, "Pic2": null, "User": { "id": 1, "created_at": "2020-05-18T06:57:29+08:00", "updated_at": "2020-06-15T13:57:28+08:00", "deleted_at": null, "openid": "oB3Xd4qfY0cPOAZM6BXrq6kFF91k", "username": "", "age": 0, "birthday": null, "email": "", "role": "", "address": "", "nickname": "Tokyo", "gender": 1, "province": "Shandong", "city": "Linyi", "country": "China", "language": "zh_CN", "avatarUrl": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTK34I6ltEp9qU3n2fia7Xb6CRNTEnsly0V7nPsPXCC0amPf13yUkZrUkn9PHOIFrCqfhF0LfSfd9qg/132" }, "Account": { "id": 2, "created_at": "2020-05-18T06:57:28+08:00", "updated_at": "2020-05-18T06:57:28+08:00", "deleted_at": null, "ledger_id": 1, "user_id": 1, "name": "支付宝", "type": 1, "icon": "emoji", "ord": 2, "amount": 0 }, "Ledger": null, "BillType": { "id": 3, "created_at": "2020-05-18T06:57:28+08:00", "updated_at": "2020-05-18T06:57:28+08:00", "deleted_at": null, "ledger_id": 1, "user_id": 1, "name": "支出3", "type": 1, "parent_id": -1, "icon": "emoji", "children": null, "ord": 3 } };
        var fileList = [];
        bill.Pic1 && fileList.push(downloadHost + bill.Pic1.file_name);
        bill.Pic2 && fileList.push(downloadHost + bill.Pic2.file_name);
        this.setData({
            bill: bill,
            billTime: util_1.formatTime(new Date(bill.bill_time)),
            fileList: fileList,
        });
        this.getList();
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlsbF9kZXRhaWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiaWxsX2RldGFpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDRDQUE4QztBQUM5Qyw0Q0FBb0c7QUFDcEcsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLEVBQWU7UUFDckIsWUFBWSxFQUFFLHdCQUF3QjtRQUN0QyxRQUFRLEVBQUUsRUFBYztRQUN4QixJQUFJLEVBQUUsRUFBYztRQUNwQixVQUFVLEVBQUUsS0FBSztRQUNqQixRQUFRLEVBQUUsS0FBSztRQUNmLEVBQUUsRUFBRSxDQUFDO1FBQ0wsSUFBSSxFQUFFO1lBQ0osSUFBSSxFQUFFLEVBQUU7WUFDUixNQUFNLEVBQUUsQ0FBQztZQUNULEtBQUssRUFBRSxFQUFFO1NBQ3lCO0tBQ3JDO0lBQ0QsY0FBYyxFQUFkO1FBRVUsSUFBQSw2QkFBUSxDQUFlO1FBRS9CLEVBQUUsQ0FBQyxZQUFZLENBQUM7WUFDWixJQUFJLEVBQUUsUUFBUTtZQUNkLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQUk7Z0JBQ0EsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7WUFDcEQsQ0FBQztTQUNKLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFFBQVEsRUFBRSxLQUFLO1NBQ2hCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFFBQVEsRUFBRSxNQUFNO1NBQ2pCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxLQUFLO1FBQ0gsc0JBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FB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QixFQUFDLFlBQVksRUFBQywyQkFBMkIsRUFBQyxZQUFZLEVBQUMsSUFBSSxFQUFDLFFBQVEsRUFBQyw4QkFBOEIsRUFBQyxVQUFVLEVBQUMsRUFBRSxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsRUFBRSxFQUFDLE1BQU0sRUFBQyxFQUFFLEVBQUMsU0FBUyxFQUFDLEVBQUUsRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLFVBQVUsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBQyxXQUFXLEVBQUMsOEhBQThILEVBQUMsRUFBQyxTQUFTLEVBQUMsRUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQywyQkFBMkIsRUFBQyxZQUFZLEVBQUMsMkJBQTJCLEVBQUMsWUFBWSxFQUFDLElBQUksRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsUUFBUSxFQUFDLElBQUksRUFBQyxVQUFVLEVBQUMsRUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQywyQkFBMkIsRUFBQyxZQUFZLEVBQUMsMkJBQTJCLEVBQUMsWUFBWSxFQUFDLElBQUksRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxJQUFJLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxFQUFDLENBQUE7UUFDdC9DLElBQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQTtRQUNuQixJQUFJLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDOUQsSUFBSSxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQzlELElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxJQUFJLEVBQUcsSUFBSTtZQUNYLFFBQVEsRUFBRSxpQkFBVSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM5QyxRQUFRLEVBQUUsUUFBUTtTQUNuQixDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7SUFDaEIsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Zm9ybWF0VGltZX0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3V0aWxcIlxyXG5pbXBvcnQge2FkZEJpbGxEZWx0YWlsLHVwZGF0ZWlsbERlbHRhaWwsIGRlbEJpbGxEZWx0YWlsLCBnZXRCaWxsRGVsdGFpbHMgfSBmcm9tIFwiLi4vLi4vLi4vYXBpL2luZGV4XCJcclxuUGFnZSh7XHJcbiAgZGF0YToge1xyXG4gICAgYmlsbDoge30gYXMgQW55T2JqZWN0LFxyXG4gICAgZG93bmxvYWRIb3N0OiAnaHR0cHM6Ly9vc3MudG9rby53YW5nLycsXHJcbiAgICBmaWxlTGlzdDogW10gYXMgQW55QXJyYXksXHJcbiAgICBsaXN0OiBbXSBhcyBBbnlBcnJheSxcclxuICAgIHNob3dBY3Rpb246IGZhbHNlLFxyXG4gICAgc2F2ZVR5cGU6ICdhZGQnLFxyXG4gICAgaWQ6IDAsXHJcbiAgICBmb3JtOiB7XHJcbiAgICAgIG5hbWU6ICcnLFxyXG4gICAgICBhbW91bnQ6IDEsXHJcbiAgICAgIG1vbmV5OiBcIlwiLFxyXG4gICAgfSBhcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudW1iZXI+XHJcbiAgfSxcclxuICBvblByZXZpZXdJbWFnZSgpOiB2b2lkIHtcclxuICAgIC8vIGNvbnN0IHsgdXJsIH0gPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XHJcbiAgICBjb25zdCB7IGZpbGVMaXN0IH0gPSB0aGlzLmRhdGE7XHJcblxyXG4gICAgd3gucHJldmlld0ltYWdlKHtcclxuICAgICAgICB1cmxzOiBmaWxlTGlzdCxcclxuICAgICAgICBjdXJyZW50OiBmaWxlTGlzdFswXSxcclxuICAgICAgICBmYWlsKCkge1xyXG4gICAgICAgICAgICB3eC5zaG93VG9hc3QoeyB0aXRsZTogJ+mihOiniOWbvueJh+Wksei0pScsIGljb246ICdub25lJyB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIG9uQWRkKCl7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBzaG93QWN0aW9uOiB0cnVlLFxyXG4gICAgICBzYXZlVHlwZTogJ2FkZCdcclxuICAgIH0pXHJcbiAgfSxcclxuICBlZGl0KCl7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBzaG93QWN0aW9uOiB0cnVlLFxyXG4gICAgICBzYXZlVHlwZTogJ2VkaXQnXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgb25EZWwoKXtcclxuICAgIGRlbEJpbGxEZWx0YWlsKHRoaXMuZGF0YS5pZCkudGhlbihyZXM9PntcclxuICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgfSlcclxuICB9LFxyXG4gIG9uU2F2ZSgpe1xyXG4gICAgaWYodGhpcy5kYXRhLnNhdmVUeXBlID09ICdhZGQnKSB7XHJcbiAgICAgIGNvbnN0IHsgYmlsbCwgZm9ybSB9ID0gdGhpcy5kYXRhXHJcbiAgICAgIGFkZEJpbGxEZWx0YWlsKGJpbGwuaWQsIGZvcm0pLnRoZW4oKCk9PntcclxuICAgICAgICB0aGlzLmdldExpc3QoKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGlmKHRoaXMuZGF0YS5zYXZlVHlwZSA9PSAnZWRpdCcpIHtcclxuICAgICAgY29uc3QgeyBpZCwgZm9ybSB9ID0gdGhpcy5kYXRhXHJcbiAgICAgIHVwZGF0ZWlsbERlbHRhaWwoaWQsIGZvcm0pLnRoZW4oKCk9PntcclxuICAgICAgICB0aGlzLmdldExpc3QoKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZ2V0TGlzdCgpe1xyXG4gICAgZ2V0QmlsbERlbHRhaWxzKHRoaXMuZGF0YS5iaWxsLmlkKS50aGVuKHJlcyA9PntcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBsaXN0OiByZXNcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSxcclxuICBvbkNsb3NlKCl7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBzaG93QWN0aW9uOiBmYWxzZVxyXG4gICAgfSlcclxuICB9LFxyXG4gIG9uSW5wdXQoZTogQW55T2JqZWN0KXtcclxuICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICBjb25zdCB2YWx1ZSA9IGUuZGV0YWlsXHJcbiAgICBjb25zdCBrZXk6IHN0cmluZyA9IGUuY3VycmVudFRhcmdldC5pZFxyXG4gICAgY29uc3QgeyBmb3JtIH0gPSB0aGlzLmRhdGFcclxuICAgIGZvcm1ba2V5XSA9IHZhbHVlXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBmb3JtXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgb25Mb2FkOiBmdW5jdGlvbigpe1xyXG4gICAgLy8gY29uc3QgZXZlbnRDaGFubmVsID0gdGhpcy5nZXRPcGVuZXJFdmVudENoYW5uZWwoKVxyXG4gICAgLy8gLy8gZXZlbnRDaGFubmVsLmVtaXQoJ2FjY2VwdERhdGFGcm9tT3BlbmVkUGFnZScsIHtkYXRhOiAndGVzdCd9KTtcclxuICAgIC8vIC8vIGV2ZW50Q2hhbm5lbC5lbWl0KCdzb21lRXZlbnQnLCB7ZGF0YTogJ3Rlc3QnfSk7XHJcbiAgICAvLyAvLyDnm5HlkKxhY2NlcHREYXRhRnJvbU9wZW5lclBhZ2Xkuovku7bvvIzojrflj5bkuIrkuIDpobXpnaLpgJrov4dldmVudENoYW5uZWzkvKDpgIHliLDlvZPliY3pobXpnaLnmoTmlbDmja5cclxuICAgIC8vIGV2ZW50Q2hhbm5lbC5vbignYWNjZXB0RGF0YUZyb21PcGVuZXJQYWdlJywgZGF0YSA9PiB7XHJcbiAgICAvLyAgIGNvbnN0IHsgZG93bmxvYWRIb3N0IH0gPSB0aGlzLmRhdGE7XHJcbiAgICAvLyAgIGNvbnN0IGJpbGwgPSBkYXRhLmJpbGxcclxuICAgIC8vICAgY29uc3QgZmlsZUxpc3QgPSBbXVxyXG4gICAgLy8gICBiaWxsLlBpYzEgJiYgZmlsZUxpc3QucHVzaChkb3dubG9hZEhvc3QgKyBiaWxsLlBpYzEuZmlsZV9uYW1lKVxyXG4gICAgLy8gICBiaWxsLlBpYzIgJiYgZmlsZUxpc3QucHVzaChkb3dubG9hZEhvc3QgKyBiaWxsLlBpYzIuZmlsZV9uYW1lKVxyXG4gICAgLy8gICB0aGlzLnNldERhdGEoe1xyXG4gICAgLy8gICAgIGJpbGw6ICBiaWxsLFxyXG4gICAgLy8gICAgIGJpbGxUaW1lOiBmb3JtYXRUaW1lKG5ldyBEYXRlKGJpbGwuYmlsbF90aW1lKSksXHJcbiAgICAvLyAgICAgZmlsZUxpc3Q6IGZpbGVMaXN0LFxyXG4gICAgLy8gICB9KVxyXG4gICAgLy8gfSlcclxuICAgIGNvbnN0IHsgZG93bmxvYWRIb3N0IH0gPSB0aGlzLmRhdGE7XHJcbiAgICBjb25zdCBiaWxsOiBBbnlPYmplY3QgPSB7XCJpZFwiOjgyLFwiY3JlYXRlZF9hdFwiOlwiMjAyMC0wNi0xNVQwMTo0MToxNCswODowMFwiLFwidXBkYXRlZF9hdFwiOlwiMjAyMC0wNi0xNVQwMTo0MToxNCswODowMFwiLFwiZGVsZXRlZF9hdFwiOm51bGwsXCJ1c2VyX2lkXCI6MSxcImxlZGdlcl9pZFwiOjEsXCJhbW91bnRcIjpcIjEyXCIsXCJhbW91bnRfdHlwZVwiOjEsXCJiaWxsX3R5cGVfaWRcIjozLFwiYmlsbF90aW1lXCI6XCIyMDIwLTA2LTE1VDAxOjQwOjM4KzA4OjAwXCIsXCJjb21tZW50XCI6XCLmiJHnmoTnvo7nhadcIixcImFjY291bnRfaWRcIjoyLFwicGljX2lkMVwiOjQ0LFwicGljX2lkMlwiOi0xLFwiUGljMVwiOntcImlkXCI6NDQsXCJjcmVhdGVkX2F0XCI6XCIyMDIwLTA2LTE1VDAxOjQwOjU0KzA4OjAwXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDIwLTA2LTE1VDAxOjQwOjU0KzA4OjAwXCIsXCJkZWxldGVkX2F0XCI6bnVsbCxcInVzZXJfaWRcIjoxLFwiYnVja2V0XCI6XCJ0b2t5b3FcIixcImZpbGVfbmFtZVwiOlwiYmlsbF9waWMvdG1wXzI0YWMzN2EzMzAzNjJmNjc5YmQ2YTBjZjNkM2FiN2ZmMGViZjFmY2Y5Njk3MTMzMC5qcGdcIixcInNpemVcIjo2MzU0MyxcIm1pbWVfdHlwZVwiOlwiaW1hZ2UvanBlZ1wiLFwiaGVpZ2h0XCI6ODU0LFwid2lkdGhcIjo2NDAsXCJVc2VyXCI6bnVsbH0sXCJQaWMyXCI6bnVsbCxcIlVzZXJcIjp7XCJpZFwiOjEsXCJjcmVhdGVkX2F0XCI6XCIyMDIwLTA1LTE4VDA2OjU3OjI5KzA4OjAwXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDIwLTA2LTE1VDEzOjU3OjI4KzA4OjAwXCIsXCJkZWxldGVkX2F0XCI6bnVsbCxcIm9wZW5pZFwiOlwib0IzWGQ0cWZZMGNQT0FaTTZCWHJxNmtGRjkxa1wiLFwidXNlcm5hbWVcIjpcIlwiLFwiYWdlXCI6MCxcImJpcnRoZGF5XCI6bnVsbCxcImVtYWlsXCI6XCJcIixcInJvbGVcIjpcIlwiLFwiYWRkcmVzc1wiOlwiXCIsXCJuaWNrbmFtZVwiOlwiVG9reW9cIixcImdlbmRlclwiOjEsXCJwcm92aW5jZVwiOlwiU2hhbmRvbmdcIixcImNpdHlcIjpcIkxpbnlpXCIsXCJjb3VudHJ5XCI6XCJDaGluYVwiLFwibGFuZ3VhZ2VcIjpcInpoX0NOXCIsXCJhdmF0YXJVcmxcIjpcImh0dHBzOi8vd3gucWxvZ28uY24vbW1vcGVuL3ZpXzMyL1EwajRUd0dUZlRLMzRJNmx0RXA5cVUzbjJmaWE3WGI2Q1JOVEVuc2x5MFY3blBzUFhDQzBhbVBmMTN5VWtaclVrbjlQSE9JRnJDcWZoRjBMZlNmZDlxZy8xMzJcIn0sXCJBY2NvdW50XCI6e1wiaWRcIjoyLFwiY3JlYXRlZF9hdFwiOlwiMjAyMC0wNS0xOFQwNjo1NzoyOCswODowMFwiLFwidXBkYXRlZF9hdFwiOlwiMjAyMC0wNS0xOFQwNjo1NzoyOCswODowMFwiLFwiZGVsZXRlZF9hdFwiOm51bGwsXCJsZWRnZXJfaWRcIjoxLFwidXNlcl9pZFwiOjEsXCJuYW1lXCI6XCLmlK/ku5jlrp1cIixcInR5cGVcIjoxLFwiaWNvblwiOlwiZW1vamlcIixcIm9yZFwiOjIsXCJhbW91bnRcIjowfSxcIkxlZGdlclwiOm51bGwsXCJCaWxsVHlwZVwiOntcImlkXCI6MyxcImNyZWF0ZWRfYXRcIjpcIjIwMjAtMDUtMThUMDY6NTc6MjgrMDg6MDBcIixcInVwZGF0ZWRfYXRcIjpcIjIwMjAtMDUtMThUMDY6NTc6MjgrMDg6MDBcIixcImRlbGV0ZWRfYXRcIjpudWxsLFwibGVkZ2VyX2lkXCI6MSxcInVzZXJfaWRcIjoxLFwibmFtZVwiOlwi5pSv5Ye6M1wiLFwidHlwZVwiOjEsXCJwYXJlbnRfaWRcIjotMSxcImljb25cIjpcImVtb2ppXCIsXCJjaGlsZHJlblwiOm51bGwsXCJvcmRcIjozfX1cclxuICAgIGNvbnN0IGZpbGVMaXN0ID0gW11cclxuICAgIGJpbGwuUGljMSAmJiBmaWxlTGlzdC5wdXNoKGRvd25sb2FkSG9zdCArIGJpbGwuUGljMS5maWxlX25hbWUpXHJcbiAgICBiaWxsLlBpYzIgJiYgZmlsZUxpc3QucHVzaChkb3dubG9hZEhvc3QgKyBiaWxsLlBpYzIuZmlsZV9uYW1lKVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgYmlsbDogIGJpbGwsXHJcbiAgICAgIGJpbGxUaW1lOiBmb3JtYXRUaW1lKG5ldyBEYXRlKGJpbGwuYmlsbF90aW1lKSksXHJcbiAgICAgIGZpbGVMaXN0OiBmaWxlTGlzdCxcclxuICAgIH0pXHJcbiAgICB0aGlzLmdldExpc3QoKVxyXG4gIH0sXHJcbn0pXHJcblxyXG5leHBvcnQge30iXX0=