import express from 'express';

// Controller
import { signUp } from '@/controllers/auth';

const router = express.Router();

// auth/signup 엔드포인트에 signUp 함수를 연결
router.post('/signup', signUp);

export default router;
