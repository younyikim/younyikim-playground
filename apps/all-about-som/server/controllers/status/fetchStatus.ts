import { Request, Response } from 'express';

// Models
import User from '../../models/user';

// Utils
import { sendInternalError, sendNotFound, sendSuccess } from '../../utils';

interface Status {
  value: string;
}

interface StatusParams {
  userId?: string;
}

export const fetchStatus = async (
  req: Request<StatusParams>,
  res: Response,
) => {
  const userId = req.params.userId ?? process.env.DEFAULT_USERID ?? '';

  try {
    const user = await User.findOne({ userId }).populate<{ status: Status }>(
      'status',
    );

    if (!user) {
      return sendNotFound(res, '사용자를 찾을 수 없습니다.');
    }

    sendSuccess(res, '요청이 성공적으로 처리되었습니다.', {
      status: user.status.value,
    });
  } catch (error) {
    sendInternalError(res, '요청한 정보를 찾을 수 없습니다.', error);
  }
};
