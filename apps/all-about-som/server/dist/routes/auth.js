"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// Controller
var auth_1 = require("../controllers/auth");
var router = express_1.default.Router();
// auth/signup 엔드포인트에 signUp 함수를 연결
router.post('/sign-up', auth_1.signUp);
router.post('/sign-in', auth_1.signIn);
router.post('/sign-out', auth_1.signOut);
router.post('/token', auth_1.token);
router.get('/verify', auth_1.verifySignIn);
exports.default = router;
//# sourceMappingURL=auth.js.map