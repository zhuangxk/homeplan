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
                            return [4, index_1.getAccounts()];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5Ym9hcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJrZXlib2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQWdHO0FBQ2hHLHlDQUFrRDtBQUVsRCxTQUFTLENBQUM7SUFDUixPQUFPLEVBQUU7UUFDUCxjQUFjLEVBQUUsUUFBUTtLQUN6QjtJQUNELFNBQVMsRUFBRSxFQUtWO0lBQ0QsVUFBVSxFQUFFO1FBQ1IsUUFBUSxFQUFFLE1BQU07UUFDaEIsVUFBVSxFQUFFO1lBQ1YsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsS0FBSztTQUNiO1FBQ0QsSUFBSSxFQUFFO1lBQ0osSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsRUFBRTtTQUNWO0tBQ0o7SUFDRCxTQUFTLEVBQUU7UUFDVCxRQUFRLEVBQVIsVUFBUyxRQUFRO1lBQ2YsSUFBRyxRQUFRLEVBQUM7Z0JBQ1YsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO2dCQUNmLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTthQUNuQjtRQUNILENBQUM7UUFDRCxVQUFVLEVBQVYsVUFBVyxJQUFJO1lBQ2IsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUM7Z0JBQ25ELE9BQU07YUFDUDtZQUNELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDbEIsQ0FBQztLQUNGO0lBQ0QsSUFBSSxFQUFFO1FBQ0osWUFBWSxFQUFFLHdCQUF3QjtRQUN0QyxLQUFLLEVBQUU7WUFDTCxDQUFDLEVBQUUsRUFBYztZQUNqQixDQUFDLEVBQUUsRUFBYztTQUNVO1FBQzdCLFFBQVEsRUFBQyxFQUFjO1FBQ3ZCLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLGFBQWEsRUFBRSxLQUFLO1FBQ3BCLFVBQVUs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LE9BQU8sRUFBRSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRTtvQkFDckUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPLEVBQUU7b0JBQ3RCLEdBQUcsRUFBRSxHQUFHLENBQUMsT0FBTyxFQUFFO29CQUNsQixRQUFRLEVBQUUsc0JBQWUsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQ25ELFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUUsT0FBQSxDQUFDLENBQUMsRUFBRSxJQUFFLE1BQUksQ0FBQyxVQUFVLEVBQXJCLENBQXFCLENBQUMsQ0FBQyxNQUFNLENBQUM7b0JBQ3RFLFFBQVEsRUFBRSxRQUFRO2lCQUNuQixDQUFDLENBQUE7YUFDSDtRQUNILENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEFjY291bnRzLCBnZXRCaWxsVHlwZXMsIGdldE9zc1Rva2VuLCBjcmVhdGVCaWxsLCB1cGRhdGVCaWxsIH0gZnJvbSAnLi4vLi4vYXBpL2luZGV4J1xuaW1wb3J0IHsgZm9ybWF0TW9udGhEYXRlIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCdcblxuQ29tcG9uZW50KHtcbiAgb3B0aW9uczoge1xuICAgIHN0eWxlSXNvbGF0aW9uOiAnc2hhcmVkJ1xuICB9LFxuICBsaWZldGltZXM6IHtcbiAgICAvLyByZWFkeSgpOiB2b2lke1xuICAgIC8vICAgdGhpcy5nZXRUeXBlcygpICBcbiAgICAvLyAgIHRoaXMuZ2V0QWNjb3VudHMoKVxuICAgIC8vIH1cbiAgfSxcbiAgcHJvcGVydGllczoge1xuICAgICAgbGVkZ2VySWQ6IE51bWJlcixcbiAgICAgIGFjdGlvblR5cGU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogJ2FkZCdcbiAgICAgIH0sXG4gICAgICBiaWxsOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgdmFsdWU6IHt9XG4gICAgICB9XG4gIH0sXG4gIG9ic2VydmVyczoge1xuICAgIGxlZGdlcklkKGxlZGdlcklkKTogdm9pZCB7XG4gICAgICBpZihsZWRnZXJJZCl7XG4gICAgICAgIHRoaXMuZ2V0VHlwZXMoKSAgXG4gICAgICAgIHRoaXMuZ2V0QWNjb3VudHMoKVxuICAgICAgfVxuICAgIH0sXG4gICAgYWN0aW9uVHlwZSh0eXBlKTogdm9pZCB7XG4gICAgICBpZighdGhpcy5kYXRhLnR5cGVMb2FkZWQgfHwgIXRoaXMuZGF0YS5hY2NvdW50TG9hZGVkKXtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB0aGlzLnJlc2V0KHR5cGUpXG4gICAgfVxuICB9LFxuICBkYXRhOiB7XG4gICAgZG93bmxvYWRIb3N0OiAnaHR0cHM6Ly9vc3MudG9rby53YW5nLycsXG4gICAgdHlwZXM6IHtcbiAgICAgIDE6IFtdIGFzIEFueUFycmF5LFxuICAgICAgMjogW10gYXMgQW55QXJyYXksXG4gICAgfSBhcyBSZWNvcmQ8bnVtYmVyLCBBbnlBcnJheT4sXG4gICAgYWNjb3VudHM6W10gYXMgQW55QXJyYXksXG4gICAgdHlwZUxvYWRlZDogZmFsc2UsXG4gICAgYWNjb3VudExvYWRlZDogZmFsc2UsXG4gICAgdHlwZUFjdGl2ZTogMSxcbiAgICBmb3JtZGF0YToge1xuICAgICAgXCJhbW91bnRcIjogXCJcIixcbiAgICAgIFwiYW1vdW50X3R5cGVcIjogMSxcbiAgICAgIFwiYmlsbF90eXBlX2lkXCI6IG51bGwsXG4gICAgICBcImJpbGxfdGltZVwiOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICBcImNvbW1lbnRcIjogXCJcIixcbiAgICAgIFwiYWNjb3VudF9pZFwiOiBudWxsIGFzIG51bGwgfCBudW1iZXJcbiAgICB9LFxuICAgIG1pbkRhdGU6IG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gMTAwMCAqIDYwICogNjAgKiAyNCAqIDMwKS5nZXRUaW1lKCksXG4gICAgbWF4RGF0ZTogbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgbm93OiBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICBtYXg6IDk5OTk5OTksXG4gICAgbWluOiAwLFxuICAgIGJpbGxUaW1lOiAn5LuK5pelJyxcbiAgICBhY2NvdW50TmFtZTogJ+eOsOmHkScsXG4gICAgaW1nUG9wdXBTaG93OiBmYWxzZSxcbiAgICBhY2NvdW50UG9wdXBTaG93OiBmYWxzZSxcbiAgICBkYXRlUG9wdXBTaG93OiBmYWxzZSxcbiAgICB0eXBpbmc6IGZhbHNlLFxuICAgIGZpbGVMaXN0OiBbXSBhcyBBbnlBcnJheVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgYXN5bmMgZ2V0VHlwZXMoKTogUHJvbWlzZTx2b2lkPntcbiAgICAgIGlmICghdGhpcy5wcm9wZXJ0aWVzLmxlZGdlcklkKXtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBjb25zdCBiaWxsVHlwZXMgPSBhd2FpdCBnZXRCaWxsVHlwZXModGhpcy5wcm9wZXJ0aWVzLmxlZGdlcklkKVxuICAgICAgY29uc3QgdHlwZXMgPSB7fSBhcyBSZWNvcmQ8bnVtYmVyLCBBbnlBcnJheT5cbiAgICAgIGJpbGxUeXBlcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICB0eXBlc1tpdGVtLnR5cGVdID0gdHlwZXNbaXRlbS50eXBlXSB8fCBbXVxuICAgICAgICB0eXBlc1tpdGVtLnR5cGVdLnB1c2goaXRlbSlcbiAgICAgIH0pXG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICB0eXBlcyxcbiAgICAgICAgdHlwZUxvYWRlZDogdHJ1ZSxcbiAgICAgICAgZm9ybWRhdGE6e1xuICAgICAgICAgIC4uLnRoaXMuZGF0YS5mb3JtZGF0YSxcbiAgICAgICAgICBcImJpbGxfdHlwZV9pZFwiOiB0eXBlc1sxXVswXVsnaWQnXSxcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIGFzeW5jIGdldEFjY291bnRzKCk6IFByb21pc2U8dm9pZD57XG4gICAgICBpZiAoIXRoaXMucHJvcGVydGllcy5sZWRnZXJJZCl7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBnZXRBY2NvdW50cygpXG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBhY2NvdW50cyxcbiAgICAgICAgYWNjb3VudExvYWRlZDogdHJ1ZSxcbiAgICAgIH0pXG4gICAgICB0aGlzLnNldEFjY291bnQoYWNjb3VudHNbMF0uaWQpXG4gICAgfSxcbiAgICBvbklucHV0KGU6IEFueU9iamVjdCk6IHZvaWR7XG4gICAgICBjb25zdCB2YWx1ZSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnY7XG4gICAgICBpZighdmFsdWUpIHJldHVyblxuICAgICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICBjYXNlICdkYXRlJzpcbiAgICAgICAgICB0aGlzLmRhdGUoKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICBjYXNlICdhY2NvdW50JzpcbiAgICAgICAgICB0aGlzLmFjY291bnQoKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICBjYXNlICdvayc6XG4gICAgICAgICAgdGhpcy5vaygpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIGNhc2UgJ2RlbCc6XG4gICAgICAgICAgdGhpcy5kZWwoKVxuICAgICAgICAgIHd4LnZpYnJhdGVTaG9ydCgpXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRoaXMuaW5wdXQodmFsdWUpXG4gICAgICAgICAgd3gudmlicmF0ZVNob3J0KClcbiAgICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSxcbiAgICAvLyDliKDpmaTplK5cbiAgICBkZWwoKTogdm9pZHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5kYXRhLmZvcm1kYXRhLmFtb3VudC5zdWJzdHJpbmcoMCwgdGhpcy5kYXRhLmZvcm1kYXRhLmFtb3VudC5sZW5ndGggLSAxKVxuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgZm9ybWRhdGE6IHtcbiAgICAgICAgICAuLi50aGlzLmRhdGEuZm9ybWRhdGEsXG4gICAgICAgICAgYW1vdW50OiB2YWx1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgZGF0ZSgpOiB2b2lke1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgZGF0ZVBvcHVwU2hvdzogdHJ1ZVxuICAgICAgfSlcbiAgICB9LFxuICAgIC8vIOaPkOS6pOi0puWNlVxuICAgIG9rKCk6IHZvaWR7XG4gICAgICBpZih0aGlzLmRhdGEuZm9ybWRhdGEuYW1vdW50ID09IFwiXCIpe1xuICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAn6K+35aGr5YaZ6YeR6aKdJyxcbiAgICAgICAgICBkdXJhdGlvbjogMjAwMCAgXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgY29uc3QgcGljID0ge30gYXMgQW55T2JqZWN0XG4gICAgICBjb25zdCB7ZmlsZUxpc3R9ID0gdGhpcy5kYXRhXG4gICAgICBmaWxlTGlzdFswXSA/IChwaWNbXCJwaWNfaWQxXCJdID0gZmlsZUxpc3RbMF1bJ2lkJ10pIDogKHBpY1tcInBpY19pZDFcIl0gPSAtMSlcbiAgICAgIGZpbGVMaXN0WzFdID8gKHBpY1tcInBpY19pZDJcIl0gPSBmaWxlTGlzdFsxXVsnaWQnXSkgOiAocGljW1wicGljX2lkMlwiXSA9IC0xKVxuICAgICAgaWYodGhpcy5kYXRhLmFjdGlvblR5cGUgPT0gJ2FkZCcpe1xuICAgICAgICBjcmVhdGVCaWxsKHRoaXMuZGF0YS5sZWRnZXJJZCx7XG4gICAgICAgICAgLi4udGhpcy5kYXRhLmZvcm1kYXRhLFxuICAgICAgICAgIC4uLnBpY1xuICAgICAgICB9KS50aGVuKF89PntcbiAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6IFwi5re75Yqg5oiQ5YqfXCIsXG4gICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMCAgXG4gICAgICAgICAgfSlcbiAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudChcInN1Y2Nlc3NcIilcbiAgICAgICAgfSkgICAgICAgIFxuICAgICAgfVxuXG4gICAgICBpZih0aGlzLmRhdGEuYWN0aW9uVHlwZSA9PSAnZWRpdCcpe1xuICAgICAgICB1cGRhdGVCaWxsKHRoaXMuZGF0YS5iaWxsLmlkLHtcbiAgICAgICAgICAuLi50aGlzLmRhdGEuZm9ybWRhdGEsXG4gICAgICAgICAgLi4ucGljXG4gICAgICAgIH0pLnRoZW4oXz0+e1xuICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogXCLkv67mlLnmiJDlip9cIixcbiAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwICBcbiAgICAgICAgICB9KVxuICAgICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KFwic3VjY2Vzc1wiKVxuICAgICAgICB9KSAgICAgICAgXG4gICAgICB9XG5cbiAgICB9LFxuICAgIGFjY291bnQoKTogdm9pZHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGFjY291bnRQb3B1cFNob3c6IHRydWVcbiAgICAgIH0pXG4gICAgfSxcbiAgICAvLyDplK7nm5jovpPlhaVcbiAgICBpbnB1dCh2YWw6IHN0cmluZyk6IHZvaWR7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZm9ybWF0KHZhbClcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGZvcm1kYXRhOiB7XG4gICAgICAgICAgLi4udGhpcy5kYXRhLmZvcm1kYXRhLFxuICAgICAgICAgIGFtb3VudDogdmFsdWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIC8vIOmUruebmOaVsOWtl+aOp+WItlxuICAgIGZvcm1hdDogZnVuY3Rpb24gKHZhbDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmICh0aGlzLmRhdGEuZm9ybWRhdGEuYW1vdW50LmluZGV4T2YoJy4nKSA+IC0xKSB7XG4gICAgICAgIGlmICh2YWwgPT09ICcuJyl7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5mb3JtZGF0YS5hbW91bnRcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5kYXRhLmZvcm1kYXRhLmFtb3VudC5zcGxpdCgnLicpWzFdLmxlbmd0aCA+PSAyKXtcbiAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmZvcm1kYXRhLmFtb3VudFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZGF0YS5mb3JtZGF0YS5hbW91bnQgKyB2YWxcbiAgICAgIGlmICh2YWwgPT09ICcuJykge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmZvcm1kYXRhLmFtb3VudCArIHZhbFxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuZGF0YS5mb3JtZGF0YS5hbW91bnQgPT09ICcwJyl7XG4gICAgICAgIGlmKHZhbCAhPT0gJy4nICl7XG4gICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZihwYXJzZUludCh2YWx1ZSkgPiA5OTk5OTk5OSl7XG4gICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6ICfpkrHlpKrlpJos5pWw5LiN6L+H5p2l5ZWmJyxcbiAgICAgICAgICBpY29uOiAnbm9uZSdcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5mb3JtZGF0YS5hbW91bnRcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbHVlXG5cbiAgICB9LFxuICAgIG9uUmVtYXJrRm9jdXMoKTogdm9pZCB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICB0eXBpbmc6IHRydWVcbiAgICAgIH0pXG4gICAgfSxcbiAgICBvblJlbWFya0JsdXIoZTogQW55T2JqZWN0KTogdm9pZCB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICB0eXBpbmc6IGZhbHNlLFxuICAgICAgICBmb3JtZGF0YToge1xuICAgICAgICAgIC4uLnRoaXMuZGF0YS5mb3JtZGF0YSxcbiAgICAgICAgICBjb21tZW50OiB2YWx1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgb25CaWxsVHlwZVRhcChlOiBBbnlPYmplY3QpOiB2b2lkIHtcbiAgICAgIGNvbnN0IGJpbGxUeXBlSWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZDtcbiAgICAgIGlmKCFiaWxsVHlwZUlkKSByZXR1cm5cbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIHR5cGluZzogZmFsc2UsXG4gICAgICAgIGZvcm1kYXRhOiB7XG4gICAgICAgICAgLi4udGhpcy5kYXRhLmZvcm1kYXRhLFxuICAgICAgICAgIFwiYmlsbF90eXBlX2lkXCI6IGJpbGxUeXBlSWRcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHd4LnZpYnJhdGVTaG9ydCgpXG4gICAgfSxcbiAgICBvbkltZ0J0blRhcCgpOiB2b2lke1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgaW1nUG9wdXBTaG93OiB0cnVlXG4gICAgICB9KVxuICAgIH0sXG4gICAgb25JbWdQb3B1cENsb3NlKCk6IHZvaWR7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBpbWdQb3B1cFNob3c6IGZhbHNlXG4gICAgICB9KVxuICAgIH0sXG4gICAgb25BY2NvdW50UG9wdXBDbG9zZSgpOiB2b2lke1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgYWNjb3VudFBvcHVwU2hvdzogZmFsc2VcbiAgICAgIH0pXG4gICAgfSxcbiAgICBvbkRhdGVQb3B1cENsb3NlKCk6IHZvaWR7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBkYXRlUG9wdXBTaG93OiBmYWxzZVxuICAgICAgfSlcbiAgICB9LFxuICAgIC8vIOS4iuS8oOWbvueJh1xuICAgIGFmdGVyUmVhZChldmVudCk6IHZvaWR7XG4gICAgICBjb25zdCBzZWxmID0gdGhpczsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgY29uc3QgeyBmaWxlIH0gPSBldmVudC5kZXRhaWw7XG4gICAgICBnZXRPc3NUb2tlbigpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgd3gudXBsb2FkRmlsZSh7XG4gICAgICAgICAgdXJsOiByZXMuaG9zdCxcbiAgICAgICAgICBmaWxlUGF0aDogZmlsZS5wYXRoLFxuICAgICAgICAgIG5hbWU6ICdmaWxlJyxcbiAgICAgICAgICBmb3JtRGF0YToge1xuICAgICAgICAgICAgJ25hbWUnOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICAgICAgICAgICdrZXknIDogcmVzLmRpciArIFwiJHtmaWxlbmFtZX1cIixcbiAgICAgICAgICAgICdwb2xpY3knOiByZXMucG9saWN5LFxuICAgICAgICAgICAgJ09TU0FjY2Vzc0tleUlkJzogcmVzLmFjY2Vzc2lkLCBcbiAgICAgICAgICAgICdzdWNjZXNzX2FjdGlvbl9zdGF0dXMnIDogJzIwMCcsIC8v6K6p5pyN5Yqh56uv6L+U5ZueMjAwLOS4jeeEtu+8jOm7mOiupOS8mui/lOWbnjIwNFxuICAgICAgICAgICAgJ2NhbGxiYWNrJyA6IHJlcy5jYWxsYmFjayxcbiAgICAgICAgICAgICdzaWduYXR1cmUnOiByZXMuc2lnbmF0dXJlXG5cbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgICBpZihyZXMuc3RhdHVzQ29kZSA9PSAyMDApe1xuICAgICAgICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShyZXMuZGF0YSlcbiAgICAgICAgICAgICAgY29uc3QgdXJsID0gZGF0YS5kYXRhLnVybFxuICAgICAgICAgICAgICBjb25zdCBpZCA9IGRhdGEuZGF0YS5pZFxuICAgICAgICAgICAgICBjb25zdCB7IGZpbGVMaXN0ID0gW10gfSA9IHNlbGYuZGF0YTtcbiAgICAgICAgICAgICAgZmlsZUxpc3QucHVzaCh7IC4uLmZpbGUsIHVybCwgaWQgfSk7XG4gICAgICAgICAgICAgIHNlbGYuc2V0RGF0YSh7IGZpbGVMaXN0IH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+S4iuS8oOWksei0pe+8jOivt+WGjeeojeWQjuWGjeivlScsXG4gICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgIH0sXG4gICAgLy8g5Yig6Zmk5Zu+54mHXG4gICAgZGVsZXRlUGljKGUpOiB2b2lke1xuICAgICAgY29uc3QgeyBpbmRleCB9ID0gZS5kZXRhaWxcbiAgICAgIGNvbnN0IHsgZmlsZUxpc3QgPSBbXSB9ID0gdGhpcy5kYXRhO1xuICAgICAgZmlsZUxpc3Quc3BsaWNlKGluZGV4LDEpXG4gICAgICB0aGlzLnNldERhdGEoeyBmaWxlTGlzdCB9KVxuICAgIH0sXG4gICAgb25Db25maXJtKGUpOiB2b2lke1xuICAgICAgY29uc3QgdmFsdWUgPSBlLmRldGFpbCBhcyBEYXRlXG5cbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGZvcm1kYXRhOiB7XG4gICAgICAgICAgLi4udGhpcy5kYXRhLmZvcm1kYXRhLFxuICAgICAgICAgIFwiYmlsbF90aW1lXCI6IHZhbHVlLnRvSVNPU3RyaW5nKClcbiAgICAgICAgfSxcbiAgICAgICAgYmlsbFRpbWU6IGZvcm1hdE1vbnRoRGF0ZSh2YWx1ZSksXG4gICAgICAgIGRhdGVQb3B1cFNob3c6IGZhbHNlXG4gICAgICB9KVxuICAgIH0sXG4gICAgb25UYWJDaGFuZ2UoZTogQW55T2JqZWN0KTogdm9pZHtcbiAgICAgIGNvbnN0IHR5cGVBY3RpdmUgPSBlLmRldGFpbC5uYW1lO1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgdHlwZUFjdGl2ZSA6IGUuZGV0YWlsLm5hbWUsXG4gICAgICAgIGZvcm1kYXRhOiB7XG4gICAgICAgICAgLi4udGhpcy5kYXRhLmZvcm1kYXRhLFxuICAgICAgICAgIFwiYW1vdW50X3R5cGVcIjogdHlwZUFjdGl2ZSxcbiAgICAgICAgICBcImJpbGxfdHlwZV9pZFwiOiB0aGlzLmRhdGEudHlwZXNbdHlwZUFjdGl2ZV1bMF1bJ2lkJ11cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIG9uQWNjb3VudENoYW5nZShlOiBBbnlPYmplY3QpOiB2b2lke1xuICAgICAgdGhpcy5zZXRBY2NvdW50KGUuZGV0YWlsKVxuICAgIH0sIFxuICAgIG9uQWNjb3VudENsaWNrKGU6IEFueU9iamVjdCk6IHZvaWR7XG4gICAgICBjb25zdCB7IG5hbWUgfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICAgICAgdGhpcy5zZXRBY2NvdW50KG5hbWUpXG4gICAgfSxcbiAgICBzZXRBY2NvdW50KGFjY291bnRJZDogbnVtYmVyKTogdm9pZHtcbiAgICAgIGNvbnN0IHtuYW1lfSA9IHRoaXMuZGF0YS5hY2NvdW50cy5maW5kKGl0ZW09Pml0ZW0uaWQgPT0gYWNjb3VudElkKVxuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgZm9ybWRhdGE6IHtcbiAgICAgICAgICAuLi50aGlzLmRhdGEuZm9ybWRhdGEsXG4gICAgICAgICAgXCJhY2NvdW50X2lkXCI6IGFjY291bnRJZFxuICAgICAgICB9LFxuICAgICAgICBhY2NvdW50TmFtZTogbmFtZSxcbiAgICAgICAgYWNjb3VudFBvcHVwU2hvdzogZmFsc2UsXG4gICAgICB9KVxuICAgIH0sXG4gICAgcmVzZXQodHlwZTogc3RyaW5nKSA6dm9pZHtcbiAgICAgIGlmKHR5cGU9PSdhZGQnKXtcbiAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKVxuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIHR5cGVBY3RpdmU6IDEsXG4gICAgICAgICAgZm9ybWRhdGE6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IFwiXCIsXG4gICAgICAgICAgICBcImFtb3VudF90eXBlXCI6IDEsXG4gICAgICAgICAgICBcImJpbGxfdHlwZV9pZFwiOiB0aGlzLmRhdGEudHlwZXNbMV1bMF1bJ2lkJ10sXG4gICAgICAgICAgICBcImJpbGxfdGltZVwiOiBub3cudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICAgIFwiY29tbWVudFwiOiBcIlwiLFxuICAgICAgICAgICAgXCJhY2NvdW50X2lkXCI6IHRoaXMuZGF0YS5hY2NvdW50c1swXS5pZCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1pbkRhdGU6IG5ldyBEYXRlKG5vdy5nZXRUaW1lKCkgLSAxMDAwICogNjAgKiA2MCAqIDI0ICogMzApLmdldFRpbWUoKSxcbiAgICAgICAgICBtYXhEYXRlOiBub3cuZ2V0VGltZSgpLFxuICAgICAgICAgIG5vdzogbm93LmdldFRpbWUoKSxcbiAgICAgICAgICBiaWxsVGltZTogJ+S7iuaXpScsXG4gICAgICAgICAgYWNjb3VudE5hbWU6IHRoaXMuZGF0YS5hY2NvdW50c1swXS5uYW1lLFxuICAgICAgICAgIGZpbGVMaXN0OiBbXVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgaWYodHlwZT09J2VkaXQnKXtcbiAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKVxuICAgICAgICBjb25zdCB7IGJpbGwsIGRvd25sb2FkSG9zdCB9ID0gdGhpcy5kYXRhXG4gICAgICAgIGNvbnN0IGZpbGVMaXN0ID0gW11cbiAgICAgICAgYmlsbC5QaWMxICYmIGZpbGVMaXN0LnB1c2goe3VybDogZG93bmxvYWRIb3N0ICsgYmlsbC5QaWMxLmZpbGVfbmFtZSwgaWQ6YmlsbC5QaWMxLmlkIH0pXG4gICAgICAgIGJpbGwuUGljMiAmJiBmaWxlTGlzdC5wdXNoKHt1cmw6IGRvd25sb2FkSG9zdCArIGJpbGwuUGljMi5maWxlX25hbWUsIGlkOmJpbGwuUGljMi5pZCB9KVxuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIHR5cGVBY3RpdmU6IGJpbGwuYW1vdW50X3R5cGUsXG4gICAgICAgICAgZm9ybWRhdGE6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IGJpbGwuYW1vdW50LFxuICAgICAgICAgICAgXCJhbW91bnRfdHlwZVwiOiBiaWxsLmFtb3VudF90eXBlLFxuICAgICAgICAgICAgXCJiaWxsX3R5cGVfaWRcIjogYmlsbC5iaWxsX3R5cGVfaWQsXG4gICAgICAgICAgICBcImJpbGxfdGltZVwiOiBiaWxsLmJpbGxfdGltZSxcbiAgICAgICAgICAgIFwiY29tbWVudFwiOiBiaWxsLmNvbW1lbnQsXG4gICAgICAgICAgICBcImFjY291bnRfaWRcIjogYmlsbC5hY2NvdW50X2lkLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbWluRGF0ZTogbmV3IERhdGUobm93LmdldFRpbWUoKSAtIDEwMDAgKiA2MCAqIDYwICogMjQgKiAzMCkuZ2V0VGltZSgpLFxuICAgICAgICAgIG1heERhdGU6IG5vdy5nZXRUaW1lKCksXG4gICAgICAgICAgbm93OiBub3cuZ2V0VGltZSgpLFxuICAgICAgICAgIGJpbGxUaW1lOiBmb3JtYXRNb250aERhdGUobmV3IERhdGUoYmlsbC5iaWxsX3RpbWUpKSxcbiAgICAgICAgICBhY2NvdW50TmFtZTogdGhpcy5kYXRhLmFjY291bnRzLmZpbmQoaT0+aS5pZD09YmlsbC5hY2NvdW50X2lkKVtcIm5hbWVcIl0sXG4gICAgICAgICAgZmlsZUxpc3Q6IGZpbGVMaXN0XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG59KSJdfQ==