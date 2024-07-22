import { Application } from 'express';

// Routes
import authRoutes from './auth';
import statusRoutes from './status';

// Middlewares
import { verifyToken } from '../middlewares';

export const router = (app: Application) => {
  app.get('/', (_, res) => res.send({ message: 'Express on Vercel' }));
  //auth로 시작하는 모든 요청은 authRoutes에 정의된 라우터로 전달
  app.use('/api/auth', authRoutes);
  app.use('/api/status', statusRoutes);
  app.get('/api/test', verifyToken, (_, res) => {
    res.send('Hello from server!');
  });
};
