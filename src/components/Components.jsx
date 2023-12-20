"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { items } from "@/components/data";

const Components = () => {
  const [selectedId, setSelectedId] = useState(null);

  function createMarkup(v) {
    return { __html: v };
  }

  return (
    <div className="grid gap-6 gap-y-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => {
        return (
          <motion.div
            key={i}
            layoutId={item._id}
            onClick={() => setSelectedId(item)}
            className="bg-[#2b2a2a] rounded-md overflow-hidden shadow-lg  flex flex-col"
          >
            <motion.div className="relative">
              <Image
                width={700}
                height={700}
                src={item.image[0]}
                alt={item.imgAlt}
                className="h-full w-full object-cover aspect-[3/2] brightness-75"
              />
              <span className="absolute bottom-0 bg-blue-400 bg-opacity-90 py-2  px-4">
                {item.category}
              </span>
              <span className="font-bold flex flex-col  absolute text-center shadow-md top-2 right-2 bg-blue-400 rounded-full px-3 py-2">
                31<span className="-mt-2">Nov</span>
              </span>
            </motion.div>
            <div className="p-4">
            <div className="">
              <h5 className="line-clamp-2 font-semibold leading-8 text-xl mb-4">
                {item.title}
              </h5>
              {/* <div
                className="line-clamp-1 [&>*]:text-blue-400 [&>p>strong]:text-blue-400"
                dangerouslySetInnerHTML={createMarkup(item.description)}
              /> */}
            </div>
            <div className="flex gap-4">
              <time className="flex gap-2 items-center">
                <i className="bx bx-time"></i>{new Date(item?.eventdate).toDateString()}
              </time>
            </div>
            </div>
          </motion.div>
        );
      })}

      <AnimatePresence>
        {selectedId && (
          <motion.div className="grid place-content-center bg-black bg-opacity-20 backdrop-blur-xl z-[99999] fixed w-full top-0 left-0 h-full">
            <motion.div
              layoutId={selectedId._id}
              className="flex flex-col bg-[#23282b] backdrop-blur-sm rounded-xl w-[50vw] h-[90vh] overflow-hidden"
            >
              <div className="flex justify-between bg-[#1D2023] px-4 py-2">
                <span className="text-xl font-semibold flex justify-center items-center gap-2">
                  <i className="bx bxs-news"></i>
                  News
                </span>
                <button onClick={() => setSelectedId(null)}>
                  <i className="bx bx-x bg-[#414749] rounded-full p-1 text-2xl"></i>
                </button>
              </div>
              <div className="w-full pb-16 overflow-auto">
                <div className="w-full h-[60%]">
                  <Image
                    width={700}
                    height={700}
                    className="w-full h-full object-cover"
                    src={selectedId.image[0]}
                    alt=""
                  />
                </div>
                <div className="py-6 px-4 ">
                  <h2 className="text-xl text-gray-100 font-bold mb-6 ">
                    {selectedId.title}
                  </h2>
                  <div
                    className="[&>*]:text-gray-300 "
                    dangerouslySetInnerHTML={createMarkup(
                      selectedId.description
                    )}
                  />
                </div>
              </div>
              <div className="flex justify-end bg-[#1D2023] px-4 py-2 h-16"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Components;
