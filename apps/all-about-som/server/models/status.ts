import { Schema, model } from 'mongoose';

const statusSchema = new Schema({
  value: {
    type: String,
    enum: ['집', '산책', '운동장'],
    default: '집',
    required: true,
  },
});

const Status = model('Status', statusSchema);

export default Status;
