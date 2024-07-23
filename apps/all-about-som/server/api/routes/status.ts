import express from 'express';

// Middleware
import { verifyToken } from '../../middlewares';

const router = express.Router();

// 현재 솜이 위치 정보
router.get('/', verifyToken, (_, res) => res.send({ message: '/status api' }));

export default router;
