"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// Middleware
var middlewares_1 = require("../middlewares");
var router = express_1.default.Router();
// 현재 솜이 위치 정보
router.get('/status', middlewares_1.verifyToken, function () { });
exports.default = router;
//# sourceMappingURL=status.js.map