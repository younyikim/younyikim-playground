import { Request, Response } from 'express';

// Controller
import { token } from '@/controllers/auth';

// Utils
import { verifyAccessToken } from '@/utils';

/**
 * @description 유저의 로그인 여부를 판별
 * @param req
 * @param res
 * @returns
 */
export const verifySignIn = (req: Request, res: Response) => {
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

      return res.status(401).send({ message: 'Unauthorized user' });
    }

    // 유효한 경우
    return res.status(200).send({
      success: true,
      message: 'Authorized user',
    });
  } else {
    // Access Token이 존재하지 않는 경우
    return res.status(401).send({ message: 'Unauthorized user' });
  }
};
