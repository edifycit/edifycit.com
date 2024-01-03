import React from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";

const CourseCard = ({ courses }) => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    // autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      // {
      //   breakpoint: 425,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //     dots: false,
      //   },
      // },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {courses.map((v, i) => {
          return (
            <div key={i}>
              <Link
                href={`/courses/${v.slug}`}
                className="px-4 block"
              >
                <div className="group">
                  <div className="relative w-full mb-4 overflow-hidden rounded-lg shadow-lg group-hover:scale-105 duration-300 shadow-black">
                    <Image
                      width={700}
                      height={700}
                      src={v?.featuredImage?.url}
                      alt={v?.featuredImage?.altText}
                      className="w-full aspect-[3/2] object-cover"
                    />
                    <div className="absolute top-0 right-2 off bg-green-700 shadow flex flex-col-reverse p-2 pb-6 text-center font-bold text-white">
                      <span className="block">Off</span>{" "}
                      {`${v?.percentageOfDiscount}%`}
                    </div>
                  </div>
                  <div className="w-full h-[150px] bg-[#292828] rounded-lg overflow-hidden p-3 md:p-4">
                    <div className="flex justify-between mb-6">
                      <span className="bg-[#0c0c0c90] sm:text-sm text-xs lg:text-base text-white whitespace-nowrap outline-none group bg-opacity-30 py-1 px-2 rounded-md">
                        {v.category}
                      </span>
                      <span className="bg-[#0c0c0c90] sm:text-sm text-xs lg:text-base text-white whitespace-nowrap outline-none group bg-opacity-30 py-1 px-2 rounded-md">
                        <i className="bx mx-1 bxs-time"></i>
                        {`${v.weeks} Weeks`}
                      </span>
                    </div>
                    <h2 className="my-4 font-semibold text-xl tracking-wide text-gray-100 w-full line-clamp-2 overflow-hidden">
                      {v.title}
                    </h2>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CourseCard;
