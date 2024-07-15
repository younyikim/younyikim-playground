"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
// Routes
var auth_1 = __importDefault(require("./auth"));
var status_1 = __importDefault(require("./status"));
// Middlewares
var middlewares_1 = require("../middlewares");
var router = function (app) {
    app.get('/', function (_, res) { return res.send('Express on Vercel'); });
    //auth로 시작하는 모든 요청은 authRoutes에 정의된 라우터로 전달
    app.use('/auth', auth_1.default);
    app.use('/status', status_1.default);
    app.get('/api', middlewares_1.verifyToken, function (_, res) {
        res.send({ message: 'Hello from server!' });
    });
};
exports.router = router;
//# sourceMappingURL=index.js.map