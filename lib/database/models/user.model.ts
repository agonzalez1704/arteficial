import { Schema, model, models } from 'mongoose';

export interface IUser {
  clerkId: string;
  email: string;
  username: string;
  photo: string;
  firstName: string;
  lastName: string;
  planId: number;
  creditBalance: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  photo: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  planId: { type: Number, required: true, default: 1 },
  creditBalance: { type: Number, required: true, default: 10 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const User = models?.User || model('User', UserSchema);

export default User;