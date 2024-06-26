import mongoose, { Schema } from "mongoose";

const courseSchema = new Schema(
  {
    title: {
      required: true,
      type: String,
      index: true,
    },
    description: {
      required: true,
      type: String,
    },
    thumbnail: {
      required: true,
      type: String,
    },
    modules: [{ type: Schema.ObjectId, ref: "modules" }],
    price: {
      required: true,
      type: Number,
      min: 0,
    },
    active: {
      required: true,
      type: Boolean,
      default: true,
    },
    category: {
      type: Schema.ObjectId,
      ref: "categories",
      index: true,
    },
    instructor: {
      type: Schema.ObjectId,
      ref: "users",
      index: true,
    },
    quizSet: {
      type: Schema.ObjectId,
      ref: "quiz_sets",
      required: false,
    },
    testimonials: [
      {
        type: Schema.ObjectId,
        ref: "testimonials",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const coursesDataModel =
  mongoose.models.courses ?? mongoose.model("courses", courseSchema);
