import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema(
  {
    title: {
      required: true,
      type: String,
      index: true,
    },
    description: {
      type: String,
      default: "",
    },
    thumbnail: {
      required: true,
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const categoryDataModel =
  mongoose.models.categories ?? mongoose.model("categories", categorySchema);
