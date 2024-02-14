import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "./Collection.css";
import "swiper/css";
import "swiper/css/pagination";

import watch1 from "../../../../public/watch/rorex2.jpg";
import watch2 from "../../../../public/watch/watch4.jpg";
import camera1 from "../../../../public/camera/camera2.jpg";
import camera2 from "../../../../public/headphone/head3.jpg";
import speaker1 from "../../../../public//speaker/speaker2.jpg";
import speaker2 from "../../../../public/speaker/speaker3.jpg";
import gamepad from "../../../../public/gamepad/game2.jpg";
import drone from "../../../../public/dron/drone3.png";
// import { Pagination } from "swiper/modules";
 

const ViewProduct = () => {
  return (
    <div className="bg-slate-100 py-12 mt-10">
      <h1 className="text-2xl font-bold p-6">Your Recently Viewed Products</h1>

      <Swiper
      
      slidesPerView={3}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      // modules={[Pagination]}
       
        className="bg-white mySwiper  w-[90%] flex-col items-center  mx-auto shadow-xl"
      >
        <SwiperSlide>
          <img className="py-8 cardbody h-40" src={watch1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="">
          <img className="py-8 cardbody h-40" src={gamepad} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="py-8 cardbody h-40" src={camera2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="py-8 cardbody h-40" src={drone} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="py-8 cardbody h-40 " src={speaker1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="py-8 cardbody h-40 " src={watch2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="py-8 cardbody h-40 " src={camera1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="py-8 cardbody h-40 " src={gamepad} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="py-8 cardbody h-40 " src={speaker2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="py-8 cardbody h-40 " src={watch1} alt="" />
        </SwiperSlide>
      </Swiper> 

    </div>
  );
};

export default ViewProduct;
