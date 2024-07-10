import { Application } from 'express';

// Routes
import authRoutes from './auth';

export const router = (app: Application) => {
  //auth로 시작하는 모든 요청은 authRoutes에 정의된 라우터로 전달
  app.use('/auth', authRoutes);
};
