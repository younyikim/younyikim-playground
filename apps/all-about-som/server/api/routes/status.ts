import express from 'express';

// Middleware
import { verifyToken } from '../../middlewares';

// Controllers
import { updateStatus } from '../../controllers/status';

const router = express.Router();

// 현재 솜이 위치 정보
router.patch('/', verifyToken, updateStatus);

export default router;
