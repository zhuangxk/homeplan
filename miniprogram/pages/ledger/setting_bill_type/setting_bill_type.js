"use strict";
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
var index_1 = require("../../../api/index");
Page({
    data: {
        types: {
            1: [],
            2: [],
        },
        editMode: false,
        formShow: false,
        saveType: 'add',
        activeID: 0,
        ledgerID: 1,
        selectedIconIndex: 0,
        form: {
            name: '',
            type: 1,
            icon: ''
        },
        icons: ['verification_code', 'book', 'travel', 'food', 'digital', 'cultivate', 'plane', 'clothes',
            'train', 'car', 'education', 'cash-gift', 'oil', 'cosmetology', 'electric', 'home', 'shopping',
            'financing', 'fruits', 'cosmetics', 'work', 'snacks', 'communication', 'car-repair', 'traffic',
            'social', 'friends', 'pets', 'housing', 'tuition', 'child', 'parking', 'water', 'config', 'express',
            'elderly', 'vegetables', 'fun', 'sport', 'lottery', 'bookkeeping', 'reimbursement', 'taobao', 'salary',
            'wifi', 'user', 'bonus', 'alimony', 'part-time-job', 'refund', 'alipay', 'daily-necessities'
        ],
    },
    getTypes: function () {
        return __awaiter(this, void 0, void 0, function () {
            var billTypes, types;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, index_1.getBillTypes(this.data.ledgerID)];
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
                        });
                        return [2];
                }
            });
        });
    },
    onLoad: function () {
        this.getTypes();
    },
    toggleEditMode: function () {
        this.setData({
            editMode: !this.data.editMode
        });
    },
    onAdd: function (e) {
        var type = e.currentTarget.dataset.type;
        this.setData({
            editMode: false,
            formShow: true,
            saveType: 'add',
            form: {
                name: '',
                type: type,
                icon: ''
            }
        });
    },
    onEdit: function () {
        this.setData({
            formShow: true,
            saveType: 'edit'
        });
    },
    onAddClose: function () {
        this.setData({
            formShow: false
        });
    },
    onInput: function (e) {
        this.data.form.name = e.detail;
    },
    onDel: function () {
        '';
    },
    onSave: function () {
        if (this.data.saveType == 'add') {
            index_1.addBillTypes(this.data.ledgerID, this.data.form).then(function (res) {
                console.log(res);
            });
        }
    },
    onSel: function (e) {
        var index = e.currentTarget.dataset.index;
        this.setData({
            selectedIconIndex: index
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ19iaWxsX3R5cGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZXR0aW5nX2JpbGxfdHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDRDQUErRDtBQUMvRCxJQUFJLENBQUM7SUFFSCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUU7WUFDTCxDQUFDLEVBQUUsRUFBYztZQUNqQixDQUFDLEVBQUUsRUFBYztTQUNVO1FBQzdCLFFBQVEsRUFBRSxLQUFLO1FBQ2YsUUFBUSxFQUFFLEtBQUs7UUFDZixRQUFRLEVBQUUsS0FBSztRQUNmLFFBQVEsRUFBRSxDQUFDO1FBRVgsUUFBUSxFQUFFLENBQUM7UUFDWCxpQkFBaUIsRUFBRSxDQUFDO1FBQ3BCLElBQUksRUFBRTtZQUNKLElBQUksRUFBRSxFQUFFO1lBQ1IsSUFBSSxFQUFFLENBQUM7WUFDUCxJQUFJLEVBQUUsRUFBRTtTQUNUO1FBQ0QsS0FBSyxFQUFFLENBQUMsbUJBQW1CLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFDLFdBQVcsRUFBQyxPQUFPLEVBQUMsU0FBUztZQUN4RixPQUFPLEVBQUMsS0FBSyxFQUFDLFdBQVcsRUFBQyxXQUFXLEVBQUMsS0FBSyxFQUFDLGFBQWEsRUFBQyxVQUFVLEVBQUMsTUFBTSxFQUFDLFVBQVU7WUFDdEYsV0FBVyxFQUFDLFFBQVEsRUFBQyxXQUFXLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxlQUFlLEVBQUMsWUFBWSxFQUFDLFNBQVM7WUFDdkYsUUFBUSxFQUFDLFNBQVMsRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFDLFNBQVMsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUMsU0FBUztZQUMxRixTQUFTLEVBQUMsWUFBWSxFQUFDLEtBQUssRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLGFBQWEsRUFBQyxlQUFlLEVBQUMsUUFBUSxFQUFDLFFBQVE7WUFDOUYsTUFBTSxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLGVBQWUsRUFBQyxRQUFRLEVBQUMsUUFBUSxFQUFDLG1CQUFtQjtTQUN0RjtLQUNGO0lBQ0ssUUFBUSxFQUFkOzs7Ozs0QkFDb0IsV0FBTSxvQkFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUE7O3dCQUFsRCxTQUFTLEdBQUcsU0FBc0M7d0JBQ2xELEtBQUssR0FBRyxFQUE4QixDQUFBO3dCQUM1QyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTs0QkFDcEIsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQTs0QkFDekMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7d0JBQzdCLENBQUMsQ0FBQyxDQUFBO3dCQUNGLElBQUksQ0FBQyxPQUFPLENBQUM7NEJBQ1gsS0FBSyxPQUFBOzRCQUNMLFVBQVUsRUFBRSxJQUFJO3lCQUNqQixDQUFDLENBQUE7Ozs7O0tBQ0g7SUFDRCxNQUFNO1FBQ0osSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQ2pCLENBQUM7SUFDRCxjQUFjO1FBQ1osSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtTQUM5QixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsS0FBSyxFQUFMLFVBQU0sQ0FBTTtRQUNGLElBQUEsbUNBQUksQ0FBNEI7UUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFFBQVEsRUFBRSxLQUFLO1lBQ2YsUUFBUSxFQUFFLElBQUk7WUFDZCxRQUFRLEVBQUUsS0FBSztZQUNmLElBQUksRUFBRTtnQkFDSixJQUFJLEVBQUUsRUFBRTtnQkFDUixJQUFJLE1BQUE7Z0JBQ0osSUFBSSxFQUFFLEVBQUU7YUFDVDtTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxNQUFNO1FBQ0osSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFFBQVEsRUFBRSxJQUFJO1lBQ2QsUUFBUSxFQUFFLE1BQU07U0FDakIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELFVBQVU7UUFDUixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsUUFBUSxFQUFFLEtBQUs7U0FDaEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELE9BQU8sRUFBUCxVQUFRLENBQU07UUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQTtJQUNoQyxDQUFDO0lBQ0QsS0FBSztRQUNILEVBQUUsQ0FBQTtJQUNKLENBQUM7SUFDRCxNQUFNO1FBQ0osSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxLQUFLLEVBQUM7WUFDN0Isb0JBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7Z0JBQ3JELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDcEIsQ0FBQyxDQUFDLENBQUE7U0FDSDtJQUNILENBQUM7SUFDRCxLQUFLLEVBQUwsVUFBTSxDQUFNO1FBQ0YsSUFBQSxxQ0FBSyxDQUE0QjtRQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsaUJBQWlCLEVBQUUsS0FBSztTQUN6QixDQUFDLENBQUE7SUFDSixDQUFDO0NBRUYsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29uc3QgYXBwID0gZ2V0QXBwKCkgYXMgSUFwcE9wdGlvblxyXG5pbXBvcnQgeyBnZXRCaWxsVHlwZXMsIGFkZEJpbGxUeXBlcyB9IGZyb20gXCIuLi8uLi8uLi9hcGkvaW5kZXhcIlxyXG5QYWdlKHtcclxuXHJcbiAgZGF0YToge1xyXG4gICAgdHlwZXM6IHtcclxuICAgICAgMTogW10gYXMgQW55QXJyYXksXHJcbiAgICAgIDI6IFtdIGFzIEFueUFycmF5LFxyXG4gICAgfSBhcyBSZWNvcmQ8bnVtYmVyLCBBbnlBcnJheT4sXHJcbiAgICBlZGl0TW9kZTogZmFsc2UsXHJcbiAgICBmb3JtU2hvdzogZmFsc2UsXHJcbiAgICBzYXZlVHlwZTogJ2FkZCcsXHJcbiAgICBhY3RpdmVJRDogMCxcclxuICAgIC8vIGxlZGdlcklEOiBhcHAuZ2xvYmFsRGF0YS5sZWRnZXIuaWQsXHJcbiAgICBsZWRnZXJJRDogMSxcclxuICAgIHNlbGVjdGVkSWNvbkluZGV4OiAwLFxyXG4gICAgZm9ybToge1xyXG4gICAgICBuYW1lOiAnJyxcclxuICAgICAgdHlwZTogMSxcclxuICAgICAgaWNvbjogJydcclxuICAgIH0sXHJcbiAgICBpY29uczogWyd2ZXJpZmljYXRpb25fY29kZScsJ2Jvb2snLCd0cmF2ZWwnLCdmb29kJywnZGlnaXRhbCcsJ2N1bHRpdmF0ZScsJ3BsYW5lJywnY2xvdGhlcycsXHJcbiAgICAgICd0cmFpbicsJ2NhcicsJ2VkdWNhdGlvbicsJ2Nhc2gtZ2lmdCcsJ29pbCcsJ2Nvc21ldG9sb2d5JywnZWxlY3RyaWMnLCdob21lJywnc2hvcHBpbmcnLFxyXG4gICAgICAnZmluYW5jaW5nJywnZnJ1aXRzJywnY29zbWV0aWNzJywnd29yaycsJ3NuYWNrcycsJ2NvbW11bmljYXRpb24nLCdjYXItcmVwYWlyJywndHJhZmZpYycsXHJcbiAgICAgICdzb2NpYWwnLCdmcmllbmRzJywncGV0cycsJ2hvdXNpbmcnLCd0dWl0aW9uJywnY2hpbGQnLCdwYXJraW5nJywnd2F0ZXInLCdjb25maWcnLCdleHByZXNzJyxcclxuICAgICAgJ2VsZGVybHknLCd2ZWdldGFibGVzJywnZnVuJywnc3BvcnQnLCdsb3R0ZXJ5JywnYm9va2tlZXBpbmcnLCdyZWltYnVyc2VtZW50JywndGFvYmFvJywnc2FsYXJ5JyxcclxuICAgICAgJ3dpZmknLCd1c2VyJywnYm9udXMnLCdhbGltb255JywncGFydC10aW1lLWpvYicsJ3JlZnVuZCcsJ2FsaXBheScsJ2RhaWx5LW5lY2Vzc2l0aWVzJ1xyXG4gICAgXSxcclxuICB9LFxyXG4gIGFzeW5jIGdldFR5cGVzKCk6IFByb21pc2U8dm9pZD57XHJcbiAgICBjb25zdCBiaWxsVHlwZXMgPSBhd2FpdCBnZXRCaWxsVHlwZXModGhpcy5kYXRhLmxlZGdlcklEKVxyXG4gICAgY29uc3QgdHlwZXMgPSB7fSBhcyBSZWNvcmQ8bnVtYmVyLCBBbnlBcnJheT5cclxuICAgIGJpbGxUeXBlcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICB0eXBlc1tpdGVtLnR5cGVdID0gdHlwZXNbaXRlbS50eXBlXSB8fCBbXVxyXG4gICAgICB0eXBlc1tpdGVtLnR5cGVdLnB1c2goaXRlbSlcclxuICAgIH0pXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICB0eXBlcyxcclxuICAgICAgdHlwZUxvYWRlZDogdHJ1ZSxcclxuICAgIH0pXHJcbiAgfSxcclxuICBvbkxvYWQoKXtcclxuICAgIHRoaXMuZ2V0VHlwZXMoKSBcclxuICB9LFxyXG4gIHRvZ2dsZUVkaXRNb2RlKCl7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBlZGl0TW9kZTogIXRoaXMuZGF0YS5lZGl0TW9kZVxyXG4gICAgfSlcclxuICB9LFxyXG4gIG9uQWRkKGU6IGFueSl7XHJcbiAgICBjb25zdCB7IHR5cGUgfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBlZGl0TW9kZTogZmFsc2UsXHJcbiAgICAgIGZvcm1TaG93OiB0cnVlLFxyXG4gICAgICBzYXZlVHlwZTogJ2FkZCcsXHJcbiAgICAgIGZvcm06IHtcclxuICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICB0eXBlLFxyXG4gICAgICAgIGljb246ICcnXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSxcclxuICBvbkVkaXQoKXtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGZvcm1TaG93OiB0cnVlLFxyXG4gICAgICBzYXZlVHlwZTogJ2VkaXQnXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgb25BZGRDbG9zZSgpe1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgZm9ybVNob3c6IGZhbHNlXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgb25JbnB1dChlOiBhbnkpe1xyXG4gICAgdGhpcy5kYXRhLmZvcm0ubmFtZSA9IGUuZGV0YWlsXHJcbiAgfSxcclxuICBvbkRlbCgpe1xyXG4gICAgJydcclxuICB9LFxyXG4gIG9uU2F2ZSgpe1xyXG4gICAgaWYodGhpcy5kYXRhLnNhdmVUeXBlID09ICdhZGQnKXtcclxuICAgICAgYWRkQmlsbFR5cGVzKHRoaXMuZGF0YS5sZWRnZXJJRCwgdGhpcy5kYXRhLmZvcm0pLnRoZW4ocmVzPT57XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBvblNlbChlOiBhbnkpe1xyXG4gICAgY29uc3QgeyBpbmRleCB9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXRcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHNlbGVjdGVkSWNvbkluZGV4OiBpbmRleFxyXG4gICAgfSlcclxuICB9XHJcbiAgXHJcbn0pIl19