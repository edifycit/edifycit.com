import Team from '@/components/Team/Team'
import React from 'react'
import { openGraphImage } from "@/components/shared-metadata";

export const metadata = {
  title: "Our Team | Edify College of IT",
  description:
    "Meet our dynamic team of digital mentors, ready to fuel your success. Join us in crafting your remarkable future today.",
  openGraph: {
    ...openGraphImage,
    title: "Our Team | Edify College of IT",
    description:
      "Meet our dynamic team of digital mentors, ready to fuel your success. Join us in crafting your remarkable future today.",
  },
};
const page = () => {
  return (
    <>
    <Team/>
    
    </>
  )
}

export default page