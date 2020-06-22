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
var app = getApp();
var index_1 = require("../../../api/index");
Page({
    data: {
        types: {
            1: [],
            2: [],
        },
    },
    getTypes: function () {
        return __awaiter(this, void 0, void 0, function () {
            var billTypes, types;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        app.globalData.ledger.id = 1;
                        if (!app.globalData.ledger.id) {
                            return [2];
                        }
                        return [4, index_1.getBillTypes(app.globalData.ledger.id)];
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
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ19iaWxsX3R5cGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZXR0aW5nX2JpbGxfdHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBZ0IsQ0FBQTtBQUNsQyw0Q0FBaUQ7QUFDakQsSUFBSSxDQUFDO0lBRUgsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFO1lBQ0wsQ0FBQyxFQUFFLEVBQWM7WUFDakIsQ0FBQyxFQUFFLEVBQWM7U0FDVTtLQUM5QjtJQUNLLFFBQVEsRUFBZDs7Ozs7O3dCQUNFLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7d0JBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUM7NEJBQzVCLFdBQU07eUJBQ1A7d0JBQ2lCLFdBQU0sb0JBQVksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBQTs7d0JBQXhELFNBQVMsR0FBRyxTQUE0Qzt3QkFDeEQsS0FBSyxHQUFHLEVBQThCLENBQUE7d0JBQzVDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJOzRCQUNwQixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFBOzRCQUN6QyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTt3QkFDN0IsQ0FBQyxDQUFDLENBQUE7d0JBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQzs0QkFDWCxLQUFLLE9BQUE7NEJBQ0wsVUFBVSxFQUFFLElBQUk7eUJBQ2pCLENBQUMsQ0FBQTs7Ozs7S0FDSDtJQUNELE1BQU07UUFDSixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7SUFDakIsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFwcCA9IGdldEFwcCgpIGFzIElBcHBPcHRpb25cclxuaW1wb3J0IHsgZ2V0QmlsbFR5cGVzIH0gZnJvbSBcIi4uLy4uLy4uL2FwaS9pbmRleFwiXHJcblBhZ2Uoe1xyXG5cclxuICBkYXRhOiB7XHJcbiAgICB0eXBlczoge1xyXG4gICAgICAxOiBbXSBhcyBBbnlBcnJheSxcclxuICAgICAgMjogW10gYXMgQW55QXJyYXksXHJcbiAgICB9IGFzIFJlY29yZDxudW1iZXIsIEFueUFycmF5PixcclxuICB9LFxyXG4gIGFzeW5jIGdldFR5cGVzKCk6IFByb21pc2U8dm9pZD57XHJcbiAgICBhcHAuZ2xvYmFsRGF0YS5sZWRnZXIuaWQgPSAxXHJcbiAgICBpZiAoIWFwcC5nbG9iYWxEYXRhLmxlZGdlci5pZCl7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgY29uc3QgYmlsbFR5cGVzID0gYXdhaXQgZ2V0QmlsbFR5cGVzKGFwcC5nbG9iYWxEYXRhLmxlZGdlci5pZClcclxuICAgIGNvbnN0IHR5cGVzID0ge30gYXMgUmVjb3JkPG51bWJlciwgQW55QXJyYXk+XHJcbiAgICBiaWxsVHlwZXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgdHlwZXNbaXRlbS50eXBlXSA9IHR5cGVzW2l0ZW0udHlwZV0gfHwgW11cclxuICAgICAgdHlwZXNbaXRlbS50eXBlXS5wdXNoKGl0ZW0pXHJcbiAgICB9KVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgdHlwZXMsXHJcbiAgICAgIHR5cGVMb2FkZWQ6IHRydWUsXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgb25Mb2FkKCl7XHJcbiAgICB0aGlzLmdldFR5cGVzKCkgXHJcbiAgfVxyXG59KSJdfQ==