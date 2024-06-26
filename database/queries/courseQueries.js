import { categoryDataModel } from "../models/category-model";
import { coursesDataModel } from "../models/course-model";
import { userDataModel } from "../models/user-model";

export const getAllCourses = async () => {
  const allCourses = await coursesDataModel
    .find({})
    .populate({ path: "category", model: categoryDataModel })
    .populate({ path: "instructor", model: userDataModel });

  return allCourses;
};
