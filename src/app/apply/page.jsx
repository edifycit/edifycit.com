import Apply from '@/components/Apply/Apply'
import React from 'react'
import { openGraphImage } from "@/components/shared-metadata";

export const metadata = {
  title: "Edify College of IT | Apply",
  description:
    "Meet our dynamic team of digital mentors, ready to fuel your success. Join us in crafting your remarkable future today.",
  openGraph: {
    ...openGraphImage,
    title: "Edify College of IT | Apply",
    description:
      "Meet our dynamic team of digital mentors, ready to fuel your success. Join us in crafting your remarkable future today.",
  },
};
const page = () => {
  return (
   <>
   
   <Apply/>
   </>
  )
}

export default page