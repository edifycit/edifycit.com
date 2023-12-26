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
import { openGraphImage } from "@/components/shared-metadata";
const coursesfetch = async () => {
  const { data } = await axios.get(
    `https://admin.edifycit.com/api/courses?limit=6`
  );
  return data.message.data;
};

export const metadata = {
  title: "Edify College of IT | No. 1 Leading Institute In Pakistan",
  description:
    "Edify College of IT: Your Digital Success Gateway. Learn marketing, design, development, animation, and more. Secure your future today - Enroll now.",
  openGraph: {
    ...openGraphImage,
    title: "Edify College of IT | No. 1 Leading Institute In Pakistan",
    description:
      "Edify College of IT: Your Gateway to Digital Success. Master digital marketing, design, development, animation, and more. Secure your future today. Enroll now.",
  },
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
