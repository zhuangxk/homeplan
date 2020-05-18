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
        date: '',
        imgPopupShow: false,
        acountPopupShow: false,
        datePopupShow: false,
        typing: false,
        MainCur: 0,
        form: {
            billTypeId: null,
            remark: '',
            acount: '',
        },
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
                                form: __assign(__assign({}, this.data.form), { billTypeId: types[1][0]['id'] })
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
            var value = this.data.form.acount.substring(0, this.data.form.acount.length - 1);
            this.setData({
                form: __assign(__assign({}, this.data.form), { acount: value })
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
                form: __assign(__assign({}, this.data.form), { acount: value })
            });
        },
        format: function (val) {
            if (this.data.form.acount.indexOf('.') > -1) {
                if (val === '.') {
                    return this.data.form.acount;
                }
                if (this.data.form.acount.split('.')[1].length >= 2) {
                    return this.data.form.acount;
                }
            }
            var value = this.data.form.acount + val;
            if (val === '.') {
                return this.data.form.acount + val;
            }
            if (this.data.form.acount === '0') {
                if (val !== '.') {
                    return val;
                }
            }
            if (parseInt(value) > 99999999) {
                wx.showToast({
                    title: '钱太多,数不过来啦',
                    icon: 'none'
                });
                return this.data.form.acount;
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
                form: __assign(__assign({}, this.data.form), { remark: value })
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
            var typeActive = e.detail.name;
            this.setData({
                typeActive: e.detail.name,
                form: __assign(__assign({}, this.data.form), { billTypeId: this.data.types[typeActive][0]['id'] })
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5Ym9hcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJrZXlib2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQTJEO0FBQzNELFNBQVMsQ0FBQztJQUNSLE9BQU8sRUFBRTtRQUNQLGNBQWMsRUFBRSxjQUFjO0tBQy9CO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsS0FBSyxFQUFMO1lBQ0UsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO1lBQ2YsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQ3BCLENBQUM7S0FDRjtJQUNELFVBQVUsRUFBRTtRQUNSLFFBQVEsRUFBRSxNQUFNO0tBQ25CO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsUUFBUSxFQUFSO1lBQ0UsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO1lBQ2YsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQ3BCLENBQUM7S0FDRjtJQUNELElBQUksRUFBRTtRQUNKLEtBQUssRUFBRTtZQUNMLENBQUMsRUFBRSxFQUFjO1lBQ2pCLENBQUMsRUFBRSxFQUFjO1lBQ2pCLENBQUMsRUFBRSxFQUFjO1NBQ1U7UUFDN0IsUUFBUSxFQUFDLEVBQWM7UUFDdkIsVUFBVSxFQUFFLENBQUM7UUFDYixRQUFRLEVBQUU7WUFDUixRQUFRLEVBQUUsTUFBTTtZQUNoQixjQUFjLEVBQUUsQ0FBQztZQUNqQixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFdBQVcsRUFBRSxDQUFDO1lBQ2QsU0FBUyxFQUFFLEVBQUU7U0FDZDtRQUNELE9BQU8sRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUU7UUFDNUUsT0FBTyxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMs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QUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FDakQ7YUFDRixDQUFDLENBQUE7UUFDSixDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRCaWxsVHlwZXMsIGdldEFjY291bnRzIH0gZnJvbSAnLi4vLi4vYXBpL2luZGV4J1xyXG5Db21wb25lbnQoe1xyXG4gIG9wdGlvbnM6IHtcclxuICAgIHN0eWxlSXNvbGF0aW9uOiAnYXBwbHktc2hhcmVkJ1xyXG4gIH0sXHJcbiAgbGlmZXRpbWVzOiB7XHJcbiAgICByZWFkeSgpOiB2b2lke1xyXG4gICAgICB0aGlzLmdldFR5cGVzKCkgIFxyXG4gICAgICB0aGlzLmdldEFjY291bnRzKClcclxuICAgIH1cclxuICB9LFxyXG4gIHByb3BlcnRpZXM6IHtcclxuICAgICAgbGVkZ2VySWQ6IE51bWJlclxyXG4gIH0sXHJcbiAgb2JzZXJ2ZXJzOiB7XHJcbiAgICBsZWRnZXJJZCgpOiB2b2lkIHtcclxuICAgICAgdGhpcy5nZXRUeXBlcygpICBcclxuICAgICAgdGhpcy5nZXRBY2NvdW50cygpXHJcbiAgICB9XHJcbiAgfSxcclxuICBkYXRhOiB7XHJcbiAgICB0eXBlczoge1xyXG4gICAgICAxOiBbXSBhcyBBbnlBcnJheSxcclxuICAgICAgMjogW10gYXMgQW55QXJyYXksXHJcbiAgICAgIDM6IFtdIGFzIEFueUFycmF5XHJcbiAgICB9IGFzIFJlY29yZDxudW1iZXIsIEFueUFycmF5PixcclxuICAgIGFjY291bnRzOltdIGFzIEFueUFycmF5LFxyXG4gICAgdHlwZUFjdGl2ZTogMSxcclxuICAgIGZvcm1kYXRhOiB7XHJcbiAgICAgIFwiYW1vdW50XCI6IDEzMTMuMyxcclxuICAgICAgXCJiaWxsX3R5cGVfaWRcIjogMSxcclxuICAgICAgXCJiaWxsX3RpbWVcIjogXCIyMDIwLTA0LTE5VDE2OjIyOjM1LjU5MVpcIixcclxuICAgICAgXCJsZWRnZXJfaWRcIjogMSxcclxuICAgICAgXCJjb21tZW50XCI6IFwiXCJcclxuICAgIH0sXHJcbiAgICBtaW5EYXRlOiBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIDEwMDAgKiA2MCAqIDYwICogMjQgKiAzMCkuZ2V0VGltZSgpLFxyXG4gICAgbWF4RGF0ZTogbmV3IERhdGUoKS5nZXRUaW1lKCksXHJcbiAgICBtYXg6IDk5OTk5OTksXHJcbiAgICBtaW46IDAsXHJcbiAgICBkYXRlOiAnJyxcclxuICAgIGltZ1BvcHVwU2hvdzogZmFsc2UsXHJcbiAgICBhY291bnRQb3B1cFNob3c6IGZhbHNlLFxyXG4gICAgZGF0ZVBvcHVwU2hvdzogZmFsc2UsXHJcbiAgICB0eXBpbmc6IGZhbHNlLFxyXG4gICAgTWFpbkN1cjogMCxcclxuICAgIGZvcm06IHtcclxuICAgICAgYmlsbFR5cGVJZDogbnVsbCxcclxuICAgICAgcmVtYXJrOiAnJyxcclxuICAgICAgYWNvdW50OiAnJyxcclxuICAgIH0sXHJcbiAgICBmaWxlTGlzdDogW11cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGFzeW5jIGdldFR5cGVzKCk6IFByb21pc2U8dm9pZD57XHJcbiAgICAgIGlmICghdGhpcy5wcm9wZXJ0aWVzLmxlZGdlcklkKXtcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICBjb25zdCBiaWxsVHlwZXMgPSBhd2FpdCBnZXRCaWxsVHlwZXModGhpcy5wcm9wZXJ0aWVzLmxlZGdlcklkKVxyXG4gICAgICBjb25zdCB0eXBlcyA9IHt9IGFzIFJlY29yZDxudW1iZXIsIEFueUFycmF5PlxyXG4gICAgICBiaWxsVHlwZXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICB0eXBlc1tpdGVtLnR5cGVdID0gdHlwZXNbaXRlbS50eXBlXSB8fCBbXVxyXG4gICAgICAgIHR5cGVzW2l0ZW0udHlwZV0ucHVzaChpdGVtKVxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHR5cGVzLFxyXG4gICAgICAgIGZvcm06e1xyXG4gICAgICAgICAgLi4udGhpcy5kYXRhLmZvcm0sXHJcbiAgICAgICAgICBiaWxsVHlwZUlkOiB0eXBlc1sxXVswXVsnaWQnXVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBhc3luYyBnZXRBY2NvdW50cygpOiBQcm9taXNlPHZvaWQ+e1xyXG4gICAgICBpZiAoIXRoaXMucHJvcGVydGllcy5sZWRnZXJJZCl7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBnZXRBY2NvdW50cyh0aGlzLnByb3BlcnRpZXMubGVkZ2VySWQpXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgYWNjb3VudHNcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBvbklucHV0KGU6IEFueU9iamVjdCk6IHZvaWR7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudjtcclxuICAgICAgaWYoIXZhbHVlKSByZXR1cm5cclxuICAgICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgICAgIGNhc2UgJ2RhdGUnOlxyXG4gICAgICAgICAgdGhpcy5kYXRlKClcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIGNhc2UgJ2Fjb3VudCc6XHJcbiAgICAgICAgICB0aGlzLmFjb3VudCgpXHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICBjYXNlICdvayc6XHJcbiAgICAgICAgICB0aGlzLm9rKClcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIGNhc2UgJ2RlbCc6XHJcbiAgICAgICAgICB0aGlzLmRlbCgpXHJcbiAgICAgICAgICB3eC52aWJyYXRlU2hvcnQoKVxyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICB0aGlzLmlucHV0KHZhbHVlKVxyXG4gICAgICAgICAgd3gudmlicmF0ZVNob3J0KClcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRlbCgpOiB2b2lke1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZGF0YS5mb3JtLmFjb3VudC5zdWJzdHJpbmcoMCwgdGhpcy5kYXRhLmZvcm0uYWNvdW50Lmxlbmd0aCAtIDEpXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgZm9ybToge1xyXG4gICAgICAgICAgLi4udGhpcy5kYXRhLmZvcm0sXHJcbiAgICAgICAgICBhY291bnQ6IHZhbHVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIGRhdGUoKTogdm9pZHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBkYXRlUG9wdXBTaG93OiB0cnVlXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgb2soKTogdm9pZHtcclxuICAgICAgO1xyXG4gICAgfSxcclxuICAgIGFjb3VudCgpOiB2b2lke1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGFjb3VudFBvcHVwU2hvdzogdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIGlucHV0KHZhbDogc3RyaW5nKTogdm9pZHtcclxuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmZvcm1hdCh2YWwpXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgZm9ybToge1xyXG4gICAgICAgICAgLi4udGhpcy5kYXRhLmZvcm0sXHJcbiAgICAgICAgICBhY291bnQ6IHZhbHVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIGZvcm1hdDogZnVuY3Rpb24gKHZhbDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgaWYgKHRoaXMuZGF0YS5mb3JtLmFjb3VudC5pbmRleE9mKCcuJykgPiAtMSkge1xyXG4gICAgICAgIGlmICh2YWwgPT09ICcuJyl7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmZvcm0uYWNvdW50XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuZGF0YS5mb3JtLmFjb3VudC5zcGxpdCgnLicpWzFdLmxlbmd0aCA+PSAyKXtcclxuICAgICAgICAgIHJldHVybiB0aGlzLmRhdGEuZm9ybS5hY291bnRcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmRhdGEuZm9ybS5hY291bnQgKyB2YWxcclxuICAgICAgaWYgKHZhbCA9PT0gJy4nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5mb3JtLmFjb3VudCArIHZhbFxyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmRhdGEuZm9ybS5hY291bnQgPT09ICcwJyl7XHJcbiAgICAgICAgaWYodmFsICE9PSAnLicgKXtcclxuICAgICAgICAgIHJldHVybiB2YWxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYocGFyc2VJbnQodmFsdWUpID4gOTk5OTk5OTkpe1xyXG4gICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICB0aXRsZTogJ+mSseWkquWkmizmlbDkuI3ov4fmnaXllaYnLFxyXG4gICAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmZvcm0uYWNvdW50XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB2YWx1ZVxyXG5cclxuICAgIH0sXHJcbiAgICBvblJlbWFya0ZvY3VzKCk6IHZvaWQge1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHR5cGluZzogdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIG9uUmVtYXJrQmx1cihlOiBBbnlPYmplY3QpOiB2b2lkIHtcclxuICAgICAgY29uc3QgdmFsdWUgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHR5cGluZzogZmFsc2UsXHJcbiAgICAgICAgZm9ybToge1xyXG4gICAgICAgICAgLi4udGhpcy5kYXRhLmZvcm0sXHJcbiAgICAgICAgICByZW1hcms6IHZhbHVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIG9uQmlsbFR5cGVUYXAoZTogQW55T2JqZWN0KTogdm9pZCB7XHJcbiAgICAgIGNvbnN0IGJpbGxUeXBlSWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZDtcclxuICAgICAgaWYoIWJpbGxUeXBlSWQpIHJldHVyblxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHR5cGluZzogZmFsc2UsXHJcbiAgICAgICAgZm9ybToge1xyXG4gICAgICAgICAgLi4udGhpcy5kYXRhLmZvcm0sXHJcbiAgICAgICAgICBiaWxsVHlwZUlkXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICB3eC52aWJyYXRlU2hvcnQoKVxyXG4gICAgfSxcclxuICAgIG9uSW1nQnRuVGFwKCk6IHZvaWR7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgaW1nUG9wdXBTaG93OiB0cnVlXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgb25JbWdQb3B1cENsb3NlKCk6IHZvaWR7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgaW1nUG9wdXBTaG93OiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIG9uQWNvdW50UG9wdXBDbG9zZSgpOiB2b2lke1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGFjb3VudFBvcHVwU2hvdzogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBvbkRhdGVQb3B1cENsb3NlKCk6IHZvaWR7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgZGF0ZVBvcHVwU2hvdzogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBhZnRlclJlYWQoKTogdm9pZHtcclxuICAgICAgO1xyXG4gICAgfSxcclxuICAgIG9uQ29uZmlybSgpOiB2b2lke1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGRhdGVQb3B1cFNob3c6IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgb25UYWJDaGFuZ2UoZTogQW55T2JqZWN0KTogdm9pZHtcclxuICAgICAgY29uc3QgdHlwZUFjdGl2ZSA9IGUuZGV0YWlsLm5hbWU7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgdHlwZUFjdGl2ZSA6IGUuZGV0YWlsLm5hbWUsXHJcbiAgICAgICAgZm9ybToge1xyXG4gICAgICAgICAgLi4udGhpcy5kYXRhLmZvcm0sXHJcbiAgICAgICAgICBiaWxsVHlwZUlkOiB0aGlzLmRhdGEudHlwZXNbdHlwZUFjdGl2ZV1bMF1bJ2lkJ11cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG59KSJdfQ==