import express from 'express';

// Controller
import { signUp, signIn, token, signOut } from '@/controllers/auth';

const router = express.Router();

// auth/signup 엔드포인트에 signUp 함수를 연결
router.post('/signup', signUp);
router.post('/signin', signIn);
router.post('/signout', signOut);
router.post('/token', token);

export default router;
