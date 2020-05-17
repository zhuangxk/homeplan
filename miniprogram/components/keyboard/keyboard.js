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
            console.log('1231', this.properties.ledgerId);
            this.getTypes();
        }
    },
    properties: {
        ledgerId: {
            type: Number,
            observer: function () {
                console.log('666666666666', this.properties.ledgerId);
                this.getTypes();
            }
        }
    },
    observers: {
        ledgerId: function () {
            console.log('5555555', this.properties.ledgerId);
            this.getTypes();
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
                                console.log(item);
                                console.log(item.type);
                                types[item.type] = types[item.type] || [];
                                types[item.type].push(item);
                            });
                            this.setData({
                                types: types
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5Ym9hcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJrZXlib2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQThDO0FBQzlDLFNBQVMsQ0FBQztJQUNSLE9BQU8sRUFBRTtRQUNQLGNBQWMsRUFBRSxjQUFjO0tBQy9CO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsS0FBSztZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUE7WUFFN0MsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQ2pCLENBQUM7S0FDRjtJQUNELFVBQVUsRUFBRTtRQUNSLFFBQVEsRUFBRTtZQUNSLElBQUksRUFBRSxNQUFNO1lBQ1osUUFBUTtnQkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFBO2dCQUNyRCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7WUFDakIsQ0FBQztTQUNGO0tBQ0o7SUFDRCxTQUFTLEVBQUU7UUFDVCxRQUFRO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQTtZQUNqRCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDaEIsQ0FBQztLQUNGO0lBQ0QsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFO1lBQ0wsQ0FBQyxFQUFFLEVBQWM7WUFDakIsQ0FBQyxFQUFFLEVBQWM7WUFDakIsQ0FBQyxFQUFFLEVBQWM7U0FDVTtRQUM3QixVQUFVLEVBQUUsQ0FBQztRQUNiLFFBQVEsRUFBRTtZQUNSLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLGNBQWMsRUFBRSxDQUFDO1lBQ2pCLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsV0FBVyxFQUFFLENB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Q0FBQyxPQUFPLENBQUM7Z0JBQ1gsWUFBWSxFQUFFLEtBQUs7YUFDcEIsQ0FBQyxDQUFBO1FBQ0osQ0FBQztRQUNELGtCQUFrQixFQUFsQjtZQUNFLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsZUFBZSxFQUFFLEtBQUs7YUFDdkIsQ0FBQyxDQUFBO1FBQ0osQ0FBQztRQUNELGdCQUFnQixFQUFoQjtZQUNFLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsYUFBYSxFQUFFLEtBQUs7YUFDckIsQ0FBQyxDQUFBO1FBQ0osQ0FBQztRQUNELFNBQVMsRUFBVDtZQUNFLENBQUM7UUFDSCxDQUFDO1FBQ0QsU0FBUyxFQUFUO1lBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxhQUFhLEVBQUUsS0FBSzthQUNyQixDQUFDLENBQUE7UUFDSixDQUFDO1FBQ0QsV0FBVyxFQUFYLFVBQVksQ0FBTTtZQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxVQUFVLEVBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJO2FBQzNCLENBQUMsQ0FBQTtRQUNKLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEJpbGxUeXBlcyB9IGZyb20gJy4uLy4uL2FwaS9pbmRleCdcclxuQ29tcG9uZW50KHtcclxuICBvcHRpb25zOiB7XHJcbiAgICBzdHlsZUlzb2xhdGlvbjogJ2FwcGx5LXNoYXJlZCdcclxuICB9LFxyXG4gIGxpZmV0aW1lczoge1xyXG4gICAgcmVhZHkoKXtcclxuICAgICAgY29uc29sZS5sb2coJzEyMzEnLCB0aGlzLnByb3BlcnRpZXMubGVkZ2VySWQpIFxyXG5cclxuICAgICAgdGhpcy5nZXRUeXBlcygpICBcclxuICAgIH1cclxuICB9LFxyXG4gIHByb3BlcnRpZXM6IHtcclxuICAgICAgbGVkZ2VySWQ6IHtcclxuICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgb2JzZXJ2ZXIoKXtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCc2NjY2NjY2NjY2NjYnLCB0aGlzLnByb3BlcnRpZXMubGVkZ2VySWQpXHJcbiAgICAgICAgICB0aGlzLmdldFR5cGVzKCkgIFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIH0sXHJcbiAgb2JzZXJ2ZXJzOiB7XHJcbiAgICBsZWRnZXJJZCgpe1xyXG4gICAgICBjb25zb2xlLmxvZygnNTU1NTU1NScsIHRoaXMucHJvcGVydGllcy5sZWRnZXJJZCkgXHJcbiAgICAgdGhpcy5nZXRUeXBlcygpIFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZGF0YToge1xyXG4gICAgdHlwZXM6IHtcclxuICAgICAgMTogW10gYXMgQW55QXJyYXksXHJcbiAgICAgIDI6IFtdIGFzIEFueUFycmF5LFxyXG4gICAgICAzOiBbXSBhcyBBbnlBcnJheVxyXG4gICAgfSBhcyBSZWNvcmQ8bnVtYmVyLCBBbnlBcnJheT4sXHJcbiAgICB0eXBlQWN0aXZlOiAxLFxyXG4gICAgZm9ybWRhdGE6IHtcclxuICAgICAgXCJhbW91bnRcIjogMTMxMy4zLFxyXG4gICAgICBcImJpbGxfdHlwZV9pZFwiOiAxLFxyXG4gICAgICBcImJpbGxfdGltZVwiOiBcIjIwMjAtMDQtMTlUMTY6MjI6MzUuNTkxWlwiLFxyXG4gICAgICBcImxlZGdlcl9pZFwiOiAxLFxyXG4gICAgICBcImNvbW1lbnRcIjogXCJcIlxyXG4gICAgfSxcclxuICAgIG1pbkRhdGU6IG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gMTAwMCAqIDYwICogNjAgKiAyNCAqIDMwKS5nZXRUaW1lKCksXHJcbiAgICBtYXhEYXRlOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcclxuICAgIG1heDogOTk5OTk5OSxcclxuICAgIG1pbjogMCxcclxuICAgIHJlbWFyazogJycsXHJcbiAgICBhY291bnQ6ICcnLFxyXG4gICAgZGF0ZTogJycsXHJcbiAgICBpbWdQb3B1cFNob3c6IGZhbHNlLFxyXG4gICAgYWNvdW50UG9wdXBTaG93OiBmYWxzZSxcclxuICAgIGRhdGVQb3B1cFNob3c6IGZhbHNlLFxyXG4gICAgdHlwaW5nOiBmYWxzZSxcclxuICAgIE1haW5DdXI6IDAsXHJcbiAgICBmb3JtOiB7XHJcbiAgICAgIGJpbGxUeXBlSWQ6IG51bGxcclxuICAgIH0sXHJcbiAgICBmaWxlTGlzdDogW11cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGFzeW5jIGdldFR5cGVzKCl7XHJcbiAgICAgIGlmICghdGhpcy5wcm9wZXJ0aWVzLmxlZGdlcklkKXtcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICBjb25zdCBiaWxsVHlwZXMgPSBhd2FpdCBnZXRCaWxsVHlwZXModGhpcy5wcm9wZXJ0aWVzLmxlZGdlcklkKVxyXG4gICAgICBjb25zdCB0eXBlcyA9IHt9IGFzIFJlY29yZDxudW1iZXIsIEFueUFycmF5PlxyXG4gICAgICBiaWxsVHlwZXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhpdGVtKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW0udHlwZSlcclxuICAgICAgICB0eXBlc1tpdGVtLnR5cGVdID0gdHlwZXNbaXRlbS50eXBlXSB8fCBbXVxyXG4gICAgICAgIHR5cGVzW2l0ZW0udHlwZV0ucHVzaChpdGVtKVxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHR5cGVzXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgb25JbnB1dChlOiBhbnkpOiB2b2lke1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnY7XHJcbiAgICAgIGlmKCF2YWx1ZSkgcmV0dXJuXHJcbiAgICAgIHN3aXRjaCAodmFsdWUpIHtcclxuICAgICAgICBjYXNlICdkYXRlJzpcclxuICAgICAgICAgIHRoaXMuZGF0ZSgpXHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICBjYXNlICdhY291bnQnOlxyXG4gICAgICAgICAgdGhpcy5hY291bnQoKVxyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgY2FzZSAnb2snOlxyXG4gICAgICAgICAgdGhpcy5vaygpXHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICBjYXNlICdkZWwnOlxyXG4gICAgICAgICAgdGhpcy5kZWwoKVxyXG4gICAgICAgICAgd3gudmlicmF0ZVNob3J0KClcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgdGhpcy5pbnB1dCh2YWx1ZSlcclxuICAgICAgICAgIHd4LnZpYnJhdGVTaG9ydCgpXHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkZWwoKTogdm9pZHtcclxuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmRhdGEuYWNvdW50LnN1YnN0cmluZygwLCB0aGlzLmRhdGEuYWNvdW50Lmxlbmd0aCAtIDEpXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgYWNvdW50OiB2YWx1ZVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIGRhdGUoKTogdm9pZHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBkYXRlUG9wdXBTaG93OiB0cnVlXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgb2soKTogdm9pZHtcclxuICAgICAgO1xyXG4gICAgfSxcclxuICAgIGFjb3VudCgpOiB2b2lke1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGFjb3VudFBvcHVwU2hvdzogdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIGlucHV0KHZhbDogc3RyaW5nKTogdm9pZHtcclxuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmZvcm1hdCh2YWwpXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgYWNvdW50OiB2YWx1ZVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIGZvcm1hdDogZnVuY3Rpb24gKHZhbDogYW55KSB7XHJcbiAgICAgIGlmICh0aGlzLmRhdGEuYWNvdW50LmluZGV4T2YoJy4nKSA+IC0xKSB7XHJcbiAgICAgICAgaWYgKHZhbCA9PT0gJy4nKXtcclxuICAgICAgICAgIHJldHVybiB0aGlzLmRhdGEuYWNvdW50XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuZGF0YS5hY291bnQuc3BsaXQoJy4nKVsxXS5sZW5ndGggPj0gMil7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmFjb3VudFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZGF0YS5hY291bnQgKyB2YWxcclxuICAgICAgaWYgKHZhbCA9PT0gJy4nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5hY291bnQgKyB2YWxcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5kYXRhLmFjb3VudCA9PT0gJzAnKXtcclxuICAgICAgICBpZih2YWwgIT09ICcuJyApe1xyXG4gICAgICAgICAgcmV0dXJuIHZhbFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZihwYXJzZUludCh2YWx1ZSkgPiA5OTk5OTk5OSl7XHJcbiAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgIHRpdGxlOiAn6ZKx5aSq5aSaLOaVsOS4jei/h+adpeWVpicsXHJcbiAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEuYWNvdW50XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB2YWx1ZVxyXG5cclxuICAgIH0sXHJcbiAgICBvblJlbWFya0ZvY3VzKCk6IHZvaWQge1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHR5cGluZzogdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIG9uUmVtYXJrQmx1cihlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgY29uc3QgdmFsdWUgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHR5cGluZzogZmFsc2UsXHJcbiAgICAgICAgcmVtYXJrOiB2YWx1ZVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIG9uQmlsbFR5cGVUYXAoZTogYW55KTogdm9pZCB7XHJcbiAgICAgIGNvbnN0IGJpbGxUeXBlSWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZDtcclxuICAgICAgaWYoIWJpbGxUeXBlSWQpIHJldHVyblxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHR5cGluZzogZmFsc2UsXHJcbiAgICAgICAgZm9ybToge1xyXG4gICAgICAgICAgLi4udGhpcy5kYXRhLmZvcm0sXHJcbiAgICAgICAgICBiaWxsVHlwZUlkXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICB3eC52aWJyYXRlU2hvcnQoKVxyXG4gICAgfSxcclxuICAgIG9uSW1nQnRuVGFwKCk6IHZvaWR7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgaW1nUG9wdXBTaG93OiB0cnVlXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgb25JbWdQb3B1cENsb3NlKCk6IHZvaWR7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgaW1nUG9wdXBTaG93OiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIG9uQWNvdW50UG9wdXBDbG9zZSgpOiB2b2lke1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGFjb3VudFBvcHVwU2hvdzogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBvbkRhdGVQb3B1cENsb3NlKCk6IHZvaWR7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgZGF0ZVBvcHVwU2hvdzogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBhZnRlclJlYWQoKTogdm9pZHtcclxuICAgICAgO1xyXG4gICAgfSxcclxuICAgIG9uQ29uZmlybSgpOiB2b2lke1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGRhdGVQb3B1cFNob3c6IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgb25UYWJDaGFuZ2UoZTogYW55KTogdm9pZHtcclxuICAgICAgY29uc29sZS5sb2coZS5kZXRhaWwubmFtZSlcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB0eXBlQWN0aXZlIDogZS5kZXRhaWwubmFtZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxufSkiXX0=