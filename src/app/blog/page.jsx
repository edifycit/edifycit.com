import Blogscard from "@/components/BlogCards";
import Pagination from "@/components/Pagination/Pagination";
import { openGraphImage } from "@/components/shared-metadata";
import Search from "./SearchBlog";

export const metadata = {
  title: "Blogs | Edify College of IT",
  description:
    "Dive into our digital expertise with informative articles and insights. Stay ahead with Edifycit's blog. Discover, learn, and thrive in your digital journey.",
  openGraph: {
    ...openGraphImage,
    title: "Blogs | Edify College of IT",
    description:
      "Dive into our digital expertise with informative articles and insights. Stay ahead with Edifycit's blog. Discover, learn, and thrive in your digital journey.",
  },
};
const page = ({ searchParams }) => {
  return (
    <>
      <div className="text-center max-w-xl mx-auto">
        <h1 className="text-6xl md:text-7xl capitalize font-bold mb-5 text-gray-200">
          Our Blogs
        </h1>
        <div className="text-center mb-10">
          <span className="inline-block w-1 h-1 rounded-full bg-blue-500 ml-1"></span>
          <span className="inline-block w-3 h-1 rounded-full bg-blue-500 ml-1"></span>
          <span className="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
          <span className="inline-block w-3 h-1 rounded-full bg-blue-500 ml-1"></span>
          <span className="inline-block w-1 h-1 rounded-full bg-blue-500 ml-1"></span>
        </div>
      </div>
      <section>
        <Search />
        <Blogscard filters={searchParams} />
      </section>
    </>
  );
};

export default page;
