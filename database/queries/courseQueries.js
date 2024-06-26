import { coursesDataModel } from "../models/course-model";

export const getAllCourses = async () => {
  const allCourses = await coursesDataModel.find({}).lean();
  return allCourses;
};
