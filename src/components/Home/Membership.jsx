"use client";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Mcards from "../Burrh/Mcards";
import Image from "next/image";

const Membership = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <>
      <div className="relative">
        <div className="flex max-md:gap-4">
          {/* side line */}
          <div className="ml-2 mr-10 flex flex-col items-center" ref={ref}>
            <div
              style={{
                opacity: isInView ? "1" : "0",
                transition: "all  0.5s",
              }}
              className="relative"
            >
              <span className="absolute bottom-[50%] left-[50%] glow4 h-0 w-0 z-[9999999]" />
              <svg
                width="24"
                version="1.1"
                height="44"
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="currentColor"
                data-view-component="true"
                className=" text-white my-[3px]"
              >
                <path d="M2.828 4.328C5.26 1.896 9.5 1.881 11.935 4.317c.024.024.046.05.067.076 1.391-1.078 2.993-1.886 4.777-1.89a6.22 6.22 0 0 1 4.424 1.825c.559.56 1.023 1.165 1.34 1.922.318.756.47 1.617.468 2.663 0 2.972-2.047 5.808-4.269 8.074-2.098 2.14-4.507 3.924-5.974 5.009l-.311.23a.752.752 0 0 1-.897 0l-.312-.23c-1.466-1.085-3.875-2.869-5.973-5.009-2.22-2.263-4.264-5.095-4.27-8.063a6.216 6.216 0 0 1 1.823-4.596Zm8.033 1.042c-1.846-1.834-5.124-1.823-6.969.022a4.712 4.712 0 0 0-1.382 3.52c0 2.332 1.65 4.79 3.839 7.022 1.947 1.986 4.184 3.66 5.66 4.752a78.214 78.214 0 0 0 2.159-1.645l-2.14-1.974a.752.752 0 0 1 1.02-1.106l2.295 2.118c.616-.52 1.242-1.08 1.85-1.672l-2.16-1.992a.753.753 0 0 1 1.021-1.106l2.188 2.02a18.963 18.963 0 0 0 1.528-1.877l-.585-.586-1.651-1.652c-1.078-1.074-2.837-1.055-3.935.043-.379.38-.76.758-1.132 1.126-1.14 1.124-2.96 1.077-4.07-.043-.489-.495-.98-.988-1.475-1.482a.752.752 0 0 1-.04-1.019c.234-.276.483-.576.745-.893.928-1.12 2.023-2.442 3.234-3.576Zm9.725 6.77c.579-1.08.92-2.167.92-3.228.002-.899-.128-1.552-.35-2.08-.22-.526-.551-.974-1.017-1.44a4.71 4.71 0 0 0-3.356-1.384c-1.66.004-3.25.951-4.77 2.346-1.18 1.084-2.233 2.353-3.188 3.506l-.351.423c.331.332.663.664.993.998a1.375 1.375 0 0 0 1.943.03c.37-.365.748-.74 1.125-1.118 1.662-1.663 4.373-1.726 6.06-.045.56.558 1.12 1.12 1.658 1.658Z"></path>
              </svg>
            </div>

            <div className="h-full">
              <div
                style={{
                  height: isInView ? "100%" : "0",
                  transition: "all  0.5s",
                  transitionDelay: "0.3s",
                }}
                className="bg-gradient-to-b from-red-400 w-[4px]"
              />
            </div>
          </div>
          {/* side line */}

          <div
            className="pt-3"
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateY(-100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",
            }}
          >
            <h2 className="md:text-2xl text-lg mb-3  tpa">Adapt Your Future</h2>
            <h3 className="text-5xl mb-20 tpa">
              <span className="text-red-400 tpa"> Start your </span> <br />
              Learning Journey Today!
            </h3>
          </div>

          <Image
            width={700}
            height={700}
            className="absolute top-0 -z-40 -right-[20%] animate-spin-slow max-lg:hidden"
            src="/images/box.svg"
            alt="background-box"
          />
        </div>
      </div>
      <div
       className=" ml-4"
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateY(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
        }}
      >
        <Mcards />
      </div>
    </>
  );
};

export default Membership;
