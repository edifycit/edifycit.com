"use client";
import { useInView } from "framer-motion";
import Partnership from "@/components/Burrh/Partnership";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const Hero = () => {
  const ref = useRef(null);
  const ref1 = useRef(null);
  const isInView = useInView(ref, { once: false });
  const isInView2 = useInView(ref1, { once: false });

  var [keyword, setKeyword] = useState("");
  var router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/courses?keyword=${keyword}`);
  };

  return (
    <>
      <div className="flex max-md:gap-4">
        {/* side line animation */}
        <div className=" ml-2 mr-10 flex flex-col items-center pt-2" ref={ref}>
          <div className="border-2 rounded-full h-5 mb-2 aspect-square border-gray-500 "></div>
          <div className="h-full">
            <div
              style={{
                height: isInView ? "100%" : "0",
                transition: "all  0.3s",
              }}
              className="bg-gradient-to-t from-indigo-600 via-indigo-800 to-transparent  w-[4px] "
            />
          </div>
          <div
            style={{
              opacity: isInView ? "1" : "0",
              transition: "all  0.3s",
              transitionDelay: "0.3s",
            }}
            className="relative my-4 flex justify-center items-center"
          >
            <span
              style={{ filter: "blur(18px)" }}
              className="absolute  bg-[#7c72ff] rounded-full h-full w-full -z-[9999999]"
            />
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="currentColor"
              version="1.1"
              width="24"
              height="24"
              // data-view-component="true"
              className=" bg-transparent"
            >
              <path
                className="bg-transparent"
                d="M15.22 4.97a.75.75 0 0 1 1.06 0l6.5 6.5a.75.75 0 0 1 0 1.06l-6.5 6.5a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L21.19 12l-5.97-5.97a.75.75 0 0 1 0-1.06Zm-6.44 0a.75.75 0 0 1 0 1.06L2.81 12l5.97 5.97a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-6.5-6.5a.75.75 0 0 1 0-1.06l6.5-6.5a.75.75 0 0 1 1.06 0Z"
              ></path>
            </svg>
          </div>
          <div className="h-full">
            <div
              style={{
                height: isInView ? "100%" : "0",
                transition: "linear 0.3s",
                transitionDelay: "0.3s",
              }}
              className="bg-gradient-to-b from-indigo-600 via-indigo-800 to-transparent  h-full w-[4px]"
            />
          </div>
        </div>
        {/* side line animation */}
        <div
          className="md:mb-20 pt-6 md:w-full"
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
          }}
        >
          <div className="">
            <h1 className=" py-4 text-4xl lg:text-6xl font-semibold text-white ">
              Master Your Skills.
            </h1>
            <p className="relative z-1 text-sm md:text-lg  lg:text-xl leading-[30px] md:leading-[36px] md:text-white lg:leading-[44px] mb-5 md:mb-20 md:10/12 sm:text-white sm:text-lg lg:w-9/12 text-[#7d8590]">
            Embark on your professional journey with industry-leading experts by enrolling in our distinguished IT programs.
            </p>
          </div>
          <div className="flex md:space-x-5 max-md:flex-col">
            <form onSubmit={submitHandler} className="md:w-[60%]">
              <div className="flex gap-y-4 flex-col md:flex-row ">
                <input
                  className="h-12 focus:outline-none text-black max-md:rounded-md md:rounded-s-md right-0 w-full placeholder:text-[16px] pl-3"
                  placeholder="Course"
                  type="text"
                  onChange={(e) => setKeyword(e.target.value)}
                  name="user_email"
                  id="user_email"
                  required
                  autoComplete="off"
                  spellCheck="false"
                />

                <button
            
                  className="mb-10 md:mb-0 py-3 w-1/2 home-campaign-signup-button text-[16px] max-md:rounded-md md:rounded-e-md text-white font-semibold bg-indigo-700"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        className="max-w-[100%] overflow-hidden"
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",
        }}
      >
        <Partnership />
      </div>
      {/* side line animation */}
      <div className="ml-2 mr-10 w-6 h-28 flex flex-col items-center pt-2" ref={ref1}>
        <div
          style={{
            height: isInView2 ? "100%" : "0",
            transition: "all  0.3s",
          }}
          className="bg-gradient-to-t from-[#ff9500] via-orange-400 to-transparent h-full w-[4px] "
        ></div>
      </div>
      {/* side line animation */}
    </>
  );
};

export default Hero;
