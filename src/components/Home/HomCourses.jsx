"use client";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import CourseCards from "./CourseCards";

const HomeCourses = ({courses}) => {
  const ref = useRef(null);
  const ref1 = useRef(null);
  const isInView = useInView(ref, { once: false });
  const isInView2 = useInView(ref1, { once: false });


  return (
    <>
      <div className="flex max-md:gap-4">
        {/* side line */}

        <div
          className="ml-5 mr-10 flex flex-col md:flex-row items-center"
          ref={ref}
        >
          <div className="h-full">
            <div
              style={{
                height: isInView ? "100%" : "0",
                transition: "all  0.5s",
              }}
              className="bg-gradient-to-t from-transparent via-green-700 to-transparent w-[4px]"
            />
          </div>
          <div>
            <Image
              width={700}
              height={700}
              style={{
                opacity: isInView ? "1" : "0",
                transition: "all  0.5s",
                transitionDelay: "0.3s",
              }}
              alt="animation"
              className="max-md:hidden w-full"
              src="https://github.githubassets.com/images/modules/site/home-campaign/git-branch-productivity.svg"
            />
          </div>
        </div>

        {/* side line */}

        <div
          className="flex flex-col justify-center gap-6 py-10"
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateY(-100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",
          }}
        >
          <span className=" md:text-2xl">Featured Courses</span>
          <h3 className="text-5xl ">
            <span className="text-green-400 ">Get Started</span> <br /> Pick a
            Course
          </h3>
        </div>
      </div>


      <div
        className="max-w-[100%] ml-1"
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateY(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",
        }}
      >
        <CourseCards courses={courses} />
      </div>

      <div className="ml-5 w-0 mr-10 h-28 flex flex-col items-center" ref={ref1}>
        <div
          style={{
            height: isInView2 ? "100%" : "0",
            transition: "all  0.5s",
          }}
          className="bg-gradient-to-t from-red-400 h-full w-[4px]"
        />
      </div>
    </>
  );
};

export default HomeCourses;
