"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("./http");
function login(code) {
    return http_1.default({
        url: '/auth',
        data: { code: code }
    });
}
exports.login = login;
function uploadUserInfo(data) {
    return http_1.default({
        url: '/v1/user',
        method: 'POST',
        data: data
    });
}
exports.uploadUserInfo = uploadUserInfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUF5QjtBQUV6QixTQUFnQixLQUFLLENBQUMsSUFBWTtJQUNoQyxPQUFPLGNBQUksQ0FBQztRQUNWLEdBQUcsRUFBQyxPQUFPO1FBQ1gsSUFBSSxFQUFFLEVBQUMsSUFBSSxNQUFBLEVBQUM7S0FDYixDQUFDLENBQUE7QUFDSixDQUFDO0FBTEQsc0JBS0M7QUFFRCxTQUFnQixjQUFjLENBQUMsSUFBZ0M7SUFDN0QsT0FBTyxjQUFJLENBQUU7UUFDWCxHQUFHLEVBQUUsVUFBVTtRQUNmLE1BQU0sRUFBRSxNQUFNO1FBQ2QsSUFBSSxFQUFFLElBQUk7S0FDWCxDQUFDLENBQUE7QUFDSixDQUFDO0FBTkQsd0NBTUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaHR0cCBmcm9tICcuL2h0dHAnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9naW4oY29kZTogc3RyaW5nKTogUHJvbWlzZTxGdW5jdGlvbj57XHJcbiAgcmV0dXJuIGh0dHAoe1xyXG4gICAgdXJsOicvYXV0aCcsXHJcbiAgICBkYXRhOiB7Y29kZX1cclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBsb2FkVXNlckluZm8oZGF0YTogV2VjaGF0TWluaXByb2dyYW0uVXNlckluZm8pOiBQcm9taXNlPEZ1bmN0aW9uPntcclxuICByZXR1cm4gaHR0cCgge1xyXG4gICAgdXJsOiAnL3YxL3VzZXInLFxyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBkYXRhOiBkYXRhXHJcbiAgfSlcclxufSJdfQ==