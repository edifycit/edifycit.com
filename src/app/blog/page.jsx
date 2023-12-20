import Blogscard from "@/components/BlogCards";

const page = () => {
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
      <Blogscard />
    </>
  );
};

export default page;
