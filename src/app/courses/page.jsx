import CourseCards from "@/components/CourseCards";
import Search from "./Search";

import { openGraphImage } from "@/components/shared-metadata";

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

const buttons = [
  {
    id: "1",
    buttonText: "All",
    value: "All",
  },
  {
    id: "2",
    buttonText: "Development",
    value: "Development",
  },
  {
    id: "3",
    buttonText: " Art & Design",
    value: "Art & Design",
  },
  {
    id: "4",
    buttonText: "Digital Marketing",
    value: "Markerters",
  },
  {
    id: "5",
    buttonText: "Amazon",
    value: "Amazon",
  },
  {
    id: "6",
    buttonText: "Languages",
    value: "Languages",
  },
  {
    id: "7",
    buttonText: "Data Science",
    value: "Data Science",
  },
];

const page = (props) => {
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
        <CourseCards filters={props.searchParams} />
      </section>
    </>
  );
};

export default page;
