import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

// Models
import User from '../../models/user';

// Utils
import { sendInternalError, sendSuccess, sendUnauthorized } from '../../utils';

// Typings
import { TokenPayload } from '../../models/typings/user';

export const signOut = async (req: Request, res: Response) => {
  try {
    const accessToken = req.cookies.accessToken;

    const decoded = jwt.decode(accessToken) as TokenPayload;

    if (decoded === null) {
      sendUnauthorized(res, 'Unauthorized User');
    }

    await User.findOneAndUpdate({ _id: decoded.id }, { refreshToken: null });

    res.clearCookie('accessToken'); // accessToken 쿠키 삭제
    res.clearCookie('refreshToken'); // refreshToken 쿠키 삭제

    sendSuccess(res, 'Sign out successfully');
  } catch (error) {
    sendInternalError(res, 'Error logging out');
  }
};
