import Link from "next/link";
import axios from "axios";
import Image from "next/image";

const blogfetch = async () => {
  const { data } = await axios.get(`https://admin.edifycit.com/api/blogs?limit=12`);
  return data.message?.data;
};

const BlogCards = async () => {
  const data = await blogfetch();

  return (
    <div className="grid grid-cols-1 gap-7 py-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ">
      {data?.map((v, i) => (
        <Link
          href={`/blog/${v.slug}`}
          key={i}
          className="relative flex flex-col border border-white/20 first:shadow-lg first:shadow-black text-white rounded-md overflow-hidden group bg-[#1F2223]"
        >
          <Image
            width={700}
            height={700}
            className="object-cover object-top w-full aspect-[3/2] brightness-75"
            src={v?.featuredImage?.url}
            alt={v?.featuredImage?.altText}
          />
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
  );
};

export default BlogCards;
