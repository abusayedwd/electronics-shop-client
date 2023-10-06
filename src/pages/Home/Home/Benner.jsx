/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import React from 'react';
import { motion } from 'framer-motion';
 
import { fadein } from '../../../hooks/fadein';
import { useEffect, useState } from 'react';
import './Benner.css';
import TextTransition, { presets } from 'react-text-transition';
import { TypeAnimation } from 'react-type-animation';

const TEXTS = ['iPhone', 'Apple Watch', 'Laptop', 'Camera','Headphone','Projector', ];
 

const Benner = () => { 
        const [index, setIndex] = React.useState(0);
        React.useEffect(() => {
                const intervalId = setInterval(
                  () => setIndex((index) => index + 1),
                  5000, // every 3 seconds
                );
                return () => clearTimeout(intervalId);
              }, []);

        const [currentImage, setCurrentImage] = useState(1); // Start with the second image

  // Array of background images for the carousel
  const backgroundImages = [
    "https://phonebox.com.mt/wp-content/uploads/2022/11/0021403_iphone-14-pro.jpeg",
    "https://tse2.mm.bing.net/th?id=OIP.PkM497JfvV8Px52vtzBvUgHaHa&pid=Api&P=0&h=220",
    "https://tse1.mm.bing.net/th?id=OIP.CuqteKb9YerZFvifzMiNAAHaEm&pid=Api&P=0&h=220",
    "https://tse3.mm.bing.net/th?id=OIP.6t7lrwILqyQ7Y6Hv_NRy7gHaHa&pid=Api&P=0&h=220",
    "https://tse2.mm.bing.net/th?id=OIP.cKGBMSMBhbmj_AaLZ-0QNgHaHa&pid=Api&P=0&h=220",
    "https://tse4.mm.bing.net/th?id=OIP.fNReBEV8veW1CNwryHSv4wHaEM&pid=Api&P=0&h=220",
  ];

  useEffect(() => {
     
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % backgroundImages.length);
    }, 5000); 

    return () => clearInterval(timer); // Clean up the timer when the component unmounts
  }, [backgroundImages.length]);



        return (
                <div className=" grid md:grid-cols-2 gap-3 text-center py-20 ">
                        
                        <div className='mt-20 px-6'>
                        <motion.div
                                variants={fadein("down", 0.8)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.7 }}
                                >
                               <p className='text-xl text-blue-400'>Entire big collection</p> 
                               <h1  className='text-3xl font-bold uppercase mt-4'>shop wise with price  <br /> Comparisons</h1>
                               </motion.div>
                                

                               <TypeAnimation
                                        sequence={[
                                        // Same substring at the start will only be typed once, initially
                                        'Mens Fashion',
                                        1000,
                                        'Women Fashion',
                                        1000,
                                        'Camera',
                                        1000,
                                        'Dron',
                                        1000,
                                        ]}
                                        speed={{type: 'keyStrokeDelayInMs', value: 250}}
                                        style={{ fontSize: '2em',color: 'orange' }}
                                        repeat={Infinity}
                                        />
                                        <br />

                               <motion.button className="btn btn-outline btn-primary mr-2"
                               variants={fadein("right", 2.2)}
                               initial="hidden"
                               whileInView={"show"}
                               viewport={{ once: false, amount: 0.7 }}
                               >Buy Now</motion.button>

                             <motion.button className="btn btn-outline btn-secondary"
                             variants={fadein("left", 2.2)}
                             initial="hidden"
                             whileInView={"show"}
                             viewport={{ once: false, amount: 0.7 }}
                             >Shop now</motion.button>       
                           
                        </div>
                        <div className='w-[60%] mt-16 mx-auto'>
                                <motion.div
                                variants={fadein("left", 0.8)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.7 }}  
                                >
          { backgroundImages.map((imageUrl, index) => (
        <div
          key={index}
          className={`banner-slide  ${index === currentImage ? "active" : ""}`}
           >
                <img className='h-52 w-60' src={imageUrl} alt="" />

                <h1>
      <TextTransition className='text-xl font-bold' springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
         </h1>

          </div> ))}
                                </motion.div>
                        </div>
                         
                </div>
        );
};

export default Benner;