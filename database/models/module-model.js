import mongoose, { Schema } from "mongoose";

const moduleSchema = new Schema(
  {
    title: {
      required: true,
      type: String,
    },
    description: {
      required: true,
      type: String,
    },
    status: {
      required: true,
      type: String,
    },
    slug: {
      required: true,
      type: String,
      lowercase: true,
    },
    course: {
      required: true,
      type: Schema.ObjectId,
      ref: "courses",
      index: true,
    },
    lessonIds: [
      {
        type: Schema.ObjectId,
        ref: "lessons",
      },
    ],
    duration: {
      required: true,
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

export const moduleDataModel =
  mongoose.models.modules ?? mongoose.model("modules", moduleSchema);
