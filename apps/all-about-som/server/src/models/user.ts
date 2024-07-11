import { Schema, model } from 'mongoose';

// Typings
import { IUser } from './typings/user';

const userSchema = new Schema({
  email: {
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
    required: true,
  },
});

const User = model<IUser>('User', userSchema);

export default User;
