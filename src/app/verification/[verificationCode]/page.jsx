import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="w-[1200px] scale-100 transition-all duration-500  myDivToPrint  aspect-[1.41/1]">
        <div className="placement text-center pt-[30%]">
          <h2
            style={{fontSize:"130px"}}
            className="leading-[120px] text-black uppercase mb-5 "
          >
            EMAN RIAZ
          </h2>
          <h3 className="font-bold flex justify-center">
            <div className="border-b text-black  border-gray-300">Amazon</div>
          </h3>
          <h4 className="my-5 text-black  font-semibold uppercase">Experties Level : Expert</h4>
          <p className="uppercase text-black  font-medium">Course Duration : 4 MONTHS</p>
          <p className="uppercase text-black  font-medium">
            December 14, 2023 to April 14, 2024{" "}
          </p>
          <h5 className="my-5 text-black  font-semibold">Verfication ID : ECIT-AMZ-0019</h5>
          <img
            className="w-[30%] block mt-10 mx-auto"
            src="https://admin.edifycit.com/images/certLogos.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default page;
