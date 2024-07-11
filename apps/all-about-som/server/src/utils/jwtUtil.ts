import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

// Models
import User from '@/models/user';

// Typings
import { TokenPayload } from '@/models/typings/user';

dotenv.config();

const JWT_KEY = process.env.JWT_KEY ?? 'jwt_key';

// Access Token 생성
const generateToken = (payload: TokenPayload) => {
  return jwt.sign(payload, JWT_KEY, {
    algorithm: 'HS256', // 암호화 알고리즘
    expiresIn: '1h', // 유효기간
  });
};

// Refresh Token 생성
const generateRefreshToken = () => {
  // Refresh Token은 보안성과 성능을 위해 payload 없이 발급
  return jwt.sign({}, JWT_KEY, {
    algorithm: 'HS256', // 암호화 알고리즘,
    expiresIn: '14d', // 유효기간
  });
};

// Access Token 검증
const verifyAccessToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, JWT_KEY) as TokenPayload;

    return {
      ok: true,
      id: decoded.id,
    };
  } catch (error) {
    return {
      ok: false,
      message: error,
    };
  }
};

// Refresh Token 검증
const verifyRefreshToken = async (token: string, id: string) => {
  const user = await User.findOne({ id });

  const decoded = jwt.verify(token, JWT_KEY) as TokenPayload;

  if (decoded.id !== id) return false;

  if (!user || user.refreshToken !== token) return false;

  return true;
};

export {
  generateToken,
  generateRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
};
