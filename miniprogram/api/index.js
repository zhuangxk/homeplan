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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUF5QjtBQUl6QixTQUFnQixLQUFLO0lBQ25CLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtRQUNqQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ1AsT0FBTyxFQUFFLFVBQUEsR0FBRztnQkFDVixjQUFJLENBQUM7b0JBQ0gsR0FBRyxFQUFDLE9BQU87b0JBQ1gsSUFBSSxFQUFFLEVBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUU7aUJBQ3hCLEVBQUUsSUFBSSxDQUFDO3FCQUNQLElBQUksQ0FBQyxVQUFBLENBQUM7b0JBQ0gsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFBO29CQUNuQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFBO2dCQUNsQixDQUFDLENBQ0Y7cUJBQ0EsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ2hCLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDLENBQUMsQ0FBQTtBQUVKLENBQUM7QUFsQkQsc0JBa0JDO0FBRUQsU0FBc0IsY0FBYyxDQUFDLElBQWdDOzs7O3dCQUM1RCxXQUFNLGNBQUksQ0FBQzt3QkFDaEIsR0FBRyxFQUFFLFVBQVU7d0JBQ2YsTUFBTSxFQUFFLE1BQU07d0JBQ2QsSUFBSSxFQUFFLElBQUk7cUJBQ1gsQ0FBQyxFQUFBO3dCQUpGLFdBQU8sU0FJTCxFQUFBOzs7O0NBQ0g7QUFORCx3Q0FNQztBQUVELFNBQXNCLFVBQVU7Ozs7d0JBQ3ZCLFdBQU0sY0FBSSxDQUFDO3dCQUNoQixHQUFHLEVBQUUsYUFBYTt3QkFDbEIsTUFBTSxFQUFFLEtBQUs7cUJBQ2QsQ0FBQyxFQUFBO3dCQUhGLFdBQU8sU0FHTCxFQUFBOzs7O0NBQ0g7QUFMRCxnQ0FLQztBQUVELFNBQXNCLGdCQUFnQjs7Ozt3QkFDN0IsV0FBTSxjQUFJLENBQUM7d0JBQ2hCLEdBQUcsRUFBRSxtQkFBbUI7d0JBQ3hCLE1BQU0sRUFBRSxLQUFLO3FCQUNkLENBQUMsRUFBQTt3QkFIRixXQUFPLFNBR0wsRUFBQTs7OztDQUNIO0FBTEQsNENBS0M7QUFFRCxTQUFzQixZQUFZLENBQUUsRUFBVTs7Ozt3QkFDckMsV0FBTSxjQUFJLENBQUM7d0JBQ2hCLEdBQUcsRUFBRSxnQkFBYyxFQUFFLGVBQVk7d0JBQ2pDLE1BQU0sRUFBRSxLQUFLO3FCQUNkLENBQUMsRUFBQTt3QkFIRixXQUFPLFNBR0wsRUFBQTs7OztDQUNIO0FBTEQsb0NBS0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaHR0cCBmcm9tICcuL2h0dHAnXHJcblxyXG5cclxuLy8g6I635Y+WdG9rZW5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2luKCk6IFByb21pc2U8c3RyaW5nPntcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcclxuICAgIHd4LmxvZ2luKHtcclxuICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICBodHRwKHtcclxuICAgICAgICAgIHVybDonL2F1dGgnLFxyXG4gICAgICAgICAgZGF0YToge2NvZGU6IHJlcy5jb2RlIH1cclxuICAgICAgICB9LCB0cnVlKVxyXG4gICAgICAgIC50aGVuKHIgPT4ge1xyXG4gICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYyhcInRva2VuXCIsIHIudG9rZW4pXHJcbiAgICAgICAgICAgIHJlc29sdmUoci50b2tlbilcclxuICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICAgLmNhdGNoKHJlamVjdClcclxuICAgICAgfSxcclxuICAgIH0pICAgIFxyXG4gIH0pXHJcblxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBsb2FkVXNlckluZm8oZGF0YTogV2VjaGF0TWluaXByb2dyYW0uVXNlckluZm8pOiBQcm9taXNlPEFueU9iamVjdD57XHJcbiAgcmV0dXJuIGF3YWl0IGh0dHAoe1xyXG4gICAgdXJsOiAnL3YxL3VzZXInLFxyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBkYXRhOiBkYXRhXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExlZGdlcnMoKTogUHJvbWlzZTxBbnlPYmplY3Q+e1xyXG4gIHJldHVybiBhd2FpdCBodHRwKHtcclxuICAgIHVybDogJy92MS9sZWRnZXJzJyxcclxuICAgIG1ldGhvZDogJ0dFVCdcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RGVmYXVsdExlZGdlcigpOiBQcm9taXNlPEFueU9iamVjdD57XHJcbiAgcmV0dXJuIGF3YWl0IGh0dHAoe1xyXG4gICAgdXJsOiAnL3YxL2RlZmF1bHRMZWRnZXInLFxyXG4gICAgbWV0aG9kOiAnR0VUJ1xyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRCaWxsVHlwZXMoIGlkOiBudW1iZXIpOiBQcm9taXNlPEFueUFycmF5PiB7XHJcbiAgcmV0dXJuIGF3YWl0IGh0dHAoe1xyXG4gICAgdXJsOiBgL3YxL2xlZGdlci8ke2lkfS9iaWxsX3R5cGVgLFxyXG4gICAgbWV0aG9kOiAnR0VUJ1xyXG4gIH0pXHJcbn0iXX0=