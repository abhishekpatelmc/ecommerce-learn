import { initMongoose } from "../../lib/mongoose";
import Course from "../../models/course";

export default async function handel(req, res) {
  await initMongoose();
  res.json(await Course.find().exec());
}
