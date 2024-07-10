import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Payload } from '../models/typings/token';

dotenv.config();

const JWT_KEY = process.env.JWT_KEY ?? 'jwt_key';

// 토큰 검증 함수
const verifyToken = (token: string) => {
  // 기존 토큰 유효성 검사(디코딩된 페이로드 반환)
  return jwt.verify(token, JWT_KEY) as Payload;
};

// Access Token 생성
const generateToken = (payload: Payload) => {
  return jwt.sign(payload, JWT_KEY, { expiresIn: '1h' });
};

// Refresh Token 생성
const generateRefreshToken = (token: string) => {
  try {
    if (verifyToken(token)?.user_id) {
      // Refresh Token은 보안성과 성능을 위해 payload 없이 발급
      return jwt.sign({}, JWT_KEY, { expiresIn: '14d' });
    }

    // user_id 정보가 존재하지 않는 경우
    console.error('Invalid token');
    return null;
  } catch (error) {
    console.error('Error refreshing token:', error);
    return null;
  }
};

export { generateToken, generateRefreshToken, verifyToken };
