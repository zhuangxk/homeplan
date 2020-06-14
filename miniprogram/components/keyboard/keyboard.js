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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../api/index");
var util_1 = require("../../utils/util");
Component({
    options: {
        styleIsolation: 'shared'
    },
    lifetimes: {},
    properties: {
        ledgerId: Number,
        actionType: {
            type: String,
            value: 'add'
        },
        bill: {
            type: Object,
            value: {}
        }
    },
    observers: {
        ledgerId: function (ledgerId) {
            if (ledgerId) {
                this.getTypes();
                this.getAccounts();
            }
        },
        actionType: function (type) {
            if (!this.data.typeLoaded || !this.data.accountLoaded) {
                return;
            }
            this.reset(type);
        }
    },
    data: {
        downloadHost: 'https://oss.toko.wang/',
        types: {
            1: [],
            2: [],
        },
        accounts: [],
        typeLoaded: false,
        accountLoaded: false,
        typeActive: 1,
        formdata: {
            "amount": "",
            "amount_type": 1,
            "bill_type_id": null,
            "bill_time": new Date().toISOString(),
            "comment": "",
            "account_id": null
        },
        minDate: new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 30).getTime(),
        maxDate: new Date().getTime(),
        now: new Date().getTime(),
        max: 9999999,
        min: 0,
        billTime: '今日',
        accountName: '现金',
        imgPopupShow: false,
        accountPopupShow: false,
        datePopupShow: false,
        typing: false,
        fileList: []
    },
    methods: {
        getTypes: function () {
            return __awaiter(this, void 0, void 0, function () {
                var billTypes, types;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this.properties.ledgerId) {
                                return [2];
                            }
                            return [4, index_1.getBillTypes(this.properties.ledgerId)];
                        case 1:
                            billTypes = _a.sent();
                            types = {};
                            billTypes.forEach(function (item) {
                                types[item.type] = types[item.type] || [];
                                types[item.type].push(item);
                            });
                            this.setData({
                                types: types,
                                typeLoaded: true,
                                formdata: __assign(__assign({}, this.data.formdata), { "bill_type_id": types[1][0]['id'] })
                            });
                            return [2];
                    }
                });
            });
        },
        getAccounts: function () {
            return __awaiter(this, void 0, void 0, function () {
                var accounts;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this.properties.ledgerId) {
                                return [2];
                            }
                            return [4, index_1.getAccounts(this.properties.ledgerId)];
                        case 1:
                            accounts = _a.sent();
                            this.setData({
                                accounts: accounts,
                                accountLoaded: true,
                            });
                            this.setAccount(accounts[0].id);
                            return [2];
                    }
                });
            });
        },
        onInput: function (e) {
            var value = e.currentTarget.dataset.v;
            if (!value)
                return;
            switch (value) {
                case 'date':
                    this.date();
                    return;
                case 'account':
                    this.account();
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
            var value = this.data.formdata.amount.substring(0, this.data.formdata.amount.length - 1);
            this.setData({
                formdata: __assign(__assign({}, this.data.formdata), { amount: value })
            });
        },
        date: function () {
            this.setData({
                datePopupShow: true
            });
        },
        ok: function () {
            var _this = this;
            if (this.data.formdata.amount == "") {
                wx.showToast({
                    title: '请填写金额',
                    duration: 2000
                });
                return;
            }
            var pic = {};
            var fileList = this.data.fileList;
            fileList[0] ? (pic["pic_id1"] = fileList[0]['id']) : (pic["pic_id1"] = -1);
            fileList[1] ? (pic["pic_id2"] = fileList[1]['id']) : (pic["pic_id2"] = -1);
            if (this.data.actionType == 'add') {
                index_1.createBill(this.data.ledgerId, __assign(__assign({}, this.data.formdata), pic)).then(function (_) {
                    wx.showToast({
                        title: "添加成功",
                        icon: 'success',
                        duration: 2000
                    });
                    _this.triggerEvent("success");
                });
            }
            if (this.data.actionType == 'edit') {
                index_1.updateBill(this.data.bill.id, __assign(__assign({}, this.data.formdata), pic)).then(function (_) {
                    wx.showToast({
                        title: "修改成功",
                        icon: 'success',
                        duration: 2000
                    });
                    _this.triggerEvent("success");
                });
            }
        },
        account: function () {
            this.setData({
                accountPopupShow: true
            });
        },
        input: function (val) {
            var value = this.format(val);
            this.setData({
                formdata: __assign(__assign({}, this.data.formdata), { amount: value })
            });
        },
        format: function (val) {
            if (this.data.formdata.amount.indexOf('.') > -1) {
                if (val === '.') {
                    return this.data.formdata.amount;
                }
                if (this.data.formdata.amount.split('.')[1].length >= 2) {
                    return this.data.formdata.amount;
                }
            }
            var value = this.data.formdata.amount + val;
            if (val === '.') {
                return this.data.formdata.amount + val;
            }
            if (this.data.formdata.amount === '0') {
                if (val !== '.') {
                    return val;
                }
            }
            if (parseInt(value) > 99999999) {
                wx.showToast({
                    title: '钱太多,数不过来啦',
                    icon: 'none'
                });
                return this.data.formdata.amount;
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
                formdata: __assign(__assign({}, this.data.formdata), { comment: value })
            });
        },
        onBillTypeTap: function (e) {
            var billTypeId = e.currentTarget.dataset.id;
            if (!billTypeId)
                return;
            this.setData({
                typing: false,
                formdata: __assign(__assign({}, this.data.formdata), { "bill_type_id": billTypeId })
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
        onAccountPopupClose: function () {
            this.setData({
                accountPopupShow: false
            });
        },
        onDatePopupClose: function () {
            this.setData({
                datePopupShow: false
            });
        },
        afterRead: function (event) {
            var self = this;
            var file = event.detail.file;
            index_1.getOssToken().then(function (res) {
                wx.uploadFile({
                    url: res.host,
                    filePath: file.path,
                    name: 'file',
                    formData: {
                        'name': new Date().getTime(),
                        'key': res.dir + "${filename}",
                        'policy': res.policy,
                        'OSSAccessKeyId': res.accessid,
                        'success_action_status': '200',
                        'callback': res.callback,
                        'signature': res.signature
                    },
                    success: function (res) {
                        console.log(res);
                        if (res.statusCode == 200) {
                            var data = JSON.parse(res.data);
                            var url = data.data.url;
                            var id = data.data.id;
                            var _a = self.data.fileList, fileList = _a === void 0 ? [] : _a;
                            fileList.push(__assign(__assign({}, file), { url: url, id: id }));
                            self.setData({ fileList: fileList });
                        }
                        else {
                            wx.showToast({
                                title: '上传失败，请再稍后再试',
                                icon: 'none',
                                duration: 2000
                            });
                        }
                    },
                });
            });
        },
        deletePic: function (e) {
            var index = e.detail.index;
            var _a = this.data.fileList, fileList = _a === void 0 ? [] : _a;
            fileList.splice(index, 1);
            this.setData({ fileList: fileList });
        },
        onConfirm: function (e) {
            var value = e.detail;
            this.setData({
                formdata: __assign(__assign({}, this.data.formdata), { "bill_time": value.toISOString() }),
                billTime: util_1.formatMonthDate(value),
                datePopupShow: false
            });
        },
        onTabChange: function (e) {
            var typeActive = e.detail.name;
            this.setData({
                typeActive: e.detail.name,
                formdata: __assign(__assign({}, this.data.formdata), { "amount_type": typeActive, "bill_type_id": this.data.types[typeActive][0]['id'] })
            });
        },
        onAccountChange: function (e) {
            this.setAccount(e.detail);
        },
        onAccountClick: function (e) {
            var name = e.currentTarget.dataset.name;
            this.setAccount(name);
        },
        setAccount: function (accountId) {
            var name = this.data.accounts.find(function (item) { return item.id == accountId; }).name;
            this.setData({
                formdata: __assign(__assign({}, this.data.formdata), { "account_id": accountId }),
                accountName: name,
                accountPopupShow: false,
            });
        },
        reset: function (type) {
            if (type == 'add') {
                var now = new Date();
                this.setData({
                    typeActive: 1,
                    formdata: {
                        "amount": "",
                        "amount_type": 1,
                        "bill_type_id": this.data.types[1][0]['id'],
                        "bill_time": now.toISOString(),
                        "comment": "",
                        "account_id": this.data.accounts[0].id,
                    },
                    minDate: new Date(now.getTime() - 1000 * 60 * 60 * 24 * 30).getTime(),
                    maxDate: now.getTime(),
                    now: now.getTime(),
                    billTime: '今日',
                    accountName: this.data.accounts[0].name,
                    fileList: []
                });
            }
            if (type == 'edit') {
                var now = new Date();
                var _a = this.data, bill_1 = _a.bill, downloadHost = _a.downloadHost;
                var fileList = [];
                bill_1.Pic1 && fileList.push({ url: downloadHost + bill_1.Pic1.file_name, id: bill_1.Pic1.id });
                bill_1.Pic2 && fileList.push({ url: downloadHost + bill_1.Pic2.file_name, id: bill_1.Pic2.id });
                this.setData({
                    typeActive: bill_1.amount_type,
                    formdata: {
                        "amount": bill_1.amount,
                        "amount_type": bill_1.amount_type,
                        "bill_type_id": bill_1.bill_type_id,
                        "bill_time": bill_1.bill_time,
                        "comment": bill_1.comment,
                        "account_id": bill_1.account_id,
                    },
                    minDate: new Date(now.getTime() - 1000 * 60 * 60 * 24 * 30).getTime(),
                    maxDate: now.getTime(),
                    now: now.getTime(),
                    billTime: util_1.formatMonthDate(new Date(bill_1.bill_time)),
                    accountName: this.data.accounts.find(function (i) { return i.id == bill_1.account_id; })["name"],
                    fileList: fileList
                });
            }
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5Ym9hcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJrZXlib2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQWdHO0FBQ2hHLHlDQUFrRDtBQUVsRCxTQUFTLENBQUM7SUFDUixPQUFPLEVBQUU7UUFDUCxjQUFjLEVBQUUsUUFBUTtLQUN6QjtJQUNELFNBQVMsRUFBRSxFQUtWO0lBQ0QsVUFBVSxFQUFFO1FBQ1IsUUFBUSxFQUFFLE1BQU07UUFDaEIsVUFBVSxFQUFFO1lBQ1YsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsS0FBSztTQUNiO1FBQ0QsSUFBSSxFQUFFO1lBQ0osSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsRUFBRTtTQUNWO0tBQ0o7SUFDRCxTQUFTLEVBQUU7UUFDVCxRQUFRLEVBQVIsVUFBUyxRQUFRO1lBQ2YsSUFBRyxRQUFRLEVBQUM7Z0JBQ1YsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO2dCQUNmLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTthQUNuQjtRQUNILENBQUM7UUFDRCxVQUFVLEVBQVYsVUFBVyxJQUFJO1lBQ2IsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUM7Z0JBQ25ELE9BQU07YUFDUDtZQUNELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDbEIsQ0FBQztLQUNGO0lBQ0QsSUFBSSxFQUFFO1FBQ0osWUFBWSxFQUFFLHdCQUF3QjtRQUN0QyxLQUFLLEVBQUU7WUFDTCxDQUFDLEVBQUUsRUFBYztZQUNqQixDQUFDLEVBQUUsRUFBYztTQUNVO1FBQzdCLFFBQVEsRUFBQyxFQUFjO1FBQ3ZCLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLGFBQWEsRUFBRSxLQUFLO1FBQ3BCLFVBQVUs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QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBRSxPQUFBLENBQUMsQ0FBQyxFQUFFLElBQUUsTUFBSSxDQUFDLFVBQVUsRUFBckIsQ0FBcUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQztvQkFDdEUsUUFBUSxFQUFFLFFBQVE7aUJBQ25CLENBQUMsQ0FBQTthQUNIO1FBQ0gsQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0QWNjb3VudHMsIGdldEJpbGxUeXBlcywgZ2V0T3NzVG9rZW4sIGNyZWF0ZUJpbGwsIHVwZGF0ZUJpbGwgfSBmcm9tICcuLi8uLi9hcGkvaW5kZXgnXHJcbmltcG9ydCB7IGZvcm1hdE1vbnRoRGF0ZSB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnXHJcblxyXG5Db21wb25lbnQoe1xyXG4gIG9wdGlvbnM6IHtcclxuICAgIHN0eWxlSXNvbGF0aW9uOiAnc2hhcmVkJ1xyXG4gIH0sXHJcbiAgbGlmZXRpbWVzOiB7XHJcbiAgICAvLyByZWFkeSgpOiB2b2lke1xyXG4gICAgLy8gICB0aGlzLmdldFR5cGVzKCkgIFxyXG4gICAgLy8gICB0aGlzLmdldEFjY291bnRzKClcclxuICAgIC8vIH1cclxuICB9LFxyXG4gIHByb3BlcnRpZXM6IHtcclxuICAgICAgbGVkZ2VySWQ6IE51bWJlcixcclxuICAgICAgYWN0aW9uVHlwZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICB2YWx1ZTogJ2FkZCdcclxuICAgICAgfSxcclxuICAgICAgYmlsbDoge1xyXG4gICAgICAgIHR5cGU6IE9iamVjdCxcclxuICAgICAgICB2YWx1ZToge31cclxuICAgICAgfVxyXG4gIH0sXHJcbiAgb2JzZXJ2ZXJzOiB7XHJcbiAgICBsZWRnZXJJZChsZWRnZXJJZCk6IHZvaWQge1xyXG4gICAgICBpZihsZWRnZXJJZCl7XHJcbiAgICAgICAgdGhpcy5nZXRUeXBlcygpICBcclxuICAgICAgICB0aGlzLmdldEFjY291bnRzKClcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGFjdGlvblR5cGUodHlwZSk6IHZvaWQge1xyXG4gICAgICBpZighdGhpcy5kYXRhLnR5cGVMb2FkZWQgfHwgIXRoaXMuZGF0YS5hY2NvdW50TG9hZGVkKXtcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICB0aGlzLnJlc2V0KHR5cGUpXHJcbiAgICB9XHJcbiAgfSxcclxuICBkYXRhOiB7XHJcbiAgICBkb3dubG9hZEhvc3Q6ICdodHRwczovL29zcy50b2tvLndhbmcvJyxcclxuICAgIHR5cGVzOiB7XHJcbiAgICAgIDE6IFtdIGFzIEFueUFycmF5LFxyXG4gICAgICAyOiBbXSBhcyBBbnlBcnJheSxcclxuICAgIH0gYXMgUmVjb3JkPG51bWJlciwgQW55QXJyYXk+LFxyXG4gICAgYWNjb3VudHM6W10gYXMgQW55QXJyYXksXHJcbiAgICB0eXBlTG9hZGVkOiBmYWxzZSxcclxuICAgIGFjY291bnRMb2FkZWQ6IGZhbHNlLFxyXG4gICAgdHlwZUFjdGl2ZTogMSxcclxuICAgIGZvcm1kYXRhOiB7XHJcbiAgICAgIFwiYW1vdW50XCI6IFwiXCIsXHJcbiAgICAgIFwiYW1vdW50X3R5cGVcIjogMSxcclxuICAgICAgXCJiaWxsX3R5cGVfaWRcIjogbnVsbCxcclxuICAgICAgXCJiaWxsX3RpbWVcIjogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICBcImNvbW1lbnRcIjogXCJcIixcclxuICAgICAgXCJhY2NvdW50X2lkXCI6IG51bGwgYXMgbnVsbCB8IG51bWJlclxyXG4gICAgfSxcclxuICAgIG1pbkRhdGU6IG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gMTAwMCAqIDYwICogNjAgKiAyNCAqIDMwKS5nZXRUaW1lKCksXHJcbiAgICBtYXhEYXRlOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcclxuICAgIG5vdzogbmV3IERhdGUoKS5nZXRUaW1lKCksXHJcbiAgICBtYXg6IDk5OTk5OTksXHJcbiAgICBtaW46IDAsXHJcbiAgICBiaWxsVGltZTogJ+S7iuaXpScsXHJcbiAgICBhY2NvdW50TmFtZTogJ+eOsOmHkScsXHJcbiAgICBpbWdQb3B1cFNob3c6IGZhbHNlLFxyXG4gICAgYWNjb3VudFBvcHVwU2hvdzogZmFsc2UsXHJcbiAgICBkYXRlUG9wdXBTaG93OiBmYWxzZSxcclxuICAgIHR5cGluZzogZmFsc2UsXHJcbiAgICBmaWxlTGlzdDogW10gYXMgQW55QXJyYXlcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGFzeW5jIGdldFR5cGVzKCk6IFByb21pc2U8dm9pZD57XHJcbiAgICAgIGlmICghdGhpcy5wcm9wZXJ0aWVzLmxlZGdlcklkKXtcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICBjb25zdCBiaWxsVHlwZXMgPSBhd2FpdCBnZXRCaWxsVHlwZXModGhpcy5wcm9wZXJ0aWVzLmxlZGdlcklkKVxyXG4gICAgICBjb25zdCB0eXBlcyA9IHt9IGFzIFJlY29yZDxudW1iZXIsIEFueUFycmF5PlxyXG4gICAgICBiaWxsVHlwZXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICB0eXBlc1tpdGVtLnR5cGVdID0gdHlwZXNbaXRlbS50eXBlXSB8fCBbXVxyXG4gICAgICAgIHR5cGVzW2l0ZW0udHlwZV0ucHVzaChpdGVtKVxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHR5cGVzLFxyXG4gICAgICAgIHR5cGVMb2FkZWQ6IHRydWUsXHJcbiAgICAgICAgZm9ybWRhdGE6e1xyXG4gICAgICAgICAgLi4udGhpcy5kYXRhLmZvcm1kYXRhLFxyXG4gICAgICAgICAgXCJiaWxsX3R5cGVfaWRcIjogdHlwZXNbMV1bMF1bJ2lkJ10sXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIGFzeW5jIGdldEFjY291bnRzKCk6IFByb21pc2U8dm9pZD57XHJcbiAgICAgIGlmICghdGhpcy5wcm9wZXJ0aWVzLmxlZGdlcklkKXtcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGdldEFjY291bnRzKHRoaXMucHJvcGVydGllcy5sZWRnZXJJZClcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBhY2NvdW50cyxcclxuICAgICAgICBhY2NvdW50TG9hZGVkOiB0cnVlLFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNldEFjY291bnQoYWNjb3VudHNbMF0uaWQpXHJcbiAgICB9LFxyXG4gICAgb25JbnB1dChlOiBBbnlPYmplY3QpOiB2b2lke1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnY7XHJcbiAgICAgIGlmKCF2YWx1ZSkgcmV0dXJuXHJcbiAgICAgIHN3aXRjaCAodmFsdWUpIHtcclxuICAgICAgICBjYXNlICdkYXRlJzpcclxuICAgICAgICAgIHRoaXMuZGF0ZSgpXHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICBjYXNlICdhY2NvdW50JzpcclxuICAgICAgICAgIHRoaXMuYWNjb3VudCgpXHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICBjYXNlICdvayc6XHJcbiAgICAgICAgICB0aGlzLm9rKClcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIGNhc2UgJ2RlbCc6XHJcbiAgICAgICAgICB0aGlzLmRlbCgpXHJcbiAgICAgICAgICB3eC52aWJyYXRlU2hvcnQoKVxyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICB0aGlzLmlucHV0KHZhbHVlKVxyXG4gICAgICAgICAgd3gudmlicmF0ZVNob3J0KClcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vIOWIoOmZpOmUrlxyXG4gICAgZGVsKCk6IHZvaWR7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5kYXRhLmZvcm1kYXRhLmFtb3VudC5zdWJzdHJpbmcoMCwgdGhpcy5kYXRhLmZvcm1kYXRhLmFtb3VudC5sZW5ndGggLSAxKVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGZvcm1kYXRhOiB7XHJcbiAgICAgICAgICAuLi50aGlzLmRhdGEuZm9ybWRhdGEsXHJcbiAgICAgICAgICBhbW91bnQ6IHZhbHVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIGRhdGUoKTogdm9pZHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBkYXRlUG9wdXBTaG93OiB0cnVlXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgLy8g5o+Q5Lqk6LSm5Y2VXHJcbiAgICBvaygpOiB2b2lke1xyXG4gICAgICBpZih0aGlzLmRhdGEuZm9ybWRhdGEuYW1vdW50ID09IFwiXCIpe1xyXG4gICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICB0aXRsZTogJ+ivt+Whq+WGmemHkeminScsXHJcbiAgICAgICAgICBkdXJhdGlvbjogMjAwMCAgXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICBjb25zdCBwaWMgPSB7fSBhcyBBbnlPYmplY3RcclxuICAgICAgY29uc3Qge2ZpbGVMaXN0fSA9IHRoaXMuZGF0YVxyXG4gICAgICBmaWxlTGlzdFswXSA/IChwaWNbXCJwaWNfaWQxXCJdID0gZmlsZUxpc3RbMF1bJ2lkJ10pIDogKHBpY1tcInBpY19pZDFcIl0gPSAtMSlcclxuICAgICAgZmlsZUxpc3RbMV0gPyAocGljW1wicGljX2lkMlwiXSA9IGZpbGVMaXN0WzFdWydpZCddKSA6IChwaWNbXCJwaWNfaWQyXCJdID0gLTEpXHJcbiAgICAgIGlmKHRoaXMuZGF0YS5hY3Rpb25UeXBlID09ICdhZGQnKXtcclxuICAgICAgICBjcmVhdGVCaWxsKHRoaXMuZGF0YS5sZWRnZXJJZCx7XHJcbiAgICAgICAgICAuLi50aGlzLmRhdGEuZm9ybWRhdGEsXHJcbiAgICAgICAgICAuLi5waWNcclxuICAgICAgICB9KS50aGVuKF89PntcclxuICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIua3u+WKoOaIkOWKn1wiLFxyXG4gICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwICBcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudChcInN1Y2Nlc3NcIilcclxuICAgICAgICB9KSAgICAgICAgXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKHRoaXMuZGF0YS5hY3Rpb25UeXBlID09ICdlZGl0Jyl7XHJcbiAgICAgICAgdXBkYXRlQmlsbCh0aGlzLmRhdGEuYmlsbC5pZCx7XHJcbiAgICAgICAgICAuLi50aGlzLmRhdGEuZm9ybWRhdGEsXHJcbiAgICAgICAgICAuLi5waWNcclxuICAgICAgICB9KS50aGVuKF89PntcclxuICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIuS/ruaUueaIkOWKn1wiLFxyXG4gICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwICBcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudChcInN1Y2Nlc3NcIilcclxuICAgICAgICB9KSAgICAgICAgXHJcbiAgICAgIH1cclxuXHJcbiAgICB9LFxyXG4gICAgYWNjb3VudCgpOiB2b2lke1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGFjY291bnRQb3B1cFNob3c6IHRydWVcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICAvLyDplK7nm5jovpPlhaVcclxuICAgIGlucHV0KHZhbDogc3RyaW5nKTogdm9pZHtcclxuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmZvcm1hdCh2YWwpXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgZm9ybWRhdGE6IHtcclxuICAgICAgICAgIC4uLnRoaXMuZGF0YS5mb3JtZGF0YSxcclxuICAgICAgICAgIGFtb3VudDogdmFsdWVcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgLy8g6ZSu55uY5pWw5a2X5o6n5Yi2XHJcbiAgICBmb3JtYXQ6IGZ1bmN0aW9uICh2YWw6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgIGlmICh0aGlzLmRhdGEuZm9ybWRhdGEuYW1vdW50LmluZGV4T2YoJy4nKSA+IC0xKSB7XHJcbiAgICAgICAgaWYgKHZhbCA9PT0gJy4nKXtcclxuICAgICAgICAgIHJldHVybiB0aGlzLmRhdGEuZm9ybWRhdGEuYW1vdW50XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuZm9ybWRhdGEuYW1vdW50LnNwbGl0KCcuJylbMV0ubGVuZ3RoID49IDIpe1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5mb3JtZGF0YS5hbW91bnRcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmRhdGEuZm9ybWRhdGEuYW1vdW50ICsgdmFsXHJcbiAgICAgIGlmICh2YWwgPT09ICcuJykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEuZm9ybWRhdGEuYW1vdW50ICsgdmFsXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuZGF0YS5mb3JtZGF0YS5hbW91bnQgPT09ICcwJyl7XHJcbiAgICAgICAgaWYodmFsICE9PSAnLicgKXtcclxuICAgICAgICAgIHJldHVybiB2YWxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYocGFyc2VJbnQodmFsdWUpID4gOTk5OTk5OTkpe1xyXG4gICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICB0aXRsZTogJ+mSseWkquWkmizmlbDkuI3ov4fmnaXllaYnLFxyXG4gICAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmZvcm1kYXRhLmFtb3VudFxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdmFsdWVcclxuXHJcbiAgICB9LFxyXG4gICAgb25SZW1hcmtGb2N1cygpOiB2b2lkIHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB0eXBpbmc6IHRydWVcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBvblJlbWFya0JsdXIoZTogQW55T2JqZWN0KTogdm9pZCB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB0eXBpbmc6IGZhbHNlLFxyXG4gICAgICAgIGZvcm1kYXRhOiB7XHJcbiAgICAgICAgICAuLi50aGlzLmRhdGEuZm9ybWRhdGEsXHJcbiAgICAgICAgICBjb21tZW50OiB2YWx1ZVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBvbkJpbGxUeXBlVGFwKGU6IEFueU9iamVjdCk6IHZvaWQge1xyXG4gICAgICBjb25zdCBiaWxsVHlwZUlkID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XHJcbiAgICAgIGlmKCFiaWxsVHlwZUlkKSByZXR1cm5cclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB0eXBpbmc6IGZhbHNlLFxyXG4gICAgICAgIGZvcm1kYXRhOiB7XHJcbiAgICAgICAgICAuLi50aGlzLmRhdGEuZm9ybWRhdGEsXHJcbiAgICAgICAgICBcImJpbGxfdHlwZV9pZFwiOiBiaWxsVHlwZUlkXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICB3eC52aWJyYXRlU2hvcnQoKVxyXG4gICAgfSxcclxuICAgIG9uSW1nQnRuVGFwKCk6IHZvaWR7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgaW1nUG9wdXBTaG93OiB0cnVlXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgb25JbWdQb3B1cENsb3NlKCk6IHZvaWR7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgaW1nUG9wdXBTaG93OiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIG9uQWNjb3VudFBvcHVwQ2xvc2UoKTogdm9pZHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBhY2NvdW50UG9wdXBTaG93OiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIG9uRGF0ZVBvcHVwQ2xvc2UoKTogdm9pZHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBkYXRlUG9wdXBTaG93OiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIC8vIOS4iuS8oOWbvueJh1xyXG4gICAgYWZ0ZXJSZWFkKGV2ZW50KTogdm9pZHtcclxuICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcclxuICAgICAgY29uc3QgeyBmaWxlIH0gPSBldmVudC5kZXRhaWw7XHJcbiAgICAgIGdldE9zc1Rva2VuKCkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIHd4LnVwbG9hZEZpbGUoe1xyXG4gICAgICAgICAgdXJsOiByZXMuaG9zdCxcclxuICAgICAgICAgIGZpbGVQYXRoOiBmaWxlLnBhdGgsXHJcbiAgICAgICAgICBuYW1lOiAnZmlsZScsXHJcbiAgICAgICAgICBmb3JtRGF0YToge1xyXG4gICAgICAgICAgICAnbmFtZSc6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICAna2V5JyA6IHJlcy5kaXIgKyBcIiR7ZmlsZW5hbWV9XCIsXHJcbiAgICAgICAgICAgICdwb2xpY3knOiByZXMucG9saWN5LFxyXG4gICAgICAgICAgICAnT1NTQWNjZXNzS2V5SWQnOiByZXMuYWNjZXNzaWQsIFxyXG4gICAgICAgICAgICAnc3VjY2Vzc19hY3Rpb25fc3RhdHVzJyA6ICcyMDAnLCAvL+iuqeacjeWKoeerr+i/lOWbnjIwMCzkuI3nhLbvvIzpu5jorqTkvJrov5Tlm54yMDRcclxuICAgICAgICAgICAgJ2NhbGxiYWNrJyA6IHJlcy5jYWxsYmFjayxcclxuICAgICAgICAgICAgJ3NpZ25hdHVyZSc6IHJlcy5zaWduYXR1cmVcclxuXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgICBpZihyZXMuc3RhdHVzQ29kZSA9PSAyMDApe1xyXG4gICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHJlcy5kYXRhKVxyXG4gICAgICAgICAgICAgIGNvbnN0IHVybCA9IGRhdGEuZGF0YS51cmxcclxuICAgICAgICAgICAgICBjb25zdCBpZCA9IGRhdGEuZGF0YS5pZFxyXG4gICAgICAgICAgICAgIGNvbnN0IHsgZmlsZUxpc3QgPSBbXSB9ID0gc2VsZi5kYXRhO1xyXG4gICAgICAgICAgICAgIGZpbGVMaXN0LnB1c2goeyAuLi5maWxlLCB1cmwsIGlkIH0pO1xyXG4gICAgICAgICAgICAgIHNlbGYuc2V0RGF0YSh7IGZpbGVMaXN0IH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+S4iuS8oOWksei0pe+8jOivt+WGjeeojeWQjuWGjeivlScsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgLy8g5Yig6Zmk5Zu+54mHXHJcbiAgICBkZWxldGVQaWMoZSk6IHZvaWR7XHJcbiAgICAgIGNvbnN0IHsgaW5kZXggfSA9IGUuZGV0YWlsXHJcbiAgICAgIGNvbnN0IHsgZmlsZUxpc3QgPSBbXSB9ID0gdGhpcy5kYXRhO1xyXG4gICAgICBmaWxlTGlzdC5zcGxpY2UoaW5kZXgsMSlcclxuICAgICAgdGhpcy5zZXREYXRhKHsgZmlsZUxpc3QgfSlcclxuICAgIH0sXHJcbiAgICBvbkNvbmZpcm0oZSk6IHZvaWR7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gZS5kZXRhaWwgYXMgRGF0ZVxyXG5cclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBmb3JtZGF0YToge1xyXG4gICAgICAgICAgLi4udGhpcy5kYXRhLmZvcm1kYXRhLFxyXG4gICAgICAgICAgXCJiaWxsX3RpbWVcIjogdmFsdWUudG9JU09TdHJpbmcoKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYmlsbFRpbWU6IGZvcm1hdE1vbnRoRGF0ZSh2YWx1ZSksXHJcbiAgICAgICAgZGF0ZVBvcHVwU2hvdzogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBvblRhYkNoYW5nZShlOiBBbnlPYmplY3QpOiB2b2lke1xyXG4gICAgICBjb25zdCB0eXBlQWN0aXZlID0gZS5kZXRhaWwubmFtZTtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB0eXBlQWN0aXZlIDogZS5kZXRhaWwubmFtZSxcclxuICAgICAgICBmb3JtZGF0YToge1xyXG4gICAgICAgICAgLi4udGhpcy5kYXRhLmZvcm1kYXRhLFxyXG4gICAgICAgICAgXCJhbW91bnRfdHlwZVwiOiB0eXBlQWN0aXZlLFxyXG4gICAgICAgICAgXCJiaWxsX3R5cGVfaWRcIjogdGhpcy5kYXRhLnR5cGVzW3R5cGVBY3RpdmVdWzBdWydpZCddXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIG9uQWNjb3VudENoYW5nZShlOiBBbnlPYmplY3QpOiB2b2lke1xyXG4gICAgICB0aGlzLnNldEFjY291bnQoZS5kZXRhaWwpXHJcbiAgICB9LCBcclxuICAgIG9uQWNjb3VudENsaWNrKGU6IEFueU9iamVjdCk6IHZvaWR7XHJcbiAgICAgIGNvbnN0IHsgbmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XHJcbiAgICAgIHRoaXMuc2V0QWNjb3VudChuYW1lKVxyXG4gICAgfSxcclxuICAgIHNldEFjY291bnQoYWNjb3VudElkOiBudW1iZXIpOiB2b2lke1xyXG4gICAgICBjb25zdCB7bmFtZX0gPSB0aGlzLmRhdGEuYWNjb3VudHMuZmluZChpdGVtPT5pdGVtLmlkID09IGFjY291bnRJZClcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBmb3JtZGF0YToge1xyXG4gICAgICAgICAgLi4udGhpcy5kYXRhLmZvcm1kYXRhLFxyXG4gICAgICAgICAgXCJhY2NvdW50X2lkXCI6IGFjY291bnRJZFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWNjb3VudE5hbWU6IG5hbWUsXHJcbiAgICAgICAgYWNjb3VudFBvcHVwU2hvdzogZmFsc2UsXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgcmVzZXQodHlwZTogc3RyaW5nKSA6dm9pZHtcclxuICAgICAgaWYodHlwZT09J2FkZCcpe1xyXG4gICAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKClcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgdHlwZUFjdGl2ZTogMSxcclxuICAgICAgICAgIGZvcm1kYXRhOiB7XHJcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IFwiXCIsXHJcbiAgICAgICAgICAgIFwiYW1vdW50X3R5cGVcIjogMSxcclxuICAgICAgICAgICAgXCJiaWxsX3R5cGVfaWRcIjogdGhpcy5kYXRhLnR5cGVzWzFdWzBdWydpZCddLFxyXG4gICAgICAgICAgICBcImJpbGxfdGltZVwiOiBub3cudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgICAgXCJjb21tZW50XCI6IFwiXCIsXHJcbiAgICAgICAgICAgIFwiYWNjb3VudF9pZFwiOiB0aGlzLmRhdGEuYWNjb3VudHNbMF0uaWQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgbWluRGF0ZTogbmV3IERhdGUobm93LmdldFRpbWUoKSAtIDEwMDAgKiA2MCAqIDYwICogMjQgKiAzMCkuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgbWF4RGF0ZTogbm93LmdldFRpbWUoKSxcclxuICAgICAgICAgIG5vdzogbm93LmdldFRpbWUoKSxcclxuICAgICAgICAgIGJpbGxUaW1lOiAn5LuK5pelJyxcclxuICAgICAgICAgIGFjY291bnROYW1lOiB0aGlzLmRhdGEuYWNjb3VudHNbMF0ubmFtZSxcclxuICAgICAgICAgIGZpbGVMaXN0OiBbXVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgICAgaWYodHlwZT09J2VkaXQnKXtcclxuICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpXHJcbiAgICAgICAgY29uc3QgeyBiaWxsLCBkb3dubG9hZEhvc3QgfSA9IHRoaXMuZGF0YVxyXG4gICAgICAgIGNvbnN0IGZpbGVMaXN0ID0gW11cclxuICAgICAgICBiaWxsLlBpYzEgJiYgZmlsZUxpc3QucHVzaCh7dXJsOiBkb3dubG9hZEhvc3QgKyBiaWxsLlBpYzEuZmlsZV9uYW1lLCBpZDpiaWxsLlBpYzEuaWQgfSlcclxuICAgICAgICBiaWxsLlBpYzIgJiYgZmlsZUxpc3QucHVzaCh7dXJsOiBkb3dubG9hZEhvc3QgKyBiaWxsLlBpYzIuZmlsZV9uYW1lLCBpZDpiaWxsLlBpYzIuaWQgfSlcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgdHlwZUFjdGl2ZTogYmlsbC5hbW91bnRfdHlwZSxcclxuICAgICAgICAgIGZvcm1kYXRhOiB7XHJcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IGJpbGwuYW1vdW50LFxyXG4gICAgICAgICAgICBcImFtb3VudF90eXBlXCI6IGJpbGwuYW1vdW50X3R5cGUsXHJcbiAgICAgICAgICAgIFwiYmlsbF90eXBlX2lkXCI6IGJpbGwuYmlsbF90eXBlX2lkLFxyXG4gICAgICAgICAgICBcImJpbGxfdGltZVwiOiBiaWxsLmJpbGxfdGltZSxcclxuICAgICAgICAgICAgXCJjb21tZW50XCI6IGJpbGwuY29tbWVudCxcclxuICAgICAgICAgICAgXCJhY2NvdW50X2lkXCI6IGJpbGwuYWNjb3VudF9pZCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBtaW5EYXRlOiBuZXcgRGF0ZShub3cuZ2V0VGltZSgpIC0gMTAwMCAqIDYwICogNjAgKiAyNCAqIDMwKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICBtYXhEYXRlOiBub3cuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgbm93OiBub3cuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgYmlsbFRpbWU6IGZvcm1hdE1vbnRoRGF0ZShuZXcgRGF0ZShiaWxsLmJpbGxfdGltZSkpLFxyXG4gICAgICAgICAgYWNjb3VudE5hbWU6IHRoaXMuZGF0YS5hY2NvdW50cy5maW5kKGk9PmkuaWQ9PWJpbGwuYWNjb3VudF9pZClbXCJuYW1lXCJdLFxyXG4gICAgICAgICAgZmlsZUxpc3Q6IGZpbGVMaXN0XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSkiXX0=