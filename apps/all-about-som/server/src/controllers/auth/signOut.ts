import User from '@/models/user';
import { Request, Response } from 'express';

export const signOut = async (req: Request, res: Response) => {
  const id = req.body.id;

  try {
    await User.findOneAndUpdate({ _id: id }, { refreshToken: null });

    res.status(200).send({
      ok: true,
      message: 'Sign out successfully',
    });
  } catch (error) {
    res.status(500).send({
      ok: false,
      message: 'Error logging out',
    });
  }
};
