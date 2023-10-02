import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import watch1 from '../../../../public/watch/rorex2.jpg' 
import watch2 from '../../../../public/watch/watch4.jpg' 
import camera1 from '../../../../public/camera/camera2.jpg' 
import camera2 from '../../../../public/headphone/head3.jpg' 
import speaker1 from '../../../../public//speaker/speaker2.jpg' 
import speaker2 from '../../../../public/speaker/speaker3.jpg' 
import gamepad from '../../../../public/gamepad/game2.jpg' 
import drone from '../../../../public/dron/drone3.png' 


const ViewProduct = () => {
        return (
                <div className='bg-slate-100 py-12 mt-10'>
                       <h1 className='text-2xl font-bold p-6'>Your Recently Viewed Products</h1> 

                       <Swiper
         slidesPerView={5}
         
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        className='bg-white w-[90%] grid md:grid-cols-5 grid-cols-3  mx-auto shadow-xl'
         
      >
        <SwiperSlide>
                <img className='py-8  h-40 over:transition-all hover:rotate-3 hover:motion-safe:scale-110' src={watch1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
                <img className='py-8 h-40 hover:transition-all hover:rotate-3 hover:motion-safe:scale-110' src={gamepad} alt="" />
        </SwiperSlide>
        <SwiperSlide>
                <img className='py-8 h-40 hover:transition-all hover:rotate-3 hover:motion-safe:scale-110' src={camera2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
                <img className='py-8 h-40 hover:transition-all hover:rotate-3 hover:motion-safe:scale-110' src={drone} alt="" />
        </SwiperSlide>
        <SwiperSlide>
                <img className='py-8 h-40 hover:transition-all hover:rotate-3 hover:motion-safe:scale-110' src={speaker1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
                <img className='py-8 h-40 hover:transition-all hover:rotate-3 hover:motion-safe:scale-110' src={watch2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
                <img className='py-8 h-40 hover:transition-all hover:rotate-3 hover:motion-safe:scale-110' src={camera1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
                <img className='py-8 h-40 hover:transition-all hover:rotate-3 hover:motion-safe:scale-110' src={gamepad} alt="" />
        </SwiperSlide>
        <SwiperSlide>
                <img className='py-8 h-40 hover:transition-all hover:rotate-3 hover:motion-safe:scale-110' src={speaker2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
                <img className='py-8 h-40 hover:transition-all hover:rotate-3 hover:motion-safe:scale-110' src={watch1} alt="" />
        </SwiperSlide>
           
             
      </Swiper>
                </div>
        );
};

export default ViewProduct;