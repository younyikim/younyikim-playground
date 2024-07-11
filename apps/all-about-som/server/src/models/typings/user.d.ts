export interface IUser {
  email: string;
  password: string;
  name: string;
  refreshToken: string;
}

export interface TokenPayload {
  id: ObjectId;
}
