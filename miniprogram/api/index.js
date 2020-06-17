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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUF5QjtBQUl6QixTQUFnQixLQUFLO0lBQ25CLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtRQUNqQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ1AsT0FBTyxFQUFFLFVBQUEsR0FBRztnQkFDVixjQUFJLENBQUM7b0JBQ0gsR0FBRyxFQUFDLE9BQU87b0JBQ1gsSUFBSSxFQUFFLEVBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUU7aUJBQ3hCLEVBQUUsSUFBSSxDQUFDO3FCQUNQLElBQUksQ0FBQyxVQUFBLENBQUM7b0JBQ0gsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFBO29CQUNuQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFBO2dCQUNsQixDQUFDLENBQ0Y7cUJBQ0EsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ2hCLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDLENBQUMsQ0FBQTtBQUVKLENBQUM7QUFsQkQsc0JBa0JDO0FBRUQsU0FBc0IsY0FBYyxDQUFDLElBQWdDOzs7O3dCQUM1RCxXQUFNLGNBQUksQ0FBQzt3QkFDaEIsR0FBRyxFQUFFLFVBQVU7d0JBQ2YsTUFBTSxFQUFFLE1BQU07d0JBQ2QsSUFBSSxFQUFFLElBQUk7cUJBQ1gsQ0FBQyxFQUFBO3dCQUpGLFdBQU8sU0FJTCxFQUFBOzs7O0NBQ0g7QUFORCx3Q0FNQztBQUdELFNBQXNCLFVBQVU7Ozs7d0JBQ3ZCLFdBQU0sY0FBSSxDQUFDO3dCQUNoQixHQUFHLEVBQUUsYUFBYTt3QkFDbEIsTUFBTSxFQUFFLEtBQUs7cUJBQ2QsQ0FBQyxFQUFBO3dCQUhGLFdBQU8sU0FH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QkFBbUIsRUFBSTt3QkFDNUIsTUFBTSxFQUFFLFFBQVE7cUJBQ2pCLENBQUMsRUFBQTt3QkFIRixXQUFPLFNBR0wsRUFBQTs7OztDQUNIO0FBTEQsd0NBS0M7QUFFRCxTQUFzQixlQUFlLENBQUMsTUFBYzs7Ozt3QkFDM0MsV0FBTSxjQUFJLENBQUM7d0JBQ2hCLEdBQUcsRUFBRSxjQUFZLE1BQU0sWUFBUzt3QkFDaEMsTUFBTSxFQUFFLEtBQUs7cUJBQ2QsQ0FBQyxFQUFBO3dCQUhGLFdBQU8sU0FHTCxFQUFBOzs7O0NBQ0g7QUFMRCwwQ0FLQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBodHRwIGZyb20gJy4vaHR0cCdcclxuXHJcblxyXG4vLyDojrflj5Z0b2tlblxyXG5leHBvcnQgZnVuY3Rpb24gbG9naW4oKTogUHJvbWlzZTxzdHJpbmc+e1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xyXG4gICAgd3gubG9naW4oe1xyXG4gICAgICBzdWNjZXNzOiByZXMgPT4ge1xyXG4gICAgICAgIGh0dHAoe1xyXG4gICAgICAgICAgdXJsOicvYXV0aCcsXHJcbiAgICAgICAgICBkYXRhOiB7Y29kZTogcmVzLmNvZGUgfVxyXG4gICAgICAgIH0sIHRydWUpXHJcbiAgICAgICAgLnRoZW4ociA9PiB7XHJcbiAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKFwidG9rZW5cIiwgci50b2tlbilcclxuICAgICAgICAgICAgcmVzb2x2ZShyLnRva2VuKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgICAgICAuY2F0Y2gocmVqZWN0KVxyXG4gICAgICB9LFxyXG4gICAgfSkgICAgXHJcbiAgfSlcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGxvYWRVc2VySW5mbyhkYXRhOiBXZWNoYXRNaW5pcHJvZ3JhbS5Vc2VySW5mbyk6IFByb21pc2U8V2VjaGF0TWluaXByb2dyYW0uVXNlckluZm8+e1xyXG4gIHJldHVybiBhd2FpdCBodHRwKHtcclxuICAgIHVybDogJy92MS91c2VyJyxcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgZGF0YTogZGF0YVxyXG4gIH0pXHJcbn1cclxuXHJcbi8vIOi0puacrOWIl+ihqFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TGVkZ2VycygpOiBQcm9taXNlPEFueU9iamVjdD57XHJcbiAgcmV0dXJuIGF3YWl0IGh0dHAoe1xyXG4gICAgdXJsOiAnL3YxL2xlZGdlcnMnLFxyXG4gICAgbWV0aG9kOiAnR0VUJ1xyXG4gIH0pXHJcbn1cclxuXHJcbi8vIOm7mOiupOi0puacrFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RGVmYXVsdExlZGdlcigpOiBQcm9taXNlPEFueU9iamVjdD57XHJcbiAgcmV0dXJuIGF3YWl0IGh0dHAoe1xyXG4gICAgdXJsOiAnL3YxL2RlZmF1bHRMZWRnZXInLFxyXG4gICAgbWV0aG9kOiAnR0VUJ1xyXG4gIH0pXHJcbn1cclxuXHJcbi8vIOi0puacrOexu+Wei+WIl+ihqFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QmlsbFR5cGVzKCBpZDogbnVtYmVyKTogUHJvbWlzZTxBbnlBcnJheT4ge1xyXG4gIHJldHVybiBhd2FpdCBodHRwKHtcclxuICAgIHVybDogYC92MS9sZWRnZXIvJHtpZH0vYmlsbF90eXBlYCxcclxuICAgIG1ldGhvZDogJ0dFVCdcclxuICB9KVxyXG59XHJcblxyXG4vLyDotKbmiLfliJfooahcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFjY291bnRzKCBpZDogbnVtYmVyKTogUHJvbWlzZTxBbnlBcnJheT4ge1xyXG4gIHJldHVybiBhd2FpdCBodHRwKHtcclxuICAgIHVybDogYC92MS9sZWRnZXIvJHtpZH0vYWNjb3VudHNgLFxyXG4gICAgbWV0aG9kOiAnR0VUJ1xyXG4gIH0pXHJcbn1cclxuXHJcbi8vIE9TU+mJtOadg1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0T3NzVG9rZW4oKTogUHJvbWlzZTxBbnlPYmplY3Q+IHtcclxuICByZXR1cm4gYXdhaXQgaHR0cCh7XHJcbiAgICB1cmw6IGAvdjEvb3NzYCxcclxuICAgIG1ldGhvZDogJ0dFVCdcclxuICB9KVxyXG59XHJcblxyXG4vLyDliJvlu7rotKbljZVcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUJpbGwobGVkZ2VySWQ6IG51bWJlciwgZGF0YTogQW55T2JqZWN0KTogUHJvbWlzZTxBbnlPYmplY3Q+e1xyXG4gIHJldHVybiBhd2FpdCBodHRwKHtcclxuICAgIHVybDogYC92MS9sZWRnZXIvJHtsZWRnZXJJZH0vYmlsbGAsXHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGRhdGFcclxuICB9KVxyXG59IFxyXG5cclxuLy8g6LSm5Y2V5YiX6KGoXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRCaWxscyhsZWRnZXJJZDogbnVtYmVyLCBxdWVyeTogQW55T2JqZWN0KTogUHJvbWlzZTxBbnlPYmplY3Q+e1xyXG4gIHJldHVybiBhd2FpdCBodHRwKHtcclxuICAgIHVybDogYC92MS9sZWRnZXIvJHtsZWRnZXJJZH0vYmlsbGAsXHJcbiAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgZGF0YTogcXVlcnlcclxuICB9KVxyXG59XHJcblxyXG4vLyDotKbljZXliKDpmaRcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbEJpbGwoYmlsbElkOiBudW1iZXIpOiBQcm9taXNlPEFueU9iamVjdD57XHJcbiAgcmV0dXJuIGF3YWl0IGh0dHAoe1xyXG4gICAgdXJsOiBgL3YxL2JpbGwvJHtiaWxsSWR9YCxcclxuICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgfSlcclxufVxyXG5cclxuLy8g5pu05paw6LSm5Y2VXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVCaWxsKGJpbGxJZDogbnVtYmVyLCBkYXRhOiBBbnlPYmplY3QpOiBQcm9taXNlPEFueU9iamVjdD57XHJcbiAgcmV0dXJuIGF3YWl0IGh0dHAoe1xyXG4gICAgdXJsOiBgL3YxL2JpbGwvJHtiaWxsSWR9YCxcclxuICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICBkYXRhXHJcbiAgfSlcclxufSBcclxuXHJcblxyXG4vLyDmt7vliqDmmI7nu4ZcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZEJpbGxEZWx0YWlsKGJpbGxJZDogbnVtYmVyLCBkYXRhOiBBbnlPYmplY3QpOiBQcm9taXNlPEFueU9iamVjdD57XHJcbiAgcmV0dXJuIGF3YWl0IGh0dHAoe1xyXG4gICAgdXJsOiBgL3YxL2JpbGwvJHtiaWxsSWR9L2RldGFpbGAsXHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGRhdGFcclxuICB9KVxyXG59XHJcbi8vIOe8lui+keaYjue7hlxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlaWxsRGVsdGFpbChJZDogbnVtYmVyLCBkYXRhOiBBbnlPYmplY3QpOiBQcm9taXNlPEFueU9iamVjdD57XHJcbiAgcmV0dXJuIGF3YWl0IGh0dHAoe1xyXG4gICAgdXJsOiBgL3YxL2JpbGxfZGV0YWlsLyR7SWR9YCxcclxuICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICBkYXRhXHJcbiAgfSlcclxufVxyXG4vLyDliKDpmaTmmI7nu4ZcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbEJpbGxEZWx0YWlsKElkOiBudW1iZXIpOiBQcm9taXNlPEFueU9iamVjdD57XHJcbiAgcmV0dXJuIGF3YWl0IGh0dHAoe1xyXG4gICAgdXJsOiBgL3YxL2JpbGxfZGV0YWlsLyR7SWR9YCxcclxuICAgIG1ldGhvZDogJ0RFTEVURSdcclxuICB9KVxyXG59XHJcbi8vIOaYjue7huWIl+ihqFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QmlsbERlbHRhaWxzKGJpbGxJZDogbnVtYmVyKTogUHJvbWlzZTxBbnlBcnJheT57XHJcbiAgcmV0dXJuIGF3YWl0IGh0dHAoe1xyXG4gICAgdXJsOiBgL3YxL2JpbGwvJHtiaWxsSWR9L2RldGFpbGAsXHJcbiAgICBtZXRob2Q6ICdHRVQnXHJcbiAgfSlcclxufVxyXG4iXX0=