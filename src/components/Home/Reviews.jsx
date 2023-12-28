"use client";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Testimonies from "../Burrh/Testimonies";

const Reviews = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <>
     
      <div
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateY(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
        }}
      >
        <Testimonies />
      </div>
    </>
  );
};

export default Reviews;
