"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("./http");
function login(code) {
    return http_1.default('/v1/login', {
        data: { code: code }
    });
}
exports.login = login;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQXlCO0FBRXpCLFNBQWdCLEtBQUssQ0FBQyxJQUFZO0lBQ2hDLE9BQU8sY0FBSSxDQUFDLFdBQVcsRUFBRTtRQUN2QixJQUFJLEVBQUUsRUFBQyxJQUFJLE1BQUEsRUFBQztLQUNiLENBQUMsQ0FBQTtBQUNKLENBQUM7QUFKRCxzQkFJQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBodHRwIGZyb20gJy4vaHR0cCdcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2dpbihjb2RlOiBTdHJpbmcpe1xyXG4gIHJldHVybiBodHRwKCcvdjEvbG9naW4nLCB7XHJcbiAgICBkYXRhOiB7Y29kZX1cclxuICB9KVxyXG59Il19