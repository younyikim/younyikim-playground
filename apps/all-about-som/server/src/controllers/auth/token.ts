import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

// Utils
import { generateToken, verifyAccessToken, verifyRefreshToken } from '@/utils';
import { TokenPayload } from '@/models/typings/user';

export const token = async (req: Request, res: Response) => {
  // Headers에 Access Token, Refresh Token 존재 여부 확인
  if (req.headers.authorization && req.body.refresh_token) {
    const accessToken = req.headers.authorization.split('Bearer ')[1];
    const refreshToken = req.body.refresh_token;

    // Access Token 검증
    const authVerfiedResult = verifyAccessToken(accessToken);
    // Access Token에서 유저 정보 추출
    const decoded = jwt.decode(accessToken) as TokenPayload;

    // 유저 정보가 존재하지 않으면, 권한 없음 응답
    if (decoded === null) {
      res.status(401).send({
        ok: false,
        message: 'Unauthorized User',
      });
    }

    // Refresh Token 검증
    const refreshVerifiedResult = verifyRefreshToken(refreshToken, decoded.id);

    // Access Token이 만료된 경우
    if (
      authVerfiedResult.ok === false &&
      authVerfiedResult?.message &&
      authVerfiedResult.message === 'Token expired'
    ) {
      // 1. Access Token과 Refresh Token 모두 만료된 경우 -> 재로그인
      if (!refreshVerifiedResult) {
        res.status(401).send({
          ok: false,
          message: 'Unauthorized User : Refresh Token expired',
        });
      } else {
        // 2. Access Token만 만료된 경우 => Access Token 재발급
        const newAccessToken = generateToken({ id: decoded.id });

        res.status(200).send({
          ok: true,
          data: {
            accessToken: newAccessToken,
            refreshToken,
          },
        });
      }
    } else {
      // 3. Access Token이 만료되지 않은 경우 => 재발급 필요하지 않음
      res.status(400).send({
        ok: false,
        message: 'Acess token is not expired!',
      });
    }
  } else {
    // Headers에 Access Token이나 Refresh Token이 존재하지 않는 경우
    res.status(400).send({
      ok: false,
      message: 'Access Token or Refresh Token is missing in headers.',
    });
  }
};
