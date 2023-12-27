import CountUp, { useCountUp } from "react-countup";
import HoverCard from "./HoverCard";

const CountBanner = () => {
  useCountUp({
    ref: "counter",
    end: "5",
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  },[]);

  return (
    <HoverCard backgroundColor="#2e2f5b44" direction="left">
      <div className="backdrop-blur-3xl py-10 px-4 w-full">
        <div>
          <div className="flex justify-evenly flex-col md:flex-row gap-10 items-center">
            <div>
              <div className="text-2xl text-center">
                <CountUp end={5} enableScrollSpy /> +
              </div>
              <p className="text-slate-400 text-center">Branches</p>
            </div>
            <div>
              <div className="text-2xl text-center">
                <CountUp end={30} enableScrollSpy /> +
              </div>
              <p className="text-slate-400 text-center">IT Courses</p>
            </div>
            <div>
              <div className="text-2xl text-center">
                <CountUp end={200} enableScrollSpy /> +
              </div>
              <p className="text-slate-400 text-center">Institutions</p>
            </div>
            <div>
              <div className="text-2xl text-center">
                <CountUp end={5078} enableScrollSpy /> +
              </div>
              <p className="text-slate-400 text-center">Students</p>
            </div>
          </div>
        </div>
      </div>
    </HoverCard>
  );
};

export default CountBanner;
