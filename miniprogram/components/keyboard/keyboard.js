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
            3: []
        },
        accounts: [],
        typeActive: 1,
        formdata: {
            "amount": "",
            "bill_type_id": null,
            "bill_time": new Date().toISOString(),
            "comment": "",
            "account_id": null,
            "account_in_id": null,
            "account_out_id": null,
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
        fileList: [{ url: 'https://img.yzcdn.cn/vant/leaf.jpg', name: '图片1' },]
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
            ;
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
                formdata: __assign(__assign({}, this.data.formdata), { "bill_type_id": this.data.types[typeActive][0]['id'] })
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5Ym9hcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJrZXlib2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQXdFO0FBQ3hFLHlDQUFrRDtBQUNsRCxTQUFTLENBQUM7SUFDUixPQUFPLEVBQUU7UUFDUCxjQUFjLEVBQUUsUUFBUTtLQUN6QjtJQUNELFNBQVMsRUFBRTtRQUNULEtBQUssRUFBTDtZQUNFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQTtZQUNmLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUNwQixDQUFDO0tBQ0Y7SUFDRCxVQUFVLEVBQUU7UUFDUixRQUFRLEVBQUUsTUFBTTtLQUNuQjtJQUNELFNBQVMsRUFBRTtRQUNULFFBQVEsRUFBUjtZQUNFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQTtZQUNmLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUNwQixDQUFDO0tBQ0Y7SUFDRCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUU7WUFDTCxDQUFDLEVBQUUsRUFBYztZQUNqQixDQUFDLEVBQUUsRUFBYztZQUNqQixDQUFDLEVBQUUsRUFBYztTQUNVO1FBQzdCLFFBQVEsRUFBQyxFQUFjO1FBQ3ZCLFVBQVUsRUFBRSxDQUFDO1FBQ2IsUUFBUSxFQUFFO1lBQ1IsUUFBUSxFQUFFLEVBQUU7WUFDWixjQUFjLEVBQUUsSUFBSTtZQUNwQixXQUFXLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUU7WUFDckMsU0FBUyxFQUFFLEVBQUU7WUFDYixZQUFZLEVBQUUsSUFBcUI7WUFDbkMsZUFBZSxFQUFFLElBQXFCO1lBQ3RDLGdCQUFnQixFQUFFLElBQXFCO1NBQ3hDO1FBQ0QsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxHQUFHLEVBQUUsR0FB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QzNCLENBQUM7UUFDRCxjQUFjLEVBQWQsVUFBZSxDQUFZO1lBQ2pCLElBQUEsbUNBQUksQ0FBNkI7WUFDekMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUN2QixDQUFDO1FBQ0QsVUFBVSxFQUFWLFVBQVcsU0FBaUI7WUFDbkIsSUFBQSxxRkFBSSxDQUF1RDtZQUNsRSxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLFFBQVEsd0JBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQ3JCLFlBQVksRUFBRSxTQUFTLEdBQ3hCO2dCQUNELFdBQVcsRUFBRSxJQUFJO2dCQUNqQixnQkFBZ0IsRUFBRSxLQUFLO2FBQ3hCLENBQUMsQ0FBQTtRQUNKLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEFjY291bnRzLCBnZXRCaWxsVHlwZXMsIGdldE9zc1Rva2VuIH0gZnJvbSAnLi4vLi4vYXBpL2luZGV4J1xyXG5pbXBvcnQgeyBmb3JtYXRNb250aERhdGUgfSBmcm9tICcuLi8uLi91dGlscy91dGlsJ1xyXG5Db21wb25lbnQoe1xyXG4gIG9wdGlvbnM6IHtcclxuICAgIHN0eWxlSXNvbGF0aW9uOiAnc2hhcmVkJ1xyXG4gIH0sXHJcbiAgbGlmZXRpbWVzOiB7XHJcbiAgICByZWFkeSgpOiB2b2lke1xyXG4gICAgICB0aGlzLmdldFR5cGVzKCkgIFxyXG4gICAgICB0aGlzLmdldEFjY291bnRzKClcclxuICAgIH1cclxuICB9LFxyXG4gIHByb3BlcnRpZXM6IHtcclxuICAgICAgbGVkZ2VySWQ6IE51bWJlclxyXG4gIH0sXHJcbiAgb2JzZXJ2ZXJzOiB7XHJcbiAgICBsZWRnZXJJZCgpOiB2b2lkIHtcclxuICAgICAgdGhpcy5nZXRUeXBlcygpICBcclxuICAgICAgdGhpcy5nZXRBY2NvdW50cygpXHJcbiAgICB9XHJcbiAgfSxcclxuICBkYXRhOiB7XHJcbiAgICB0eXBlczoge1xyXG4gICAgICAxOiBbXSBhcyBBbnlBcnJheSxcclxuICAgICAgMjogW10gYXMgQW55QXJyYXksXHJcbiAgICAgIDM6IFtdIGFzIEFueUFycmF5XHJcbiAgICB9IGFzIFJlY29yZDxudW1iZXIsIEFueUFycmF5PixcclxuICAgIGFjY291bnRzOltdIGFzIEFueUFycmF5LFxyXG4gICAgdHlwZUFjdGl2ZTogMSxcclxuICAgIGZvcm1kYXRhOiB7XHJcbiAgICAgIFwiYW1vdW50XCI6IFwiXCIsXHJcbiAgICAgIFwiYmlsbF90eXBlX2lkXCI6IG51bGwsXHJcbiAgICAgIFwiYmlsbF90aW1lXCI6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgXCJjb21tZW50XCI6IFwiXCIsXHJcbiAgICAgIFwiYWNjb3VudF9pZFwiOiBudWxsIGFzIG51bGwgfCBudW1iZXIsXHJcbiAgICAgIFwiYWNjb3VudF9pbl9pZFwiOiBudWxsIGFzIG51bGwgfCBudW1iZXIsXHJcbiAgICAgIFwiYWNjb3VudF9vdXRfaWRcIjogbnVsbCBhcyBudWxsIHwgbnVtYmVyLCBcclxuICAgIH0sXHJcbiAgICBtaW5EYXRlOiBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIDEwMDAgKiA2MCAqIDYwICogMjQgKiAzMCkuZ2V0VGltZSgpLFxyXG4gICAgbWF4RGF0ZTogbmV3IERhdGUoKS5nZXRUaW1lKCksXHJcbiAgICBub3c6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxyXG4gICAgbWF4OiA5OTk5OTk5LFxyXG4gICAgbWluOiAwLFxyXG4gICAgYmlsbFRpbWU6ICfku4rml6UnLFxyXG4gICAgYWNjb3VudE5hbWU6ICfnjrDph5EnLFxyXG4gICAgaW1nUG9wdXBTaG93OiBmYWxzZSxcclxuICAgIGFjY291bnRQb3B1cFNob3c6IGZhbHNlLFxyXG4gICAgZGF0ZVBvcHVwU2hvdzogZmFsc2UsXHJcbiAgICB0eXBpbmc6IGZhbHNlLFxyXG4gICAgTWFpbkN1cjogMCxcclxuICAgIGZpbGVMaXN0OiBbeyB1cmw6ICdodHRwczovL2ltZy55emNkbi5jbi92YW50L2xlYWYuanBnJywgbmFtZTogJ+WbvueJhzEnIH0sXSBhcyBBbnlBcnJheVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgYXN5bmMgZ2V0VHlwZXMoKTogUHJvbWlzZTx2b2lkPntcclxuICAgICAgaWYgKCF0aGlzLnByb3BlcnRpZXMubGVkZ2VySWQpe1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGJpbGxUeXBlcyA9IGF3YWl0IGdldEJpbGxUeXBlcyh0aGlzLnByb3BlcnRpZXMubGVkZ2VySWQpXHJcbiAgICAgIGNvbnN0IHR5cGVzID0ge30gYXMgUmVjb3JkPG51bWJlciwgQW55QXJyYXk+XHJcbiAgICAgIGJpbGxUeXBlcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIHR5cGVzW2l0ZW0udHlwZV0gPSB0eXBlc1tpdGVtLnR5cGVdIHx8IFtdXHJcbiAgICAgICAgdHlwZXNbaXRlbS50eXBlXS5wdXNoKGl0ZW0pXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgdHlwZXMsXHJcbiAgICAgICAgZm9ybWRhdGE6e1xyXG4gICAgICAgICAgLi4udGhpcy5kYXRhLmZvcm1kYXRhLFxyXG4gICAgICAgICAgXCJiaWxsX3R5cGVfaWRcIjogdHlwZXNbMV1bMF1bJ2lkJ11cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgYXN5bmMgZ2V0QWNjb3VudHMoKTogUHJvbWlzZTx2b2lkPntcclxuICAgICAgaWYgKCF0aGlzLnByb3BlcnRpZXMubGVkZ2VySWQpe1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZ2V0QWNjb3VudHModGhpcy5wcm9wZXJ0aWVzLmxlZGdlcklkKVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGFjY291bnRzXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuc2V0QWNjb3VudChhY2NvdW50c1swXS5pZClcclxuICAgIH0sXHJcbiAgICBvbklucHV0KGU6IEFueU9iamVjdCk6IHZvaWR7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudjtcclxuICAgICAgaWYoIXZhbHVlKSByZXR1cm5cclxuICAgICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgICAgIGNhc2UgJ2RhdGUnOlxyXG4gICAgICAgICAgdGhpcy5kYXRlKClcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIGNhc2UgJ2FjY291bnQnOlxyXG4gICAgICAgICAgdGhpcy5hY2NvdW50KClcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIGNhc2UgJ29rJzpcclxuICAgICAgICAgIHRoaXMub2soKVxyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgY2FzZSAnZGVsJzpcclxuICAgICAgICAgIHRoaXMuZGVsKClcclxuICAgICAgICAgIHd4LnZpYnJhdGVTaG9ydCgpXHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHRoaXMuaW5wdXQodmFsdWUpXHJcbiAgICAgICAgICB3eC52aWJyYXRlU2hvcnQoKVxyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8g5Yig6Zmk6ZSuXHJcbiAgICBkZWwoKTogdm9pZHtcclxuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmRhdGEuZm9ybWRhdGEuYW1vdW50LnN1YnN0cmluZygwLCB0aGlzLmRhdGEuZm9ybWRhdGEuYW1vdW50Lmxlbmd0aCAtIDEpXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgZm9ybWRhdGE6IHtcclxuICAgICAgICAgIC4uLnRoaXMuZGF0YS5mb3JtZGF0YSxcclxuICAgICAgICAgIGFtb3VudDogdmFsdWVcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgZGF0ZSgpOiB2b2lke1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGRhdGVQb3B1cFNob3c6IHRydWVcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICAvLyDmj5DkuqTotKbljZVcclxuICAgIG9rKCk6IHZvaWR7XHJcbiAgICAgIDtcclxuICAgIH0sXHJcbiAgICBhY2NvdW50KCk6IHZvaWR7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgYWNjb3VudFBvcHVwU2hvdzogdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIC8vIOmUruebmOi+k+WFpVxyXG4gICAgaW5wdXQodmFsOiBzdHJpbmcpOiB2b2lke1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZm9ybWF0KHZhbClcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBmb3JtZGF0YToge1xyXG4gICAgICAgICAgLi4udGhpcy5kYXRhLmZvcm1kYXRhLFxyXG4gICAgICAgICAgYW1vdW50OiB2YWx1ZVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICAvLyDplK7nm5jmlbDlrZfmjqfliLZcclxuICAgIGZvcm1hdDogZnVuY3Rpb24gKHZhbDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgaWYgKHRoaXMuZGF0YS5mb3JtZGF0YS5hbW91bnQuaW5kZXhPZignLicpID4gLTEpIHtcclxuICAgICAgICBpZiAodmFsID09PSAnLicpe1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5mb3JtZGF0YS5hbW91bnRcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5mb3JtZGF0YS5hbW91bnQuc3BsaXQoJy4nKVsxXS5sZW5ndGggPj0gMil7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmZvcm1kYXRhLmFtb3VudFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZGF0YS5mb3JtZGF0YS5hbW91bnQgKyB2YWxcclxuICAgICAgaWYgKHZhbCA9PT0gJy4nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5mb3JtZGF0YS5hbW91bnQgKyB2YWxcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5kYXRhLmZvcm1kYXRhLmFtb3VudCA9PT0gJzAnKXtcclxuICAgICAgICBpZih2YWwgIT09ICcuJyApe1xyXG4gICAgICAgICAgcmV0dXJuIHZhbFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZihwYXJzZUludCh2YWx1ZSkgPiA5OTk5OTk5OSl7XHJcbiAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgIHRpdGxlOiAn6ZKx5aSq5aSaLOaVsOS4jei/h+adpeWVpicsXHJcbiAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEuZm9ybWRhdGEuYW1vdW50XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB2YWx1ZVxyXG5cclxuICAgIH0sXHJcbiAgICBvblJlbWFya0ZvY3VzKCk6IHZvaWQge1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHR5cGluZzogdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIG9uUmVtYXJrQmx1cihlOiBBbnlPYmplY3QpOiB2b2lkIHtcclxuICAgICAgY29uc3QgdmFsdWUgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHR5cGluZzogZmFsc2UsXHJcbiAgICAgICAgZm9ybWRhdGE6IHtcclxuICAgICAgICAgIC4uLnRoaXMuZGF0YS5mb3JtZGF0YSxcclxuICAgICAgICAgIGNvbW1lbnQ6IHZhbHVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIG9uQmlsbFR5cGVUYXAoZTogQW55T2JqZWN0KTogdm9pZCB7XHJcbiAgICAgIGNvbnN0IGJpbGxUeXBlSWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZDtcclxuICAgICAgaWYoIWJpbGxUeXBlSWQpIHJldHVyblxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHR5cGluZzogZmFsc2UsXHJcbiAgICAgICAgZm9ybWRhdGE6IHtcclxuICAgICAgICAgIC4uLnRoaXMuZGF0YS5mb3JtZGF0YSxcclxuICAgICAgICAgIFwiYmlsbF90eXBlX2lkXCI6IGJpbGxUeXBlSWRcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIHd4LnZpYnJhdGVTaG9ydCgpXHJcbiAgICB9LFxyXG4gICAgb25JbWdCdG5UYXAoKTogdm9pZHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBpbWdQb3B1cFNob3c6IHRydWVcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBvbkltZ1BvcHVwQ2xvc2UoKTogdm9pZHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBpbWdQb3B1cFNob3c6IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgb25BY2NvdW50UG9wdXBDbG9zZSgpOiB2b2lke1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGFjY291bnRQb3B1cFNob3c6IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgb25EYXRlUG9wdXBDbG9zZSgpOiB2b2lke1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGRhdGVQb3B1cFNob3c6IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgLy8g5LiK5Lyg5Zu+54mHXHJcbiAgICBhZnRlclJlYWQoZXZlbnQpOiB2b2lke1xyXG4gICAgICBjb25zdCBzZWxmID0gdGhpczsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxyXG4gICAgICBjb25zdCB7IGZpbGUgfSA9IGV2ZW50LmRldGFpbDtcclxuICAgICAgZ2V0T3NzVG9rZW4oKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgd3gudXBsb2FkRmlsZSh7XHJcbiAgICAgICAgICB1cmw6IHJlcy5ob3N0LFxyXG4gICAgICAgICAgZmlsZVBhdGg6IGZpbGUucGF0aCxcclxuICAgICAgICAgIG5hbWU6ICdmaWxlJyxcclxuICAgICAgICAgIGZvcm1EYXRhOiB7XHJcbiAgICAgICAgICAgICduYW1lJzogbmV3IERhdGUoKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgICdrZXknIDogcmVzLmRpciArIFwiJHtmaWxlbmFtZX1cIixcclxuICAgICAgICAgICAgJ3BvbGljeSc6IHJlcy5wb2xpY3ksXHJcbiAgICAgICAgICAgICdPU1NBY2Nlc3NLZXlJZCc6IHJlcy5hY2Nlc3NpZCwgXHJcbiAgICAgICAgICAgICdzdWNjZXNzX2FjdGlvbl9zdGF0dXMnIDogJzIwMCcsIC8v6K6p5pyN5Yqh56uv6L+U5ZueMjAwLOS4jeeEtu+8jOm7mOiupOS8mui/lOWbnjIwNFxyXG4gICAgICAgICAgICAnY2FsbGJhY2snIDogcmVzLmNhbGxiYWNrLFxyXG4gICAgICAgICAgICAnc2lnbmF0dXJlJzogcmVzLnNpZ25hdHVyZVxyXG5cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgIGlmKHJlcy5zdGF0dXNDb2RlID09IDIwMCl7XHJcbiAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UocmVzLmRhdGEpXHJcbiAgICAgICAgICAgICAgY29uc3QgdXJsID0gZGF0YS5kYXRhLnVybFxyXG4gICAgICAgICAgICAgIGNvbnN0IGlkID0gZGF0YS5kYXRhLmlkXHJcbiAgICAgICAgICAgICAgY29uc3QgeyBmaWxlTGlzdCA9IFtdIH0gPSBzZWxmLmRhdGE7XHJcbiAgICAgICAgICAgICAgZmlsZUxpc3QucHVzaCh7IC4uLmZpbGUsIHVybCwgaWQgfSk7XHJcbiAgICAgICAgICAgICAgc2VsZi5zZXREYXRhKHsgZmlsZUxpc3QgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn5LiK5Lyg5aSx6LSl77yM6K+35YaN56iN5ZCO5YaN6K+VJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICAvLyDliKDpmaTlm77niYdcclxuICAgIGRlbGV0ZVBpYyhlKTogdm9pZHtcclxuICAgICAgY29uc3QgeyBpbmRleCB9ID0gZS5kZXRhaWxcclxuICAgICAgY29uc3QgeyBmaWxlTGlzdCA9IFtdIH0gPSB0aGlzLmRhdGE7XHJcbiAgICAgIGZpbGVMaXN0LnNwbGljZShpbmRleCwxKVxyXG4gICAgICB0aGlzLnNldERhdGEoeyBmaWxlTGlzdCB9KVxyXG4gICAgfSxcclxuICAgIG9uQ29uZmlybShlKTogdm9pZHtcclxuICAgICAgY29uc3QgdmFsdWUgPSBlLmRldGFpbCBhcyBEYXRlXHJcblxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGZvcm1kYXRhOiB7XHJcbiAgICAgICAgICAuLi50aGlzLmRhdGEuZm9ybWRhdGEsXHJcbiAgICAgICAgICBcImJpbGxfdGltZVwiOiB2YWx1ZS50b0lTT1N0cmluZygpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBiaWxsVGltZTogZm9ybWF0TW9udGhEYXRlKHZhbHVlKSxcclxuICAgICAgICBkYXRlUG9wdXBTaG93OiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIG9uVGFiQ2hhbmdlKGU6IEFueU9iamVjdCk6IHZvaWR7XHJcbiAgICAgIGNvbnN0IHR5cGVBY3RpdmUgPSBlLmRldGFpbC5uYW1lO1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHR5cGVBY3RpdmUgOiBlLmRldGFpbC5uYW1lLFxyXG4gICAgICAgIGZvcm1kYXRhOiB7XHJcbiAgICAgICAgICAuLi50aGlzLmRhdGEuZm9ybWRhdGEsXHJcbiAgICAgICAgICBcImJpbGxfdHlwZV9pZFwiOiB0aGlzLmRhdGEudHlwZXNbdHlwZUFjdGl2ZV1bMF1bJ2lkJ11cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgb25BY2NvdW50Q2hhbmdlKGU6IEFueU9iamVjdCk6IHZvaWR7XHJcbiAgICAgIHRoaXMuc2V0QWNjb3VudChlLmRldGFpbClcclxuICAgIH0sIFxyXG4gICAgb25BY2NvdW50Q2xpY2soZTogQW55T2JqZWN0KTogdm9pZHtcclxuICAgICAgY29uc3QgeyBuYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcclxuICAgICAgdGhpcy5zZXRBY2NvdW50KG5hbWUpXHJcbiAgICB9LFxyXG4gICAgc2V0QWNjb3VudChhY2NvdW50SWQ6IG51bWJlcik6IHZvaWR7XHJcbiAgICAgIGNvbnN0IHtuYW1lfSA9IHRoaXMuZGF0YS5hY2NvdW50cy5maW5kKGl0ZW09Pml0ZW0uaWQgPT0gYWNjb3VudElkKVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGZvcm1kYXRhOiB7XHJcbiAgICAgICAgICAuLi50aGlzLmRhdGEuZm9ybWRhdGEsXHJcbiAgICAgICAgICBcImFjY291bnRfaWRcIjogYWNjb3VudElkXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhY2NvdW50TmFtZTogbmFtZSxcclxuICAgICAgICBhY2NvdW50UG9wdXBTaG93OiBmYWxzZSxcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbn0pIl19