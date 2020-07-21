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
var dialog_1 = require("@vant/weapp/dialog/dialog");
Page({
    data: {
        billTypes: [],
        types: {
            1: [],
            2: [],
        },
        otypes: [],
        editMode: false,
        formShow: false,
        saveType: 'add',
        activeID: 0,
        ledgerID: 1,
        selectedIconIndex: -1,
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
                    case 0:
                        wx.showLoading({
                            title: '加载中',
                        });
                        return [4, index_1.getBillTypes(this.data.ledgerID)];
                    case 1:
                        billTypes = _a.sent();
                        types = {};
                        billTypes.forEach(function (item) {
                            types[item.type] = types[item.type] || [];
                            types[item.type].push(item);
                        });
                        this.setData({
                            types: types,
                            billTypes: billTypes
                        });
                        wx.hideLoading();
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
            selectedIconIndex: -1,
            form: {
                name: '',
                type: parseInt(type),
                icon: ''
            }
        });
    },
    onEdit: function (e) {
        var id = e.currentTarget.dataset.id;
        var item = this.data.billTypes.find(function (i) { return i.id == id; });
        var index = this.data.icons.findIndex(function (i) { return i == item.icon; });
        this.setData({
            activeID: id,
            formShow: true,
            saveType: 'edit',
            selectedIconIndex: index,
            form: {
                icon: item.icon,
                type: item.type,
                name: item.name
            }
        });
    },
    onAddClose: function () {
        this.setData({
            formShow: false,
            editMode: false
        });
    },
    onInput: function (e) {
        this.data.form.name = e.detail;
    },
    onDel: function () {
        var _this = this;
        var self = this;
        dialog_1.default({
            showCancelButton: true,
            title: '提示',
            message: '确定要删除吗？',
            asyncClose: true
        })
            .then(function () {
            if (dialog_1.default.confirm)
                index_1.delBillType(_this.data.activeID).then(function () {
                    if (dialog_1.default.close)
                        dialog_1.default.close();
                    _this.setData({
                        formShow: false,
                        editMode: false
                    });
                    self.getTypes();
                });
        })
            .catch(function () {
            if (dialog_1.default.close)
                dialog_1.default.close();
        });
    },
    onSave: function () {
        var _this = this;
        if (this.data.saveType == 'add') {
            index_1.addBillType(this.data.ledgerID, this.data.form).then(function () {
                _this.getTypes();
                _this.setData({
                    formShow: false,
                    editMode: false
                });
            });
        }
        else {
            index_1.updateBillType(this.data.activeID, this.data.form).then(function () {
                _this.getTypes();
                _this.setData({
                    formShow: false,
                    editMode: false
                });
            });
        }
    },
    onSel: function (e) {
        var index = e.currentTarget.dataset.index;
        this.setData({
            selectedIconIndex: index,
            "form.icon": this.data.icons[index]
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ19iaWxsX3R5cGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZXR0aW5nX2JpbGxfdHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDRDQUEyRjtBQUMzRixvREFBOEM7QUFFOUMsSUFBSSxDQUFDO0lBRUgsSUFBSSxFQUFFO1FBQ0osU0FBUyxFQUFFLEVBQWM7UUFDekIsS0FBSyxFQUFFO1lBQ0wsQ0FBQyxFQUFFLEVBQWM7WUFDakIsQ0FBQyxFQUFFLEVBQWM7U0FDVTtRQUM3QixNQUFNLEVBQUUsRUFBYztRQUN0QixRQUFRLEVBQUUsS0FBSztRQUNmLFFBQVEsRUFBRSxLQUFLO1FBQ2YsUUFBUSxFQUFFLEtBQUs7UUFDZixRQUFRLEVBQUUsQ0FBQztRQUVYLFFBQVEsRUFBRSxDQUFDO1FBQ1gsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO1FBQ3JCLElBQUksRUFBRTtZQUNKLElBQUksRUFBRSxFQUFFO1lBQ1IsSUFBSSxFQUFFLENBQUM7WUFDUCxJQUFJLEVBQUUsRUFBRTtTQUNUO1FBQ0QsS0FBSyxFQUFFLENBQUMsbUJBQW1CLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFDLFdBQVcsRUFBQyxPQUFPLEVBQUMsU0FBUztZQUN4RixPQUFPLEVBQUMsS0FBSyxFQUFDLFdBQVcsRUFBQyxXQUFXLEVBQUMsS0FBSyxFQUFDLGFBQWEsRUFBQyxVQUFVLEVBQUMsTUFBTSxFQUFDLFVBQVU7WUFDdEYsV0FBVyxFQUFDLFFBQVEsRUFBQyxXQUFXLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxlQUFlLEVBQUMsWUFBWSxFQUFDLFNBQVM7WUFDdkYsUUFBUSxFQUFDLFNBQVMsRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFDLFNBQVMsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUMsU0FBUztZQUMxRixT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b0JBQ1gsUUFBUSxFQUFFLEtBQUs7b0JBQ2YsUUFBUSxFQUFFLEtBQUs7aUJBQ2hCLENBQUMsQ0FBQTtZQUNOLENBQUMsQ0FBQyxDQUFBO1NBQ0g7YUFBTTtZQUNMLHNCQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ3BELEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQTtnQkFDZixLQUFJLENBQUMsT0FBTyxDQUFDO29CQUNYLFFBQVEsRUFBRSxLQUFLO29CQUNmLFFBQVEsRUFBRSxLQUFLO2lCQUNoQixDQUFDLENBQUE7WUFDTixDQUFDLENBQUMsQ0FBQTtTQUVIO0lBQ0gsQ0FBQztJQUNELEtBQUssRUFBTCxVQUFNLENBQU07UUFDRixJQUFBLHFDQUFLLENBQTRCO1FBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxpQkFBaUIsRUFBRSxLQUFLO1lBQ3hCLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7U0FDcEMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUVGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IGFwcCA9IGdldEFwcCgpIGFzIElBcHBPcHRpb25cclxuaW1wb3J0IHsgZ2V0QmlsbFR5cGVzLCBhZGRCaWxsVHlwZSwgZGVsQmlsbFR5cGUsIHVwZGF0ZUJpbGxUeXBlIH0gZnJvbSBcIi4uLy4uLy4uL2FwaS9pbmRleFwiXHJcbmltcG9ydCBEaWFsb2cgZnJvbSBcIkB2YW50L3dlYXBwL2RpYWxvZy9kaWFsb2dcIlxyXG5cclxuUGFnZSh7XHJcblxyXG4gIGRhdGE6IHtcclxuICAgIGJpbGxUeXBlczogW10gYXMgQW55QXJyYXksXHJcbiAgICB0eXBlczoge1xyXG4gICAgICAxOiBbXSBhcyBBbnlBcnJheSxcclxuICAgICAgMjogW10gYXMgQW55QXJyYXksXHJcbiAgICB9IGFzIFJlY29yZDxudW1iZXIsIEFueUFycmF5PixcclxuICAgIG90eXBlczogW10gYXMgQW55QXJyYXksXHJcbiAgICBlZGl0TW9kZTogZmFsc2UsXHJcbiAgICBmb3JtU2hvdzogZmFsc2UsXHJcbiAgICBzYXZlVHlwZTogJ2FkZCcsXHJcbiAgICBhY3RpdmVJRDogMCxcclxuICAgIC8vIGxlZGdlcklEOiBhcHAuZ2xvYmFsRGF0YS5sZWRnZXIuaWQsXHJcbiAgICBsZWRnZXJJRDogMSxcclxuICAgIHNlbGVjdGVkSWNvbkluZGV4OiAtMSxcclxuICAgIGZvcm06IHtcclxuICAgICAgbmFtZTogJycsXHJcbiAgICAgIHR5cGU6IDEsXHJcbiAgICAgIGljb246ICcnXHJcbiAgICB9LFxyXG4gICAgaWNvbnM6IFsndmVyaWZpY2F0aW9uX2NvZGUnLCdib29rJywndHJhdmVsJywnZm9vZCcsJ2RpZ2l0YWwnLCdjdWx0aXZhdGUnLCdwbGFuZScsJ2Nsb3RoZXMnLFxyXG4gICAgICAndHJhaW4nLCdjYXInLCdlZHVjYXRpb24nLCdjYXNoLWdpZnQnLCdvaWwnLCdjb3NtZXRvbG9neScsJ2VsZWN0cmljJywnaG9tZScsJ3Nob3BwaW5nJyxcclxuICAgICAgJ2ZpbmFuY2luZycsJ2ZydWl0cycsJ2Nvc21ldGljcycsJ3dvcmsnLCdzbmFja3MnLCdjb21tdW5pY2F0aW9uJywnY2FyLXJlcGFpcicsJ3RyYWZmaWMnLFxyXG4gICAgICAnc29jaWFsJywnZnJpZW5kcycsJ3BldHMnLCdob3VzaW5nJywndHVpdGlvbicsJ2NoaWxkJywncGFya2luZycsJ3dhdGVyJywnY29uZmlnJywnZXhwcmVzcycsXHJcbiAgICAgICdlbGRlcmx5JywndmVnZXRhYmxlcycsJ2Z1bicsJ3Nwb3J0JywnbG90dGVyeScsJ2Jvb2trZWVwaW5nJywncmVpbWJ1cnNlbWVudCcsJ3Rhb2JhbycsJ3NhbGFyeScsXHJcbiAgICAgICd3aWZpJywndXNlcicsJ2JvbnVzJywnYWxpbW9ueScsJ3BhcnQtdGltZS1qb2InLCdyZWZ1bmQnLCdhbGlwYXknLCdkYWlseS1uZWNlc3NpdGllcydcclxuICAgIF0sXHJcbiAgfSxcclxuICBhc3luYyBnZXRUeXBlcygpOiBQcm9taXNlPHZvaWQ+e1xyXG4gICAgd3guc2hvd0xvYWRpbmcoe1xyXG4gICAgICB0aXRsZTogJ+WKoOi9veS4rScsXHJcbiAgICB9KVxyXG4gICAgY29uc3QgYmlsbFR5cGVzID0gYXdhaXQgZ2V0QmlsbFR5cGVzKHRoaXMuZGF0YS5sZWRnZXJJRClcclxuICAgIGNvbnN0IHR5cGVzID0ge30gYXMgUmVjb3JkPG51bWJlciwgQW55QXJyYXk+XHJcbiAgIFxyXG4gICAgYmlsbFR5cGVzLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIHR5cGVzW2l0ZW0udHlwZV0gPSB0eXBlc1tpdGVtLnR5cGVdIHx8IFtdXHJcbiAgICAgIHR5cGVzW2l0ZW0udHlwZV0ucHVzaChpdGVtKVxyXG4gICAgfSlcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHR5cGVzLFxyXG4gICAgICBiaWxsVHlwZXNcclxuICAgIH0pXHJcbiAgICB3eC5oaWRlTG9hZGluZygpXHJcbiAgfSxcclxuICBvbkxvYWQoKXtcclxuICAgIHRoaXMuZ2V0VHlwZXMoKSBcclxuICB9LFxyXG4gIHRvZ2dsZUVkaXRNb2RlKCl7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBlZGl0TW9kZTogIXRoaXMuZGF0YS5lZGl0TW9kZVxyXG4gICAgfSlcclxuICB9LFxyXG4gIG9uQWRkKGU6IGFueSl7XHJcbiAgICBjb25zdCB7IHR5cGUgfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBlZGl0TW9kZTogZmFsc2UsXHJcbiAgICAgIGZvcm1TaG93OiB0cnVlLFxyXG4gICAgICBzYXZlVHlwZTogJ2FkZCcsXHJcbiAgICAgIHNlbGVjdGVkSWNvbkluZGV4OiAtMSxcclxuICAgICAgZm9ybToge1xyXG4gICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgIHR5cGU6IHBhcnNlSW50KHR5cGUpLFxyXG4gICAgICAgIGljb246ICcnXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSxcclxuICBvbkVkaXQoZTogYW55KXtcclxuICAgIGNvbnN0IHsgaWQgfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0XHJcbiAgICBjb25zdCBpdGVtID0gdGhpcy5kYXRhLmJpbGxUeXBlcy5maW5kKGkgPT4gaS5pZCA9PSBpZClcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5kYXRhLmljb25zLmZpbmRJbmRleChpID0+IGkgPT0gaXRlbS5pY29uKVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgYWN0aXZlSUQ6IGlkLFxyXG4gICAgICBmb3JtU2hvdzogdHJ1ZSxcclxuICAgICAgc2F2ZVR5cGU6ICdlZGl0JyxcclxuICAgICAgc2VsZWN0ZWRJY29uSW5kZXg6IGluZGV4LFxyXG4gICAgICBmb3JtOiB7XHJcbiAgICAgICAgaWNvbjogaXRlbS5pY29uLFxyXG4gICAgICAgIHR5cGU6IGl0ZW0udHlwZSxcclxuICAgICAgICBuYW1lOiBpdGVtLm5hbWVcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9LFxyXG4gIG9uQWRkQ2xvc2UoKXtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGZvcm1TaG93OiBmYWxzZSxcclxuICAgICAgZWRpdE1vZGU6IGZhbHNlXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgb25JbnB1dChlOiBhbnkpe1xyXG4gICAgdGhpcy5kYXRhLmZvcm0ubmFtZSA9IGUuZGV0YWlsXHJcbiAgfSxcclxuICBvbkRlbCgpe1xyXG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcclxuICAgIERpYWxvZyh7XHJcbiAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICB0aXRsZTogJ+aPkOekuicsXHJcbiAgICAgICAgbWVzc2FnZTogJ+ehruWumuimgeWIoOmZpOWQl++8nycsXHJcbiAgICAgICAgYXN5bmNDbG9zZTogdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGlmKERpYWxvZy5jb25maXJtKVxyXG4gICAgICAgICAgICBkZWxCaWxsVHlwZSh0aGlzLmRhdGEuYWN0aXZlSUQpLnRoZW4oKCk9PntcclxuICAgICAgICAgICAgICBpZihEaWFsb2cuY2xvc2UpXHJcbiAgICAgICAgICAgICAgICBEaWFsb2cuY2xvc2UoKVxyXG4gICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICBmb3JtU2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBlZGl0TW9kZTogZmFsc2VcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIHNlbGYuZ2V0VHlwZXMoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIClcclxuICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgaWYoRGlhbG9nLmNsb3NlKVxyXG4gICAgICAgIERpYWxvZy5jbG9zZSgpXHJcbiAgICB9KTtcclxuXHJcbiAgfSxcclxuICBvblNhdmUoKXtcclxuICAgIGlmKHRoaXMuZGF0YS5zYXZlVHlwZSA9PSAnYWRkJyl7XHJcbiAgICAgIGFkZEJpbGxUeXBlKHRoaXMuZGF0YS5sZWRnZXJJRCwgdGhpcy5kYXRhLmZvcm0pLnRoZW4oKCk9PntcclxuICAgICAgICAgIHRoaXMuZ2V0VHlwZXMoKVxyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgZm9ybVNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICBlZGl0TW9kZTogZmFsc2VcclxuICAgICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB1cGRhdGVCaWxsVHlwZSh0aGlzLmRhdGEuYWN0aXZlSUQsIHRoaXMuZGF0YS5mb3JtKS50aGVuKCgpPT57XHJcbiAgICAgICAgICB0aGlzLmdldFR5cGVzKClcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIGZvcm1TaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgZWRpdE1vZGU6IGZhbHNlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICB9KVxyXG5cclxuICAgIH1cclxuICB9LFxyXG4gIG9uU2VsKGU6IGFueSl7XHJcbiAgICBjb25zdCB7IGluZGV4IH0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldFxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgc2VsZWN0ZWRJY29uSW5kZXg6IGluZGV4LFxyXG4gICAgICBcImZvcm0uaWNvblwiOiB0aGlzLmRhdGEuaWNvbnNbaW5kZXhdIFxyXG4gICAgfSlcclxuICB9XHJcbiAgXHJcbn0pIl19