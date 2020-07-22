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
        icons: ['book', 'travel', 'food', 'digital', 'cultivate', 'plane', 'clothes',
            'train', 'car', 'education', 'cash-gift', 'oil', 'cosmetology', 'electric', 'home', 'shopping',
            'financing', 'fruits', 'cosmetics', 'work', 'snacks', 'communication', 'car-repair', 'traffic',
            'social', 'friends', 'pets', 'housing', 'tuition', 'child', 'parking', 'water', 'express',
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
    onSortend: function (e) {
        console.log(e);
        var listData = e.detail.listData;
        var ids = listData.map(function (i) { return i.id; });
        index_1.sortBillType({
            ids: ids
        }).then(function (res) {
            console.log(res);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ19iaWxsX3R5cGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZXR0aW5nX2JpbGxfdHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDRDQUF5RztBQUN6RyxvREFBOEM7QUFFOUMsSUFBSSxDQUFDO0lBRUgsSUFBSSxFQUFFO1FBQ0osU0FBUyxFQUFFLEVBQWM7UUFDekIsS0FBSyxFQUFFO1lBQ0wsQ0FBQyxFQUFFLEVBQWM7WUFDakIsQ0FBQyxFQUFFLEVBQWM7U0FDVTtRQUM3QixNQUFNLEVBQUUsRUFBYztRQUN0QixRQUFRLEVBQUUsS0FBSztRQUNmLFFBQVEsRUFBRSxLQUFLO1FBQ2YsUUFBUSxFQUFFLEtBQUs7UUFDZixRQUFRLEVBQUUsQ0FBQztRQUVYLFFBQVEsRUFBRSxDQUFDO1FBQ1gsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO1FBQ3JCLElBQUksRUFBRTtZQUNKLElBQUksRUFBRSxFQUFFO1lBQ1IsSUFBSSxFQUFFLENBQUM7WUFDUCxJQUFJLEVBQUUsRUFBRTtTQUNUO1FBQ0QsS0FBSyxFQUFFLENBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFDLFdBQVcsRUFBQyxPQUFPLEVBQUMsU0FBUztZQUNwRSxPQUFPLEVBQUMsS0FBSyxFQUFDLFdBQVcsRUFBQyxXQUFXLEVBQUMsS0FBSyxFQUFDLGFBQWEsRUFBQyxVQUFVLEVBQUMsTUFBTSxFQUFDLFVBQVU7WUFDdEYsV0FBVyxFQUFDLFFBQVEsRUFBQyxXQUFXLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxlQUFlLEVBQUMsWUFBWSxFQUFDLFNBQVM7WUFDdkYsUUFBUSxFQUFDLFNBQVMsRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFDLFNBQVMsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLE9BQU8sRUFBQyxTQUFTO1lBQ2pGLFNBQVMsRUFBQyxZQUFZLEVBQUMsS0FB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TSxDQUFDLEtBQUs7Z0JBQ2YsZ0JBQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUNsQixDQUFDLENBQUMsQ0FBQztJQUVMLENBQUM7SUFDRCxNQUFNO1FBQU4saUJBbUJDO1FBbEJDLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksS0FBSyxFQUFDO1lBQzdCLG1CQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pELEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQTtnQkFDZixLQUFJLENBQUMsT0FBTyxDQUFDO29CQUNYLFFBQVEsRUFBRSxLQUFLO29CQUNmLFFBQVEsRUFBRSxLQUFLO2lCQUNoQixDQUFDLENBQUE7WUFDTixDQUFDLENBQUMsQ0FBQTtTQUNIO2FBQU07WUFDTCxzQkFBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNwRCxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7Z0JBQ2YsS0FBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxRQUFRLEVBQUUsS0FBSztvQkFDZixRQUFRLEVBQUUsS0FBSztpQkFDaEIsQ0FBQyxDQUFBO1lBQ04sQ0FBQyxDQUFDLENBQUE7U0FFSDtJQUNILENBQUM7SUFDRCxLQUFLLEVBQUwsVUFBTSxDQUFNO1FBQ0YsSUFBQSxxQ0FBSyxDQUE0QjtRQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsaUJBQWlCLEVBQUUsS0FBSztZQUN4QixXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1NBQ3BDLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FFRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCBhcHAgPSBnZXRBcHAoKSBhcyBJQXBwT3B0aW9uXHJcbmltcG9ydCB7IGdldEJpbGxUeXBlcywgYWRkQmlsbFR5cGUsIGRlbEJpbGxUeXBlLCB1cGRhdGVCaWxsVHlwZSwgc29ydEJpbGxUeXBlIH0gZnJvbSBcIi4uLy4uLy4uL2FwaS9pbmRleFwiXHJcbmltcG9ydCBEaWFsb2cgZnJvbSBcIkB2YW50L3dlYXBwL2RpYWxvZy9kaWFsb2dcIlxyXG5cclxuUGFnZSh7XHJcblxyXG4gIGRhdGE6IHtcclxuICAgIGJpbGxUeXBlczogW10gYXMgQW55QXJyYXksXHJcbiAgICB0eXBlczoge1xyXG4gICAgICAxOiBbXSBhcyBBbnlBcnJheSxcclxuICAgICAgMjogW10gYXMgQW55QXJyYXksXHJcbiAgICB9IGFzIFJlY29yZDxudW1iZXIsIEFueUFycmF5PixcclxuICAgIG90eXBlczogW10gYXMgQW55QXJyYXksXHJcbiAgICBlZGl0TW9kZTogZmFsc2UsXHJcbiAgICBmb3JtU2hvdzogZmFsc2UsXHJcbiAgICBzYXZlVHlwZTogJ2FkZCcsXHJcbiAgICBhY3RpdmVJRDogMCxcclxuICAgIC8vIGxlZGdlcklEOiBhcHAuZ2xvYmFsRGF0YS5sZWRnZXIuaWQsXHJcbiAgICBsZWRnZXJJRDogMSxcclxuICAgIHNlbGVjdGVkSWNvbkluZGV4OiAtMSxcclxuICAgIGZvcm06IHtcclxuICAgICAgbmFtZTogJycsXHJcbiAgICAgIHR5cGU6IDEsXHJcbiAgICAgIGljb246ICcnXHJcbiAgICB9LFxyXG4gICAgaWNvbnM6IFsnYm9vaycsJ3RyYXZlbCcsJ2Zvb2QnLCdkaWdpdGFsJywnY3VsdGl2YXRlJywncGxhbmUnLCdjbG90aGVzJyxcclxuICAgICAgJ3RyYWluJywnY2FyJywnZWR1Y2F0aW9uJywnY2FzaC1naWZ0Jywnb2lsJywnY29zbWV0b2xvZ3knLCdlbGVjdHJpYycsJ2hvbWUnLCdzaG9wcGluZycsXHJcbiAgICAgICdmaW5hbmNpbmcnLCdmcnVpdHMnLCdjb3NtZXRpY3MnLCd3b3JrJywnc25hY2tzJywnY29tbXVuaWNhdGlvbicsJ2Nhci1yZXBhaXInLCd0cmFmZmljJyxcclxuICAgICAgJ3NvY2lhbCcsJ2ZyaWVuZHMnLCdwZXRzJywnaG91c2luZycsJ3R1aXRpb24nLCdjaGlsZCcsJ3BhcmtpbmcnLCd3YXRlcicsJ2V4cHJlc3MnLFxyXG4gICAgICAnZWxkZXJseScsJ3ZlZ2V0YWJsZXMnLCdmdW4nLCdzcG9ydCcsJ2xvdHRlcnknLCdib29ra2VlcGluZycsJ3JlaW1idXJzZW1lbnQnLCd0YW9iYW8nLCdzYWxhcnknLFxyXG4gICAgICAnd2lmaScsJ3VzZXInLCdib251cycsJ2FsaW1vbnknLCdwYXJ0LXRpbWUtam9iJywncmVmdW5kJywnYWxpcGF5JywnZGFpbHktbmVjZXNzaXRpZXMnXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAgYXN5bmMgZ2V0VHlwZXMoKTogUHJvbWlzZTx2b2lkPntcclxuICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgdGl0bGU6ICfliqDovb3kuK0nLFxyXG4gICAgfSlcclxuICAgIGNvbnN0IGJpbGxUeXBlcyA9IGF3YWl0IGdldEJpbGxUeXBlcyh0aGlzLmRhdGEubGVkZ2VySUQpXHJcbiAgICBjb25zdCB0eXBlcyA9IHt9IGFzIFJlY29yZDxudW1iZXIsIEFueUFycmF5PlxyXG4gICBcclxuICAgIGJpbGxUeXBlcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICB0eXBlc1tpdGVtLnR5cGVdID0gdHlwZXNbaXRlbS50eXBlXSB8fCBbXVxyXG4gICAgICB0eXBlc1tpdGVtLnR5cGVdLnB1c2goaXRlbSlcclxuICAgIH0pXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICB0eXBlcyxcclxuICAgICAgYmlsbFR5cGVzXHJcbiAgICB9KVxyXG4gICAgd3guaGlkZUxvYWRpbmcoKVxyXG4gIH0sXHJcbiAgb25Mb2FkKCl7XHJcbiAgICB0aGlzLmdldFR5cGVzKCkgXHJcbiAgfSxcclxuICB0b2dnbGVFZGl0TW9kZSgpe1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgZWRpdE1vZGU6ICF0aGlzLmRhdGEuZWRpdE1vZGVcclxuICAgIH0pXHJcbiAgfSxcclxuICBvblNvcnRlbmQoZTogYW55KXtcclxuICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICBjb25zdCB7IGxpc3REYXRhIH0gPSBlLmRldGFpbFxyXG4gICAgY29uc3QgaWRzID0gbGlzdERhdGEubWFwKChpOiBBbnlPYmplY3QpPT5pLmlkKVxyXG4gICAgc29ydEJpbGxUeXBlKHtcclxuICAgICAgaWRzXHJcbiAgICB9KS50aGVuKHJlcz0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgb25BZGQoZTogYW55KXtcclxuICAgIGNvbnN0IHsgdHlwZSB9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXRcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGVkaXRNb2RlOiBmYWxzZSxcclxuICAgICAgZm9ybVNob3c6IHRydWUsXHJcbiAgICAgIHNhdmVUeXBlOiAnYWRkJyxcclxuICAgICAgc2VsZWN0ZWRJY29uSW5kZXg6IC0xLFxyXG4gICAgICBmb3JtOiB7XHJcbiAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgdHlwZTogcGFyc2VJbnQodHlwZSksXHJcbiAgICAgICAgaWNvbjogJydcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9LFxyXG4gIG9uRWRpdChlOiBhbnkpe1xyXG4gICAgY29uc3QgeyBpZCB9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXRcclxuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmRhdGEuYmlsbFR5cGVzLmZpbmQoaSA9PiBpLmlkID09IGlkKVxyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmRhdGEuaWNvbnMuZmluZEluZGV4KGkgPT4gaSA9PSBpdGVtLmljb24pXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBhY3RpdmVJRDogaWQsXHJcbiAgICAgIGZvcm1TaG93OiB0cnVlLFxyXG4gICAgICBzYXZlVHlwZTogJ2VkaXQnLFxyXG4gICAgICBzZWxlY3RlZEljb25JbmRleDogaW5kZXgsXHJcbiAgICAgIGZvcm06IHtcclxuICAgICAgICBpY29uOiBpdGVtLmljb24sXHJcbiAgICAgICAgdHlwZTogaXRlbS50eXBlLFxyXG4gICAgICAgIG5hbWU6IGl0ZW0ubmFtZVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgb25BZGRDbG9zZSgpe1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgZm9ybVNob3c6IGZhbHNlLFxyXG4gICAgICBlZGl0TW9kZTogZmFsc2VcclxuICAgIH0pXHJcbiAgfSxcclxuICBvbklucHV0KGU6IGFueSl7XHJcbiAgICB0aGlzLmRhdGEuZm9ybS5uYW1lID0gZS5kZXRhaWxcclxuICB9LFxyXG4gIG9uRGVsKCl7XHJcbiAgICBjb25zdCBzZWxmID0gdGhpc1xyXG4gICAgRGlhbG9nKHtcclxuICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuICAgICAgICBtZXNzYWdlOiAn56Gu5a6a6KaB5Yig6Zmk5ZCX77yfJyxcclxuICAgICAgICBhc3luY0Nsb3NlOiB0cnVlXHJcbiAgICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgaWYoRGlhbG9nLmNvbmZpcm0pXHJcbiAgICAgICAgICAgIGRlbEJpbGxUeXBlKHRoaXMuZGF0YS5hY3RpdmVJRCkudGhlbigoKT0+e1xyXG4gICAgICAgICAgICAgIGlmKERpYWxvZy5jbG9zZSlcclxuICAgICAgICAgICAgICAgIERpYWxvZy5jbG9zZSgpXHJcbiAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgIGZvcm1TaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGVkaXRNb2RlOiBmYWxzZVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgc2VsZi5nZXRUeXBlcygpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG4gICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICBpZihEaWFsb2cuY2xvc2UpXHJcbiAgICAgICAgRGlhbG9nLmNsb3NlKClcclxuICAgIH0pO1xyXG5cclxuICB9LFxyXG4gIG9uU2F2ZSgpe1xyXG4gICAgaWYodGhpcy5kYXRhLnNhdmVUeXBlID09ICdhZGQnKXtcclxuICAgICAgYWRkQmlsbFR5cGUodGhpcy5kYXRhLmxlZGdlcklELCB0aGlzLmRhdGEuZm9ybSkudGhlbigoKT0+e1xyXG4gICAgICAgICAgdGhpcy5nZXRUeXBlcygpXHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBmb3JtU2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgIGVkaXRNb2RlOiBmYWxzZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHVwZGF0ZUJpbGxUeXBlKHRoaXMuZGF0YS5hY3RpdmVJRCwgdGhpcy5kYXRhLmZvcm0pLnRoZW4oKCk9PntcclxuICAgICAgICAgIHRoaXMuZ2V0VHlwZXMoKVxyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgZm9ybVNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICBlZGl0TW9kZTogZmFsc2VcclxuICAgICAgICAgIH0pXHJcbiAgICAgIH0pXHJcblxyXG4gICAgfVxyXG4gIH0sXHJcbiAgb25TZWwoZTogYW55KXtcclxuICAgIGNvbnN0IHsgaW5kZXggfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBzZWxlY3RlZEljb25JbmRleDogaW5kZXgsXHJcbiAgICAgIFwiZm9ybS5pY29uXCI6IHRoaXMuZGF0YS5pY29uc1tpbmRleF0gXHJcbiAgICB9KVxyXG4gIH1cclxuICBcclxufSkiXX0=