import { Schema, model } from 'mongoose';

// Typings
import { IToken } from './typings/token';

const tokenSchema = new Schema({
  user_id: {
    type: String,
    required: true,
  },
  refreshToken: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 7 * 24 * 60 * 60, // 7일 후 만료
  },
});

const Token = model<IToken>('User', tokenSchema);

export default Token;
