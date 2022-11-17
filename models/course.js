import { model, models, Schema } from "mongoose";

const CourseSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  image: String,
});

const Course = models?.Course || model("Course", CourseSchema);

export default Course;
