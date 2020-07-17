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
        form: {
            name: '',
            type: 1,
            icon: ''
        }
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
        console.log(e);
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
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ19iaWxsX3R5cGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZXR0aW5nX2JpbGxfdHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDRDQUErRDtBQUMvRCxJQUFJLENBQUM7SUFFSCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUU7WUFDTCxDQUFDLEVBQUUsRUFBYztZQUNqQixDQUFDLEVBQUUsRUFBYztTQUNVO1FBQzdCLFFBQVEsRUFBRSxLQUFLO1FBQ2YsUUFBUSxFQUFFLEtBQUs7UUFDZixRQUFRLEVBQUUsS0FBSztRQUNmLFFBQVEsRUFBRSxDQUFDO1FBRVgsUUFBUSxFQUFFLENBQUM7UUFDWCxJQUFJLEVBQUU7WUFDSixJQUFJLEVBQUUsRUFBRTtZQUNSLElBQUksRUFBRSxDQUFDO1lBQ1AsSUFBSSxFQUFFLEVBQUU7U0FDVDtLQUNGO0lBQ0ssUUFBUSxFQUFkOzs7Ozs0QkFDb0IsV0FBTSxvQkFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUE7O3dCQUFsRCxTQUFTLEdBQUcsU0FBc0M7d0JBQ2xELEtBQUssR0FBRyxFQUE4QixDQUFBO3dCQUM1QyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTs0QkFDcEIsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQTs0QkFDekMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7d0JBQzdCLENBQUMsQ0FBQyxDQUFBO3dCQUNGLElBQUksQ0FBQyxPQUFPLENBQUM7NEJBQ1gsS0FBSyxPQUFBOzRCQUNMLFVBQVUsRUFBRSxJQUFJO3lCQUNqQixDQUFDLENBQUE7Ozs7O0tBQ0g7SUFDRCxNQUFNO1FBQ0osSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQ2pCLENBQUM7SUFDRCxjQUFjO1FBQ1osSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtTQUM5QixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsS0FBSyxFQUFMLFVBQU0sQ0FBTTtRQUNGLElBQUEsbUNBQUksQ0FBNEI7UUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFFBQVEsRUFBRSxLQUFLO1lBQ2YsUUFBUSxFQUFFLElBQUk7WUFDZCxRQUFRLEVBQUUsS0FBSztZQUNmLElBQUksRUFBRTtnQkFDSixJQUFJLEVBQUUsRUFBRTtnQkFDUixJQUFJLE1BQUE7Z0JBQ0osSUFBSSxFQUFFLEVBQUU7YUFDVDtTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxNQUFNO1FBQ0osSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFFBQVEsRUFBRSxJQUFJO1lBQ2QsUUFBUSxFQUFFLE1BQU07U0FDakIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELFVBQVU7UUFDUixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsUUFBUSxFQUFFLEtBQUs7U0FDaEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELE9BQU8sRUFBUCxVQUFRLENBQU07UUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ2hCLENBQUM7SUFDRCxLQUFLO1FBQ0gsRUFBRSxDQUFBO0lBQ0osQ0FBQztJQUNELE1BQU07UUFDSixJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEtBQUssRUFBQztZQUM3QixvQkFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztnQkFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNwQixDQUFDLENBQUMsQ0FBQTtTQUNIO0lBQ0gsQ0FBQztDQUVGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IGFwcCA9IGdldEFwcCgpIGFzIElBcHBPcHRpb25cclxuaW1wb3J0IHsgZ2V0QmlsbFR5cGVzLCBhZGRCaWxsVHlwZXMgfSBmcm9tIFwiLi4vLi4vLi4vYXBpL2luZGV4XCJcclxuUGFnZSh7XHJcblxyXG4gIGRhdGE6IHtcclxuICAgIHR5cGVzOiB7XHJcbiAgICAgIDE6IFtdIGFzIEFueUFycmF5LFxyXG4gICAgICAyOiBbXSBhcyBBbnlBcnJheSxcclxuICAgIH0gYXMgUmVjb3JkPG51bWJlciwgQW55QXJyYXk+LFxyXG4gICAgZWRpdE1vZGU6IGZhbHNlLFxyXG4gICAgZm9ybVNob3c6IGZhbHNlLFxyXG4gICAgc2F2ZVR5cGU6ICdhZGQnLFxyXG4gICAgYWN0aXZlSUQ6IDAsXHJcbiAgICAvLyBsZWRnZXJJRDogYXBwLmdsb2JhbERhdGEubGVkZ2VyLmlkLFxyXG4gICAgbGVkZ2VySUQ6IDEsXHJcbiAgICBmb3JtOiB7XHJcbiAgICAgIG5hbWU6ICcnLFxyXG4gICAgICB0eXBlOiAxLFxyXG4gICAgICBpY29uOiAnJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgYXN5bmMgZ2V0VHlwZXMoKTogUHJvbWlzZTx2b2lkPntcclxuICAgIGNvbnN0IGJpbGxUeXBlcyA9IGF3YWl0IGdldEJpbGxUeXBlcyh0aGlzLmRhdGEubGVkZ2VySUQpXHJcbiAgICBjb25zdCB0eXBlcyA9IHt9IGFzIFJlY29yZDxudW1iZXIsIEFueUFycmF5PlxyXG4gICAgYmlsbFR5cGVzLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIHR5cGVzW2l0ZW0udHlwZV0gPSB0eXBlc1tpdGVtLnR5cGVdIHx8IFtdXHJcbiAgICAgIHR5cGVzW2l0ZW0udHlwZV0ucHVzaChpdGVtKVxyXG4gICAgfSlcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHR5cGVzLFxyXG4gICAgICB0eXBlTG9hZGVkOiB0cnVlLFxyXG4gICAgfSlcclxuICB9LFxyXG4gIG9uTG9hZCgpe1xyXG4gICAgdGhpcy5nZXRUeXBlcygpIFxyXG4gIH0sXHJcbiAgdG9nZ2xlRWRpdE1vZGUoKXtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGVkaXRNb2RlOiAhdGhpcy5kYXRhLmVkaXRNb2RlXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgb25BZGQoZTogYW55KXtcclxuICAgIGNvbnN0IHsgdHlwZSB9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXRcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGVkaXRNb2RlOiBmYWxzZSxcclxuICAgICAgZm9ybVNob3c6IHRydWUsXHJcbiAgICAgIHNhdmVUeXBlOiAnYWRkJyxcclxuICAgICAgZm9ybToge1xyXG4gICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgIHR5cGUsXHJcbiAgICAgICAgaWNvbjogJydcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9LFxyXG4gIG9uRWRpdCgpe1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgZm9ybVNob3c6IHRydWUsXHJcbiAgICAgIHNhdmVUeXBlOiAnZWRpdCdcclxuICAgIH0pXHJcbiAgfSxcclxuICBvbkFkZENsb3NlKCl7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBmb3JtU2hvdzogZmFsc2VcclxuICAgIH0pXHJcbiAgfSxcclxuICBvbklucHV0KGU6IGFueSl7XHJcbiAgICBjb25zb2xlLmxvZyhlKVxyXG4gIH0sXHJcbiAgb25EZWwoKXtcclxuICAgICcnXHJcbiAgfSxcclxuICBvblNhdmUoKXtcclxuICAgIGlmKHRoaXMuZGF0YS5zYXZlVHlwZSA9PSAnYWRkJyl7XHJcbiAgICAgIGFkZEJpbGxUeXBlcyh0aGlzLmRhdGEubGVkZ2VySUQsIHRoaXMuZGF0YS5mb3JtKS50aGVuKHJlcz0+e1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxufSkiXX0=