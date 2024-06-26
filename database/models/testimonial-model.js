import mongoose, { Schema } from "mongoose";

const testimonialSchema = new Schema(
  {
    content: {
      required: true,
      type: String,
    },
    user: {
      required: true,
      type: Schema.ObjectId,
      ref: "users",
    },
    courseId: {
      required: true,
      type: Schema.ObjectId,
      ref: "courses",
    },
    rating: {
      required: true,
      type: Number,
      min: 1,
    },
  },
  {
    timestamps: true,
  }
);

export const testimonialDataModel =
  mongoose.models.testimonials ??
  mongoose.model("testimonials", testimonialSchema);
