import About from '@/components/About/About'
import React from 'react'
import { openGraphImage } from "@/components/shared-metadata";

<<<<<<< HEAD
const About = () => {
  const img = [
    "/images/about/work1.webp",
    "/images/about/1.webp",
    "/images/about/1.webp",
    "/images/about/3.webp",
    "/images/about/4.webp",
  ];

  return (
    <div>
      {/* hero section */}
      <section className="max-md:py-8 md:h-[100vh] lg:h-[100vh]">
        <div className="text-white relative">
          <div className="flex flex-col md:flex-col lg:flex-row items-center">
            <div className="flex flex-col w-full lg:w-1/3 justify-center items-center md:items-start p-8">
              <h1 className="text-6xl md:text-7xl capitalize font-bold mb-5 text-gray-200 first-letter:text-blue-500">
                About Us
              </h1>
            </div>
            <div className="md:mb-0 md:mt-0 ml-0 md:px-4 lg:w-2/3  justify-center">
              <div className="grid grid-cols-23 grid-rows-8 gap-4 h-full ">
                {img.map((v, i) => (
                  <div
                    key={i}
                    className="overflow-hidden rounded-md about-grid"
                  >
                    {i === 2 ? (
                      <video autoplay="autoplay" muted  loop className="w-full h-full object-cover">
                        <source type="video/mp4" src="https://res.cloudinary.com/dqdsf1q5t/video/upload/v1702552860/WhatsApp_Video_2023-12-14_at_16.17.27_601ba76c_bwkrij.mp4" />
                      </video>
                    ) : (
                      <Image
                        width={700}
                        height={700}
                        alt={i}
                        className="inline-block w-full h-full object-cover filter "
                        src={v}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Link
            href="#feture"
            className="absolute max-md:-bottom-16 -bottom-24 left-[50%] -translate-x-1/2 rounded-full shadow hover:shadow-lg text-2xl"
          >
            <i className="bx bx-chevron-down animate-bounce hover:text-indigo-500"></i>
          </Link>
        </div>
      </section>
      {/* Feture Section 1 */}
      <section
        id="feture"
        className="grid  place-content-center mb-24"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div className=" p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-slate-300">
                <Image width={700} height={700} src="/images/512.gif" alt="" />
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Working with us is a pleasure
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                Our vision is cultivating a dynamic learning environment where
                innovation, adaptability, and excellence converge. We aspire to
                be the catalyst for transformative education, equipping students
                with the technical skills, resilience, and creativity required
                to navigate and excel in the diverse challenges of the modern
                world.
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                In our vision, a vibrant community of learners is inspired to
                push boundaries, committed to continuous improvement, and driven
                by a passion for leveraging technology for positive change.
              </p>
            </div>
            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-2 shadow-lg rounded-lg bg-blue-300 bg-opacity-50">
                <Image
                  width={700}
                  height={700}
                  alt="..."
                  src="/images/about/work.webp"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <h4 className="text-xl font-bold text-white">
                    Our Work Enviorment
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Feture Section 2 */}
      <section
        id="feture"
        className="grid  place-content-center mb-24"
      >
        <div className="container mx-auto px-4 ">
          <div className="flex flex-wrap max-md:flex-col-reverse items-center">
            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-2 shadow-lg rounded-lg bg-blue-300 bg-opacity-50">
                <Image
                  width={700}
                  height={700}
                  alt="..."
                  src="/images/about/class.webp"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <h4 className="text-xl font-bold text-white">
                    Top Notch Services
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens.
                  </p>
                </blockquote>
              </div>
            </div>
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div className=" p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-slate-300">
                <Image
                  width={700}
                  height={700}
                  src="/images/513.gif"
                  alt="gifi-nerd"
                />
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Education Focus
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                Our journey began with the goal of creating a dynamic learning
                environment that crosses conventional boundaries, motivated by a
                passion for affecting the direction of technology. As you
                explore our official website, you&apos;ll discover a vibrant
                community of learners, passionate educators, and a wealth of
                resources designed to fuel your curiosity and ambition
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                Where learning knows no bounds, with the story of innovation and
                education unfolding. Join us on this exciting journey of
                knowledge and growth.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Testimonies />
    </div>
  );
=======
export const metadata = {
  title: "About Us | Edify College of IT ",
  description:
    "Explore the story behind Edify College of IT. Learn about our commitment to shaping digital futures. Discover our mission and vision. Join us on this exciting journey.",
  openGraph: {
    ...openGraphImage,
    title: "About Us | Edify College of IT ",
    description:
      "Explore the story behind Edify College of IT. Learn about our commitment to shaping digital futures. Discover our mission and vision. Join us on this exciting journey.",
  },
>>>>>>> 7f0c9bd9d1bb5b90bdcb6a33e6b97a5ec75b9f9c
};
const page = () => {
  return (
<>
<About/>
</>
  )
}

export default page