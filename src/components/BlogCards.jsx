import Link from "next/link";
import axios from "axios";
import Image from "next/image";
import queryStr from "query-string";
import Pagination from "./Pagination/Pagination";
import BlogSearch from "./BlogSearch/BlogSearch";

const blogfetch = async (filters) => {
  const { data } = await axios.get(
    `https://admin.edifycit.com/api/blogs?${queryStr.stringify(filters)}`
  );
  // console.log(data.message.data)
  return data.message;
};

const BlogCards = async ({ filters }) => {
  const res = await blogfetch(filters);

  const data = res.data;

  return (
    <>
      <BlogSearch filters={filters} />

      <div className="grid grid-cols-1 gap-7 py-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:[&>:nth-child(1)]:col-span-2 lg:[&>:nth-child(1)]:aspect-video [&>:nth-child(1)>img]:h-[70%]">
        {data?.map((v, i) => (
          <Link
            href={`/blog/${v.slug}`}
            key={i}
            className="relative flex flex-col border border-white/20 first:shadow-lg first:shadow-black text-white rounded-md overflow-hidden group bg-[#1F2223]"
          >
            <Image
              width={700}
              height={700}
              className="object-cover object-top w-full h-full brightness-75"
              src={v?.featuredImage?.url}
              alt={v?.featuredImage?.altText}
            />
            {!i && (
              <p className="absolute text-sm px-2 animate-pulse top-2 left-2 py-[2px] bg-blue-500 shadow-md ">
                Latest
              </p>
            )}

            <div className="flex flex-col px-4 py-6 justify-between item-center">
              <h2 className="text-lg mb-4 font-semibold text-blue-gray-900 line-clamp-2">
                {v.title}
              </h2>

              <time className="flex text-gray-400 items-center gap-2">
                <i className="bx text-gray-400 bx-calendar "></i>
                {new Date(v.createdAt)
                  .toDateString()
                  .substring(3, v.createdAt.length)}
              </time>
            </div>
          </Link>
        ))}
      </div>

      {/* Adding Pagination==================================== */}
      <Pagination res={res} filters={filters} />
    </>
  );
};

export default BlogCards;
