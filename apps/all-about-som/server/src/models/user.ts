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
});

const User = model<IUser>('User', userSchema);

export default User;
