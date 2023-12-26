import React from 'react'
import Ambassdor from "@/components/Ambassdor/Ambassdor"
import { openGraphImage } from "@/components/shared-metadata";

export const metadata = {
  title: "Become An Ambassador | Edify College of IT",
  description:
    "Meet our dynamic team of digital mentors, ready to fuel your success. Join us in crafting your remarkable future today.",
  openGraph: {
    ...openGraphImage,
    title: "Become An Ambassador | Edify College of IT",
    description:
      "Meet our dynamic team of digital mentors, ready to fuel your success. Join us in crafting your remarkable future today.",
  },
};
const page = () => {
  return (
   <>
   
   <Ambassdor/>
   </>
  )
}

export default page