import { initMongoose } from "../../lib/mongoose";
import CourseModel from "../../models/courseModel";

export default async function handel(req, res) {
  await initMongoose();
  res.json(await CourseModel.find().exec());
}
