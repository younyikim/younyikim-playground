import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';

// Models
import User from '@/models/user';
import { generateRefreshToken, generateToken } from '@/utils/jwtUtil';

export const signIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  // 이메일 검증
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).json({ message: 'Invalid email' });
  }

  // 비밀번호 검증
  const verifyPassword = await bcrypt.compare(password, user.password);

  if (!verifyPassword) {
    return res.status(401).json({ message: 'Invalid password' });
  }

  // 사용자 인증이 완료된 경우, AccessToken과 RefreshToken 발급
  const accessToken = generateToken({ id: user._id });
  const refreshToken = generateRefreshToken();

  // 생성한 Refresh Token을 서버에 저장
  user.refreshToken = refreshToken;
  await user.save();

  // Client에 Access Token, Refresh Token 반환
  res.status(200).send({
    ok: true,
    data: {
      accessToken,
      refreshToken,
    },
  });
};
