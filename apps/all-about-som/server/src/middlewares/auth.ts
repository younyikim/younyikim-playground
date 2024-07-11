import { Response, Request, NextFunction } from 'express';

// Utils
import { verifyAccessToken } from '@/utils/jwtUtil';

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const authorization = req.headers.authorization;

  if (authorization) {
    // Header에 포함된 Access Token 추출
    const token = authorization.split('Bearer ')[1];

    const isValidToken = verifyAccessToken(token);

    // Access Token이 검증된 경우, req에 값을 설정하고 다음 콜백함수로 전달
    if (isValidToken.ok) {
      req.id = isValidToken.id;
      next();
    } else {
      res.status(401).send({
        ok: false,
        message: isValidToken.message,
      });
    }
  }
};

export { verifyToken };
