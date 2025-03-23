import { Course } from "@/models/course.js";


export const getAllCourses = async () => {
    const courses = await Course.find();
    return courses;
}