import mongoose, { Schema } from "mongoose";

const quizSetSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    mark: {
      type: Number,
      required: true,
      min: 0,
    },
    slug: {
      type: String,
      required: true,
      lowercase: true,
    },
    status: {
      type: String,
      required: true,
    },
    quizIds: [
      {
        type: Schema.ObjectId,
        ref: "quizzes",
        required: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const quizSetDataModel =
  mongoose.models.quiz_sets ?? mongoose.model("quiz_sets", quizSetSchema);
