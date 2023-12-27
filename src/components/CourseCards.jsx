import React from "react";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";
import queryStr from 'query-string'


const coursesfetch = async (filters) => {
  const { data } = await axios.get(`https://admin.edifycit.com/api/courses?${queryStr.stringify({...filters,limit:50})} `);
  return data.message.data;
};

const courseCards = async ({filters}) => {

  const data = await coursesfetch(filters);


  return (
    <>
      {data.length ? (
        <div className="m-auto my-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((v, i) => {
              return (
                <Link href={`/courses/${v.slug}`} key={i}>
                  <div className="flex flex-col gap-2 group">
                    <div className="relative overflow-hidden rounded-lg shadow-lg group-hover:scale-105 duration-300 shadow-black">
                      <Image
                        width={700}
                        height={700}
                        src={v.featuredImage?.url}
                        alt={v.featuredImage?.altText}
                        className="w-full aspect-[3/2]"
                      />
                      <div className="absolute top-0 right-2 off bg-red-600 shadow flex flex-col-reverse p-2 pb-6 text-center font-bold text-white">
                        <span className="block">Off</span> {`${v?.percentageOfDiscount}%`}
                      </div>
                    </div>
                    <div className="w-full flex-1 bg-[#292828] rounded-lg overflow-hidden px-4 py-4">
                      <div className="flex justify-between mb-6">
                        <span className="bg-[#0c0c0c90] text-base text-white font-medium outline-none group bg-opacity-30 py-1 px-2 rounded-md">
                          {v.category}
                        </span>
                        <span className="flex gap-2 py-1 px-2 items-center  bg-opacity-30  bg-[#0c0c0c90] text-base text-white borderfont-medium outline-none rounded-md group">
                          <i className="bx bxs-time"></i>
                          {`${v.weeks} weeks`}
                        </span>
                      </div>
                      <h2 className="my-4 font-bold uppercase tracking-wide text-gray-100 w-full line-clamp-2 overflow-hidden">
                        {v.title}
                      </h2>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      ) : (
        <>
          <div style={{ backgroundColor: "#07121e" }}>
            <h1
              className=" p-5"
              style={{ margin: "0", color: "white", textAlign: "center" }}
            >
              Courses Not Found
            </h1>
          </div>
        </>
      )}
    </>
  );
};

export default courseCards;
