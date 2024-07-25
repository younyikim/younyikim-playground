import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';

// models
import User from '../../models/user';
import Status from '../../models/status';

// Utils
import { sendSuccess } from '../../utils';

// Typings
import { IUser } from '../../models/typings/user';

// User를 객체화하고 DB에 저장하는 함수
const createUserData = async (userInput: IUser) => {
  const user = await userWithEncodePassword(userInput);
  return user.save();
};

const userWithEncodePassword = async ({ userId, password, name }: IUser) => {
  // 비밀번호 암호화
  const hashedPassword = await bcrypt.hash(password, 12);

  // 현재 위치 정보(상태) 기본 도큐먼트 생성
  const defaultStatus = new Status();
  defaultStatus.save();

  // User 스키마를 사용해 도큐먼트(객체) 생성
  const user = new User({
    userId,
    password: hashedPassword,
    name,
    refreshToken: null,
    status: defaultStatus._id,
  });

  return user;
};

export const signUp = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;
    const user = await User.findOne({ userId });

    if (user) {
      throw new Error(`이미 존재하는 이메일입니다. 다시 입력해주세요.`);
    }

    await createUserData(req.body);

    // 유저 생성 성공
    sendSuccess(res, 'User created');
  } catch (error) {
    console.error('Error Sign Up:', error);
    return null;
  }
};
