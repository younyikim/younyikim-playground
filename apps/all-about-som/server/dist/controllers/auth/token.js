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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.token = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// Utils
var utils_1 = require("../../utils");
var isProduction = process.env.NODE_ENV === 'production';
var token = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var accessToken, refreshToken, authVerfiedResult, decoded, refreshVerifiedResult, newAccessToken;
    return __generator(this, function (_a) {
        // Headers에 Access Token, Refresh Token 존재 여부 확인
        if (req.cookies.accessToken && req.cookies.refreshToken) {
            accessToken = req.cookies.accessToken;
            refreshToken = req.cookies.refreshToken;
            authVerfiedResult = (0, utils_1.verifyAccessToken)(accessToken);
            decoded = jsonwebtoken_1.default.decode(accessToken);
            // 유저 정보가 존재하지 않으면, 권한 없음 응답
            if (decoded === null) {
                res.status(401).send({
                    success: false,
                    message: 'Unauthorized User',
                });
            }
            refreshVerifiedResult = (0, utils_1.verifyRefreshToken)(refreshToken, decoded.id);
            // Access Token이 만료된 경우
            if (authVerfiedResult.success === false &&
                (authVerfiedResult === null || authVerfiedResult === void 0 ? void 0 : authVerfiedResult.message) &&
                authVerfiedResult.message === 'Token expired') {
                // 1. Access Token과 Refresh Token 모두 만료된 경우 -> 재로그인
                if (!refreshVerifiedResult) {
                    res.status(401).send({
                        success: false,
                        message: 'Unauthorized User : Refresh Token expired',
                    });
                }
                else {
                    newAccessToken = (0, utils_1.generateToken)({ id: decoded.id });
                    res.cookie('accessToken', newAccessToken, {
                        httpOnly: true,
                        secure: isProduction,
                        sameSite: 'strict',
                    });
                    res.status(200).json({
                        success: true,
                        message: 'Access token successfully refreshed',
                    });
                }
            }
            else {
                // 3. Access Token이 만료되지 않은 경우 => 재발급 필요하지 않음
                res.status(400).send({
                    success: false,
                    message: 'Acess token is not expired!',
                });
            }
        }
        else {
            // Headers에 Access Token이나 Refresh Token이 존재하지 않는 경우
            res.status(400).send({
                success: false,
                message: 'Access Token or Refresh Token is missing in headers.',
            });
        }
        return [2 /*return*/];
    });
}); };
exports.token = token;
//# sourceMappingURL=token.js.map