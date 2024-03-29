import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
 

const Cardmarquee = () => {

   const [features, setFeatures] = useState([]);
   
  useEffect(() => {
    fetch("/features.json")
      .then((res) => res.json())
      .then((data) => setFeatures(data)); 
  }, []);
   return (
      <div className="bg-slate-100 py-10 md:mt-0 mt-44">
         <h1 className="text-2xl font-bold text-center my-2 uppercase">latest product</h1>
         <div className="flex items-center shadow-xl rounded-md bg-white w-4/5 mx-auto">
           <Marquee speed={50}
           pauseOnHover={true}
           > 
            {
            features.map(feature =>
               <div className="mr-6 border-r-2  cardbody"  key={feature.id}> 
                  <img className="h-24 w-28" src={feature.image} alt="" />
                  <h1 className="font-semibold text-center">{feature.name}</h1>
                  <p className="text-sm text-orange-300 text-center">${feature.new_price}</p> 
                  <button className="bg-blue-600 offer mt-2 py-1 px-2 text-xs font-semibold text-white rounded hover:bg-amber-400">
                   <Link to= {`/featureDetails/${feature.id}`}> View Product</Link>
                  </button>
               </div> 
              )
            }
            
            </Marquee>
           </div>
      </div>
   );
};

export default Cardmarquee;