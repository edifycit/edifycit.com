import React from "react";
import openGraphImage from "@/components/shared-metadata";

export const metadata = {
  title: "Verify Your Certificate | Edify College of IT",
  description:
    "Meet our dynamic team of digital mentors, ready to fuel your success. Join us in crafting your remarkable future today.",
  openGraph: {
    ...openGraphImage,
    title: "Verify Your Certificate | Edify College of IT",
    description:
      "Meet our dynamic team of digital mentors, ready to fuel your success. Join us in crafting your remarkable future today.",
  },
};
const page = () => {
 
  return (
    <>
      <div className="p-6 flex flex-col items-center justify-center mt-16">
        <img
          src="https://edifycit.com/images/batch.png"
          alt="Image Here"
          className="w-[112px] mb-4"
        />
        <h2 className="text-base mb-4">Verify Your Certificate</h2>
        <form className="w-[340px] flex flex-col items-center justify-center">
          <div className="relative w-[340px]">
            <input
              className="bg-transparent shadow-2xl px-4 py-3 outline-none w-full border rounded-md border-white/20  focus:border-blue-400 duration-75 placeholder:text-sm"
              placeholder="Enter Verification Code"
            />
            <i className="bx bxs-graduation absolute top-1/2 -translate-y-1/2 right-[10px] -z-40 text-xl text-gray-400"></i>
          </div>
        </form>
      </div>
    </>
  );
};

export default page;
