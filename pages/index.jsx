import { useEffect, useState } from "react";
import CourseTemplate from "../components/courseTemplate";

export default function Home() {
  const [courseInfo, setCourseInfo] = useState([]);

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
      <div>
        {courseCategoryNames.map((categoryName) => (
          <div key={categoryName}>
            <h2 className="text-2xl capitalize font-semibold ">
              {categoryName}
            </h2>
            {courseInfo
              .filter((c) => c.category === categoryName)
              .map((courseInfo) => (
                <div>
                  <CourseTemplate {...courseInfo} />
                </div>
              ))}
          </div>
        ))}
        <div className="py-4"></div>
      </div>
    </div>
  );
}
