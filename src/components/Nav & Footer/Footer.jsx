import Link from "next/link";

const Footer = () => {
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
  const courselinks = [
    {
      name: "SEO",
      link: "/courses/search-engine-optimization",
    },
    {
      name: "Amazon",
      link: "/courses/amazon-fba",
    },
    {
      name: "Spoken English",
      link: "/courses/spoken-english",
    },
    {
      name: "Digital Marketing",
      link: "/courses/digital-marketing",
    },
    {
      name: "Web Development",
      link: "/courses/full-stack-web-development",
    },
    {
      name: "Android Development",
      link: "/courses/app-development-with-kotlin",
    },
  ];
  const d = new Date();
  let year = d.getFullYear();

  return (
    <>
      <footer
        style={{
          background: "linear-gradient(-155deg, #0000 0%, #101010 100%)",
        }}
        className="relative border-t border-white/10  backdrop-blur-2xl mt-16 pt-8 pb-6 "
      >
        <div className="flex flex-col rounded-md items-center justify-center gap-10 px-6 py-4 m-auto mb-20 border border-blue-500 border-opacity-50 shadow-2xl max-md:w-full w-max md:flex-row backdrop-blur-3xl border-slate-700/30">
          <h4 className="text-2xl font-medium text-gray-300">
            Subscribe to our Newsletter
          </h4>
          <div className="relative max-md:w-full">
            <input
              type="text"
              placeholder="Enter Your Email"
              className=" bg-transparent w-full focus:ring-0  md:w-[400px] px-5 py-3 border-b border-[#ffffff45]"
            />
            <button className=" absolute top-1/2 -translate-y-[50%] px-3 py-2 rounded-sm right-1 text-white bg-blue-600">
              Subscribe
            </button>
          </div>
        </div>
        <div className=" max-w-[1350px] m-auto lg:px-0 px-4">
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-4 lg:col-span-2">
              <h4 className="text-3xl fonat-semibold text-blueGray-700">
                Let&apos;s keep in touch!
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-gray-300 text-blueGray-600">
                Find us on any of these platforms, we respond within 1-2 business
                days.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6 flex gap-4">
                {social.map((v, i) => (
                  <Link
                    key={i}
                    id={i}
                    href={v.h}
                    className="text-xl items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 contents"
                    type="button"
                  >
                    <i className={v.i}></i>
                  </Link>
                ))}
              </div>
            </div>

            <div className="col-span-4 lg:col-span-1">
              <span className="block  uppercase text-blueGray-500 text-xl font-semibold mb-2">
                Useful Links
              </span>
              <ul className="list-unstyled">
                <li>
                  <Link
                    className="block pb-2 text-gray-300 hover:text-white"
                    href="/blog"
                  >
                    Blog
                  </Link>
                </li>

                <li>
                  <Link
                    className="block pb-2 text-gray-300 hover:text-white"
                    href="/team"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    className="block pb-2 text-gray-300 hover:text-white"
                    href="/courses"
                  >
                    Courses
                  </Link>
                </li>
                <li>
                  <Link
                    className="block pb-2 text-gray-300 hover:text-white"
                    href="/about"
                  >
                    About Us
                  </Link>
                </li>

                <li>
                  <Link
                    className="block pb-2 text-gray-300 hover:text-white"
                    href="/verification"
                  >
                    Verification
                  </Link>
                </li>
                <li>
                  <Link
                    className="block pb-2 text-gray-300 hover:text-white"
                    href="/become-an-ambassador"
                  >
                    Become An Ambassador
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-4 lg:col-span-1">
              <span className="block uppercase text-blueGray-500 text-xl font-semibold mb-2">
                Our Courses
              </span>
              <ul className="list-unstyled">
                {courselinks?.map((v, i) => (
                  <li key={i}>
                    <Link
                      className="block pb-2 text-gray-300 hover:text-white"
                      href={v.link}
                    >
                      {v.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <hr className="my-6 border-white/10" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-300 py-1">
                © {year} Edify College of IT. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
