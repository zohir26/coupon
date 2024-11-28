import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; // Import navigation styles
import { Autoplay, Navigation } from "swiper/modules";

const Slider = () => {
  const images = [
    "https://i.ibb.co/3Rcv3tQ/coupon-1018681-1280.jpg",
    "https://i.ibb.co/s1f38ds/cinema-ticket-1075066-1280.png",
    "https://i.ibb.co/LJtQqJn/coupon-1828620-1280.png",
    "https://i.ibb.co/r6dNVCZ/coupon-2435161-1280.png",
    "https://i.ibb.co/bmwcn20/ticket-2974645-1280.jpg",
  ];

  return (
    <div className="  lg:flex justify-center items-center bg-[#be849f] z-1 ">
      <Swiper
        modules={[Autoplay, Navigation]} // Include Navigation module
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 3000, // Change slide every 3 seconds
          disableOnInteraction: false, // Keep autoplay even after user interacts
        }}
        loop={true} // Loop through images
        navigation={true} // Enable navigation arrows
        style={{ width: "80%", height: "auto" }}
        className="w-full  justify-center items-center"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center  pb-5 h-[200px] md:h-[400px]">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="rounded-lg h-[400px]"
                style={{
                  width: "80%",
                  objectFit: "cover",
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
