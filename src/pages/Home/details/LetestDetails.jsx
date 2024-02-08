import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLoaderData, useParams } from "react-router-dom";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const LetestDetails = () => {
  const { id } = useParams();
  // console.log(id)
  const details = useLoaderData();
  const [latestProduct, setLalestProduct] = useState([]);

  useEffect(() => {
    if (details) {
      const detailss = details.find((dt) => dt.id == id);
      setLalestProduct(detailss);
      // console.log(latestProduct)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [count, setCount] = useState(0);

  const countplus = () => {
    let amount = count;
    const coun = amount - 1;
    setCount(coun);
    // console.log(coun)
  };
   
   const countless = () => { 
    
    if (count < 1) {
      toast.error("Invalid operation");
      return count
    }
  };
  const dubble = () => {
    countplus();
    countless();
  };

  return (
    <div className="mt-24">
      <h1 className="text-3xl font-bold text-sky-600 text-center">
        About the {latestProduct.name}
      </h1>

      <div className="md:flex py-8">
        <div className="md:w-1/2">
          <img
            className="rounded-3xl h-80 w-full"
            src={latestProduct.image}
            alt=""
          />
        </div>
        <div className="md:w-1/2 ml-8">
          <p className="text-2xl font-semibold">{latestProduct.name}</p>
          <p className="py-3">{latestProduct.details}</p>

          <Rating
            className="text-yellow-400"
            style={{
              maxWidth: 100,

              height: "50px",
              color: "burlywood",
            }}
            value={latestProduct.rating}
            readOnly
          />
          
           
          <p className="text-orange-400 font-semibold"> ${latestProduct.new_price}</p>
           {count} x {latestProduct.new_price}
          <p className="text-orange-500 font-bold"> Total : {parseFloat(count * latestProduct.new_price).toFixed(2)}</p>
          <div className="md:flex gap-6 items-center mt-4">
          <div className="flex gap-8 border-sky-400 border w-[196px]">
            <button className= "px-4 py-1 bg-slate-100 border-sky-400 border-r" onClick={() => dubble()}>
              -
            </button>
            <p>{count}</p>

            <button  className="bg-slate-100 px-4 py-1 border-sky-400 border-l" onClick={() => setCount((count) => count + 1)}>+</button>
            <ToastContainer></ToastContainer>
          </div>  
                 <div>
                  <button className="bg-blue-600 text-white py-2 hover:bg-amber-400 px-3 rounded text-sm font-bold md:mt-0 mt-4">add to cart</button>
                 </div>
          </div>
        </div>
      </div>
          <div className="border">
                     <div className="md:px-16">
                        <h1>Reviews</h1>
                     <div className="md:flex bg-slate-100 md:my-16 md:py-5">
                        <div className="md:w-1/2 py-4">
                           <div className="flex items-center justify-around"> 
                           <small><p className="font-bold text-orange-300">5 stars</p></small>
                           <progress className="progress progress-warning md:w-56 w-24" value="100" max="100"></progress>
                          <p className="text-yellow-400 flex items-center text-sm">  
                           <FaStar />  
                           <FaStar />  
                           <FaStar />  
                           <FaStar />  
                           <FaStar />  
                           </p>
                           </div>
                           <div className="flex items-center justify-around"> 
                           <small><p className="font-bold text-orange-300">4 stars</p></small>
                           <progress className="progress progress-warning md:w-56 w-24" value="100" max="100"></progress>
                          <p className="text-yellow-400 flex items-center text-sm">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />  </p>
                           </div>
                           <div className="flex items-center justify-around"> 
                           <small><p className="font-bold text-orange-300">3 stars</p></small>
                           <progress className="progress progress-warning md:w-56 w-24" value="100" max="100"></progress>
                          <p className="text-yellow-400 flex items-center text-sm">
                           <FaStar />  
                           <FaStar />  
                           <FaStar />  
                           < FaRegStar />
                           < FaRegStar />
                           </p>
                           </div>
                           <div className="flex items-center justify-around"> 
                           <small><p className="font-bold text-orange-300">2 stars</p></small>
                           <progress className="progress progress-warning md:w-56 w-24" value="100" max="100"></progress>
                          <p className="text-yellow-400 flex items-center text-sm">
                           <FaStar />  
                           <FaStar />  
                           < FaRegStar /> 
                           < FaRegStar /> 
                           < FaRegStar /> 
                           </p>
                           </div>
                           <div className="flex items-center justify-around"> 
                           <small><p className="font-bold text-orange-300">1 stars</p></small>
                           <progress className="progress progress-warning md:w-56 w-24" value="100" max="100"></progress>
                          <p className="text-yellow-400 flex items-center text-sm">
                           <FaStar />  
                           < FaRegStar /> 
                           < FaRegStar /> 
                           < FaRegStar /> 
                           < FaRegStar /> 
                           </p>
                           </div>
                        </div>
                        <div className="md:w-1/2 md:border-l-4 flex justify-center items-center">
                             <div>
                             <p className="flex text-yellow-400 text-2xl">
                             <FaStar />
                             <FaStar />
                             <FaStar />
                             <FaStar />
                             <FaStar />
                             </p>
                             <p className="font-semibold">Average Star Rating: <span className="text-orange-300">4.8 out of 5</span>(vote) <span className="text-white font-bold bg-sky-600 px-2 md:ml-2 rounded-full">?</span></p>
                             
                             </div>
                        </div>
                     </div>
                     </div>
                     
           </div>
           
    </div>
  );
};

export default LetestDetails;
