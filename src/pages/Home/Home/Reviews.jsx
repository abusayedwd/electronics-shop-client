import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from "@smastrom/react-rating";
 

const Reviews = () => {
   const [reviews, setriviews] = useState([]);
   
  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setriviews(data)); 
  }, []);
   return (
      <div className="mt-16 px-12">
         <h1 className="text-orange-700 text-2xl text-center font-semibold">Customer Review</h1>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper
           ">
        
         {
            reviews.map(review => <SwiperSlide key={review.id}>
                <div className="md:p-12 flex flex-col items-center">
                  <h1 className="text-xl text-orange-400  font-bold">{review.name}</h1>
                  <p className=" md:px-12 px-6">{review.review}</p>
                  <Rating
                      className="rating text-center"
                      style={{
                        maxWidth: 100,
                        height: "24px",
                      }}
                      value={review.rating}
                      readOnly
                    />

                </div>
        </SwiperSlide>
            )
         }
         
      </Swiper>
      </div>
   );
};

export default Reviews;