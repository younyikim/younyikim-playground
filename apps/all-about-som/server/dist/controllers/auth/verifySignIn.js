"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifySignIn = void 0;
// Controller
var auth_1 = require("../../controllers/auth");
// Utils
var utils_1 = require("../../utils");
/**
 * @description 유저의 로그인 여부를 판별
 * @param req
 * @param res
 * @returns
 */
var verifySignIn = function (req, res) {
    if (req.cookies.accessToken) {
        var accessToken = req.cookies.accessToken;
        var authVerifiedResult = (0, utils_1.verifyAccessToken)(accessToken);
        // Access Token이 유효하지 않은 경우
        if (authVerifiedResult.success === false) {
            // Access Token 재발급 요청
            if ((authVerifiedResult === null || authVerifiedResult === void 0 ? void 0 : authVerifiedResult.message) &&
                authVerifiedResult.message === 'Token expired') {
                (0, auth_1.token)(req, res);
                return;
            }
            return res.status(401).send({ message: 'Unauthorized user' });
        }
        // 유효한 경우
        return res.status(200).send({
            success: true,
            message: 'Authorized user',
        });
    }
    else {
        // Access Token이 존재하지 않는 경우
        return res.status(401).send({ message: 'Unauthorized user' });
    }
};
exports.verifySignIn = verifySignIn;
//# sourceMappingURL=verifySignIn.js.map