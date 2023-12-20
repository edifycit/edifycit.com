import HoverCard from "@/components/Burrh/HoverCard";
import Image from "next/image";

const Mcards = () => {
  var data = [
    {
      image: "/images/signUpSectionImages/1.webp",
      title: "British Council Membership",
      desc: "Edify is Platinum Member of British Council",
      left: "0",
    },
    {
      image: "/images/signUpSectionImages/2.webp",
      title: "High-End Tech",
      desc: "Extend into a tech Space",
      left: "-100%",
    },
    {
      image: "/images/signUpSectionImages/3.webp",
      title: "Professional Instructors",
      desc: "Will convert your skill into digital tool",
      left: "0",
    },
    {
      image: "/images/signUpSectionImages/4.webp",
      title: "Globally Recognized",
      desc: "Opens the door everywhere",
      left: "-100%",
    },
  ];

  return (
    <div className="">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-2">
        {data.map((v, i) => {
          return (
            <HoverCard
              backgroundColor="#f47f7f25"
              direction="flex-col"
              left={v.left}
              key={i}
            >
              <div className="flex p-5 rounded-lg  h-full backdrop-blur-lg items-center">
                <div className="h-[70px] w-[70px] flex items-center justify-center text-xl p-4 mr-4">
                  <Image
                    width={700}
                    height={700}
                    className="h-full w-full"
                    src={v.image}
                    alt={v.title}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-white leading-[1.2] text-[20px]">
                    {v.title}
                  </h3>
                  <p className="text-[15px] font-normal mt-1 text-slate-400">
                    {v.desc}
                  </p>
                </div>
              </div>
            </HoverCard>
          );
        })}

        <div className="col-span-full">
          <HoverCard backgroundColor="#f47f7f25">
            <div className="flex p-5 min-h-[140px] w-full backdrop-blur-lg h-full items-center">
              <div className="h-[70px] w-[70px] flex items-center justify-center text-xl p-4 mr-4">
                <Image
                  width={700}
                  height={700}
                  className="h-full w-full"
                  src="/images/signUpSectionImages/5.webp"
                  alt=" Ranked No.1 Institute"
                />
              </div>
              <div className="">
                <h3 className="text-white leading-[1.2] text-[20px]">
                  Ranked No.1 Institute
                </h3>
                <p className="text-[15px] font-normal mt-1 text-slate-400">
                  Edify Group ranked No.1 in Faisalabad region in the field of
                  IT and Consultancy
                </p>
              </div>
            </div>
          </HoverCard>
        </div>
      </div>
    </div>
  );
};

export default Mcards;
