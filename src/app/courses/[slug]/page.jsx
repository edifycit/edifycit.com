import axios from "axios";
import Image from "next/image";
import Link from "next/link";





const singleCourse = async (slug) => {
  const { data } = await axios.get(
    `https://admin.edifycit.com/api/courses/single/${slug}`
  );



  return data.message;
};
export async function generateMetadata({ params}) {
  const metaslug =  await singleCourse(params.slug)
  
   
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
const fetchRelatedCourses = async () => {
  const { data } = await axios.get(
    `https://admin.edifycit.com/api/courses?limit=6`
  );
  return data.message.data;
};







const page = async ({ params }) => {
  const relatedCourses = await fetchRelatedCourses();

  const course = await singleCourse(params.slug);

  function createMarkup(c) {
    return { __html: c };
  }

  return (
    <>
      <section className="grid grid-cols-1 gap-8 lg:grid-cols-2 pb-10">
        <div className="text-center flex items-center">
          <div>
            <p className="inline-block mb-4 text-xs font-semibold tracking-wider text-blue-600 uppercase rounded-full bg-teal-accent-400">
              {course?.category}
            </p>
            <h1 className="mb-6 text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl ">
              {course?.title}
            </h1>
            <p className="text-base mb-6 text-gray-500 md:text-lg">
              {course?.metaDesc}
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href={"/apply"}
                className="inline-block px-4 py-2 rounded-md shadow-md border border-gray-800 items-center bg-slate-800"
              >
                Enroll Now
              </Link>

              <Link
                href={"#outline"}
                className="inline-block border border-gray-800  rounded-md px-4 py-2"
              >
                Course Outline
              </Link>
            </div>
          </div>
        </div>
        <div>
          <Image
            width={700}
            height={700}
            className="w-full rounded shadow-2xl  aspect-video"
            src={course?.featuredImage?.url}
            alt={course?.featuredImage?.altText}
          />
        </div>
      </section>

      <section className="grid gap-20 my-10 grid-cols-6">
        <div className="lg:col-span-4 col-span-6">
          <section className="mb-10">
            <h2 className="pb-2 text-2xl font-semibold text-blue-500">
              About this Course
            </h2>
            <div
              className="text-gray-400 mt-6 courseIntro"
              dangerouslySetInnerHTML={{ __html: course?.desc }}
            />
          </section>
          <section className="pt-24 -mt-20" id="outline">
            <h2 className="pb-2 text-2xl font-semibold text-blue-500">
              Course Outline
            </h2>
            <div className="accordion">
              {course?.courseOutline.map((v, i) => (
                <div className="tab" key={i}>
                  <input type="checkbox" name="accordion-1" id={i} />
                  <label htmlFor={i} className="tab__label ">
                    {v.moduleTitle}
                  </label>
                  <div className="tab__content overflow-scroll relative">
                    <ul className={`p-2 max-w-full`}>
                      {v?.topics?.map((topics, topicIndex) => {
                        return (
                          <li className="overflow-hidden whitespace-nowrap mb-1 overflow-ellipsis max-w-xs" key={topicIndex}>
                            {topics}
                          </li>
                        );
                      })}
                    </ul>
                    {/* <div dangerouslySetInnerHTML={createMarkup(v?.answer)} /> */}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
        <div className="lg:col-span-2 col-span-6">
          <div className=" text-white">
            <h2 className="pb-2 text-2xl text-white font-semibold">
              Related Courses
            </h2>
            <div className="flex flex-col gap-6 py-8 ">
              {relatedCourses.map((v, i) => (
                <Link key={i} href={`/courses/${v.slug}`}>
                  <div key={i} className="max-w-7xl mx-auto">
                    <div className="relative group">
                      <div className="relative bg-[#252525] ring-1 ring-gray-900/5 rounded-lg overflow-hidden leading-none grid grid-cols-3">
                        <div className="w-full overflow-hidden">
                          <Image
                            width={300}
                            height={200}
                            className="object-cover w-full h-full"
                            src={v?.featuredImage?.url}
                            alt={v?.featuredImage?.altText}
                          />
                        </div>
                        <div className="space-y-2 p-2 col-span-2">
                          <h3 className="text-white leading-[25px] line-clamp-2">
                            {v.title}
                          </h3>
                          <button
                            className="block text-sm text-gray-400 group-hover:text-blue-400 transition duration-200"
                            target="_blank"
                          >
                            Read Article <i className="bx bx-right-arrow-alt"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default page;
