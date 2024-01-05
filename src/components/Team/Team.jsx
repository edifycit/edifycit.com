"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";



const Team = () => {
  const [selectedCategory, setSelectedCategory] = useState("DT");
  const [selected, setSelected] = useState(1);


  const handleCategoryClick = (category, i) => {
    var subcategory = category;
    var subIndex = i;
    setSelected(subIndex);
    setSelectedCategory(subcategory);
  };

  const data = [
    {
      id: "1",
      designation: "Founder & CEO",
      employe: "Azeem Qasim",
      image: "/images/team/azeem.webp",
      category: "DT",
      className: "edify-team-head-background",
    },

      {
      id: "4",
      designation: "Director Education",
      employe: "M. Usama Khalid",
      image: "/images/team/usama.webp",
      category: "DT",
    },
    {
      id: "2",
      designation: "Director Operations",
      employe: "Shahan Azam",
      image: "/images/team/shahan.webp",
      category: "DT",
    },
    {
      id: "3",
      designation: " Managing Director",
      employe: "Tariq Ameen",
      image: "/images/team/Tariqsb.webp",
      category: "DT",
    },
  

    {
      id: "6",
      designation: "Sr. SEO Expert",
      employe: "Taseen Baig",
      image: "/images/team/taseen.webp",
      category: "MK",
    },
    {
      id: "14",
      designation: "E-Commerace Head",
      employe: "Fariha Awan",
      className: "edify-team-head-background",
      image: "/images/team/Farihasb.webp",
      category: "EC",
    },
    {
      id: "9",
      designation: "Sr. Web Developer",
      employe: "Ghulam Qadir",
      image: "/images/team/qadir.webp",
      category: "PD",
    },
    {
      id: "7",
      designation: "Digital Marketer",
      employe: "Hafiz M.Haseeb",
      image: "/images/team/haseeb.webp",
      category: "MK",
    },
    {
      id: "8",
      designation: "Bussiness Development Officer",
      employe: "Bushra Ayub",
      image: "/images/team/bushra.webp",
      category: "BDO",
    },

  
    {
      id: "10",
      designation: "Web Developer",
      employe: "Ali Shabbir",
      image: "/images/team/ali.webp",
      category: "PD",
    },
    {
      id: "11",
      designation: "Android App Developer",
      employe: "Mr. Shehroz",
      image: "/images/team/shehroz.webp",
      category: "PD",
    },

    {
      id: "12",
      designation: "Sr. Graphic Designer",
      employe: "Syed Ahmad Hasnain",
      image: "/images/team/ahmed.webp",
      className: "edify-team-head-background",
      category: "GP",
    },

    {
      id: "13",
      designation: "Graphic Designer",
      employe: "Armaz Ali",
      image: "/images/team/armaz.webp",
      category: "GP",
    },

    
    {
      id: "15",
      designation: "Web Developer",
      employe: "Sameer Adil",
      image: "/images/team/sameer.webp",
      category: "PD",
    },
    {
      id: "16",
      designation: "Web Developer",
      employe: "Muhammad Ahmad",
      image: "/images/team/ahmad.webp",
      category: "PD",
    },
    {
      id: "17",
      designation: "Software Engineer",
      employe: "Usman Ashfaq",
      image: "/images/team/usman.webp",
      category: "PD",
    },
    {
      id: "19",
      designation: "Admistrator",
      employe: "Aleena Safdar",
      image: "/images/team/aleena.webp",
      category: "BDO",
    },
    {
      id: "20",
      designation: "Social Media Marketer",
      employe: "Hamna Khan",
      image: "/images/team/hamna.webp",
      category: "MK",
    },

    {
      id: "21",
      designation: "Content Writer",
      employe: "Akifa Waqar",
      image: "/images/team/akifa.webp",
      category: "MK",
    },
    {
      id: "24",
      designation: "Graphic Designer",
      employe: "M Ata Ul Hussnain",
      image: "/images/team/husnain.webp",
      category: "GP",
    },
    {
      id: "25",
      designation: "Videography",
      employe: "Muhammad Haroon",
      image: "/images/team/haroon.webp",
      category: "GP",
    },
    {
      id: "26",
      designation: "App Developer",
      employe: "Muhammad Suffian",
      image: "/images/team/Sufiyaansb.webp",
      category: "PD",
    },
    {
      id: "27",
      designation: "App Developer",
      employe: "Ameeq Ahmad",
      image: "/images/team/ameeq.webp",
      category: "PD",
    },
    {
      id: "28",
      designation: "Graphic Designer",
      employe: "Aleesha Tehreem",
      image: "/images/team/aleeshasb.webp",
      category: "PD",
    },
  ];

  const buttons = [
    {
      id: "1",
      buttonText: "All",
      value: "All",
    },
    {
      id: "2",
      buttonText: "Directors",
      value: "DT",
    },

    {
      id: "3",
      buttonText: "Graphic Designers",
      value: "GP",
    },
    {
      id: "4",
      buttonText: "Developers",
      value: "PD",
    },
    {
      id: "5",
      buttonText: "Digital Marketer",
      value: "MK",
    },
    {
      id: "6",
      buttonText: "E-Commerce Experts",
      value: "EC",
    },
    {
      id: "7",
      buttonText: "Management Officers",
      value: "BDO",
    },
  ];

  const filteredCards =
    selectedCategory === "All"
      ? data
      : data.filter((data) => data.category === selectedCategory);

  return (
    <>
      <div className="text-center max-w-xl mx-auto">
        <h1 className="text-6xl md:text-7xl capitalize font-bold mb-5 text-gray-200">
          Our Team
        </h1>
        <div className="text-center mb-10">
          <span className="inline-block w-1 h-1 rounded-full bg-blue-500 ml-1"></span>
          <span className="inline-block w-3 h-1 rounded-full bg-blue-500 ml-1"></span>
          <span className="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
          <span className="inline-block w-3 h-1 rounded-full bg-blue-500 ml-1"></span>
          <span className="inline-block w-1 h-1 rounded-full bg-blue-500 ml-1"></span>
        </div>
      </div>
      <motion.section
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="min-h-[50vh]"
      >
        <div className="flex snap-proximity snap-both md:justify-evenly overflow-auto md:flex-wrap py-6">
          {buttons.map((v, i) => (
            <div className="flex flex-grow snap-center" key={i}>
              <button
                value={v.value}
                onClick={() => handleCategoryClick(v.value, i)}
                className={
                  selected === i
                    ? "w-full bg-none text-base text-white px-8 py-2 rounded-md flex items-center justify-center cursor-pointer m-1 transition duration-300 ease-in bg-[color:var(--accent-color)] border border-[color:var(--accent-color)]"
                    : "w-full bg-none text-base text-white px-8 py-2 rounded-md flex items-center justify-center cursor-pointer m-1 transition duration-300 ease-in border bg-[#2347e71f] border-[color:var(--accent-color)] "
                }
              >
                {v.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className="pt-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-10  transition-all py-5">
          {filteredCards.map((v) => (
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              key={v.id}
              className="animate-circle flex group flex-col justify-center items-center bg-[color:var(--accent-cards)] rounded-xl hover:custom-box-shadow"
            >
              <div className="h-[100px] w-[100px] bg-gray-200  overflow-hidden rounded-full group-hover:-translate-y-7 group-hover:scale-105  -translate-y-5 duration-200 border-4 border-gray-500">
                <Image
                  width={700}
                  height={700}
                  alt={v.employe}
                  className="h-full w-full costomeShadow object-cover z-50"
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = "/images/user.png";
                  }}
                  src={v.image}
                />
              </div>
              <div className="flex flex-col justify-center items-center border-b border-[color:var(--accent-color)] pb-4">
                <h3 className="text-xl text-center font-semibold text-gray-300 leading-8 tracking-wide">
                  {v.employe}
                </h3>
                <span className="text-sm text-gray-400">{v.designation}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
};

export default Team;
