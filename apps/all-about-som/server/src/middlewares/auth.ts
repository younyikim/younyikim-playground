import { Response, Request, NextFunction } from 'express';

// Utils
import { verifyAccessToken } from '@/utils/jwtUtil';

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.accessToken;

  if (token) {
    const isValidToken = verifyAccessToken(token);

    // Access Token이 검증된 경우, req에 값을 설정하고 다음 콜백함수로 전달
    if (isValidToken.success) {
      req.id = isValidToken.id;
      next();
    } else {
      res.status(401).send({
        success: false,
        message: isValidToken.message,
      });
    }
  }
};

export { verifyToken };
