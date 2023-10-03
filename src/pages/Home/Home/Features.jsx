import  { useEffect, useState } from 'react';
import './Features.css'
import { motion } from 'framer-motion';
import { fadein } from '../../../hooks/fadein';

const Features = () => {
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
                <div className='md:flex mt-12 '>
                    <div className='md:w-[30%] w-full'>
                        helelelooo
                        </div> 
        <div className='md:w-[70%] w-full'>
        <div className="container ">
      <div className="tab md:flex justify-between">
        <div className='text-xl font-bold'>Features Product</div>
        <div className=''>
        <button
          className={`button ${activeTab === 0 ? 'active' : ''}`}
          onClick={() => handleTabClick(0)}
        >
            On-Sell
        </button>
        <button
          className=  {`button ${activeTab === 1 ? 'active' : ''}`}
          onClick={() => handleTabClick(1)}
        >
          Hot-Sell
        </button>
        <button
          className=  {`button ${activeTab === 2 ? 'active' : ''}`}
          onClick={() => handleTabClick(2)}
        >
          Treading
        </button>
                  </div> 
             </div> 
             <hr />
             <div className="content">
        {activeTab === 0 && 
         <div className='grid md:grid-cols-3 gap-4 mt-6'> 
                {
                        
                        features.slice(0,6).map(feature => 
                        <motion.div className='hover:shadow-2xl p-3' key={feature.id}
                        variants={fadein("right", 0.5)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.7 }}
                        >
                                <img className='h-32 w-32 bg-white mx-auto' src={feature.image} alt="" />
                                <h1 className='text-center'>{feature.name}</h1>
                                <div className='flex items-center gap-4 justify-center'>
                                <del className='text-red-400 font-semibold'>${feature.price}</del>
                                <p className='text-orange-300 font-bold'>${feature.new_price}</p>
                                </div>
                                 
                        </motion.div>)
                }
          </div>} 
        {activeTab === 1 && 
         <div className='grid md:grid-cols-3 gap-4 mt-6'> 
         {
                 
                 hotsels.map(hotsel => 
                 <motion.div className='hover:shadow-2xl p-5' key={hotsel.id}
                 variants={fadein("down", 0.5)}
                         initial="hidden"
                         whileInView={"show"}
                         viewport={{ once: false, amount: 0.7 }}
                 >
                         <img className='h-32 w-32 bg-white mx-auto' src={hotsel.image} alt="" />
                         <h1 className='text-center'>{hotsel.name}</h1>
                         <div className='flex items-center gap-4 justify-center'>
                         <del className='text-red-400 font-semibold'>${hotsel.price}</del>
                         <p className='text-orange-300 font-bold'>${hotsel.new_price}</p>
                         </div>
                          
                 </motion.div>)
         }
   </div>} 
        {activeTab === 2 && 
         <div className='grid md:grid-cols-3 gap-4 mt-6'> 
         {
                 
                 treads.slice(0,6).map(tread => 
                 <motion.div className='hover:shadow-2xl p-5' key={tread.id}
                 variants={fadein("left", 0.5)}
                         initial="hidden"
                         whileInView={"show"}
                         viewport={{ once: false, amount: 0.7 }}
                 >
                         <img className='h-32 w-32 bg-white mx-auto' src={tread.image} alt="" />
                         <h1 className='text-center'>{tread.name}</h1>
                         <div className='flex items-center gap-4 justify-center'>
                         <del className='text-red-400 font-semibold'>${tread.price}</del>
                         <p className='text-orange-300 font-bold'>${tread.new_price}</p>
                         </div>
                          
                 </motion.div>)
         }
   </div>} 
          </div> 
      </div> 
  </div>
  </div>
        );
};

export default Features;