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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ19iaWxsX3R5cGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZXR0aW5nX2JpbGxfdHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDRDQUF5RztBQUN6RyxvREFBOEM7QUFFOUMsSUFBSSxDQUFDO0lBRUgsSUFBSSxFQUFFO1FBQ0osU0FBUyxFQUFFLEVBQWM7UUFDekIsS0FBSyxFQUFFO1lBQ0wsQ0FBQyxFQUFFLEVBQWM7WUFDakIsQ0FBQyxFQUFFLEVBQWM7U0FDVTtRQUM3QixNQUFNLEVBQUUsRUFBYztRQUN0QixRQUFRLEVBQUUsS0FBSztRQUNmLFFBQVEsRUFBRSxLQUFLO1FBQ2YsUUFBUSxFQUFFLEtBQUs7UUFDZixRQUFRLEVBQUUsQ0FBQztRQUVYLFFBQVEsRUFBRSxDQUFDO1FBQ1gsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO1FBQ3JCLElBQUksRUFBRTtZQUNKLElBQUksRUFBRSxFQUFFO1lBQ1IsSUFBSSxFQUFFLENBQUM7WUFDUCxJQUFJLEVBQUUsRUFBRTtTQUNUO1FBQ0QsS0FBSyxFQUFFLENBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFDLFdBQVcsRUFBQyxPQUFPLEVBQUMsU0FBUztZQUNwRSxPQUFPLEVBQUMsS0FBSyxFQUFDLFdBQVcsRUFBQyxXQUFXLEVBQUMsS0FBSyxFQUFDLGFBQWEsRUFBQyxVQUFVLEVBQUMsTUFBTSxFQUFDLFVBQVU7WUFDdEYsV0FBVyxFQUFDLFFBQVEsRUFBQyxXQUFXLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxlQUFlLEVBQUMsWUFBWSxFQUFDLFNBQVM7WUFDdkYsUUFBUSxFQUFDLFNBQVMsRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFDLFNBQVMsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLE9BQU8sRUFBQyxTQUFTO1lBQ2pGLFNBQVMsRUFBQyxZQUFZLEVBQUMsS0FB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S0FBSyxDQUFDO1NBQ3BDLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FFRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCBhcHAgPSBnZXRBcHAoKSBhcyBJQXBwT3B0aW9uXG5pbXBvcnQgeyBnZXRCaWxsVHlwZXMsIGFkZEJpbGxUeXBlLCBkZWxCaWxsVHlwZSwgdXBkYXRlQmlsbFR5cGUsIHNvcnRCaWxsVHlwZSB9IGZyb20gXCIuLi8uLi8uLi9hcGkvaW5kZXhcIlxuaW1wb3J0IERpYWxvZyBmcm9tIFwiQHZhbnQvd2VhcHAvZGlhbG9nL2RpYWxvZ1wiXG5cblBhZ2Uoe1xuXG4gIGRhdGE6IHtcbiAgICBiaWxsVHlwZXM6IFtdIGFzIEFueUFycmF5LFxuICAgIHR5cGVzOiB7XG4gICAgICAxOiBbXSBhcyBBbnlBcnJheSxcbiAgICAgIDI6IFtdIGFzIEFueUFycmF5LFxuICAgIH0gYXMgUmVjb3JkPG51bWJlciwgQW55QXJyYXk+LFxuICAgIG90eXBlczogW10gYXMgQW55QXJyYXksXG4gICAgZWRpdE1vZGU6IGZhbHNlLFxuICAgIGZvcm1TaG93OiBmYWxzZSxcbiAgICBzYXZlVHlwZTogJ2FkZCcsXG4gICAgYWN0aXZlSUQ6IDAsXG4gICAgLy8gbGVkZ2VySUQ6IGFwcC5nbG9iYWxEYXRhLmxlZGdlci5pZCxcbiAgICBsZWRnZXJJRDogMSxcbiAgICBzZWxlY3RlZEljb25JbmRleDogLTEsXG4gICAgZm9ybToge1xuICAgICAgbmFtZTogJycsXG4gICAgICB0eXBlOiAxLFxuICAgICAgaWNvbjogJydcbiAgICB9LFxuICAgIGljb25zOiBbJ2Jvb2snLCd0cmF2ZWwnLCdmb29kJywnZGlnaXRhbCcsJ2N1bHRpdmF0ZScsJ3BsYW5lJywnY2xvdGhlcycsXG4gICAgICAndHJhaW4nLCdjYXInLCdlZHVjYXRpb24nLCdjYXNoLWdpZnQnLCdvaWwnLCdjb3NtZXRvbG9neScsJ2VsZWN0cmljJywnaG9tZScsJ3Nob3BwaW5nJyxcbiAgICAgICdmaW5hbmNpbmcnLCdmcnVpdHMnLCdjb3NtZXRpY3MnLCd3b3JrJywnc25hY2tzJywnY29tbXVuaWNhdGlvbicsJ2Nhci1yZXBhaXInLCd0cmFmZmljJyxcbiAgICAgICdzb2NpYWwnLCdmcmllbmRzJywncGV0cycsJ2hvdXNpbmcnLCd0dWl0aW9uJywnY2hpbGQnLCdwYXJraW5nJywnd2F0ZXInLCdleHByZXNzJyxcbiAgICAgICdlbGRlcmx5JywndmVnZXRhYmxlcycsJ2Z1bicsJ3Nwb3J0JywnbG90dGVyeScsJ2Jvb2trZWVwaW5nJywncmVpbWJ1cnNlbWVudCcsJ3Rhb2JhbycsJ3NhbGFyeScsXG4gICAgICAnd2lmaScsJ3VzZXInLCdib251cycsJ2FsaW1vbnknLCdwYXJ0LXRpbWUtam9iJywncmVmdW5kJywnYWxpcGF5JywnZGFpbHktbmVjZXNzaXRpZXMnXG4gICAgXSxcbiAgfSxcbiAgYXN5bmMgZ2V0VHlwZXMoKTogUHJvbWlzZTx2b2lkPntcbiAgICB3eC5zaG93TG9hZGluZyh7XG4gICAgICB0aXRsZTogJ+WKoOi9veS4rScsXG4gICAgfSlcbiAgICBjb25zdCBiaWxsVHlwZXMgPSBhd2FpdCBnZXRCaWxsVHlwZXModGhpcy5kYXRhLmxlZGdlcklEKVxuICAgIGNvbnN0IHR5cGVzID0ge30gYXMgUmVjb3JkPG51bWJlciwgQW55QXJyYXk+XG4gICBcbiAgICBiaWxsVHlwZXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIHR5cGVzW2l0ZW0udHlwZV0gPSB0eXBlc1tpdGVtLnR5cGVdIHx8IFtdXG4gICAgICB0eXBlc1tpdGVtLnR5cGVdLnB1c2goaXRlbSlcbiAgICB9KVxuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICB0eXBlcyxcbiAgICAgIGJpbGxUeXBlc1xuICAgIH0pXG4gICAgd3guaGlkZUxvYWRpbmcoKVxuICB9LFxuICBvbkxvYWQoKXtcbiAgICB0aGlzLmdldFR5cGVzKCkgXG4gIH0sXG4gIHRvZ2dsZUVkaXRNb2RlKCl7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGVkaXRNb2RlOiAhdGhpcy5kYXRhLmVkaXRNb2RlXG4gICAgfSlcbiAgfSxcbiAgb25Tb3J0ZW5kKGU6IGFueSl7XG4gICAgY29uc29sZS5sb2coZSlcbiAgICBjb25zdCB7IGxpc3REYXRhIH0gPSBlLmRldGFpbFxuICAgIGNvbnN0IGlkcyA9IGxpc3REYXRhLm1hcCgoaTogQW55T2JqZWN0KT0+aS5pZClcbiAgICBzb3J0QmlsbFR5cGUoe1xuICAgICAgaWRzXG4gICAgfSkudGhlbihyZXM9PntcbiAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICB9KVxuICB9LFxuICBvbkFkZChlOiBhbnkpe1xuICAgIGNvbnN0IHsgdHlwZSB9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXRcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgZWRpdE1vZGU6IGZhbHNlLFxuICAgICAgZm9ybVNob3c6IHRydWUsXG4gICAgICBzYXZlVHlwZTogJ2FkZCcsXG4gICAgICBzZWxlY3RlZEljb25JbmRleDogLTEsXG4gICAgICBmb3JtOiB7XG4gICAgICAgIG5hbWU6ICcnLFxuICAgICAgICB0eXBlOiBwYXJzZUludCh0eXBlKSxcbiAgICAgICAgaWNvbjogJydcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuICBvbkVkaXQoZTogYW55KXtcbiAgICBjb25zdCB7IGlkIH0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldFxuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmRhdGEuYmlsbFR5cGVzLmZpbmQoaSA9PiBpLmlkID09IGlkKVxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5kYXRhLmljb25zLmZpbmRJbmRleChpID0+IGkgPT0gaXRlbS5pY29uKVxuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBhY3RpdmVJRDogaWQsXG4gICAgICBmb3JtU2hvdzogdHJ1ZSxcbiAgICAgIHNhdmVUeXBlOiAnZWRpdCcsXG4gICAgICBzZWxlY3RlZEljb25JbmRleDogaW5kZXgsXG4gICAgICBmb3JtOiB7XG4gICAgICAgIGljb246IGl0ZW0uaWNvbixcbiAgICAgICAgdHlwZTogaXRlbS50eXBlLFxuICAgICAgICBuYW1lOiBpdGVtLm5hbWVcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuICBvbkFkZENsb3NlKCl7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGZvcm1TaG93OiBmYWxzZSxcbiAgICAgIGVkaXRNb2RlOiBmYWxzZVxuICAgIH0pXG4gIH0sXG4gIG9uSW5wdXQoZTogYW55KXtcbiAgICB0aGlzLmRhdGEuZm9ybS5uYW1lID0gZS5kZXRhaWxcbiAgfSxcbiAgb25EZWwoKXtcbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIERpYWxvZyh7XG4gICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgbWVzc2FnZTogJ+ehruWumuimgeWIoOmZpOWQl++8nycsXG4gICAgICAgIGFzeW5jQ2xvc2U6IHRydWVcbiAgICAgIH0pXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBpZihEaWFsb2cuY29uZmlybSlcbiAgICAgICAgICAgIGRlbEJpbGxUeXBlKHRoaXMuZGF0YS5hY3RpdmVJRCkudGhlbigoKT0+e1xuICAgICAgICAgICAgICBpZihEaWFsb2cuY2xvc2UpXG4gICAgICAgICAgICAgICAgRGlhbG9nLmNsb3NlKClcbiAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICBmb3JtU2hvdzogZmFsc2UsXG4gICAgICAgICAgICAgICAgZWRpdE1vZGU6IGZhbHNlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIHNlbGYuZ2V0VHlwZXMoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIClcbiAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICBpZihEaWFsb2cuY2xvc2UpXG4gICAgICAgIERpYWxvZy5jbG9zZSgpXG4gICAgfSk7XG5cbiAgfSxcbiAgb25TYXZlKCl7XG4gICAgaWYodGhpcy5kYXRhLnNhdmVUeXBlID09ICdhZGQnKXtcbiAgICAgIGFkZEJpbGxUeXBlKHRoaXMuZGF0YS5sZWRnZXJJRCwgdGhpcy5kYXRhLmZvcm0pLnRoZW4oKCk9PntcbiAgICAgICAgICB0aGlzLmdldFR5cGVzKClcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgZm9ybVNob3c6IGZhbHNlLFxuICAgICAgICAgICAgZWRpdE1vZGU6IGZhbHNlXG4gICAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHVwZGF0ZUJpbGxUeXBlKHRoaXMuZGF0YS5hY3RpdmVJRCwgdGhpcy5kYXRhLmZvcm0pLnRoZW4oKCk9PntcbiAgICAgICAgICB0aGlzLmdldFR5cGVzKClcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgZm9ybVNob3c6IGZhbHNlLFxuICAgICAgICAgICAgZWRpdE1vZGU6IGZhbHNlXG4gICAgICAgICAgfSlcbiAgICAgIH0pXG5cbiAgICB9XG4gIH0sXG4gIG9uU2VsKGU6IGFueSl7XG4gICAgY29uc3QgeyBpbmRleCB9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXRcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgc2VsZWN0ZWRJY29uSW5kZXg6IGluZGV4LFxuICAgICAgXCJmb3JtLmljb25cIjogdGhpcy5kYXRhLmljb25zW2luZGV4XSBcbiAgICB9KVxuICB9XG4gIFxufSkiXX0=