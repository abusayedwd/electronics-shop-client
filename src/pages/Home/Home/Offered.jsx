 import { motion} from 'framer-motion'
import watch from '../../../../public/awatch.jpg'
 import speaker from '../../../../public/speaker/speaker6.jpg'
import { fadein } from '../../../hooks/fadein';
import { useEffect, useState } from 'react';

const Offered = () => {
        const [features, setFeatures] = useState([])
        const [hotsels, setHotsels] = useState([])
        const [treads, setTread] = useState([])
        useEffect( () => {
                fetch('/features.json')
                .then(res => res.json())
                .then(data => setFeatures(data))
                 
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])
        useEffect( () => {
                fetch('/hotproduct.json')
                .then(res => res.json())
                .then(data => setHotsels(data))
                 
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])
        useEffect( () => {
                fetch('/treadproduct.json')
                .then(res => res.json())
                .then(data => setTread(data))
                 
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])
        const [activeTab, setActiveTab] = useState(0);

        const handleTabClick = (index) => {
          setActiveTab(index);
        };
        return (
                <div className=' mt-16'> 
                        <h1 className='text-2xl font-bold text-orange-400 uppercase underline text-center'>offered product</h1>
                        <div className='md:flex'>
                          <motion.div className='md:w-1/4 w-1/2 '
                          variants={fadein("right", 0.8)}
                          initial="hidden"
                          whileInView={"show"}
                          viewport={{ once: false, amount: 0.7 }}
                          >      
                        <div className='flex hover:shadow-md items-center justify-between p-4 shadow'>
                              <div>
                                <p className="text-blue-400 text-sm font-medium">Basic Gift Idea</p>
                                <p>Mini Two Wheel</p>
                                <p className='text-xl font-bold'>Self Balancing Scooter</p>
                                <button className="bg-blue-600 py-2 px-2 text-sm text-white rounded hover:bg-amber-400">View Collection</button>
                              </div>
                              <div>
                                <img className='cade' src={watch} alt="" />
                              </div>
                        </div>
                        <div className=' flex hover:shadow-md items-center justify-between p-4 shadow'>
                              <div>
                                <p className="text-blue-400 text-sm font-medium">Basic Gift Idea</p>
                                <p>Mini Two Wheel</p>
                                <p className='text-xl font-bold'>Self Balancing Scooter</p>
                                <button className="bg-blue-600 py-2 px-2 text-sm text-white rounded hover:bg-amber-400">View Collection</button>
                              </div>
                              <div>
                                <img className='cade' src={speaker} alt="" />
                              </div>
                        </div>
                 </ motion.div>
                 <div className='md:w-3/4 w-1/2'>
                 <div className="container ">
      <div className="tab md:flex justify-between">
        <div className='text-xl text-black font-bold'>Beat Deals</div>
        <div className=''>
        <button
          className={`button ${activeTab === 0 ? 'active' : ''}`}
          onClick={() => handleTabClick(0)}
        >
            17%-Of
        </button>
        <button
          className=  {`button ${activeTab === 1 ? 'active' : ''}`}
          onClick={() => handleTabClick(1)}
        >
          25%-Of
        </button>
        <button
          className=  {`button ${activeTab === 2 ? 'active' : ''}`}
          onClick={() => handleTabClick(2)}
        >
          32%-Of
        </button>
                  </div> 
             </div> 
             <hr />
             <div className="content">
        {activeTab === 0 && 
         <div className='grid md:grid-cols-3 gap-4 mt-6'> 
                {  
                        features.slice(0,3).map(feature => 
                        <div className='p-3 border-r-2' key={feature.id}
                         
                        >
                                <div>
                                <img className='h-28 cade w-28 mx-auto' src={feature.image} alt="" />
                                </div>
                                <div>
                                <h1 className='text-center'>{feature.name}</h1>
                                <div className='flex items-center gap-4 justify-center'>
                                <del className='text-red-400 font-semibold'>${feature.price}</del>
                                <p className='text-orange-300 font-bold'>${feature.new_price}</p>
                                </div>
                                 
                                </div>
                                 
                        </div>)
                }
          </div>} 
        {activeTab === 1 && 
         <div className='grid md:grid-cols-3 gap-4 mt-6'> 
         {
                 
                 hotsels.slice(0,3).map(hotsel => 
                 <div className=' p-3 border-r-2 text-center' key={hotsel.id}
                  
                 >
                         <div>
                         <img className='h-28 cade w-28 mx-auto' src={hotsel.image} alt="" />
                         </div>
                         <div>
                         
                         <h1>{hotsel.name}</h1>
                         <div className='flex items-center gap-4 justify-center'>
                         <del className='text-red-400 font-semibold'>${hotsel.price}</del>
                         <p className='text-orange-300 font-bold'>${hotsel.new_price}</p>
                         </div>
                          
                         </div>
                          
                 </div>)
         }
   </div>} 
        {activeTab === 2 && 
         <div className='grid md:grid-cols-3 gap-4 mt-6'> 
         {
                 
                 treads.slice(0,3).map(tread => 
                 <div className='p-3 border-r-2' key={tread.id}
                  
                 >
                         <div>
                         <img className='h-28 cade w-28 mx-auto' src={tread.image} alt="" />
                         </div>
                         <div>
                         <h1 className='text-center'>{tread.name}</h1>
                         <div className='flex items-center gap-4 justify-center'>
                         <del className='text-red-400 font-semibold'>${tread.price}</del>
                         <p className='text-orange-300 font-bold'>${tread.new_price}</p>
                         </div>
                          
                         </div>
                          
                 </div>)
         }
   </div>} 
          </div> 
      </div>       
                  </div>
                </div>
                </div>
        );
};

export default Offered;