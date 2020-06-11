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
    lifetimes: {
        ready: function () {
            this.getTypes();
            this.getAccounts();
        }
    },
    properties: {
        ledgerId: Number
    },
    observers: {
        ledgerId: function () {
            this.getTypes();
            this.getAccounts();
        }
    },
    data: {
        types: {
            1: [],
            2: [],
        },
        accounts: [],
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
        MainCur: 0,
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
                                accounts: accounts
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
            fileList[0] && (pic["pic_id1"] = fileList[0]['id']);
            fileList[1] && (pic["pic_id2"] = fileList[1]['id']);
            index_1.createBill(this.data.ledgerId, __assign(__assign({}, this.data.formdata), pic)).then(function (_) {
                wx.showToast({
                    title: "保存成功",
                    icon: 'success',
                    duration: 2000
                });
                _this.triggerEvent("success");
            });
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
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5Ym9hcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJrZXlib2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQW9GO0FBQ3BGLHlDQUFrRDtBQUVsRCxTQUFTLENBQUM7SUFDUixPQUFPLEVBQUU7UUFDUCxjQUFjLEVBQUUsUUFBUTtLQUN6QjtJQUNELFNBQVMsRUFBRTtRQUNULEtBQUssRUFBTDtZQUNFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQTtZQUNmLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUNwQixDQUFDO0tBQ0Y7SUFDRCxVQUFVLEVBQUU7UUFDUixRQUFRLEVBQUUsTUFBTTtLQUNuQjtJQUNELFNBQVMsRUFBRTtRQUNULFFBQVEsRUFBUjtZQUNFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQTtZQUNmLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUNwQixDQUFDO0tBQ0Y7SUFDRCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUU7WUFDTCxDQUFDLEVBQUUsRUFBYztZQUNqQixDQUFDLEVBQUUsRUFBYztTQUNVO1FBQzdCLFFBQVEsRUFBQyxFQUFjO1FBQ3ZCLFVBQVUsRUFBRSxDQUFDO1FBQ2IsUUFBUSxFQUFFO1lBQ1IsUUFBUSxFQUFFLEVBQUU7WUFDWixhQUFhLEVBQUUsQ0FBQztZQUNoQixjQUFjLEVBQUUsSUFBSTtZQUNwQixXQUFXLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUU7WUFDckMsU0FBUyxFQUFFLEVBQUU7WUFDYixZQUFZLEVBQUUsSUFBcUI7U0FDcEM7UUFDRCxPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFF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RSxJQUFJO2dCQUNqQixnQkFBZ0IsRUFBRSxLQUFLO2FBQ3hCLENBQUMsQ0FBQTtRQUNKLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEFjY291bnRzLCBnZXRCaWxsVHlwZXMsIGdldE9zc1Rva2VuLCBjcmVhdGVCaWxsIH0gZnJvbSAnLi4vLi4vYXBpL2luZGV4J1xyXG5pbXBvcnQgeyBmb3JtYXRNb250aERhdGUgfSBmcm9tICcuLi8uLi91dGlscy91dGlsJ1xyXG5cclxuQ29tcG9uZW50KHtcclxuICBvcHRpb25zOiB7XHJcbiAgICBzdHlsZUlzb2xhdGlvbjogJ3NoYXJlZCdcclxuICB9LFxyXG4gIGxpZmV0aW1lczoge1xyXG4gICAgcmVhZHkoKTogdm9pZHtcclxuICAgICAgdGhpcy5nZXRUeXBlcygpICBcclxuICAgICAgdGhpcy5nZXRBY2NvdW50cygpXHJcbiAgICB9XHJcbiAgfSxcclxuICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgIGxlZGdlcklkOiBOdW1iZXJcclxuICB9LFxyXG4gIG9ic2VydmVyczoge1xyXG4gICAgbGVkZ2VySWQoKTogdm9pZCB7XHJcbiAgICAgIHRoaXMuZ2V0VHlwZXMoKSAgXHJcbiAgICAgIHRoaXMuZ2V0QWNjb3VudHMoKVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZGF0YToge1xyXG4gICAgdHlwZXM6IHtcclxuICAgICAgMTogW10gYXMgQW55QXJyYXksXHJcbiAgICAgIDI6IFtdIGFzIEFueUFycmF5LFxyXG4gICAgfSBhcyBSZWNvcmQ8bnVtYmVyLCBBbnlBcnJheT4sXHJcbiAgICBhY2NvdW50czpbXSBhcyBBbnlBcnJheSxcclxuICAgIHR5cGVBY3RpdmU6IDEsXHJcbiAgICBmb3JtZGF0YToge1xyXG4gICAgICBcImFtb3VudFwiOiBcIlwiLFxyXG4gICAgICBcImFtb3VudF90eXBlXCI6IDEsXHJcbiAgICAgIFwiYmlsbF90eXBlX2lkXCI6IG51bGwsXHJcbiAgICAgIFwiYmlsbF90aW1lXCI6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgXCJjb21tZW50XCI6IFwiXCIsXHJcbiAgICAgIFwiYWNjb3VudF9pZFwiOiBudWxsIGFzIG51bGwgfCBudW1iZXJcclxuICAgIH0sXHJcbiAgICBtaW5EYXRlOiBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIDEwMDAgKiA2MCAqIDYwICogMjQgKiAzMCkuZ2V0VGltZSgpLFxyXG4gICAgbWF4RGF0ZTogbmV3IERhdGUoKS5nZXRUaW1lKCksXHJcbiAgICBub3c6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxyXG4gICAgbWF4OiA5OTk5OTk5LFxyXG4gICAgbWluOiAwLFxyXG4gICAgYmlsbFRpbWU6ICfku4rml6UnLFxyXG4gICAgYWNjb3VudE5hbWU6ICfnjrDph5EnLFxyXG4gICAgaW1nUG9wdXBTaG93OiBmYWxzZSxcclxuICAgIGFjY291bnRQb3B1cFNob3c6IGZhbHNlLFxyXG4gICAgZGF0ZVBvcHVwU2hvdzogZmFsc2UsXHJcbiAgICB0eXBpbmc6IGZhbHNlLFxyXG4gICAgTWFpbkN1cjogMCxcclxuICAgIGZpbGVMaXN0OiBbXSBhcyBBbnlBcnJheVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgYXN5bmMgZ2V0VHlwZXMoKTogUHJvbWlzZTx2b2lkPntcclxuICAgICAgaWYgKCF0aGlzLnByb3BlcnRpZXMubGVkZ2VySWQpe1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGJpbGxUeXBlcyA9IGF3YWl0IGdldEJpbGxUeXBlcyh0aGlzLnByb3BlcnRpZXMubGVkZ2VySWQpXHJcbiAgICAgIGNvbnN0IHR5cGVzID0ge30gYXMgUmVjb3JkPG51bWJlciwgQW55QXJyYXk+XHJcbiAgICAgIGJpbGxUeXBlcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIHR5cGVzW2l0ZW0udHlwZV0gPSB0eXBlc1tpdGVtLnR5cGVdIHx8IFtdXHJcbiAgICAgICAgdHlwZXNbaXRlbS50eXBlXS5wdXNoKGl0ZW0pXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgdHlwZXMsXHJcbiAgICAgICAgZm9ybWRhdGE6e1xyXG4gICAgICAgICAgLi4udGhpcy5kYXRhLmZvcm1kYXRhLFxyXG4gICAgICAgICAgXCJiaWxsX3R5cGVfaWRcIjogdHlwZXNbMV1bMF1bJ2lkJ11cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgYXN5bmMgZ2V0QWNjb3VudHMoKTogUHJvbWlzZTx2b2lkPntcclxuICAgICAgaWYgKCF0aGlzLnByb3BlcnRpZXMubGVkZ2VySWQpe1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZ2V0QWNjb3VudHModGhpcy5wcm9wZXJ0aWVzLmxlZGdlcklkKVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGFjY291bnRzXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuc2V0QWNjb3VudChhY2NvdW50c1swXS5pZClcclxuICAgIH0sXHJcbiAgICBvbklucHV0KGU6IEFueU9iamVjdCk6IHZvaWR7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudjtcclxuICAgICAgaWYoIXZhbHVlKSByZXR1cm5cclxuICAgICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgICAgIGNhc2UgJ2RhdGUnOlxyXG4gICAgICAgICAgdGhpcy5kYXRlKClcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIGNhc2UgJ2FjY291bnQnOlxyXG4gICAgICAgICAgdGhpcy5hY2NvdW50KClcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIGNhc2UgJ29rJzpcclxuICAgICAgICAgIHRoaXMub2soKVxyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgY2FzZSAnZGVsJzpcclxuICAgICAgICAgIHRoaXMuZGVsKClcclxuICAgICAgICAgIHd4LnZpYnJhdGVTaG9ydCgpXHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHRoaXMuaW5wdXQodmFsdWUpXHJcbiAgICAgICAgICB3eC52aWJyYXRlU2hvcnQoKVxyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8g5Yig6Zmk6ZSuXHJcbiAgICBkZWwoKTogdm9pZHtcclxuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmRhdGEuZm9ybWRhdGEuYW1vdW50LnN1YnN0cmluZygwLCB0aGlzLmRhdGEuZm9ybWRhdGEuYW1vdW50Lmxlbmd0aCAtIDEpXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgZm9ybWRhdGE6IHtcclxuICAgICAgICAgIC4uLnRoaXMuZGF0YS5mb3JtZGF0YSxcclxuICAgICAgICAgIGFtb3VudDogdmFsdWVcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgZGF0ZSgpOiB2b2lke1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGRhdGVQb3B1cFNob3c6IHRydWVcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICAvLyDmj5DkuqTotKbljZVcclxuICAgIG9rKCk6IHZvaWR7XHJcbiAgICAgIGlmKHRoaXMuZGF0YS5mb3JtZGF0YS5hbW91bnQgPT0gXCJcIil7XHJcbiAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgIHRpdGxlOiAn6K+35aGr5YaZ6YeR6aKdJyxcclxuICAgICAgICAgIGR1cmF0aW9uOiAyMDAwICBcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHBpYyA9IHt9IGFzIEFueU9iamVjdFxyXG4gICAgICBjb25zdCB7ZmlsZUxpc3R9ID0gdGhpcy5kYXRhXHJcbiAgICAgIGZpbGVMaXN0WzBdICYmIChwaWNbXCJwaWNfaWQxXCJdID0gZmlsZUxpc3RbMF1bJ2lkJ10pXHJcbiAgICAgIGZpbGVMaXN0WzFdICYmIChwaWNbXCJwaWNfaWQyXCJdID0gZmlsZUxpc3RbMV1bJ2lkJ10pXHJcbiAgICAgIGNyZWF0ZUJpbGwodGhpcy5kYXRhLmxlZGdlcklkLHtcclxuICAgICAgICAuLi50aGlzLmRhdGEuZm9ybWRhdGEsXHJcbiAgICAgICAgLi4ucGljXHJcbiAgICAgIH0pLnRoZW4oXz0+e1xyXG4gICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICB0aXRsZTogXCLkv53lrZjmiJDlip9cIixcclxuICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgIGR1cmF0aW9uOiAyMDAwICBcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KFwic3VjY2Vzc1wiKVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIGFjY291bnQoKTogdm9pZHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBhY2NvdW50UG9wdXBTaG93OiB0cnVlXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgLy8g6ZSu55uY6L6T5YWlXHJcbiAgICBpbnB1dCh2YWw6IHN0cmluZyk6IHZvaWR7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5mb3JtYXQodmFsKVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGZvcm1kYXRhOiB7XHJcbiAgICAgICAgICAuLi50aGlzLmRhdGEuZm9ybWRhdGEsXHJcbiAgICAgICAgICBhbW91bnQ6IHZhbHVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIC8vIOmUruebmOaVsOWtl+aOp+WItlxyXG4gICAgZm9ybWF0OiBmdW5jdGlvbiAodmFsOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICBpZiAodGhpcy5kYXRhLmZvcm1kYXRhLmFtb3VudC5pbmRleE9mKCcuJykgPiAtMSkge1xyXG4gICAgICAgIGlmICh2YWwgPT09ICcuJyl7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmZvcm1kYXRhLmFtb3VudFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5kYXRhLmZvcm1kYXRhLmFtb3VudC5zcGxpdCgnLicpWzFdLmxlbmd0aCA+PSAyKXtcclxuICAgICAgICAgIHJldHVybiB0aGlzLmRhdGEuZm9ybWRhdGEuYW1vdW50XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5kYXRhLmZvcm1kYXRhLmFtb3VudCArIHZhbFxyXG4gICAgICBpZiAodmFsID09PSAnLicpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmZvcm1kYXRhLmFtb3VudCArIHZhbFxyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmRhdGEuZm9ybWRhdGEuYW1vdW50ID09PSAnMCcpe1xyXG4gICAgICAgIGlmKHZhbCAhPT0gJy4nICl7XHJcbiAgICAgICAgICByZXR1cm4gdmFsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmKHBhcnNlSW50KHZhbHVlKSA+IDk5OTk5OTk5KXtcclxuICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgdGl0bGU6ICfpkrHlpKrlpJos5pWw5LiN6L+H5p2l5ZWmJyxcclxuICAgICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5mb3JtZGF0YS5hbW91bnRcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHZhbHVlXHJcblxyXG4gICAgfSxcclxuICAgIG9uUmVtYXJrRm9jdXMoKTogdm9pZCB7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgdHlwaW5nOiB0cnVlXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgb25SZW1hcmtCbHVyKGU6IEFueU9iamVjdCk6IHZvaWQge1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgdHlwaW5nOiBmYWxzZSxcclxuICAgICAgICBmb3JtZGF0YToge1xyXG4gICAgICAgICAgLi4udGhpcy5kYXRhLmZvcm1kYXRhLFxyXG4gICAgICAgICAgY29tbWVudDogdmFsdWVcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgb25CaWxsVHlwZVRhcChlOiBBbnlPYmplY3QpOiB2b2lkIHtcclxuICAgICAgY29uc3QgYmlsbFR5cGVJZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xyXG4gICAgICBpZighYmlsbFR5cGVJZCkgcmV0dXJuXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgdHlwaW5nOiBmYWxzZSxcclxuICAgICAgICBmb3JtZGF0YToge1xyXG4gICAgICAgICAgLi4udGhpcy5kYXRhLmZvcm1kYXRhLFxyXG4gICAgICAgICAgXCJiaWxsX3R5cGVfaWRcIjogYmlsbFR5cGVJZFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgd3gudmlicmF0ZVNob3J0KClcclxuICAgIH0sXHJcbiAgICBvbkltZ0J0blRhcCgpOiB2b2lke1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGltZ1BvcHVwU2hvdzogdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIG9uSW1nUG9wdXBDbG9zZSgpOiB2b2lke1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGltZ1BvcHVwU2hvdzogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBvbkFjY291bnRQb3B1cENsb3NlKCk6IHZvaWR7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgYWNjb3VudFBvcHVwU2hvdzogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBvbkRhdGVQb3B1cENsb3NlKCk6IHZvaWR7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgZGF0ZVBvcHVwU2hvdzogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICAvLyDkuIrkvKDlm77niYdcclxuICAgIGFmdGVyUmVhZChldmVudCk6IHZvaWR7XHJcbiAgICAgIGNvbnN0IHNlbGYgPSB0aGlzOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXHJcbiAgICAgIGNvbnN0IHsgZmlsZSB9ID0gZXZlbnQuZGV0YWlsO1xyXG4gICAgICBnZXRPc3NUb2tlbigpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICB3eC51cGxvYWRGaWxlKHtcclxuICAgICAgICAgIHVybDogcmVzLmhvc3QsXHJcbiAgICAgICAgICBmaWxlUGF0aDogZmlsZS5wYXRoLFxyXG4gICAgICAgICAgbmFtZTogJ2ZpbGUnLFxyXG4gICAgICAgICAgZm9ybURhdGE6IHtcclxuICAgICAgICAgICAgJ25hbWUnOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgJ2tleScgOiByZXMuZGlyICsgXCIke2ZpbGVuYW1lfVwiLFxyXG4gICAgICAgICAgICAncG9saWN5JzogcmVzLnBvbGljeSxcclxuICAgICAgICAgICAgJ09TU0FjY2Vzc0tleUlkJzogcmVzLmFjY2Vzc2lkLCBcclxuICAgICAgICAgICAgJ3N1Y2Nlc3NfYWN0aW9uX3N0YXR1cycgOiAnMjAwJywgLy/orqnmnI3liqHnq6/ov5Tlm54yMDAs5LiN54S277yM6buY6K6k5Lya6L+U5ZueMjA0XHJcbiAgICAgICAgICAgICdjYWxsYmFjaycgOiByZXMuY2FsbGJhY2ssXHJcbiAgICAgICAgICAgICdzaWduYXR1cmUnOiByZXMuc2lnbmF0dXJlXHJcblxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgICAgaWYocmVzLnN0YXR1c0NvZGUgPT0gMjAwKXtcclxuICAgICAgICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShyZXMuZGF0YSlcclxuICAgICAgICAgICAgICBjb25zdCB1cmwgPSBkYXRhLmRhdGEudXJsXHJcbiAgICAgICAgICAgICAgY29uc3QgaWQgPSBkYXRhLmRhdGEuaWRcclxuICAgICAgICAgICAgICBjb25zdCB7IGZpbGVMaXN0ID0gW10gfSA9IHNlbGYuZGF0YTtcclxuICAgICAgICAgICAgICBmaWxlTGlzdC5wdXNoKHsgLi4uZmlsZSwgdXJsLCBpZCB9KTtcclxuICAgICAgICAgICAgICBzZWxmLnNldERhdGEoeyBmaWxlTGlzdCB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfkuIrkvKDlpLHotKXvvIzor7flho3nqI3lkI7lho3or5UnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIC8vIOWIoOmZpOWbvueJh1xyXG4gICAgZGVsZXRlUGljKGUpOiB2b2lke1xyXG4gICAgICBjb25zdCB7IGluZGV4IH0gPSBlLmRldGFpbFxyXG4gICAgICBjb25zdCB7IGZpbGVMaXN0ID0gW10gfSA9IHRoaXMuZGF0YTtcclxuICAgICAgZmlsZUxpc3Quc3BsaWNlKGluZGV4LDEpXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7IGZpbGVMaXN0IH0pXHJcbiAgICB9LFxyXG4gICAgb25Db25maXJtKGUpOiB2b2lke1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IGUuZGV0YWlsIGFzIERhdGVcclxuXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgZm9ybWRhdGE6IHtcclxuICAgICAgICAgIC4uLnRoaXMuZGF0YS5mb3JtZGF0YSxcclxuICAgICAgICAgIFwiYmlsbF90aW1lXCI6IHZhbHVlLnRvSVNPU3RyaW5nKClcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJpbGxUaW1lOiBmb3JtYXRNb250aERhdGUodmFsdWUpLFxyXG4gICAgICAgIGRhdGVQb3B1cFNob3c6IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgb25UYWJDaGFuZ2UoZTogQW55T2JqZWN0KTogdm9pZHtcclxuICAgICAgY29uc3QgdHlwZUFjdGl2ZSA9IGUuZGV0YWlsLm5hbWU7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgdHlwZUFjdGl2ZSA6IGUuZGV0YWlsLm5hbWUsXHJcbiAgICAgICAgZm9ybWRhdGE6IHtcclxuICAgICAgICAgIC4uLnRoaXMuZGF0YS5mb3JtZGF0YSxcclxuICAgICAgICAgIFwiYW1vdW50X3R5cGVcIjogdHlwZUFjdGl2ZSxcclxuICAgICAgICAgIFwiYmlsbF90eXBlX2lkXCI6IHRoaXMuZGF0YS50eXBlc1t0eXBlQWN0aXZlXVswXVsnaWQnXVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBvbkFjY291bnRDaGFuZ2UoZTogQW55T2JqZWN0KTogdm9pZHtcclxuICAgICAgdGhpcy5zZXRBY2NvdW50KGUuZGV0YWlsKVxyXG4gICAgfSwgXHJcbiAgICBvbkFjY291bnRDbGljayhlOiBBbnlPYmplY3QpOiB2b2lke1xyXG4gICAgICBjb25zdCB7IG5hbWUgfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0O1xyXG4gICAgICB0aGlzLnNldEFjY291bnQobmFtZSlcclxuICAgIH0sXHJcbiAgICBzZXRBY2NvdW50KGFjY291bnRJZDogbnVtYmVyKTogdm9pZHtcclxuICAgICAgY29uc3Qge25hbWV9ID0gdGhpcy5kYXRhLmFjY291bnRzLmZpbmQoaXRlbT0+aXRlbS5pZCA9PSBhY2NvdW50SWQpXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgZm9ybWRhdGE6IHtcclxuICAgICAgICAgIC4uLnRoaXMuZGF0YS5mb3JtZGF0YSxcclxuICAgICAgICAgIFwiYWNjb3VudF9pZFwiOiBhY2NvdW50SWRcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFjY291bnROYW1lOiBuYW1lLFxyXG4gICAgICAgIGFjY291bnRQb3B1cFNob3c6IGZhbHNlLFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxufSkiXX0=