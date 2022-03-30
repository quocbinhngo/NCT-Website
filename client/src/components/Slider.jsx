import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";

import ITSlider from "../assets/images/it-slider.jpg";
import SESlider from "../assets/images/se-slider.jpg";
import EESlider from "../assets/images/ee-slider.jpg";
import RMSlider from "../assets/images/rm-slider.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Slider = () => {
  return (
    <div className="px-12 mb-12 " >
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        loop={true}
        autoplay={{ delay: 2500 }}
        grabCursor={true}
        className="mySwiper h-28 sm:h-48 md:h-72 lg:h-80"
      >
        <SwiperSlide
          className="bg-cover bg-center"
          style={{ backgroundImage: `url(${ITSlider})` }}
        ></SwiperSlide>
        <SwiperSlide
          className="bg-cover bg-center"
          style={{ backgroundImage: `url(${SESlider})` }}
        ></SwiperSlide>
        <SwiperSlide
          className="bg-cover bg-center"
          style={{ backgroundImage: `url(${EESlider})` }}
        ></SwiperSlide>
        <SwiperSlide
          className="bg-cover bg-center"
          style={{ backgroundImage: `url(${RMSlider})` }}
        ></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
