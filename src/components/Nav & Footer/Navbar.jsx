"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

const NavBar = () => {
  const [mobNavPosstion, setMobNavPosstion] = useState(false);

  const navLinks = [
    { text: "Home", route: "/" },
    { text: "About", route: "/about" },
    { text: "Courses", route: "/courses" },
    { text: "Blogs", route: "/blog" },
    { text: "Stories", route: "/stories" },
    { text: "News", route: "/news-and-updates" },
    { text: "Team", route: "/team" },
    { text: "Contact", route: "/contact" },
  ];

  const router = usePathname();

  return (
    <>
      <div className="bg-[#0000006a] drop-shadow-lg z-50 py-3 sticky top-0 backdrop-blur-3xl mb-2">
        <nav className="flex items-center justify-between max-w-[1400px] m-auto px-4 lg:px-4 2xl:px-0">
          <div className="lg:w-[10rem] w-[50px] lg:h-[2rem]">
            <Link href="/">
              <picture>
                <Image
                  priority
                  className="w-full h-full object-contain hidden lg:block"
                  width={700}
                  height={120}
                  src="/images/Edify.png"
                  alt="Edify College Of IT Logo"
                />
                <Image
                  priority
                  className="w-full h-full lg:hidden"
                  width={700}
                  height={120}
                  src="/images/bluelogo.png"
                  alt="Edify College Of IT Logo"
                />
              </picture>
            </Link>
          </div>
          <div>
            <ul className="flex gap-5 items-center">
              {navLinks.map((links) => (
                <li
                  key={links.route}
                  className="text-[#bebebe] hover:text-white transition duration-200 hidden lg:block"
                >
                  <Link
                    href={links.route}
                    className={
                      router === links.route
                        ? "relative before:absolute before:-bottom-1 font-semibold text-white"
                        : ""
                    }
                  >
                    {links.text}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Navbar Toggle Button ===================== */}
            <OutsideClickHandler
              onOutsideClick={() => {
                setMobNavPosstion(false);
              }}
            >
              <div
                onClick={() => setMobNavPosstion(!mobNavPosstion)}
                className="lg:hidden visible"
              >
                <div className="grid grid-cols-1 items-center gap-3 relative cursor-pointer">
                  <span
                    className="w-6 border bg-gray-300 absolute mt-0 top-1 transition-all duration-300 ease-in-out"
                    style={{
                      rotate: `${mobNavPosstion === false ? 0 : 40}deg`,
                    }}
                  ></span>
                  <span
                    className="w-6 border mt-5 bg-gray-300"
                    style={{ opacity: `${mobNavPosstion === false ? 1 : 0}` }}
                  ></span>
                  <span
                    className="w-6 border mt-0 bg-gray-300 absolute top-3 transition-all duration-300 ease-in-out"
                    style={{
                      rotate: `${mobNavPosstion === false ? 0 : -40}deg`,
                    }}
                  ></span>
                </div>
              </div>
            </OutsideClickHandler>
            {/* Navbar Toggle Button ===================== */}
          </div>
          <Link className="hidden lg:block" href="/apply">
            <button className="bg-gray-950 text-gray-400 border border-blue-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
              <span className="bg-blue-400 shadow-blue-600 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
              Apply Now
            </button>
          </Link>
        </nav>
      </div>

      <div className="absolute top-0 z-50">
        <nav
          style={{
            transition: ".7s",
            left: `${mobNavPosstion === true ? 0 : -100}%`,
          }}
          className="bg-[#0000007e] backdrop-blur-3xl h-full w-1/2 fixed p-4"
        >
          <div className="flex items-center justify-between">
            <div className="w-[140px]">
              <Link href="/">
                <Image
                  width={700}
                  height={700}
                  data-src="images/logo1.webp"
                  src="/images/logo1.webp"
                  alt="Edify College Of IT logo"
                  className="w-full h-full object-cover"
                />
              </Link>
            </div>
            <i
              onClick={() => setMobNavPosstion(false)}
              className="bx bx-x  text-xl backdrop-blur-3xl p-1 bg-[color:var(--accent-cards)] hover:bg-[color:var(--accent-color)] text-slate-300 hover:text-slate-400 cursor-pointer rounded-full object-cover grid place-content-center "
            ></i>
          </div>
          <ul className="grid gap-4 mt-10">
            {navLinks.map((v, i) => (
              <li key={i} className="text-slate-300 hover:text-slate-300">
                <Link href={v.route}>{v.text}</Link>
              </li>
            ))}

            <li className="text-slate-400 mt-10 hover:text-slate-300">
              <Link
                className="text-slate-400 border py-2 rounded-lg hover:bg-[color:var(--accent-color)] hover:border-slate-500 hover:text-slate-300  flex justify-center items-center gap-1"
                href="/apply"
              >
                Apply Now
                <i className="bx bx-right-arrow-alt"></i>
                <i className="fa-solid fa-angle-right animate-pulse"></i>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
