"use client";
import HoverCard from "@/components/Burrh/HoverCard";
import Slider from "react-slick";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Coursefeature = () => {
  const router = useRouter();
  const courseCategories = [
    {
      cate: "Digital Marketing",
      noOfCourses: 5,
    },
    {
      cate: "Amazon",
      noOfCourses: 1,
    },
    {
      cate: "Freelancing",
      noOfCourses: 3,
    },
    {
      cate: "Development",
      noOfCourses: 8,
    },
    {
      cate: "Data Science",

      noOfCourses: 1,
    },
    {
      cate: "Art & Design",
      noOfCourses: 4,
    },
  ];

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <HoverCard backgroundColor="#735a3620" direction="flex-col" left="-10%">
      <div className="px-8 backdrop-blur-3xl py-6 ">
        <Slider {...settings} className="px-6">
          {courseCategories.map((v, i) => {
            return (
              <div
                key={i}
                className="grid grid-cols-3 px-2"
                onClick={() => router.push(`courses?keyword=${v.cate}`)}
              >
                <div className="bg-[#1212122f] backdrop-blur-xl overflow-hidden rounded-lg flex flex-col items-center p-4 relative group">
                  <Image
                    width={700}
                    height={700}
                    alt="image here"
                    className="h-auto w-20"
                    src={`/images/courseCategories/${v.cate}.png`}
                  />
                  <div className="p-4 flex flex-col items-center">
                    <h3 className="font-semibold text-lg text-slate-200 mb-1 whitespace-nowrap">
                      {v.cate}
                    </h3>
                    <span className="text-gray-400">
                      {v.noOfCourses} courses
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </HoverCard>
  );
};

export default Coursefeature;
