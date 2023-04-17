import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  avatar: { type: String, required: false },
  email: { type: String, required: true },
  id: { type: Number, required: true },
});

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export const UserModel = () => {}