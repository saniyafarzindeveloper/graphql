import mongoose from "mongoose";

interface IUser {
  name: string;
  email: string;
  password: string;
  googleId?: string;
  role: string;
  avatar: string;
  verified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

type IUserModel = mongoose.Model<IUser>;

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter name"],
    },
    email: {
      type: String,
      required: [true, "Please enter email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter password"],
      select: false,
    },
    googleId: {
      type: String,
      default: null,
    },
    role: {
      type: String,
      required: true,
      enum: ["user", "admin"],
      default: "user",
    },
    avatar: {
      type: String,
      required: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model<IUser, IUserModel>("User", schema);
