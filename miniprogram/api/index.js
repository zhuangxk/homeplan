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
var http_1 = require("./http");
function login() {
    return new Promise(function (resolve, reject) {
        wx.login({
            success: function (res) {
                http_1.default({
                    url: '/auth',
                    data: { code: res.code }
                }, true)
                    .then(function (r) {
                    wx.setStorageSync("token", r.token);
                    resolve(r.token);
                })
                    .catch(reject);
            },
        });
    });
}
exports.login = login;
function uploadUserInfo(data) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, http_1.default({
                        url: '/v1/user',
                        method: 'POST',
                        data: data
                    })];
                case 1: return [2, _a.sent()];
            }
        });
    });
}
exports.uploadUserInfo = uploadUserInfo;
function getLedgers() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, http_1.default({
                        url: '/v1/ledgers',
                        method: 'GET'
                    })];
                case 1: return [2, _a.sent()];
            }
        });
    });
}
exports.getLedgers = getLedgers;
function getDefaultLedger() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, http_1.default({
                        url: '/v1/defaultLedger',
                        method: 'GET'
                    })];
                case 1: return [2, _a.sent()];
            }
        });
    });
}
exports.getDefaultLedger = getDefaultLedger;
function getBillTypes(id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, http_1.default({
                        url: "/v1/ledger/" + id + "/bill_type",
                        method: 'GET'
                    })];
                case 1: return [2, _a.sent()];
            }
        });
    });
}
exports.getBillTypes = getBillTypes;
function addBillType(ledgerID, data) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, http_1.default({
                        url: "/v1/ledger/" + ledgerID + "/bill_type",
                        method: 'POST',
                        data: data
                    })];
                case 1: return [2, _a.sent()];
            }
        });
    });
}
exports.addBillType = addBillType;
function delBillType(id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, http_1.default({
                        url: "/v1/bill_type/" + id,
                        method: 'DELETE'
                    })];
                case 1: return [2, _a.sent()];
            }
        });
    });
}
exports.delBillType = delBillType;
function updateBillType(id, data) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, http_1.default({
                        url: "/v1/bill_type/" + id,
                        method: 'PUT',
                        data: data
                    })];
                case 1: return [2, _a.sent()];
            }
        });
    });
}
exports.updateBillType = updateBillType;
function sortBillType(data) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, http_1.default({
                        url: "/v1/bill_type/sort",
                        method: 'POST',
                        data: data
                    })];
                case 1: return [2, _a.sent()];
            }
        });
    });
}
exports.sortBillType = sortBillType;
function getAccounts() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, http_1.default({
                        url: "/v1/accounts",
                        method: 'GET'
                    })];
                case 1: return [2, _a.sent()];
            }
        });
    });
}
exports.getAccounts = getAccounts;
function addAccount(data) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, http_1.default({
                        url: "/v1/account",
                        method: 'POST',
                        data: data
                    })];
                case 1: return [2, _a.sent()];
            }
        });
    });
}
exports.addAccount = addAccount;
function getOssToken() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, http_1.default({
                        url: "/v1/oss",
                        method: 'GET'
                    })];
                case 1: return [2, _a.sent()];
            }
        });
    });
}
exports.getOssToken = getOssToken;
function createBill(ledgerId, data) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, http_1.default({
                        url: "/v1/ledger/" + ledgerId + "/bill",
                        method: 'POST',
                        data: data
                    })];
                case 1: return [2, _a.sent()];
            }
        });
    });
}
exports.createBill = createBill;
function getBills(ledgerId, query) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, http_1.default({
                        url: "/v1/ledger/" + ledgerId + "/bill",
                        method: 'GET',
                        data: query
                    })];
                case 1: return [2, _a.sent()];
            }
        });
    });
}
exports.getBills = getBills;
function delBill(billId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, http_1.default({
                        url: "/v1/bill/" + billId,
                        method: 'DELETE',
                    })];
                case 1: return [2, _a.sent()];
            }
        });
    });
}
exports.delBill = delBill;
function updateBill(billId, data) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, http_1.default({
                        url: "/v1/bill/" + billId,
                        method: 'PUT',
                        data: data
                    })];
                case 1: return [2, _a.sent()];
            }
        });
    });
}
exports.updateBill = updateBill;
function addBillDeltail(billId, data) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, http_1.default({
                        url: "/v1/bill/" + billId + "/detail",
                        method: 'POST',
                        data: data
                    })];
                case 1: return [2, _a.sent()];
            }
        });
    });
}
exports.addBillDeltail = addBillDeltail;
function updateillDeltail(Id, data) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, http_1.default({
                        url: "/v1/bill_detail/" + Id,
                        method: 'PUT',
                        data: data
                    })];
                case 1: return [2, _a.sent()];
            }
        });
    });
}
exports.updateillDeltail = updateillDeltail;
function delBillDeltail(Id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, http_1.default({
                        url: "/v1/bill_detail/" + Id,
                        method: 'DELETE'
                    })];
                case 1: return [2, _a.sent()];
            }
        });
    });
}
exports.delBillDeltail = delBillDeltail;
function getBillDeltails(billId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, http_1.default({
                        url: "/v1/bill/" + billId + "/detail",
                        method: 'GET'
                    })];
                case 1: return [2, _a.sent()];
            }
        });
    });
}
exports.getBillDeltails = getBillDeltails;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUF5QjtBQUl6QixTQUFnQixLQUFLO0lBQ25CLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtRQUNqQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ1AsT0FBTyxFQUFFLFVBQUEsR0FBRztnQkFDVixjQUFJLENBQUM7b0JBQ0gsR0FBRyxFQUFDLE9BQU87b0JBQ1gsSUFBSSxFQUFFLEVBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUU7aUJBQ3hCLEVBQUUsSUFBSSxDQUFDO3FCQUNQLElBQUksQ0FBQyxVQUFBLENBQUM7b0JBQ0gsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFBO29CQUNuQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFBO2dCQUNsQixDQUFDLENBQ0Y7cUJBQ0EsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ2hCLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDLENBQUMsQ0FBQTtBQUVKLENBQUM7QUFsQkQsc0JBa0JDO0FBRUQsU0FBc0IsY0FBYyxDQUFDLElBQWdDOzs7O3dCQUM1RCxXQUFNLGNBQUksQ0FBQzt3QkFDaEIsR0FBRyxFQUFFLFVBQVU7d0JBQ2YsTUFBTSxFQUFFLE1BQU07d0JBQ2QsSUFBSSxFQUFFLElBQUk7cUJBQ1gsQ0FBQyxFQUFBO3dCQUpGLFdBQU8sU0FJTCxFQUFBOzs7O0NBQ0g7QUFORCx3Q0FNQztBQUdELFNBQXNCLFVBQVU7Ozs7d0JBQ3ZCLFdBQU0sY0FBSSxDQUFDO3dCQUNoQixHQUFHLEVBQUUsYUFBYTt3QkFDbEIsTUFBTSxFQUFFLEtBQUs7cUJBQ2QsQ0FBQyxFQUFBO3dCQUhGLFdBQU8sU0FHTCxFQUFBOzs7O0NBQ0g7QUFMRCxnQ0FLQztBQUdELFNBQXNCLGdCQUFnQjs7Ozt3QkFDN0IsV0FBTSxjQUFJLENBQUM7d0JBQ2hCLEdBQUcsRUFBRSxtQkFBbUI7d0JBQ3hCLE1BQU0sRUFBRSxLQUFLO3FCQUNkLENBQUMsRUFBQTt3QkFIRixXQUFPLFNBR0wsRUFBQTs7OztDQUNIO0FBTEQsNENBS0M7QUFHRCxTQUFzQixZQUFZLENBQUUsRUFBVTs7Ozt3QkFDckMsV0FBTSxjQUFJLENBQUM7d0JBQ2hCLEdBQUcsRUFBRSxnQkFBYyxFQUFFLGVBQVk7d0JBQ2pDLE1BQU0sRUFBRSxLQUFLO3FCQUNkLENBQUMsRUFBQTt3QkFIRixXQUFPLFNBR0wsRUFBQTs7OztDQUNIO0FBTEQsb0NBS0M7QUFHRCxTQUFzQixXQUFXLENBQUUsUUFBZ0IsRUFBRSxJQUFlOzs7O3dCQUMzRCxXQUFNLGNBQUksQ0FBQzt3QkFDaEIsR0FBRyxFQUFFLGdCQUFjLFFBQVEsZUFBWTt3QkFDdkMsTUFBTSxFQUFFLE1BQU07d0JBQ2QsSUFBSSxNQUFBO3FCQUNMLENBQUMsRUFBQTt3QkFKRixXQUFPLFNBSUwsRUFBQTs7OztDQUNIO0FBTkQsa0NBTUM7QUFHRCxTQUFzQixXQUFXLENBQUUsRUFBVTs7Ozt3QkFDcEMsV0FBTSxjQUFJLENBQUM7d0JBQ2hCLEdBQUcsRUFBRSxtQkFBaUIsRUFBSTt3QkFDMUIsTUFBTSxFQUFFLFFBQVE7cUJBQ2pCLENBQUMsRUFBQTt3QkFIRixXQUFPLFNBR0wsRUFBQTs7OztDQUNIO0FBTEQsa0NBS0M7QUFHRCxTQUFzQixjQUFjLENBQUUsRUFBVSxFQUFFLElBQWU7Ozs7d0JBQ3hELFdBQU0sY0FBSSxDQUFDO3dCQUNoQixHQUFHLEVBQUUsbUJBQWlCLEVBQUk7d0JBQzFCLE1BQU0sRUFBRSxLQUFLO3dCQUNiLElBQUksTUFBQTtxQkFDTCxDQUFDLEVBQUE7d0JBSkYsV0FBTyxTQUlMLEVBQUE7Ozs7Q0FDSDtBQU5ELHdDQU1DO0FBR0QsU0FBc0IsWUFBWSxDQUFDLElBQWU7Ozs7d0JBQ3pDLFdBQU0sY0FBSSxDQUFDO3dCQUNoQixHQUFHLEVBQUUsb0JBQW9CO3dCQUN6QixNQUFNLEVBQUUsTUFBTTt3QkFDZCxJQUFJLE1BQUE7cUJBQ0wsQ0FBQyxFQUFBO3dCQUpGLFdBQU8sU0FJTCxFQUFBOzs7O0NBQ0g7QUFORCxvQ0FNQztBQUdELFNBQXNCLFdBQVc7Ozs7d0JBQ3hCLFdBQU0sY0FBSSxDQUFDO3dCQUNoQixHQUFHLEVBQUUsY0FBYzt3QkFDbkIsTUFBTSxFQUFFLEtBQUs7cUJBQ2QsQ0FBQyxFQUFBO3dCQUhGLFdBQU8sU0FHTCxFQUFBOzs7O0NBQ0g7QUFMRCxrQ0FLQztBQUdELFNBQXNCLFVBQVUsQ0FBQyxJQUFlOzs7O3dCQUN2QyxXQUFNLGNBQUksQ0FBQzt3QkFDaEIsR0FBRyxFQUFFLGFBQWE7d0JBQ2xCLE1BQU0sRUFBRSxNQUFNO3dCQUNkLElBQUksTUFBQTtxQkFDTCxDQUFDLEVBQUE7d0JBSkYsV0FBTyxTQUlMLEVBQUE7Ozs7Q0FDSDtBQU5ELGdDQU1DO0FBR0QsU0FBc0IsV0FBVzs7Ozt3QkFDeEIsV0FBTSxjQUFJLENBQUM7d0JBQ2hCLEdBQUcsRUFBRSxTQUFTO3dCQUNkLE1BQU0sRUFBRSxLQUFLO3FCQUNkLENBQUMsRUFBQTt3QkFIRixXQUFPLFNBR0wsRUFBQTs7OztDQUNIO0FBTEQsa0NBS0M7QUFHRCxTQUFzQixVQUFVLENBQUMsUUFBZ0IsRUFBRSxJQUFlOzs7O3dCQUN6RCxXQUFNLGNBQUksQ0FBQzt3QkFDaEIsR0FBRyxFQUFFLGdCQUFjLFFBQVEsVUFBTzt3QkFDbEMsTUFBTSxFQUFFLE1BQU07d0JBQ2QsSUFBSSxNQUFBO3FCQUNMLENBQUMsRUFBQTt3QkFKRixXQUFPLFNBSUwsRUFBQTs7OztDQUNIO0FBTkQsZ0NBTUM7QUFHRCxTQUFzQixRQUFRLENBQUMsUUFBZ0IsRUFBRSxLQUFnQjs7Ozt3QkFDeEQsV0FBTSxjQUFJLENBQUM7d0JBQ2hCLEdBQUcsRUFBRSxnQkFBYyxRQUFRLFVBQU87d0JBQ2xDLE1BQU0sRUFBRSxLQUFLO3dCQUNiLElBQUksRUFBRSxLQUFLO3FCQUNaLENBQUMsRUFBQTt3QkFKRixXQUFPLFNBSUwsRUFBQTs7OztDQUNIO0FBTkQsNEJBTUM7QUFHRCxTQUFzQixPQUFPLENBQUMsTUFBYzs7Ozt3QkFDbkMsV0FBTSxjQUFJLENBQUM7d0JBQ2hCLEdBQUcsRUFBRSxjQUFZLE1BQVE7d0JBQ3pCLE1BQU0sRUFBRSxRQUFRO3FCQUNqQixDQUFDLEVBQUE7d0JBSEYsV0FBTyxTQUdMLEVBQUE7Ozs7Q0FDSDtBQUxELDBCQUtDO0FBR0QsU0FBc0IsVUFBVSxDQUFDLE1BQWMsRUFBRSxJQUFlOzs7O3dCQUN2RCxXQUFNLGNBQUksQ0FBQzt3QkFDaEIsR0FBRyxFQUFFLGNBQVksTUFBUTt3QkFDekIsTUFBTSxFQUFFLEtBQUs7d0JBQ2IsSUFBSSxNQUFBO3FCQUNMLENBQUMsRUFBQTt3QkFKRixXQUFPLFNBSUwsRUFBQTs7OztDQUNIO0FBTkQsZ0NBTUM7QUFJRCxTQUFzQixjQUFjLENBQUMsTUFBYyxFQUFFLElBQWU7Ozs7d0JBQzNELFdBQU0sY0FBSSxDQUFDO3dCQUNoQixHQUFHLEVBQUUsY0FBWSxNQUFNLFlBQVM7d0JBQ2hDLE1BQU0sRUFBRSxNQUFNO3dCQUNkLElBQUksTUFBQTtxQkFDTCxDQUFDLEVBQUE7d0JBSkYsV0FBTyxTQUlMLEVBQUE7Ozs7Q0FDSDtBQU5ELHdDQU1DO0FBRUQsU0FBc0IsZ0JBQWdCLENBQUMsRUFBVSxFQUFFLElBQWU7Ozs7d0JBQ3pELFdBQU0sY0FBSSxDQUFDO3dCQUNoQixHQUFHLEVBQUUscUJBQW1CLEVBQUk7d0JBQzVCLE1BQU0sRUFBRSxLQUFLO3dCQUNiLElBQUksTUFBQTtxQkFDTCxDQUFDLEVBQUE7d0JBSkYsV0FBTyxTQUlMLEVBQUE7Ozs7Q0FDSDtBQU5ELDRDQU1DO0FBRUQsU0FBc0IsY0FBYyxDQUFDLEVBQVU7Ozs7d0JBQ3RDLFdBQU0sY0FBSSxDQUFDO3dCQUNoQixHQUFHLEVBQUUscUJBQW1CLEVBQUk7d0JBQzVCLE1BQU0sRUFBRSxRQUFRO3FCQUNqQixDQUFDLEVBQUE7d0JBSEYsV0FBTyxTQUdMLEVBQUE7Ozs7Q0FDSDtBQUxELHdDQUtDO0FBRUQsU0FBc0IsZUFBZSxDQUFDLE1BQWM7Ozs7d0JBQzNDLFdBQU0sY0FBSSxDQUFDO3dCQUNoQixHQUFHLEVBQUUsY0FBWSxNQUFNLFlBQVM7d0JBQ2hDLE1BQU0sRUFBRSxLQUFLO3FCQUNkLENBQUMsRUFBQTt3QkFIRixXQUFPLFNBR0wsRUFBQTs7OztDQUNIO0FBTEQsMENBS0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaHR0cCBmcm9tICcuL2h0dHAnXHJcblxyXG5cclxuLy8g6I635Y+WdG9rZW5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2luKCk6IFByb21pc2U8c3RyaW5nPntcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcclxuICAgIHd4LmxvZ2luKHtcclxuICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICBodHRwKHtcclxuICAgICAgICAgIHVybDonL2F1dGgnLFxyXG4gICAgICAgICAgZGF0YToge2NvZGU6IHJlcy5jb2RlIH1cclxuICAgICAgICB9LCB0cnVlKVxyXG4gICAgICAgIC50aGVuKHIgPT4ge1xyXG4gICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYyhcInRva2VuXCIsIHIudG9rZW4pXHJcbiAgICAgICAgICAgIHJlc29sdmUoci50b2tlbilcclxuICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICAgLmNhdGNoKHJlamVjdClcclxuICAgICAgfSxcclxuICAgIH0pICAgIFxyXG4gIH0pXHJcblxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBsb2FkVXNlckluZm8oZGF0YTogV2VjaGF0TWluaXByb2dyYW0uVXNlckluZm8pOiBQcm9taXNlPFdlY2hhdE1pbmlwcm9ncmFtLlVzZXJJbmZvPntcclxuICByZXR1cm4gYXdhaXQgaHR0cCh7XHJcbiAgICB1cmw6ICcvdjEvdXNlcicsXHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGRhdGE6IGRhdGFcclxuICB9KVxyXG59XHJcblxyXG4vLyDotKbmnKzliJfooahcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExlZGdlcnMoKTogUHJvbWlzZTxBbnlPYmplY3Q+e1xyXG4gIHJldHVybiBhd2FpdCBodHRwKHtcclxuICAgIHVybDogJy92MS9sZWRnZXJzJyxcclxuICAgIG1ldGhvZDogJ0dFVCdcclxuICB9KVxyXG59XHJcblxyXG4vLyDpu5jorqTotKbmnKxcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERlZmF1bHRMZWRnZXIoKTogUHJvbWlzZTxBbnlPYmplY3Q+e1xyXG4gIHJldHVybiBhd2FpdCBodHRwKHtcclxuICAgIHVybDogJy92MS9kZWZhdWx0TGVkZ2VyJyxcclxuICAgIG1ldGhvZDogJ0dFVCdcclxuICB9KVxyXG59XHJcblxyXG4vLyDotKbljZXnsbvlnovliJfooahcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEJpbGxUeXBlcyggaWQ6IG51bWJlcik6IFByb21pc2U8QW55QXJyYXk+IHtcclxuICByZXR1cm4gYXdhaXQgaHR0cCh7XHJcbiAgICB1cmw6IGAvdjEvbGVkZ2VyLyR7aWR9L2JpbGxfdHlwZWAsXHJcbiAgICBtZXRob2Q6ICdHRVQnXHJcbiAgfSlcclxufVxyXG5cclxuLy8g6LSm5Y2V57G75Z6L5re75YqgXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRCaWxsVHlwZSggbGVkZ2VySUQ6IG51bWJlciwgZGF0YTogQW55T2JqZWN0KTogUHJvbWlzZTxBbnlPYmplY3Q+IHtcclxuICByZXR1cm4gYXdhaXQgaHR0cCh7XHJcbiAgICB1cmw6IGAvdjEvbGVkZ2VyLyR7bGVkZ2VySUR9L2JpbGxfdHlwZWAsXHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGRhdGFcclxuICB9KVxyXG59XHJcblxyXG4vLyDotKbljZXnsbvlnovliKDpmaRcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbEJpbGxUeXBlKCBpZDogbnVtYmVyKTogUHJvbWlzZTxBbnlPYmplY3Q+IHtcclxuICByZXR1cm4gYXdhaXQgaHR0cCh7XHJcbiAgICB1cmw6IGAvdjEvYmlsbF90eXBlLyR7aWR9YCxcclxuICAgIG1ldGhvZDogJ0RFTEVURSdcclxuICB9KVxyXG59XHJcblxyXG4vLyDotKbljZXnsbvlnovmm7TmlrBcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUJpbGxUeXBlKCBpZDogbnVtYmVyLCBkYXRhOiBBbnlPYmplY3QpOiBQcm9taXNlPEFueU9iamVjdD4ge1xyXG4gIHJldHVybiBhd2FpdCBodHRwKHtcclxuICAgIHVybDogYC92MS9iaWxsX3R5cGUvJHtpZH1gLFxyXG4gICAgbWV0aG9kOiAnUFVUJyxcclxuICAgIGRhdGFcclxuICB9KVxyXG59XHJcblxyXG4vLyDotKbljZXnsbvlnovmjpLluo9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNvcnRCaWxsVHlwZShkYXRhOiBBbnlPYmplY3QpOiBQcm9taXNlPEFueU9iamVjdD4ge1xyXG4gIHJldHVybiBhd2FpdCBodHRwKHtcclxuICAgIHVybDogYC92MS9iaWxsX3R5cGUvc29ydGAsXHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGRhdGFcclxuICB9KVxyXG59XHJcblxyXG4vLyDotKbmiLfliJfooahcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFjY291bnRzKCk6IFByb21pc2U8QW55QXJyYXk+IHtcclxuICByZXR1cm4gYXdhaXQgaHR0cCh7XHJcbiAgICB1cmw6IGAvdjEvYWNjb3VudHNgLFxyXG4gICAgbWV0aG9kOiAnR0VUJ1xyXG4gIH0pXHJcbn1cclxuXHJcbi8vIOi0puaIt+a3u+WKoFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkQWNjb3VudChkYXRhOiBBbnlPYmplY3QpOiBQcm9taXNlPEFueUFycmF5PiB7XHJcbiAgcmV0dXJuIGF3YWl0IGh0dHAoe1xyXG4gICAgdXJsOiBgL3YxL2FjY291bnRgLFxyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBkYXRhXHJcbiAgfSlcclxufVxyXG5cclxuLy8gT1NT6Ym05p2DXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRPc3NUb2tlbigpOiBQcm9taXNlPEFueU9iamVjdD4ge1xyXG4gIHJldHVybiBhd2FpdCBodHRwKHtcclxuICAgIHVybDogYC92MS9vc3NgLFxyXG4gICAgbWV0aG9kOiAnR0VUJ1xyXG4gIH0pXHJcbn1cclxuXHJcbi8vIOWIm+W7uui0puWNlVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQmlsbChsZWRnZXJJZDogbnVtYmVyLCBkYXRhOiBBbnlPYmplY3QpOiBQcm9taXNlPEFueU9iamVjdD57XHJcbiAgcmV0dXJuIGF3YWl0IGh0dHAoe1xyXG4gICAgdXJsOiBgL3YxL2xlZGdlci8ke2xlZGdlcklkfS9iaWxsYCxcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgZGF0YVxyXG4gIH0pXHJcbn0gXHJcblxyXG4vLyDotKbljZXliJfooahcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEJpbGxzKGxlZGdlcklkOiBudW1iZXIsIHF1ZXJ5OiBBbnlPYmplY3QpOiBQcm9taXNlPEFueU9iamVjdD57XHJcbiAgcmV0dXJuIGF3YWl0IGh0dHAoe1xyXG4gICAgdXJsOiBgL3YxL2xlZGdlci8ke2xlZGdlcklkfS9iaWxsYCxcclxuICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICBkYXRhOiBxdWVyeVxyXG4gIH0pXHJcbn1cclxuXHJcbi8vIOi0puWNleWIoOmZpFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsQmlsbChiaWxsSWQ6IG51bWJlcik6IFByb21pc2U8QW55T2JqZWN0PntcclxuICByZXR1cm4gYXdhaXQgaHR0cCh7XHJcbiAgICB1cmw6IGAvdjEvYmlsbC8ke2JpbGxJZH1gLFxyXG4gICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICB9KVxyXG59XHJcblxyXG4vLyDmm7TmlrDotKbljZVcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUJpbGwoYmlsbElkOiBudW1iZXIsIGRhdGE6IEFueU9iamVjdCk6IFByb21pc2U8QW55T2JqZWN0PntcclxuICByZXR1cm4gYXdhaXQgaHR0cCh7XHJcbiAgICB1cmw6IGAvdjEvYmlsbC8ke2JpbGxJZH1gLFxyXG4gICAgbWV0aG9kOiAnUFVUJyxcclxuICAgIGRhdGFcclxuICB9KVxyXG59IFxyXG5cclxuXHJcbi8vIOa3u+WKoOaYjue7hlxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkQmlsbERlbHRhaWwoYmlsbElkOiBudW1iZXIsIGRhdGE6IEFueU9iamVjdCk6IFByb21pc2U8QW55T2JqZWN0PntcclxuICByZXR1cm4gYXdhaXQgaHR0cCh7XHJcbiAgICB1cmw6IGAvdjEvYmlsbC8ke2JpbGxJZH0vZGV0YWlsYCxcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgZGF0YVxyXG4gIH0pXHJcbn1cclxuLy8g57yW6L6R5piO57uGXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVpbGxEZWx0YWlsKElkOiBudW1iZXIsIGRhdGE6IEFueU9iamVjdCk6IFByb21pc2U8QW55T2JqZWN0PntcclxuICByZXR1cm4gYXdhaXQgaHR0cCh7XHJcbiAgICB1cmw6IGAvdjEvYmlsbF9kZXRhaWwvJHtJZH1gLFxyXG4gICAgbWV0aG9kOiAnUFVUJyxcclxuICAgIGRhdGFcclxuICB9KVxyXG59XHJcbi8vIOWIoOmZpOaYjue7hlxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsQmlsbERlbHRhaWwoSWQ6IG51bWJlcik6IFByb21pc2U8QW55T2JqZWN0PntcclxuICByZXR1cm4gYXdhaXQgaHR0cCh7XHJcbiAgICB1cmw6IGAvdjEvYmlsbF9kZXRhaWwvJHtJZH1gLFxyXG4gICAgbWV0aG9kOiAnREVMRVRFJ1xyXG4gIH0pXHJcbn1cclxuLy8g5piO57uG5YiX6KGoXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRCaWxsRGVsdGFpbHMoYmlsbElkOiBudW1iZXIpOiBQcm9taXNlPEFueUFycmF5PntcclxuICByZXR1cm4gYXdhaXQgaHR0cCh7XHJcbiAgICB1cmw6IGAvdjEvYmlsbC8ke2JpbGxJZH0vZGV0YWlsYCxcclxuICAgIG1ldGhvZDogJ0dFVCdcclxuICB9KVxyXG59XHJcbiJdfQ==