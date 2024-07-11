export interface IUser {
  email: string;
  password: string;
  name: string;
  refreshToken: string;
}

export interface TokenPayload {
  user_id: string;
}
