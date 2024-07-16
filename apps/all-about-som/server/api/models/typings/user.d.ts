export interface IUser {
  userId: string;
  password: string;
  name: string;
  refreshToken?: string;
}

export interface TokenPayload {
  id: ObjectId;
}
