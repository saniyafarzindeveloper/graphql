import mongoose from "mongoose";

interface ICourse {
  title: string;
  description: string;
  instructor: mongoose.Schema.Types.ObjectId;
  ratingsAverage: number;
  ratingsQuantity: number;
  price: number;
  category: string;
  subCategory: string;
  level: string;
  language: string;
  whatYouWillLearn: string[];
  requirements: string[];
  targetAudience: string[];
  isPublished: boolean;
  isApproved: boolean;
  isRejected: boolean;
  isFeatured: boolean;
  isTrending: boolean;
  isBestseller: boolean;
  coverImage: string;
  previewVideo: string;
  students: mongoose.Schema.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

type ICourseModel = mongoose.Model<ICourse>;

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    ratingsAverage: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    subCategory: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      required: true,
      enum: ["Beginner", "Intermediate", "Advanced"],
    },
    language: {
      type: String,
      required: true,
    },
    whatYouWillLearn: {
      type: [String],
      required: true,
    },
    requirements: {
      type: [String],
      required: true,
    },
    targetAudience: {
      type: [String],
      required: true,
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
    isApproved: {
      type: Boolean,
      default: false,
    },
    isRejected: {
      type: Boolean,
      default: false,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    isTrending: {
      type: Boolean,
      default: false,
    },
    isBestseller: {
      type: Boolean,
      default: false,
    },
    coverImage: {
      type: String,
      required: true,
    },
    previewVideo: {
      type: String,
      required: true,
    },
    students: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

export const Course = mongoose.model<ICourse, ICourseModel>("Course", courseSchema);
