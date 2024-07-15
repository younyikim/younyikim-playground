"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var http_1 = __importDefault(require("http"));
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var compression_1 = __importDefault(require("compression"));
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("dotenv"));
var mongoose_1 = __importDefault(require("mongoose"));
// Routes
var routes_1 = require("./routes");
// dotenv 모듈을 사용해 환경변수 로드
dotenv_1.default.config();
// Express 애플리케이션 생성 및 변수 할당
var app = (0, express_1.default)();
app.use((0, cors_1.default)({
    credentials: true,
}));
app.use((0, compression_1.default)());
app.use((0, cookie_parser_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
(0, routes_1.router)(app);
var server = http_1.default.createServer(app);
var PORT = process.env.PORT || 3000;
server.listen(PORT, function () {
    console.log("Server running on http://localhost:".concat(PORT));
});
// Mongo DB 연결
var MONGODB_URL = (_a = process.env.MONGODB_URL) !== null && _a !== void 0 ? _a : '';
mongoose_1.default
    .connect(MONGODB_URL)
    .then(function () { return console.log('Connected to MongoDB'); })
    .catch(function (err) { return console.log(err); });
exports.default = app;
//# sourceMappingURL=app.js.map