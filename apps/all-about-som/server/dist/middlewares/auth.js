"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
// Utils
var jwtUtil_1 = require("../utils/jwtUtil");
var verifyToken = function (req, res, next) {
    var token = req.cookies.accessToken;
    if (token) {
        var isValidToken = (0, jwtUtil_1.verifyAccessToken)(token);
        // Access Token이 검증된 경우, req에 값을 설정하고 다음 콜백함수로 전달
        if (isValidToken.success) {
            req.id = isValidToken.id;
            next();
        }
        else {
            res.status(401).send({
                success: false,
                message: isValidToken.message,
            });
        }
    }
    else {
        res.status(401).send({
            success: false,
            message: 'Invalid user',
        });
    }
};
exports.verifyToken = verifyToken;
//# sourceMappingURL=auth.js.map