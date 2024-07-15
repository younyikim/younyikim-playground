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
exports.signUp = void 0;
var bcryptjs_1 = __importDefault(require("bcryptjs"));
// models
var user_1 = __importDefault(require("../../models/user"));
// User를 객체화하고 DB에 저장하는 함수
var createUserData = function (userInput) { return __awaiter(void 0, void 0, void 0, function () {
    var user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, userWithEncodePassword(userInput)];
            case 1:
                user = _a.sent();
                return [2 /*return*/, user.save()];
        }
    });
}); };
var userWithEncodePassword = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var hashedPassword, user;
    var userId = _b.userId, password = _b.password, name = _b.name;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, bcryptjs_1.default.hash(password, 12)];
            case 1:
                hashedPassword = _c.sent();
                user = new user_1.default({
                    userId: userId,
                    password: hashedPassword,
                    name: name,
                    refreshToken: null,
                });
                return [2 /*return*/, user];
        }
    });
}); };
var signUp = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, user, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                userId = req.body.userId;
                return [4 /*yield*/, user_1.default.findOne({ userId: userId })];
            case 1:
                user = _a.sent();
                if (user) {
                    throw new Error("\uC774\uBBF8 \uC874\uC7AC\uD558\uB294 \uC774\uBA54\uC77C\uC785\uB2C8\uB2E4. \uB2E4\uC2DC \uC785\uB825\uD574\uC8FC\uC138\uC694.");
                }
                return [4 /*yield*/, createUserData(req.body)];
            case 2:
                _a.sent();
                // 유저 생성 성공
                res.status(201).json({ message: 'User created' });
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.error('Error Sign Up:', error_1);
                return [2 /*return*/, null];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.signUp = signUp;
//# sourceMappingURL=signUp.js.map