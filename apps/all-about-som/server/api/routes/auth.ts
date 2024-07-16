import express from 'express';

// Controller
import {
  signUp,
  signIn,
  token,
  signOut,
  verifySignIn,
} from '../controllers/auth';

const router = express.Router();

// auth/signup 엔드포인트에 signUp 함수를 연결
router.post('/sign-up', signUp);
router.post('/sign-in', signIn);
router.post('/sign-out', signOut);
router.post('/token', token);
router.get('/verify', verifySignIn);

export default router;
