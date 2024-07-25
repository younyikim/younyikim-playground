export interface IUser {
  userId: string;
  password: string;
  name: string;
  refreshToken?: string;
  status: string;
}

export interface TokenPayload {
  id: ObjectId;
}
