import About from '@/components/About/About'
import React from 'react'
import openGraphImage from "@/components/shared-metadata";

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
};
const page = () => {
  return (
<>
<About/>
</>
  )
}

export default page