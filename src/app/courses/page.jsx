import CourseCards from "@/components/CourseCards";
import Search from "./Search";
import axios from "axios";
import queryStr from 'query-string'
import openGraphImage from "@/components/shared-metadata";

export const metadata = {
  title: "Courses | Edify College of IT",
  description:
    "Unleash your potential with Edifycit's expert courses. Dive into the digital world and shape your success. Enroll now to kick-start your journey.",
  openGraph: {
    ...openGraphImage,
    title: "Courses | Edify College of IT",
    description:
      "Unleash your potential with Edifycit's expert courses. Dive into the digital world and shape your success. Enroll now to kick-start your journey.",
  },
};

const coursesfetch = async (filters) => {
  const { data } = await axios.get(`https://admin.edifycit.com/api/courses?${queryStr.stringify({...filters,limit:50})} `);
  return data.message.data;
};

const page = async (props) => {

  var courses = await coursesfetch(props.searchParams)

  return (
    <>
      <div className="mt-10">
        <div className="text-center max-w-xl mx-auto">

          <h1 className="text-6xl md:text-7xl capitalize font-bold mb-5 text-white">
            {/* bg-clip-text */}
            Offered Courses
          </h1>
          <div className="text-center mb-10">
            <span className="inline-block w-1 h-1 rounded-full bg-blue-500 ml-1"></span>
            <span className="inline-block w-3 h-1 rounded-full bg-blue-500 ml-1"></span>
            <span className="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
            <span className="inline-block w-3 h-1 rounded-full bg-blue-500 ml-1"></span>
            <span className="inline-block w-1 h-1 rounded-full bg-blue-500 ml-1"></span>
          </div>
        </div>

        <Search/>
      </div>

      {/* Coures Cards  ------*/}
      <section >
        <CourseCards data={courses} />
      </section>
    </>
  );
};

export default page;
