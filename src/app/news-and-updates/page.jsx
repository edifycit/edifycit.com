import Components from "@/components/Components";
import { Suspense } from "react";
import { openGraphImage } from "@/components/shared-metadata";

export const metadata = {
  title: "News and Events| Edify College of IT",
  description:
    "Stay informed with Edifycit's latest news and events. Celebrate milestones and connect with the digital community.",
  openGraph: {
    ...openGraphImage,
    title: "News and Events| Edify College of IT",
    description:
      "Stay informed with Edifycit's latest news and events. Celebrate milestones and connect with the digital community.",
  },
};
const page = async () => {
  return (
    <>
      <div className="text-center max-w-xl mx-auto">
        <h1 className="text-6xl md:text-7xl capitalize font-bold mb-5 text-gray-200">
          News & Events
        </h1>
        <div className="text-center mb-10">
          <span className="inline-block w-1 h-1 rounded-full bg-blue-500 ml-1"></span>
          <span className="inline-block w-3 h-1 rounded-full bg-blue-500 ml-1"></span>
          <span className="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
          <span className="inline-block w-3 h-1 rounded-full bg-blue-500 ml-1"></span>
          <span className="inline-block w-1 h-1 rounded-full bg-blue-500 ml-1"></span>
        </div>
      </div>
      <div className="py-10">
        <Suspense fallback={<p>Loading ...</p>}>
          <Components />
        </Suspense>
      </div>
    </>
  );
};

export default page;
