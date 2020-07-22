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
function getAccounts(id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, http_1.default({
                        url: "/v1/ledger/" + id + "/accounts",
                        method: 'GET'
                    })];
                case 1: return [2, _a.sent()];
            }
        });
    });
}
exports.getAccounts = getAccounts;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUF5QjtBQUl6QixTQUFnQixLQUFLO0lBQ25CLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtRQUNqQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ1AsT0FBTyxFQUFFLFVBQUEsR0FBRztnQkFDVixjQUFJLENBQUM7b0JBQ0gsR0FBRyxFQUFDLE9BQU87b0JBQ1gsSUFBSSxFQUFFLEVBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUU7aUJBQ3hCLEVBQUUsSUFBSSxDQUFDO3FCQUNQLElBQUksQ0FBQyxVQUFBLENBQUM7b0JBQ0gsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFBO29CQUNuQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFBO2dCQUNsQixDQUFDLENBQ0Y7cUJBQ0EsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ2hCLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDLENBQUMsQ0FBQTtBQUVKLENBQUM7QUFsQkQsc0JBa0JDO0FBRUQsU0FBc0IsY0FBYyxDQUFDLElBQWdDOzs7O3dCQUM1RCxXQUFNLGNBQUksQ0FBQzt3QkFDaEIsR0FBRyxFQUFFLFVBQVU7d0JBQ2YsTUFBTSxFQUFFLE1BQU07d0JBQ2QsSUFBSSxFQUFFLElBQUk7cUJBQ1gsQ0FBQyxFQUFBO3dCQUpGLFdBQU8sU0FJTCxFQUFBOzs7O0NBQ0g7QUFORCx3Q0FNQztBQUdELFNBQXNCLFVBQVU7Ozs7d0JBQ3ZCLFdBQU0sY0FBSSxDQUFDO3dCQUNoQixHQUFHLEVBQUUsYUFBYTt3QkFDbEIsTUFBTSxFQUFFLEtBQUs7cUJBQ2QsQ0FBQyxFQUFBO3dCQUhGLFdBQU8sU0FH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ZCxDQUFDLEVBQUE7d0JBSEYsV0FBTyxTQUdMLEVBQUE7Ozs7Q0FDSDtBQUxELDBDQUtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGh0dHAgZnJvbSAnLi9odHRwJ1xyXG5cclxuXHJcbi8vIOiOt+WPlnRva2VuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2dpbigpOiBQcm9taXNlPHN0cmluZz57XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XHJcbiAgICB3eC5sb2dpbih7XHJcbiAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgaHR0cCh7XHJcbiAgICAgICAgICB1cmw6Jy9hdXRoJyxcclxuICAgICAgICAgIGRhdGE6IHtjb2RlOiByZXMuY29kZSB9XHJcbiAgICAgICAgfSwgdHJ1ZSlcclxuICAgICAgICAudGhlbihyID0+IHtcclxuICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoXCJ0b2tlblwiLCByLnRva2VuKVxyXG4gICAgICAgICAgICByZXNvbHZlKHIudG9rZW4pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5jYXRjaChyZWplY3QpXHJcbiAgICAgIH0sXHJcbiAgICB9KSAgICBcclxuICB9KVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwbG9hZFVzZXJJbmZvKGRhdGE6IFdlY2hhdE1pbmlwcm9ncmFtLlVzZXJJbmZvKTogUHJvbWlzZTxXZWNoYXRNaW5pcHJvZ3JhbS5Vc2VySW5mbz57XHJcbiAgcmV0dXJuIGF3YWl0IGh0dHAoe1xyXG4gICAgdXJsOiAnL3YxL3VzZXInLFxyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBkYXRhOiBkYXRhXHJcbiAgfSlcclxufVxyXG5cclxuLy8g6LSm5pys5YiX6KGoXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMZWRnZXJzKCk6IFByb21pc2U8QW55T2JqZWN0PntcclxuICByZXR1cm4gYXdhaXQgaHR0cCh7XHJcbiAgICB1cmw6ICcvdjEvbGVkZ2VycycsXHJcbiAgICBtZXRob2Q6ICdHRVQnXHJcbiAgfSlcclxufVxyXG5cclxuLy8g6buY6K6k6LSm5pysXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREZWZhdWx0TGVkZ2VyKCk6IFByb21pc2U8QW55T2JqZWN0PntcclxuICByZXR1cm4gYXdhaXQgaHR0cCh7XHJcbiAgICB1cmw6ICcvdjEvZGVmYXVsdExlZGdlcicsXHJcbiAgICBtZXRob2Q6ICdHRVQnXHJcbiAgfSlcclxufVxyXG5cclxuLy8g6LSm5Y2V57G75Z6L5YiX6KGoXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRCaWxsVHlwZXMoIGlkOiBudW1iZXIpOiBQcm9taXNlPEFueUFycmF5PiB7XHJcbiAgcmV0dXJuIGF3YWl0IGh0dHAoe1xyXG4gICAgdXJsOiBgL3YxL2xlZGdlci8ke2lkfS9iaWxsX3R5cGVgLFxyXG4gICAgbWV0aG9kOiAnR0VUJ1xyXG4gIH0pXHJcbn1cclxuXHJcbi8vIOi0puWNleexu+Wei+a3u+WKoFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkQmlsbFR5cGUoIGxlZGdlcklEOiBudW1iZXIsIGRhdGE6IEFueU9iamVjdCk6IFByb21pc2U8QW55T2JqZWN0PiB7XHJcbiAgcmV0dXJuIGF3YWl0IGh0dHAoe1xyXG4gICAgdXJsOiBgL3YxL2xlZGdlci8ke2xlZGdlcklEfS9iaWxsX3R5cGVgLFxyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBkYXRhXHJcbiAgfSlcclxufVxyXG5cclxuLy8g6LSm5Y2V57G75Z6L5Yig6ZmkXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxCaWxsVHlwZSggaWQ6IG51bWJlcik6IFByb21pc2U8QW55T2JqZWN0PiB7XHJcbiAgcmV0dXJuIGF3YWl0IGh0dHAoe1xyXG4gICAgdXJsOiBgL3YxL2JpbGxfdHlwZS8ke2lkfWAsXHJcbiAgICBtZXRob2Q6ICdERUxFVEUnXHJcbiAgfSlcclxufVxyXG5cclxuLy8g6LSm5Y2V57G75Z6L5pu05pawXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVCaWxsVHlwZSggaWQ6IG51bWJlciwgZGF0YTogQW55T2JqZWN0KTogUHJvbWlzZTxBbnlPYmplY3Q+IHtcclxuICByZXR1cm4gYXdhaXQgaHR0cCh7XHJcbiAgICB1cmw6IGAvdjEvYmlsbF90eXBlLyR7aWR9YCxcclxuICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICBkYXRhXHJcbiAgfSlcclxufVxyXG5cclxuLy8g6LSm5Y2V57G75Z6L5o6S5bqPXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzb3J0QmlsbFR5cGUoZGF0YTogQW55T2JqZWN0KTogUHJvbWlzZTxBbnlPYmplY3Q+IHtcclxuICByZXR1cm4gYXdhaXQgaHR0cCh7XHJcbiAgICB1cmw6IGAvdjEvYmlsbF90eXBlL3NvcnRgLFxyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBkYXRhXHJcbiAgfSlcclxufVxyXG5cclxuLy8g6LSm5oi35YiX6KGoXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBY2NvdW50cyggaWQ6IG51bWJlcik6IFByb21pc2U8QW55QXJyYXk+IHtcclxuICByZXR1cm4gYXdhaXQgaHR0cCh7XHJcbiAgICB1cmw6IGAvdjEvbGVkZ2VyLyR7aWR9L2FjY291bnRzYCxcclxuICAgIG1ldGhvZDogJ0dFVCdcclxuICB9KVxyXG59XHJcblxyXG4vLyBPU1PpibTmnYNcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE9zc1Rva2VuKCk6IFByb21pc2U8QW55T2JqZWN0PiB7XHJcbiAgcmV0dXJuIGF3YWl0IGh0dHAoe1xyXG4gICAgdXJsOiBgL3YxL29zc2AsXHJcbiAgICBtZXRob2Q6ICdHRVQnXHJcbiAgfSlcclxufVxyXG5cclxuLy8g5Yib5bu66LSm5Y2VXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVCaWxsKGxlZGdlcklkOiBudW1iZXIsIGRhdGE6IEFueU9iamVjdCk6IFByb21pc2U8QW55T2JqZWN0PntcclxuICByZXR1cm4gYXdhaXQgaHR0cCh7XHJcbiAgICB1cmw6IGAvdjEvbGVkZ2VyLyR7bGVkZ2VySWR9L2JpbGxgLFxyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBkYXRhXHJcbiAgfSlcclxufSBcclxuXHJcbi8vIOi0puWNleWIl+ihqFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QmlsbHMobGVkZ2VySWQ6IG51bWJlciwgcXVlcnk6IEFueU9iamVjdCk6IFByb21pc2U8QW55T2JqZWN0PntcclxuICByZXR1cm4gYXdhaXQgaHR0cCh7XHJcbiAgICB1cmw6IGAvdjEvbGVkZ2VyLyR7bGVkZ2VySWR9L2JpbGxgLFxyXG4gICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIGRhdGE6IHF1ZXJ5XHJcbiAgfSlcclxufVxyXG5cclxuLy8g6LSm5Y2V5Yig6ZmkXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxCaWxsKGJpbGxJZDogbnVtYmVyKTogUHJvbWlzZTxBbnlPYmplY3Q+e1xyXG4gIHJldHVybiBhd2FpdCBodHRwKHtcclxuICAgIHVybDogYC92MS9iaWxsLyR7YmlsbElkfWAsXHJcbiAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gIH0pXHJcbn1cclxuXHJcbi8vIOabtOaWsOi0puWNlVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQmlsbChiaWxsSWQ6IG51bWJlciwgZGF0YTogQW55T2JqZWN0KTogUHJvbWlzZTxBbnlPYmplY3Q+e1xyXG4gIHJldHVybiBhd2FpdCBodHRwKHtcclxuICAgIHVybDogYC92MS9iaWxsLyR7YmlsbElkfWAsXHJcbiAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgZGF0YVxyXG4gIH0pXHJcbn0gXHJcblxyXG5cclxuLy8g5re75Yqg5piO57uGXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRCaWxsRGVsdGFpbChiaWxsSWQ6IG51bWJlciwgZGF0YTogQW55T2JqZWN0KTogUHJvbWlzZTxBbnlPYmplY3Q+e1xyXG4gIHJldHVybiBhd2FpdCBodHRwKHtcclxuICAgIHVybDogYC92MS9iaWxsLyR7YmlsbElkfS9kZXRhaWxgLFxyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBkYXRhXHJcbiAgfSlcclxufVxyXG4vLyDnvJbovpHmmI7nu4ZcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZWlsbERlbHRhaWwoSWQ6IG51bWJlciwgZGF0YTogQW55T2JqZWN0KTogUHJvbWlzZTxBbnlPYmplY3Q+e1xyXG4gIHJldHVybiBhd2FpdCBodHRwKHtcclxuICAgIHVybDogYC92MS9iaWxsX2RldGFpbC8ke0lkfWAsXHJcbiAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgZGF0YVxyXG4gIH0pXHJcbn1cclxuLy8g5Yig6Zmk5piO57uGXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxCaWxsRGVsdGFpbChJZDogbnVtYmVyKTogUHJvbWlzZTxBbnlPYmplY3Q+e1xyXG4gIHJldHVybiBhd2FpdCBodHRwKHtcclxuICAgIHVybDogYC92MS9iaWxsX2RldGFpbC8ke0lkfWAsXHJcbiAgICBtZXRob2Q6ICdERUxFVEUnXHJcbiAgfSlcclxufVxyXG4vLyDmmI7nu4bliJfooahcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEJpbGxEZWx0YWlscyhiaWxsSWQ6IG51bWJlcik6IFByb21pc2U8QW55QXJyYXk+e1xyXG4gIHJldHVybiBhd2FpdCBodHRwKHtcclxuICAgIHVybDogYC92MS9iaWxsLyR7YmlsbElkfS9kZXRhaWxgLFxyXG4gICAgbWV0aG9kOiAnR0VUJ1xyXG4gIH0pXHJcbn1cclxuIl19