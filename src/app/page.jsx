import {
  Hero,
  Fcourse,
  Coursehome,
  Membership,
  HomeCount,
  Reviews,
} from "@/components/Home/Export";
import axios from "axios";
import Image from "next/image";

const coursesfetch = async () => {
  const { data } = await axios.get(`https://admin.edifycit.com/api/courses?limit=6`);
  return data.message.data;
};

const page = async () => {

  const courses = await coursesfetch();
 
  return (
    <>


      <Image
        width={700}
        height={700}
        className="absolute top-0 right-0 opacity-30 w-auto"
        src="/images/pngwing.com.png"
        alt="background"
      />
      <div id="main" className=" my-10 relative">
        <Hero />
        <Fcourse />
        <Coursehome courses={courses} />
        <Membership />
        <HomeCount />
        <Reviews />
      </div>
    </>
  );
};

export default page;
