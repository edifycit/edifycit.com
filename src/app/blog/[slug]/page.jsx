import axios from "axios";
import Image from "next/image";
import Link from "next/link";





const getSingleBlog = async (slug) => {
  const { data } = await axios.get(`https://admin.edifycit.com/api/blogs/single/${slug}`);
  

  return data.message;
};
export async function generateMetadata({ params}) {
const metaslug =  await getSingleBlog(params.slug)

 
  return {
    title: metaslug.title,
    description:metaslug.metaDesc,
    openGraph: {
      title: metaslug.title,
      description:metaslug.metaDesc,
      images: [metaslug.featuredImage.url],
    },
  }
}
 




const getRecentBlogs = async () => {
  const { data } = await axios.get(`https://admin.edifycit.com/api/blogs?limit=6`);
  return data.message?.data;
};


const page = async ({ params }) => {
  const blog = await getSingleBlog(params.slug);
  const recentBlogs = await getRecentBlogs();


  var social = [
    { className: "bx bxl-meta text-white" },
    { className: "bx bxl-pinterest text-white" },
    { className: "bx bxl-xing text-white" },
    { className: "bx bxl-linkedin-square text-white" },
  ];
  return (
    <>
      <section className="">
        <div className="w-full md:h-[65vh] overflow-hidden rounded-md relative">
          <Image
            className="object-cover w-full h-full"
            src={blog?.featuredImage?.url}
            alt={blog?.featuredImage?.altText}
            width={1000}
            height={700}
          />
          <div className="absolute bottom-0 z-10 px-4 py-6  md:w-1/2 bg-[#18171761] text-white rounded-tr-sm backdrop-blur-lg">
            <div className="relative">
              <h1 className="pl-2 font-extrabold border-l-8 border-transparent md:text-2xl">
                {blog?.title}
              </h1>
              <span className="absolute top-0 right-0 h-full bg-white animate-show backdrop-blur-lg"></span>
              <span className="absolute top-0 left-0 w-2 h-full bg-white animate-blink backdrop-blur-lg"></span>
            </div>
          </div>
        </div>
        <div className="flex justify-between py-3 text-sm text-white">
          <div className="flex flex-col-reverse items-start gap-2 md:items-center md:flex-row md:gap-7">
            <div>
              <time className="text-slate-400 ">
                Published on{" "}
                {new Date(blog.createdAt).toDateString().substring(3)}
              </time>
              {/* <span className="items-center hidden gap-2 mt-1 text-gray-300 md:flex ">
                <i className="bx bx-user"></i>
                Author
              </span> */}
            </div>
            <span className="bg-[#303094cc] py-1 px-2 rounded-lg">
              {blog?.category}
            </span>
          </div>
          <div>
            <ul className="flex gap-3 text-xl">
              {social?.map((v, i) => (
                <li key={i} className="text-3xl">
                  <i className={v.className} />
                </li>
              ))}
            </ul>
            <span className="flex items-center justify-end gap-2 mt-1 text-gray-300 md:hidden">
              <i className="bx bx-user"></i>
              Author
            </span>
          </div>
        </div>
        <section className="gap-20 grid grid-cols-1 lg:grid-cols-6">

          <main
            dangerouslySetInnerHTML={{ __html: blog?.desc }}
            className="col-span-4 max-w-[800px] courseIntro"
          ></main>

          <div className="sticky col-span-2 top-0">
            <div className=" border-red-400 text-white md:-mt-16 md:pt-16 ">
              <h2 className="pb-2 text-2xl font-semibold  border-b ">
                Recents
              </h2>
              <div className="flex flex-col gap-6 py-4">
                {recentBlogs?.map((v, i) => (
                  <div key={i} className="max-w-7xl mx-auto">
                    <div className="relative group">
                      <div className="relative bg-gray-800 ring-1 ring-gray-900/5 rounded-lg overflow-hidden leading-none grid grid-cols-3">
                        <div className="w-full overflow-hidden">
                          <Image
                            width={700}
                            height={700}
                            className="object-cover h-auto max-w-full"
                            src={v?.featuredImage?.url}
                            alt={v?.featuredImage?.altText}
                          />
                        </div>
                        <div className="space-y-2 py-4 pl-2 col-span-2">
                          <p className="text-white line-clamp-1">{v.title}</p>
                          <Link
                            href={v.slug}
                            className="block text-sm text-indigo-400 group-hover:text-indigo-300 transition duration-200"
                          >
                            Read Article →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default page;
