import Image from "next/image";
import Slider from "react-slick";

const Partnership = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  const noOfPartners = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  return (
    <>
      <div className="backdrop-blur-sm py-8 px-4">
        <div className="p-4 flex flex-col md:flex-row gap-12 md:gap-6 items-center">
          <div>
            <h2 className="text-xl font-semibold opacity-50">Partnerships</h2>
          </div>
          <Slider {...settings} className="w-[100%]">
            {noOfPartners.map((v, i) => {
              return (
                <div key={i}>
                  <div className=" w-full flex justify-center items-center ">
                    <Image
                      width={700}
                      height={100}
                      className="w-[170px] h-auto object-cover opacity-50"
                      src={`/images/certifications/logo${i + 1}.webp`}
                      alt="image here"
                    />
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Partnership;
