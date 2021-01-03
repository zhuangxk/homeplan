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
exports.getBillDeltails = exports.delBillDeltail = exports.updateillDeltail = exports.addBillDeltail = exports.updateBill = exports.delBill = exports.getBills = exports.createBill = exports.getOssToken = exports.addAccount = exports.getAccounts = exports.sortBillType = exports.updateBillType = exports.delBillType = exports.addBillType = exports.getBillTypes = exports.getDefaultLedger = exports.getLedgers = exports.uploadUserInfo = exports.login = void 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBeUI7QUFJekIsU0FBZ0IsS0FBSztJQUNuQixPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07UUFDakMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNQLE9BQU8sRUFBRSxVQUFBLEdBQUc7Z0JBQ1YsY0FBSSxDQUFDO29CQUNILEdBQUcsRUFBQyxPQUFPO29CQUNYLElBQUksRUFBRSxFQUFDLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxFQUFFO2lCQUN4QixFQUFFLElBQUksQ0FBQztxQkFDUCxJQUFJLENBQUMsVUFBQSxDQUFDO29CQUNILEVBQUUsQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtvQkFDbkMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtnQkFDbEIsQ0FBQyxDQUNGO3FCQUNBLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUNoQixDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxDQUFDLENBQUE7QUFFSixDQUFDO0FBbEJELHNCQWtCQztBQUVELFNBQXNCLGNBQWMsQ0FBQyxJQUFnQzs7Ozt3QkFDNUQsV0FBTSxjQUFJLENBQUM7d0JBQ2hCLEdBQUcsRUFBRSxVQUFVO3dCQUNmLE1BQU0sRUFBRSxNQUFNO3dCQUNkLElBQUksRUFBRSxJQUFJO3FCQUNYLENBQUMsRUFBQTt3QkFKRixXQUFPLFNBSUwsRUFBQTs7OztDQUNIO0FBTkQsd0NBTUM7QUFHRCxTQUFzQixVQUFVOzs7O3dCQUN2QixXQUFNLGNBQUksQ0FBQzt3QkFDaEIsR0FBRyxFQUFFLGFBQWE7d0JBQ2xCLE1BQU0sRUFBRSxLQUFLO3FCQUNkLENBQUMsRUFBQTt3QkFIRixXQUFPLFNB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QUhGLFdBQU8sU0FHTCxFQUFBOzs7O0NBQ0g7QUFMRCx3Q0FLQztBQUVELFNBQXNCLGVBQWUsQ0FBQyxNQUFjOzs7O3dCQUMzQyxXQUFNLGNBQUksQ0FBQzt3QkFDaEIsR0FBRyxFQUFFLGNBQVksTUFBTSxZQUFTO3dCQUNoQyxNQUFNLEVBQUUsS0FBSztxQkFDZCxDQUFDLEVBQUE7d0JBSEYsV0FBTyxTQUdMLEVBQUE7Ozs7Q0FDSDtBQUxELDBDQUtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGh0dHAgZnJvbSAnLi9odHRwJ1xuXG5cbi8vIOiOt+WPlnRva2VuXG5leHBvcnQgZnVuY3Rpb24gbG9naW4oKTogUHJvbWlzZTxzdHJpbmc+e1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICB3eC5sb2dpbih7XG4gICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICBodHRwKHtcbiAgICAgICAgICB1cmw6Jy9hdXRoJyxcbiAgICAgICAgICBkYXRhOiB7Y29kZTogcmVzLmNvZGUgfVxuICAgICAgICB9LCB0cnVlKVxuICAgICAgICAudGhlbihyID0+IHtcbiAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKFwidG9rZW5cIiwgci50b2tlbilcbiAgICAgICAgICAgIHJlc29sdmUoci50b2tlbilcbiAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgLmNhdGNoKHJlamVjdClcbiAgICAgIH0sXG4gICAgfSkgICAgXG4gIH0pXG5cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwbG9hZFVzZXJJbmZvKGRhdGE6IFdlY2hhdE1pbmlwcm9ncmFtLlVzZXJJbmZvKTogUHJvbWlzZTxXZWNoYXRNaW5pcHJvZ3JhbS5Vc2VySW5mbz57XG4gIHJldHVybiBhd2FpdCBodHRwKHtcbiAgICB1cmw6ICcvdjEvdXNlcicsXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgZGF0YTogZGF0YVxuICB9KVxufVxuXG4vLyDotKbmnKzliJfooahcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMZWRnZXJzKCk6IFByb21pc2U8QW55T2JqZWN0PntcbiAgcmV0dXJuIGF3YWl0IGh0dHAoe1xuICAgIHVybDogJy92MS9sZWRnZXJzJyxcbiAgICBtZXRob2Q6ICdHRVQnXG4gIH0pXG59XG5cbi8vIOm7mOiupOi0puacrFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERlZmF1bHRMZWRnZXIoKTogUHJvbWlzZTxBbnlPYmplY3Q+e1xuICByZXR1cm4gYXdhaXQgaHR0cCh7XG4gICAgdXJsOiAnL3YxL2RlZmF1bHRMZWRnZXInLFxuICAgIG1ldGhvZDogJ0dFVCdcbiAgfSlcbn1cblxuLy8g6LSm5Y2V57G75Z6L5YiX6KGoXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QmlsbFR5cGVzKCBpZDogbnVtYmVyKTogUHJvbWlzZTxBbnlBcnJheT4ge1xuICByZXR1cm4gYXdhaXQgaHR0cCh7XG4gICAgdXJsOiBgL3YxL2xlZGdlci8ke2lkfS9iaWxsX3R5cGVgLFxuICAgIG1ldGhvZDogJ0dFVCdcbiAgfSlcbn1cblxuLy8g6LSm5Y2V57G75Z6L5re75YqgXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkQmlsbFR5cGUoIGxlZGdlcklEOiBudW1iZXIsIGRhdGE6IEFueU9iamVjdCk6IFByb21pc2U8QW55T2JqZWN0PiB7XG4gIHJldHVybiBhd2FpdCBodHRwKHtcbiAgICB1cmw6IGAvdjEvbGVkZ2VyLyR7bGVkZ2VySUR9L2JpbGxfdHlwZWAsXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgZGF0YVxuICB9KVxufVxuXG4vLyDotKbljZXnsbvlnovliKDpmaRcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxCaWxsVHlwZSggaWQ6IG51bWJlcik6IFByb21pc2U8QW55T2JqZWN0PiB7XG4gIHJldHVybiBhd2FpdCBodHRwKHtcbiAgICB1cmw6IGAvdjEvYmlsbF90eXBlLyR7aWR9YCxcbiAgICBtZXRob2Q6ICdERUxFVEUnXG4gIH0pXG59XG5cbi8vIOi0puWNleexu+Wei+abtOaWsFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUJpbGxUeXBlKCBpZDogbnVtYmVyLCBkYXRhOiBBbnlPYmplY3QpOiBQcm9taXNlPEFueU9iamVjdD4ge1xuICByZXR1cm4gYXdhaXQgaHR0cCh7XG4gICAgdXJsOiBgL3YxL2JpbGxfdHlwZS8ke2lkfWAsXG4gICAgbWV0aG9kOiAnUFVUJyxcbiAgICBkYXRhXG4gIH0pXG59XG5cbi8vIOi0puWNleexu+Wei+aOkuW6j1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNvcnRCaWxsVHlwZShkYXRhOiBBbnlPYmplY3QpOiBQcm9taXNlPEFueU9iamVjdD4ge1xuICByZXR1cm4gYXdhaXQgaHR0cCh7XG4gICAgdXJsOiBgL3YxL2JpbGxfdHlwZS9zb3J0YCxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBkYXRhXG4gIH0pXG59XG5cbi8vIOi0puaIt+WIl+ihqFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFjY291bnRzKCk6IFByb21pc2U8QW55QXJyYXk+IHtcbiAgcmV0dXJuIGF3YWl0IGh0dHAoe1xuICAgIHVybDogYC92MS9hY2NvdW50c2AsXG4gICAgbWV0aG9kOiAnR0VUJ1xuICB9KVxufVxuXG4vLyDotKbmiLfmt7vliqBcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRBY2NvdW50KGRhdGE6IEFueU9iamVjdCk6IFByb21pc2U8QW55QXJyYXk+IHtcbiAgcmV0dXJuIGF3YWl0IGh0dHAoe1xuICAgIHVybDogYC92MS9hY2NvdW50YCxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBkYXRhXG4gIH0pXG59XG5cbi8vIE9TU+mJtOadg1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE9zc1Rva2VuKCk6IFByb21pc2U8QW55T2JqZWN0PiB7XG4gIHJldHVybiBhd2FpdCBodHRwKHtcbiAgICB1cmw6IGAvdjEvb3NzYCxcbiAgICBtZXRob2Q6ICdHRVQnXG4gIH0pXG59XG5cbi8vIOWIm+W7uui0puWNlVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUJpbGwobGVkZ2VySWQ6IG51bWJlciwgZGF0YTogQW55T2JqZWN0KTogUHJvbWlzZTxBbnlPYmplY3Q+e1xuICByZXR1cm4gYXdhaXQgaHR0cCh7XG4gICAgdXJsOiBgL3YxL2xlZGdlci8ke2xlZGdlcklkfS9iaWxsYCxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBkYXRhXG4gIH0pXG59IFxuXG4vLyDotKbljZXliJfooahcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRCaWxscyhsZWRnZXJJZDogbnVtYmVyLCBxdWVyeTogQW55T2JqZWN0KTogUHJvbWlzZTxBbnlPYmplY3Q+e1xuICByZXR1cm4gYXdhaXQgaHR0cCh7XG4gICAgdXJsOiBgL3YxL2xlZGdlci8ke2xlZGdlcklkfS9iaWxsYCxcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIGRhdGE6IHF1ZXJ5XG4gIH0pXG59XG5cbi8vIOi0puWNleWIoOmZpFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbEJpbGwoYmlsbElkOiBudW1iZXIpOiBQcm9taXNlPEFueU9iamVjdD57XG4gIHJldHVybiBhd2FpdCBodHRwKHtcbiAgICB1cmw6IGAvdjEvYmlsbC8ke2JpbGxJZH1gLFxuICAgIG1ldGhvZDogJ0RFTEVURScsXG4gIH0pXG59XG5cbi8vIOabtOaWsOi0puWNlVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUJpbGwoYmlsbElkOiBudW1iZXIsIGRhdGE6IEFueU9iamVjdCk6IFByb21pc2U8QW55T2JqZWN0PntcbiAgcmV0dXJuIGF3YWl0IGh0dHAoe1xuICAgIHVybDogYC92MS9iaWxsLyR7YmlsbElkfWAsXG4gICAgbWV0aG9kOiAnUFVUJyxcbiAgICBkYXRhXG4gIH0pXG59IFxuXG5cbi8vIOa3u+WKoOaYjue7hlxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZEJpbGxEZWx0YWlsKGJpbGxJZDogbnVtYmVyLCBkYXRhOiBBbnlPYmplY3QpOiBQcm9taXNlPEFueU9iamVjdD57XG4gIHJldHVybiBhd2FpdCBodHRwKHtcbiAgICB1cmw6IGAvdjEvYmlsbC8ke2JpbGxJZH0vZGV0YWlsYCxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBkYXRhXG4gIH0pXG59XG4vLyDnvJbovpHmmI7nu4ZcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVpbGxEZWx0YWlsKElkOiBudW1iZXIsIGRhdGE6IEFueU9iamVjdCk6IFByb21pc2U8QW55T2JqZWN0PntcbiAgcmV0dXJuIGF3YWl0IGh0dHAoe1xuICAgIHVybDogYC92MS9iaWxsX2RldGFpbC8ke0lkfWAsXG4gICAgbWV0aG9kOiAnUFVUJyxcbiAgICBkYXRhXG4gIH0pXG59XG4vLyDliKDpmaTmmI7nu4ZcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxCaWxsRGVsdGFpbChJZDogbnVtYmVyKTogUHJvbWlzZTxBbnlPYmplY3Q+e1xuICByZXR1cm4gYXdhaXQgaHR0cCh7XG4gICAgdXJsOiBgL3YxL2JpbGxfZGV0YWlsLyR7SWR9YCxcbiAgICBtZXRob2Q6ICdERUxFVEUnXG4gIH0pXG59XG4vLyDmmI7nu4bliJfooahcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRCaWxsRGVsdGFpbHMoYmlsbElkOiBudW1iZXIpOiBQcm9taXNlPEFueUFycmF5PntcbiAgcmV0dXJuIGF3YWl0IGh0dHAoe1xuICAgIHVybDogYC92MS9iaWxsLyR7YmlsbElkfS9kZXRhaWxgLFxuICAgIG1ldGhvZDogJ0dFVCdcbiAgfSlcbn1cbiJdfQ==