export interface IToken {
  user_id: string;
  refreshToken: string;
  createdAt: Date;
}

export interface Payload {
  user_id: string;
}
