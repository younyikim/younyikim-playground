"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyRefreshToken = exports.verifyAccessToken = exports.generateRefreshToken = exports.generateToken = void 0;
var jsonwebtoken_1 = __importStar(require("jsonwebtoken"));
var dotenv_1 = __importDefault(require("dotenv"));
// Models
var user_1 = __importDefault(require("../models/user"));
dotenv_1.default.config();
var JWT_KEY = (_a = process.env.JWT_KEY) !== null && _a !== void 0 ? _a : 'jwt_key';
// Access Token 생성
var generateToken = function (payload) {
    return jsonwebtoken_1.default.sign(payload, JWT_KEY, {
        algorithm: 'HS256', // 암호화 알고리즘
        expiresIn: '1h', // 유효기간
    });
};
exports.generateToken = generateToken;
// Refresh Token 생성
var generateRefreshToken = function () {
    // Refresh Token은 보안성과 성능을 위해 payload 없이 발급
    return jsonwebtoken_1.default.sign({}, JWT_KEY, {
        algorithm: 'HS256', // 암호화 알고리즘,
        expiresIn: '14d', // 유효기간
    });
};
exports.generateRefreshToken = generateRefreshToken;
// Access Token 검증
var verifyAccessToken = function (token) {
    try {
        var decoded = jsonwebtoken_1.default.verify(token, JWT_KEY);
        return {
            success: true,
            id: decoded.id,
        };
    }
    catch (error) {
        if (error instanceof jsonwebtoken_1.TokenExpiredError) {
            return {
                success: false,
                message: 'Token expired',
            };
        }
        else {
            return {
                success: false,
                message: error,
            };
        }
    }
};
exports.verifyAccessToken = verifyAccessToken;
// Refresh Token 검증
var verifyRefreshToken = function (token, id) {
    try {
        jsonwebtoken_1.default.verify(token, JWT_KEY);
        user_1.default.findOne({ _id: id }).then(function (data) {
            if (!data || data.refreshToken !== token) {
                return false;
            }
        });
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.verifyRefreshToken = verifyRefreshToken;
//# sourceMappingURL=jwtUtil.js.map