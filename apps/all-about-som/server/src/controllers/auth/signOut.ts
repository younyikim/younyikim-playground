import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

// Models
import User from '@/models/user';

// Typings
import { TokenPayload } from '@/models/typings/user';

export const signOut = async (req: Request, res: Response) => {
  try {
    const accessToken = req.cookies.accessToken;

    const decoded = jwt.decode(accessToken) as TokenPayload;

    if (decoded === null) {
      res.status(500).send({
        success: false,
        message: 'Unauthorized User',
      });
    }

    await User.findOneAndUpdate({ _id: decoded.id }, { refreshToken: null });

    res.clearCookie('accessToken'); // accessToken 쿠키 삭제
    res.clearCookie('refreshToken'); // refreshToken 쿠키 삭제

    res.status(200).send({
      success: true,
      message: 'Sign out successfully',
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Error logging out',
    });
  }
};
