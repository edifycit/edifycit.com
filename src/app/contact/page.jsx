import Link from "next/link";
import React from "react";
import { openGraphImage } from "@/components/shared-metadata";

export const metadata = {
  title: "Contact Us | Edify College of IT",
  description:
    "Questions or ready to enroll? Contact Edify College of IT for swift answers and easy enrollment steps. Your digital journey begins here",
  openGraph: {
    ...openGraphImage,
    title: "Contact Us | Edify College of IT",
    description:
      "Questions or ready to enroll? Contact Edify College of IT for swift answers and easy enrollment steps. Your digital journey begins here",
  },
};
const page = () => {
  const social = [
    {
      i: "bx bxl-facebook px-2 py-2 rounded-full hover:bg-blue-600 ",
      h: "https://www.facebook.com/edifycitofficials/",
    },
    {
      i: "bx bxl-twitter px-2 py-2 rounded-full hover:bg-blue-300 ",
      h: "https://twitter.com/EdifyCIT/",
    },
    {
      i: "bx bxl-linkedin-square px-2 py-2 rounded-full hover:bg-blue-800 ",
      h: "https://www.linkedin.com/company/edify-college-of-it/mycompany/",
    },
    {
      i: "bx bxl-instagram px-2 py-2 rounded-full hover:bg-gradient-to-br from-purple-500 via-pink-500 to-red-500",
      h: "https://www.instagram.com/edifycitofficial/",
    },
  ];
  return (
    <>
      <div className="text-center max-w-xl mx-auto">
        <h1 className="text-6xl md:text-7xl font-bold mb-5 text-gray-200">
          Head Quaters <br /> Location
        </h1>
        <div className="text-center mb-10">
          <span className="inline-block w-1 h-1 rounded-full bg-blue-500 ml-1"></span>
          <span className="inline-block w-3 h-1 rounded-full bg-blue-500 ml-1"></span>
          <span className="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
          <span className="inline-block w-3 h-1 rounded-full bg-blue-500 ml-1"></span>
          <span className="inline-block w-1 h-1 rounded-full bg-blue-500 ml-1"></span>
        </div>
      </div>
      <section className="flex max-lg:flex-col">
        <div className="lg:w-[60%] w-full px-4 py-12">
          <div className="flex max-lg:flex-col">
            <div className="w-full">
              <div className="text-center sm:text-left mb-14 before:block before:w-24  before:h-3 before:mb-10 before:rounded-md  sm:before:mx-0 before:bg-blue-400">
                <div className="flex gap-4 items-center">
                  <div className="h-6 w-6 bg-blue-400 rounded-full animate-blink" />
                  <h3 className="text-3xl font-semibold ">Follow Us on</h3>
                </div>
                <div className="mt-6 lg:mb-0 mb-6 flex  gap-4">
                  {social.map((v, i) => (
                    <Link
                      key={i}
                      href={v.h}
                      className="text-2xl items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 contents"
                      type="button"
                    >
                      <i className={v.i}></i>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <hr className="mb-10" />
            <div className="w-full">
              {/* contact phone */}
              <div className="lg:space-y-6 relative px-4 pb-10 lg:before:absolute lg:before:top-6 lg:before:bottom-0 lg:before:w-0.5 lg:before:-left-[7px] before:bg-gray-700">
                <div className="relative flex lg:gap-10 max-lg:items-center max-lg:flex-col">
                  <div className="lg:absolute mb-4 flex justify-center text-xl items-center top-0 w-10 h-10 rounded-full bg-blue-400 left-[-40px]">
                    <i className="bx bxs-phone-call bx-tada"></i>
                  </div>
                  <Link
                    href={"tel:+92 321-8886640"}
                    className="lg:text-xl text-2xl lg:mt-2 lg:ml-4 font-semibold tracki"
                  >
                    +92 321-8886640
                  </Link>
                </div>
                <p className="text-gray-500 lg:ml-4  max-lg:text-center">
                  Our office hours are Monday – Saturday, 11 AM - 7 PM
                </p>
              </div>
              {/* email */}
              <div className="lg:space-y-6 relative px-4 pb-10 lg:before:absolute lg:before:top-6 lg:before:bottom-0 lg:before:w-0.5 lg:before:-left-[7px] before:bg-gray-700">
                <div className="relative flex lg:gap-10 max-lg:items-center max-lg:flex-col">
                  <div className="lg:absolute mb-4 flex justify-center text-xl items-center top-0 w-10 h-10 rounded-full bg-blue-400 left-[-40px]">
                    <i className="bx bxs-envelope bx-tada"></i>
                  </div>
                  <Link
                    href="mailto:info@edifycit.com"
                    className="lg:text-xl text-3xl lg:mt-2 lg:ml-4 font-semibold tracki"
                  >
                    info@edifycit.com
                  </Link>
                </div>
                <p className="text-gray-500 lg:ml-4  max-lg:text-center">
                  Email us directly
                </p>
              </div>
              {/* location */}
              <div className="lg:space-y-6 relative px-4 pb-10 lg:before:absolute lg:before:top-6 lg:before:bottom-0 lg:before:w-0.5 lg:before:-left-[7px] before:bg-gray-700">
                <div className="relative flex lg:gap-10 max-lg:items-center max-lg:flex-col">
                  <div className="lg:absolute mb-4 flex justify-center text-xl items-center top-0 w-10 h-10 rounded-full bg-blue-400 left-[-40px]">
                    <i className="bx bx-current-location bx-flashing"></i>
                  </div>
                  <Link
                    href="https://maps.app.goo.gl/XUGYf9Bfr8msHe2m9"
                    className="lg:text-xl text-3xl lg:mt-2 lg:ml-4 font-semibold tracki"
                  >
                    Location
                  </Link>
                </div>
                <p className="text-gray-500 lg:ml-4  max-lg:text-center">
                  4th Floor, Edify Building, Susan Road, Madina Town, Fsd
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[50vh] w-full lg:h-auto lg:w-[40%]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.9507545069105!2d73.1090592755572!3d31.415482852316778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39226940221cbeb9%3A0x87aed33b83a332bd!2sEdify%20College%20of%20IT!5e0!3m2!1sen!2s!4v1692185300261!5m2!1sen!2s"
            title="map1"
            style={{ filter: "invert(90%) hue-rotate(180deg)" }}
            className="gmap_iframe"
            allowFullScreen
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default page;
