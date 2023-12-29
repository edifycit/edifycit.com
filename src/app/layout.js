"use client";
import Footer from "@/components/Nav & Footer/Footer";
import NavBar from "@/components/Nav & Footer/Navbar";
import Particals from "@/components/Particals";
import "./globals.css";
import Popup from "@/components/Popup/Popup";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  var pathname = usePathname();

  var domain =
    process.env.NODE_ENV == "development"
      ? "http://localhost:3000"
      : "https://edifycit.com";

  return (
    <html lang="en">
      <head>
        <link rel="canonical" href={`${domain}${pathname}`} />

        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />

        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <script
          src="https://static.elfsight.com/platform/platform.js"
          data-use-service-core="true"
          defer=""
        ></script>
      </head>
      <body suppressHydrationWarning={true}>
        <Particals />
        <NavBar />

        <main className="max-w-[100vw] px-3 overflow-hidden">
          {/* <Popup/> */}
          <section className="max-w-[1400px] m-auto mt-10">{children}</section>
        </main>
        <Footer />
      </body>
    </html>
  );
}
