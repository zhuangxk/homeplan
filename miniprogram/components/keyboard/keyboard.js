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
        styleIsolation: 'apply-shared'
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
            "bill_type_id": 1,
            "bill_time": new Date().toISOString(),
            "comment": ""
        },
        minDate: new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 30).getTime(),
        maxDate: new Date().getTime(),
        now: new Date().getTime(),
        max: 9999999,
        min: 0,
        billTime: '今日',
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
        afterRead: function () {
            ;
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
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5Ym9hcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJrZXlib2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQTJEO0FBQzNELHlDQUFrRDtBQUNsRCxTQUFTLENBQUM7SUFDUixPQUFPLEVBQUU7UUFDUCxjQUFjLEVBQUUsY0FBYztLQUMvQjtJQUNELFNBQVMsRUFBRTtRQUNULEtBQUssRUFBTDtZQUNFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQTtZQUNmLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUNwQixDQUFDO0tBQ0Y7SUFDRCxVQUFVLEVBQUU7UUFDUixRQUFRLEVBQUUsTUFBTTtLQUNuQjtJQUNELFNBQVMsRUFBRTtRQUNULFFBQVEsRUFBUjtZQUNFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQTtZQUNmLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUNwQixDQUFDO0tBQ0Y7SUFDRCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUU7WUFDTCxDQUFDLEVBQUUsRUFBYztZQUNqQixDQUFDLEVBQUUsRUFBYztZQUNqQixDQUFDLEVBQUUsRUFBYztTQUNVO1FBQzdCLFFBQVEsRUFBQyxFQUFjO1FBQ3ZCLFVBQVUsRUFBRSxDQUFDO1FBQ2IsUUFBUSxFQUFFO1lBQ1IsUUFBUSxFQUFFLEVBQUU7WUFDWixjQUFjLEVBQUUsQ0FBQztZQUNqQixXQUFXLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUU7WUFDckMsU0FBUyxFQUFFLEVBQUU7U0FDZDtRQUNELE9BQU8sRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUU7UUFDNUUsT0FBTyxFQUFFLElBQUks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QUksQ0FBQztZQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLFVBQVUsRUFBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUk7Z0JBQzFCLFFBQVEsd0JBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQ3JCLGNBQWMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FDckQ7YUFDRixDQUFDLENBQUE7UUFDSixDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRBY2NvdW50cywgZ2V0QmlsbFR5cGVzIH0gZnJvbSAnLi4vLi4vYXBpL2luZGV4J1xyXG5pbXBvcnQgeyBmb3JtYXRNb250aERhdGUgfSBmcm9tICcuLi8uLi91dGlscy91dGlsJ1xyXG5Db21wb25lbnQoe1xyXG4gIG9wdGlvbnM6IHtcclxuICAgIHN0eWxlSXNvbGF0aW9uOiAnYXBwbHktc2hhcmVkJ1xyXG4gIH0sXHJcbiAgbGlmZXRpbWVzOiB7XHJcbiAgICByZWFkeSgpOiB2b2lke1xyXG4gICAgICB0aGlzLmdldFR5cGVzKCkgIFxyXG4gICAgICB0aGlzLmdldEFjY291bnRzKClcclxuICAgIH1cclxuICB9LFxyXG4gIHByb3BlcnRpZXM6IHtcclxuICAgICAgbGVkZ2VySWQ6IE51bWJlclxyXG4gIH0sXHJcbiAgb2JzZXJ2ZXJzOiB7XHJcbiAgICBsZWRnZXJJZCgpOiB2b2lkIHtcclxuICAgICAgdGhpcy5nZXRUeXBlcygpICBcclxuICAgICAgdGhpcy5nZXRBY2NvdW50cygpXHJcbiAgICB9XHJcbiAgfSxcclxuICBkYXRhOiB7XHJcbiAgICB0eXBlczoge1xyXG4gICAgICAxOiBbXSBhcyBBbnlBcnJheSxcclxuICAgICAgMjogW10gYXMgQW55QXJyYXksXHJcbiAgICAgIDM6IFtdIGFzIEFueUFycmF5XHJcbiAgICB9IGFzIFJlY29yZDxudW1iZXIsIEFueUFycmF5PixcclxuICAgIGFjY291bnRzOltdIGFzIEFueUFycmF5LFxyXG4gICAgdHlwZUFjdGl2ZTogMSxcclxuICAgIGZvcm1kYXRhOiB7XHJcbiAgICAgIFwiYW1vdW50XCI6IFwiXCIsXHJcbiAgICAgIFwiYmlsbF90eXBlX2lkXCI6IDEsXHJcbiAgICAgIFwiYmlsbF90aW1lXCI6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgXCJjb21tZW50XCI6IFwiXCJcclxuICAgIH0sXHJcbiAgICBtaW5EYXRlOiBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIDEwMDAgKiA2MCAqIDYwICogMjQgKiAzMCkuZ2V0VGltZSgpLFxyXG4gICAgbWF4RGF0ZTogbmV3IERhdGUoKS5nZXRUaW1lKCksXHJcbiAgICBub3c6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxyXG4gICAgbWF4OiA5OTk5OTk5LFxyXG4gICAgbWluOiAwLFxyXG4gICAgYmlsbFRpbWU6ICfku4rml6UnLFxyXG4gICAgaW1nUG9wdXBTaG93OiBmYWxzZSxcclxuICAgIGFjY291bnRQb3B1cFNob3c6IGZhbHNlLFxyXG4gICAgZGF0ZVBvcHVwU2hvdzogZmFsc2UsXHJcbiAgICB0eXBpbmc6IGZhbHNlLFxyXG4gICAgTWFpbkN1cjogMCxcclxuICAgIGZpbGVMaXN0OiBbXVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgYXN5bmMgZ2V0VHlwZXMoKTogUHJvbWlzZTx2b2lkPntcclxuICAgICAgaWYgKCF0aGlzLnByb3BlcnRpZXMubGVkZ2VySWQpe1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGJpbGxUeXBlcyA9IGF3YWl0IGdldEJpbGxUeXBlcyh0aGlzLnByb3BlcnRpZXMubGVkZ2VySWQpXHJcbiAgICAgIGNvbnN0IHR5cGVzID0ge30gYXMgUmVjb3JkPG51bWJlciwgQW55QXJyYXk+XHJcbiAgICAgIGJpbGxUeXBlcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIHR5cGVzW2l0ZW0udHlwZV0gPSB0eXBlc1tpdGVtLnR5cGVdIHx8IFtdXHJcbiAgICAgICAgdHlwZXNbaXRlbS50eXBlXS5wdXNoKGl0ZW0pXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgdHlwZXMsXHJcbiAgICAgICAgZm9ybWRhdGE6e1xyXG4gICAgICAgICAgLi4udGhpcy5kYXRhLmZvcm1kYXRhLFxyXG4gICAgICAgICAgXCJiaWxsX3R5cGVfaWRcIjogdHlwZXNbMV1bMF1bJ2lkJ11cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgYXN5bmMgZ2V0QWNjb3VudHMoKTogUHJvbWlzZTx2b2lkPntcclxuICAgICAgaWYgKCF0aGlzLnByb3BlcnRpZXMubGVkZ2VySWQpe1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZ2V0QWNjb3VudHModGhpcy5wcm9wZXJ0aWVzLmxlZGdlcklkKVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGFjY291bnRzXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgb25JbnB1dChlOiBBbnlPYmplY3QpOiB2b2lke1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnY7XHJcbiAgICAgIGlmKCF2YWx1ZSkgcmV0dXJuXHJcbiAgICAgIHN3aXRjaCAodmFsdWUpIHtcclxuICAgICAgICBjYXNlICdkYXRlJzpcclxuICAgICAgICAgIHRoaXMuZGF0ZSgpXHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICBjYXNlICdhY2NvdW50JzpcclxuICAgICAgICAgIHRoaXMuYWNjb3VudCgpXHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICBjYXNlICdvayc6XHJcbiAgICAgICAgICB0aGlzLm9rKClcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIGNhc2UgJ2RlbCc6XHJcbiAgICAgICAgICB0aGlzLmRlbCgpXHJcbiAgICAgICAgICB3eC52aWJyYXRlU2hvcnQoKVxyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICB0aGlzLmlucHV0KHZhbHVlKVxyXG4gICAgICAgICAgd3gudmlicmF0ZVNob3J0KClcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRlbCgpOiB2b2lke1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZGF0YS5mb3JtZGF0YS5hbW91bnQuc3Vic3RyaW5nKDAsIHRoaXMuZGF0YS5mb3JtZGF0YS5hbW91bnQubGVuZ3RoIC0gMSlcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBmb3JtZGF0YToge1xyXG4gICAgICAgICAgLi4udGhpcy5kYXRhLmZvcm1kYXRhLFxyXG4gICAgICAgICAgYW1vdW50OiB2YWx1ZVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBkYXRlKCk6IHZvaWR7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgZGF0ZVBvcHVwU2hvdzogdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIG9rKCk6IHZvaWR7XHJcbiAgICAgIDtcclxuICAgIH0sXHJcbiAgICBhY2NvdW50KCk6IHZvaWR7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgYWNjb3VudFBvcHVwU2hvdzogdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIGlucHV0KHZhbDogc3RyaW5nKTogdm9pZHtcclxuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmZvcm1hdCh2YWwpXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgZm9ybWRhdGE6IHtcclxuICAgICAgICAgIC4uLnRoaXMuZGF0YS5mb3JtZGF0YSxcclxuICAgICAgICAgIGFtb3VudDogdmFsdWVcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgZm9ybWF0OiBmdW5jdGlvbiAodmFsOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICBpZiAodGhpcy5kYXRhLmZvcm1kYXRhLmFtb3VudC5pbmRleE9mKCcuJykgPiAtMSkge1xyXG4gICAgICAgIGlmICh2YWwgPT09ICcuJyl7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmZvcm1kYXRhLmFtb3VudFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5kYXRhLmZvcm1kYXRhLmFtb3VudC5zcGxpdCgnLicpWzFdLmxlbmd0aCA+PSAyKXtcclxuICAgICAgICAgIHJldHVybiB0aGlzLmRhdGEuZm9ybWRhdGEuYW1vdW50XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5kYXRhLmZvcm1kYXRhLmFtb3VudCArIHZhbFxyXG4gICAgICBpZiAodmFsID09PSAnLicpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmZvcm1kYXRhLmFtb3VudCArIHZhbFxyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmRhdGEuZm9ybWRhdGEuYW1vdW50ID09PSAnMCcpe1xyXG4gICAgICAgIGlmKHZhbCAhPT0gJy4nICl7XHJcbiAgICAgICAgICByZXR1cm4gdmFsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmKHBhcnNlSW50KHZhbHVlKSA+IDk5OTk5OTk5KXtcclxuICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgdGl0bGU6ICfpkrHlpKrlpJos5pWw5LiN6L+H5p2l5ZWmJyxcclxuICAgICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5mb3JtZGF0YS5hbW91bnRcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHZhbHVlXHJcblxyXG4gICAgfSxcclxuICAgIG9uUmVtYXJrRm9jdXMoKTogdm9pZCB7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgdHlwaW5nOiB0cnVlXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgb25SZW1hcmtCbHVyKGU6IEFueU9iamVjdCk6IHZvaWQge1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgdHlwaW5nOiBmYWxzZSxcclxuICAgICAgICBmb3JtZGF0YToge1xyXG4gICAgICAgICAgLi4udGhpcy5kYXRhLmZvcm1kYXRhLFxyXG4gICAgICAgICAgY29tbWVudDogdmFsdWVcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgb25CaWxsVHlwZVRhcChlOiBBbnlPYmplY3QpOiB2b2lkIHtcclxuICAgICAgY29uc3QgYmlsbFR5cGVJZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xyXG4gICAgICBpZighYmlsbFR5cGVJZCkgcmV0dXJuXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgdHlwaW5nOiBmYWxzZSxcclxuICAgICAgICBmb3JtZGF0YToge1xyXG4gICAgICAgICAgLi4udGhpcy5kYXRhLmZvcm1kYXRhLFxyXG4gICAgICAgICAgXCJiaWxsX3R5cGVfaWRcIjogYmlsbFR5cGVJZFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgd3gudmlicmF0ZVNob3J0KClcclxuICAgIH0sXHJcbiAgICBvbkltZ0J0blRhcCgpOiB2b2lke1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGltZ1BvcHVwU2hvdzogdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIG9uSW1nUG9wdXBDbG9zZSgpOiB2b2lke1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGltZ1BvcHVwU2hvdzogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBvbkFjY291bnRQb3B1cENsb3NlKCk6IHZvaWR7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgYWNjb3VudFBvcHVwU2hvdzogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBvbkRhdGVQb3B1cENsb3NlKCk6IHZvaWR7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgZGF0ZVBvcHVwU2hvdzogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBhZnRlclJlYWQoKTogdm9pZHtcclxuICAgICAgO1xyXG4gICAgfSxcclxuICAgIG9uQ29uZmlybShlKTogdm9pZHtcclxuICAgICAgY29uc3QgdmFsdWUgPSBlLmRldGFpbCBhcyBEYXRlXHJcblxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGZvcm1kYXRhOiB7XHJcbiAgICAgICAgICAuLi50aGlzLmRhdGEuZm9ybWRhdGEsXHJcbiAgICAgICAgICBcImJpbGxfdGltZVwiOiB2YWx1ZS50b0lTT1N0cmluZygpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBiaWxsVGltZTogZm9ybWF0TW9udGhEYXRlKHZhbHVlKSxcclxuICAgICAgICBkYXRlUG9wdXBTaG93OiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIG9uVGFiQ2hhbmdlKGU6IEFueU9iamVjdCk6IHZvaWR7XHJcbiAgICAgIGNvbnN0IHR5cGVBY3RpdmUgPSBlLmRldGFpbC5uYW1lO1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHR5cGVBY3RpdmUgOiBlLmRldGFpbC5uYW1lLFxyXG4gICAgICAgIGZvcm1kYXRhOiB7XHJcbiAgICAgICAgICAuLi50aGlzLmRhdGEuZm9ybWRhdGEsXHJcbiAgICAgICAgICBcImJpbGxfdHlwZV9pZFwiOiB0aGlzLmRhdGEudHlwZXNbdHlwZUFjdGl2ZV1bMF1bJ2lkJ11cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG59KSJdfQ==