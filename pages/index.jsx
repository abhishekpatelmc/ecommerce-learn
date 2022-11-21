import { useEffect, useState } from "react";
import CourseTemplate from "../components/courseTemplate";

export default function Home() {
  const [courseInfo, setCourseInfo] = useState([]);
  const [phrase, setPhrase] = useState("");

  useEffect(() => {
    fetch("/api/courses")
      .then((response) => response.json())
      .then((json) => setCourseInfo(json));
  }, []);

  // console.log("this is course info", courseInfo);
  const courseCategoryNames = [...new Set(courseInfo.map((c) => c.category))];
  // console.log({ courseCategoryNames });

  return (
    <div className="p-5">
      <input
        value={phrase}
        onChange={(e) => setPhrase(e.target.value)}
        type="text"
        placeholder="Search for courses..."
        className="bg-gray-100 py-2 px-4 rounded-xl w-full"
      />
      <div>
        {courseCategoryNames.map((categoryName) => (
          <div key={categoryName}>
            <h2 className="text-2xl py-5 capitalize font-semibold ">
              {categoryName}
            </h2>
            <div className="flex -mx-5 overflow-x-scroll snap-x scrollbar-hide">
              {courseInfo
                .filter((c) => c.category === categoryName)
                .map((courseInfo) => (
                  <div key={courseInfo._id} className="px-5 snap-start">
                    <CourseTemplate {...courseInfo} />
                  </div>
                ))}
            </div>
          </div>
        ))}
        <div className="py-4"></div>
      </div>
    </div>
  );
}
