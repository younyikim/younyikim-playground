import { Schema, model } from 'mongoose';

// Typings
import { IUser } from './typings/user';

const userSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  refreshToken: {
    type: String,
    required: false,
  },
  status: {
    type: Schema.Types.ObjectId,
    // Status 스키마 참조
    ref: 'Status',
    required: true,
  },
});

const User = model<IUser>('User', userSchema);

export default User;
