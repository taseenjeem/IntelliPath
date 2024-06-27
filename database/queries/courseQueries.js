import { categoryDataModel } from "../models/category-model";
import { coursesDataModel } from "../models/course-model";
import { moduleDataModel } from "../models/module-model";
import { quizSetDataModel } from "../models/quizsets-model";
import { testimonialDataModel } from "../models/testimonial-model";
import { userDataModel } from "../models/user-model";

export const getAllCourses = async () => {
  const allCourses = await coursesDataModel
    .find({})
    .populate({ path: "category", model: categoryDataModel })
    .populate({ path: "instructor", model: userDataModel })
    .populate({ path: "modules", model: moduleDataModel })
    .populate({ path: "quizSet", model: quizSetDataModel })
    .populate({ path: "testimonials", model: testimonialDataModel });

  return allCourses;
};
