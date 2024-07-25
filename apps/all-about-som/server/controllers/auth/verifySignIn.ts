import { NextFunction, Request, Response } from 'express';

// Controller
import { token } from '.';

// Utils
import { verifyAccessToken, sendUnauthorized } from '../../utils';

/**
 * @description 유저의 로그인 여부를 판별
 * @param req
 * @param res
 * @returns
 */
export const verifySignIn = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (req.cookies.accessToken) {
    const accessToken = req.cookies.accessToken;

    const authVerifiedResult = verifyAccessToken(accessToken);

    // Access Token이 유효하지 않은 경우
    if (authVerifiedResult.success === false) {
      // Access Token 재발급 요청
      if (
        authVerifiedResult?.message &&
        authVerifiedResult.message === 'Token expired'
      ) {
        token(req, res);
        return;
      }

      return sendUnauthorized(res);
    }

    // 유효한 경우
    next();
  } else {
    // Access Token이 존재하지 않는 경우
    return sendUnauthorized(res);
  }
};
