import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { IToken } from 'models/typings/token';

dotenv.config();

const JWT_KEY = process.env.JWT_KEY ?? 'jwt_key';

// JWT 토큰 생성
const generateToken = (payload: string | Buffer | object) => {
  return jwt.sign(payload, JWT_KEY, { expiresIn: '1h' });
};

// Refresh Token 생성
const generateRefreshToken = (token: string) => {
  try {
    // 기존 토큰의 유효성 검사 및 디코딩
    const decoded = jwt.verify(token, JWT_KEY) as IToken;

    if (decoded.user_id) {
      const payload = {
        user_id: decoded.user_id,
      };

      return generateToken(payload);
    }

    // user_id 정보가 존재하지 않는 경우
    console.error('Invalid token');
    return null;
  } catch (error) {
    console.error('Error refreshing token:', error);
    return null;
  }
};

export { generateToken, generateRefreshToken };
