import React from "react";

import { openGraphImage } from "@/components/shared-metadata";

export const metadata = {
  title: "Success Stories | Edify College of IT",
  description:
    "Explore the stories of our successful students at Edify College of IT. Be inspired to envision your own success. Join us, and let's create your story together.",
  openGraph: {
    ...openGraphImage,
    title: "Success Stories | Edify College of IT",
    description:
      "Explore the stories of our successful students at Edify College of IT. Be inspired to envision your own success. Join us, and let's create your story together.",
  },
};

const page = async () => {
  const getStories = [
    {
      _id: "6545004584a1dcb036a0c806",
      ytlink: "https://youtube.com/embed/Pc33ukzDm60?si=-xA0mErRKlFEE6Yd",
      title: "Inspiring Web Development Course",
      createdAt: "2023-11-03T14:14:29.468Z",
      updatedAt: "2023-11-03T14:14:29.468Z",
      __v: 0
    },
    {
      _id: "65466b37a80ac78a50d147aa",
      ytlink: "https://youtube.com/embed/xnrGsSHhnJA?si=UFk_lTEKk_CYD4Xi",
      title: "Graphic Designer Success Story",
      createdAt: "2023-11-04T16:03:03.493Z",
      updatedAt: "2023-11-04T16:03:03.493Z",
      __v: 0
    },
    {
      _id: "65466b9aa80ac78a50d147ae",
      ytlink: "https://youtube.com/embed/myhIKTRXCiw?si=QfNI-UiJRsnPzcri",
      title: "Amazon success Story",
      createdAt: "2023-11-04T16:04:42.006Z",
      updatedAt: "2023-11-04T16:04:42.006Z",
      __v: 0
    },
    {
      _id: "655099dd93d412c434a8f884",
      ytlink: "https://youtube.com/embed/QtXzlJIOWc0?si=PtEMF06a8f9xLOsy",
      title: "Amazon Success Story",
      createdAt: "2023-11-12T09:24:45.835Z",
      updatedAt: "2023-11-12T09:24:45.835Z",
      __v: 0
    }
  ];
  

  return (
    <>
      <div className="text-center max-w-xl mx-auto">
        <h1 className="text-6xl md:text-7xl capitalize font-bold mb-5 text-gray-200">
          Success Stories
        </h1>
        <div className="text-center mb-10">
          <span className="inline-block w-1 h-1 rounded-full bg-blue-500 ml-1"></span>
          <span className="inline-block w-3 h-1 rounded-full bg-blue-500 ml-1"></span>
          <span className="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
          <span className="inline-block w-3 h-1 rounded-full bg-blue-500 ml-1"></span>
          <span className="inline-block w-1 h-1 rounded-full bg-blue-500 ml-1"></span>
        </div>
      </div>

      <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:m-3 2xl:grid-cols-5 gap-6">
        {getStories?.map((v, i) => (
          <div key={i} className="h-[450px] w-auto rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full rounded-lg border border-gray-600"
              src={v.ytlink}
              frameborder="0"
            ></iframe>
          </div>
        ))}
      </div>
    </>
  );
};

export default page;
