import { categoryDataModel } from "../models/category-model";
import { coursesDataModel } from "../models/course-model";

export const getAllCourses = async () => {
  const allCourses = await coursesDataModel
    .find({})
    .populate({ path: "category", model: categoryDataModel });
  return allCourses;
};
