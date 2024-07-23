import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import comperssion from 'compression';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

// Routes
import { router } from './routes';

// dotenv 모듈을 사용해 환경변수 로드
dotenv.config();

// Express 애플리케이션 생성 및 변수 할당
const app = express();

app.use(
  cors({
    credentials: true,
  }),
);

app.use(comperssion());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router(app);

const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Mongo DB 연결
const MONGODB_URI = process.env.MONGODB_URI ?? '';

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

module.exports = app;
