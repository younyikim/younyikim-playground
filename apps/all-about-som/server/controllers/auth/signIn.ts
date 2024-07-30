import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';

// Models
import User from '../../models/user';

// Utils
import {
  generateRefreshToken,
  generateToken,
  sendSuccess,
  sendUnauthorized,
} from '../../utils';

const isProduction = process.env.NODE_ENV === 'production';

export const signIn = async (req: Request, res: Response) => {
  const { userId, password } = req.body;

  // 이메일 검증
  const user = await User.findOne({ userId });

  if (!user) {
    return sendUnauthorized(res, 'Invalid userId');
  }

  // 비밀번호 검증
  const verifyPassword = await bcrypt.compare(password, user.password);

  if (!verifyPassword) {
    return sendUnauthorized(res, 'Invalid password');
  }

  // 사용자 인증이 완료된 경우, AccessToken과 RefreshToken 발급
  const accessToken = generateToken({ id: user._id });
  const refreshToken = generateRefreshToken();

  // 생성한 Refresh Token을 서버에 저장
  user.refreshToken = refreshToken;
  await user.save();

  // Access Token, Refresh Token을 cookie에 저장
  res.cookie('accessToken', accessToken, {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? 'none' : 'lax',
    path: '/',
  });
  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? 'none' : 'lax',
    path: '/',
  });

  sendSuccess(res, 'Logged in successfully');
};
