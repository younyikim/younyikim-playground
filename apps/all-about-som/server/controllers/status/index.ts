import { Request, Response } from 'express';

// Models
import User from '../../models/user';
import Status from '../../models/status';
import {
  sendInternalError,
  sendNotFound,
  sendSuccess,
} from 'utils/responseHelper';

export const updateStatus = async (req: Request, res: Response) => {
  const { statusValue } = req.body;
  const userId = req.id;

  try {
    // 사용자의 status 정보 조회
    const user = await User.findById(userId).populate('status');

    if (!user) {
      return sendNotFound(res, '사용자를 찾을 수 없습니다.');
    }

    // status 값 갱신
    const statusToUpdate = await Status.findById(user.status);

    if (!statusToUpdate) {
      return sendNotFound(res, '현재 위치를 찾을 수 없습니다.');
    }

    statusToUpdate.value = statusValue;
    await statusToUpdate.save();

    // 갱신된 status 값으로 사용자 정보 갱신
    await User.findByIdAndUpdate(
      userId,
      {
        status: statusToUpdate._id,
      },
      { new: true, useFindAndModify: false },
    );

    sendSuccess(res, '현재 위치 업데이트 성공', {
      status: statusToUpdate.value,
    });
  } catch (error) {
    sendInternalError(res, '현재 위치 업데이트 실패', error);
  }
};
