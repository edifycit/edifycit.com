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

        <div className="flex justify-between items-center">
          <div className="text-white bg-black py-2 px-3 border-white/20 border rounded-full" >
          <i className="bx bx-filter mr-2"></i>
          Filters
          </div>
          <Search value={props?.searchParams?.keyword} />
        </div>

        {/* <div className="flex flex-col">
          <div className="flex snap-proximity snap-both md:justify-evenly overflow-auto md:flex-wrap py-6">
            {buttons.map((v, i) => (
              <div className="flex flex-grow snap-center" key={i}>
                <button
                  value={v.value}
                  className="w-full bg-none text-base text-white px-8 py-2 flex items-center justify-center cursor-pointer m-1 transition duration-300 ease-in border bg-[#2347e71f] border-[color:var(--accent-color)]"
                >
                  {v.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div> */}
      </div>

      {/* Coures Cards  ------*/}
      <section>
        <CourseCards filters={props.searchParams} />
      </section>
    </>
  );
};

export default page;
