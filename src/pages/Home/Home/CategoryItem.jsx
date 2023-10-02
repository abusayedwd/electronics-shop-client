import { useState } from 'react';
import './Category.css'
import camera1 from '../../../../public/camera/camera1.jpg'
import camera2 from '../../../../public/camera/camera2.jpg'
import camera3 from '../../../../public/camera/camera3.jpg'
import camera4 from '../../../../public/camera/dfdsa.webp'
import camera5 from '../../../../public/camera/camera5.jpg'
import camera6 from '../../../../public/camera/camera6.jpg'

import watch1 from '../../../../public/watch/rolexw.png'
import watch2 from '../../../../public/watch/rorex2.jpg'
import watch3 from '../../../../public/watch/watch3.jpg'
import watch4 from '../../../../public/watch/watch4.jpg'
import watch5 from '../../../../public/watch/watch5.jpg'
import watch6 from '../../../../public/watch/watch6.jpg'

import drone1 from '../../../../public/dron/drone1.jpg'
import drone2 from '../../../../public/dron/drone2.jpg'
import drone3 from '../../../../public/dron/drone3.png'
import drone4 from '../../../../public/dron/drone4.png'
import drone5 from '../../../../public/dron/drone5.jpg'
import drone6 from '../../../../public/dron/drone6.jpg'

import gagep1 from '../../../../public/gamepad/game1.jpg'
import gagep2 from '../../../../public/gamepad/game2.jpg'
import gagep3 from '../../../../public/gamepad/game3.jpg'
import gagep4 from '../../../../public/gamepad/game4.jpg'
import gagep5 from '../../../../public/gamepad/game5.jpg'
import gagep6 from '../../../../public/gamepad/game6.jpg'

import headp1 from '../../../../public/headphone/head1.jpg'
import headp2 from '../../../../public/headphone/head2.png'
import headp3 from '../../../../public/headphone/head3.jpg'
import headp4 from '../../../../public/headphone/head4.jpg'
import headp5 from '../../../../public/headphone/head5.jpg'
import headp6 from '../../../../public/headphone/head6.jpg'

import speaker1 from '../../../../public/speaker/speaker1.jpg'
import speaker2 from '../../../../public/speaker/speaker2.jpg'
import speaker3 from '../../../../public/speaker/speaker3.jpg'
import speaker4 from '../../../../public/speaker/speaker4.png'
import speaker5 from '../../../../public/speaker/speaker5.jpg'
import speaker6 from '../../../../public/speaker/speaker6.jpg'
import { FaCar, FaHeadset, FaUsers } from 'react-icons/fa';
import { FaArrowTurnDown, FaCartShopping,} from "react-icons/fa6";

function CategoryItem() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
   <div className='md:flex mt-60 md:mt-10 md:h-88'>
        <div className='md:w-[20%] w-full mr-3 border'>
                <div className='flex justify-evenly items-center py-2'>
                        <p className='text-2xl text-sky-500'> <FaCar></FaCar> </p>
                        <p> <span className='font-bold'>Free Delivery</span> <br /> <small>from $25</small> </p>
                </div>
                        <hr className='w-[80%] mx-auto' />
                <div className='flex justify-evenly items-center py-2'>
                        <p className='text-2xl text-sky-500'> <FaUsers></FaUsers> </p>
                        <p> <span className='font-bold'>99% Customer</span> <br /> <small>feedbacks</small> </p>
                </div>
                        <hr className='w-[80%] mx-auto' />
                <div className='flex justify-evenly items-center py-2'>
                        <p className='text-2xl text-sky-500'> <FaArrowTurnDown></FaArrowTurnDown> </p>
                        <p> <span className='font-bold'>10 Days</span> <br /> <small>for free return</small> </p>
                </div>
                        <hr className='w-[80%] mx-auto' />
                <div className='flex justify-evenly items-center py-2'>
                        <p className='text-2xl text-sky-500'> <FaCartShopping></FaCartShopping></p>
                        <p> <span className='font-bold'>Payment</span> <br /> <small>secure system</small> </p>
                </div>
                        <hr className='w-[80%] mx-auto' />
                <div className='flex justify-evenly items-center py-2'>
                        <p className='text-2xl text-sky-500'> <FaHeadset></FaHeadset> </p>
                        <p> <span className='font-bold'>24/6</span> <br /> <small>online support</small> </p>
                </div>
                       
        </div>
        <div className='md:w-[80%] w-full'>
        <div className="tabs-container ">
      <div className="tabs grid md:grid-cols-6 grid-cols-2 gap-2  ">
        <button
          className={`tab-button ${activeTab === 0 ? 'active' : ''}`}
          onClick={() => handleTabClick(0)}
        >
           Watch <br />
           <small>12 item available</small>
        </button>
        <button
          className=  {`tab-button ${activeTab === 1 ? 'active' : ''}`}
          onClick={() => handleTabClick(1)}
        >
         Speaker <br />
           <small>6 item available</small>
        </button>
        <button
          className=  {`tab-button ${activeTab === 2 ? 'active' : ''}`}
          onClick={() => handleTabClick(2)}
        >
          Headphone <br />
           <small>9+ item available</small>
        </button>
        <button
          className=  {`tab-button ${activeTab === 3 ? 'active' : ''}`}
          onClick={() => handleTabClick(3)}
        >
           Gamepad <br />
           <small>12+ item available</small>
        </button>
        <button
          className=  {`tab-button ${activeTab === 4 ? 'active' : ''}`}
          onClick={() => handleTabClick(4)}
        >
           Drone <br />
           <small>12 item available</small>
        </button>
        <button
          className=  {`tab-button ${activeTab === 5 ? 'active' : ''}`}
          onClick={() => handleTabClick(5)}
        >
           Camera <br />
           <small>8 item available</small>
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 0 && 
        <div  className='grid md:grid-cols-6 grid-cols-2 gap-2 mt-6 '> 
                
                <div>
                                <img className='h-24 w-24' src={watch1} alt="" />
                                <p>Rolex watch</p>
                                 <div className='flex gap-2'>
                                 <del className='text-red-500'>$230.846</del>
                                 <p className='text-orange-300'>$220</p>
                                 </div>
                         </div>
                         <div>
                                <img className='h-24 w-24' src={watch2} alt="" />
                                <p>Goldenhour Watch</p>
                                <div className='flex gap-2'>
                                 <del className='text-red-500'>$230.846</del>
                                 <p className='text-orange-300'>$220</p>
                                 </div>
                         </div>
                         <div>
                                <img className='h-24 w-24' src={watch3} alt="" />
                                <p>Gold Watch</p>
                                <div className='flex gap-2'>
                                 <p className='text-orange-300'>$220</p>
                                 </div>
                         </div>
                         <div>
                                <img className='h-24 w-24' src={watch4} alt="" />
                                <p>Diamond Watches</p>
                                <div className='flex gap-2'>
                                 <del className='text-red-500'>$230.846</del>
                                 <p className='text-orange-300'>$220</p>
                                 </div>
                         </div>
                         <div>
                                <img className='h-24 w-24' src={watch5} alt="" />
                                <p>Luxury Watche</p>
                                <div className='flex gap-2'>
                                 <del className='text-red-500'>$230.846</del>
                                 <p className='text-orange-300'>$220</p>
                                 </div>
                         </div>
                         <div>
                                <img className='h-24 w-24' src={watch6} alt="" />
                                <p>Mens Watches</p>
                                <div className='flex gap-2'>
                                 <del className='text-red-500'>$230.846</del>
                                 <p className='text-orange-300'>$220</p>
                                 </div>
                         </div>
                
                 </div>}
        {activeTab === 1 &&  
            <div  className='grid md:grid-cols-6 gap-2 mt-6'> 
                
            <div>
                            <img className='h-24 w-24' src={speaker1} alt="" />
                            <p>Fuers Outdoor</p>
                             <div className='flex gap-2'>
                             <del className='text-red-500'>$230.846</del>
                             <p className='text-orange-300'>$220</p>
                             </div>
                     </div>
                     <div>
                            <img className='h-24 w-24' src={speaker2} alt="" />
                            <p>Goldenhour </p>
                            <div className='flex gap-2'>
                             <del className='text-red-500'>$230.846</del>
                             <p className='text-orange-300'>$220</p>
                             </div>
                     </div>
                     <div>
                            <img className='h-24 w-24' src={speaker3} alt="" />
                            <p>Gold</p>
                            <div className='flex gap-2'>
                             <p className='text-orange-300'>$220</p>
                             </div>
                     </div>
                     <div>
                            <img className='h-24 w-24' src={speaker4} alt="" />
                            <p>Diamond </p>
                            <div className='flex gap-2'>
                             <del className='text-red-500'>$230.846</del>
                             <p className='text-orange-300'>$220</p>
                             </div>
                     </div>
                     <div>
                            <img className='h-24 w-24' src={speaker5} alt="" />
                            <p>Luxury </p>
                            <div className='flex gap-2'>
                             <del className='text-red-500'>$230.846</del>
                             <p className='text-orange-300'>$220</p>
                             </div>
                     </div>
                     <div>
                            <img className='h-24 w-24' src={speaker6} alt="" />
                            <p>Mens SP</p>
                            <div className='flex gap-2'>
                             <del className='text-red-500'>$230.846</del>
                             <p className='text-orange-300'>$220</p>
                             </div>
                     </div>
            
             </div>}
        
        
        {activeTab === 2 &&  
        <div  className='grid md:grid-cols-6 gap-2 mt-6'> 
                
        <div>
                        <img className='h-24 w-24' src={headp1} alt="" />
                        <p>Stereo Headset</p>
                         <div className='flex gap-2'>
                         <del className='text-red-500'>$230.846</del>
                         <p className='text-orange-300'>$220</p>
                         </div>
                 </div>
                 <div>
                        <img className='h-24 w-24' src={headp2} alt="" />
                        <p>Goldenhour</p>
                        <div className='flex gap-2'>
                         <del className='text-red-500'>$230.846</del>
                         <p className='text-orange-300'>$220</p>
                         </div>
                 </div>
                 <div>
                        <img className='h-24 w-24' src={ headp3} alt="" />
                        <p>Goldkotion</p>
                        <div className='flex gap-2'>
                         <p className='text-orange-300'>$220</p>
                         </div>
                 </div>
                 <div>
                        <img className='h-24 w-24' src={headp4} alt="" />
                        <p>Diamond </p>
                        <div className='flex gap-2'>
                         <del className='text-red-500'>$230.846</del>
                         <p className='text-orange-300'>$220</p>
                         </div>
                 </div>
                 <div>
                        <img className='h-24 w-24' src={headp5} alt="" />
                        <p>Luxury headest</p>
                        <div className='flex gap-2'>
                         <del className='text-red-500'>$230.846</del>
                         <p className='text-orange-300'>$220</p>
                         </div>
                 </div>
                 <div>
                        <img className='h-24 w-24' src={headp6} alt="" />
                        <p>MStereo Headset</p>
                        <div className='flex gap-2'>
                         <del className='text-red-500'>$230.846</del>
                         <p className='text-orange-300'>$220</p>
                         </div>
                 </div>
        
         </div>}
        
        {activeTab === 3 &&  
        <div  className='grid md:grid-cols-6 gap-2 mt-6'> 
                
        <div>
                        <img className='h-24 w-24' src={gagep1} alt="" />
                        <p>Bevigac Gamepad</p>
                         <div className='flex gap-2'>
                         <del className='text-red-500'>$230.846</del>
                         <p className='text-orange-300'>$220</p>
                         </div>
                 </div>
                 <div>
                        <img className='h-24 w-24' src={gagep2} alt="" />
                        <p>Fortnite Controller</p>
                        <div className='flex gap-2'>
                         <del className='text-red-500'>$230.846</del>
                         <p className='text-orange-300'>$220</p>
                         </div>
                 </div>
                 <div>
                        <img className='h-24 w-24' src={gagep3} alt="" />
                        <p>Goldgame</p>
                        <div className='flex gap-2'>
                         <p className='text-orange-300'>$220</p>
                         </div>
                 </div>
                 <div>
                        <img className='h-24 w-24' src={gagep4} alt="" />
                        <p>Diamond </p>
                        <div className='flex gap-2'>
                         <del className='text-red-500'>$230.846</del>
                         <p className='text-orange-300'>$220</p>
                         </div>
                 </div>
                 <div>
                        <img className='h-24 w-24' src={gagep5} alt="" />
                        <p>Luxury gamepad</p>
                        <div className='flex gap-2'>
                         <del className='text-red-500'>$230.846</del>
                         <p className='text-orange-300'>$220</p>
                         </div>
                 </div>
                 <div>
                        <img className='h-24 w-24' src={gagep6} alt="" />
                        <p>Mens Watches</p>
                        <div className='flex gap-2'>
                         <del className='text-red-500'>$230.846</del>
                         <p className='text-orange-300'>$220</p>
                         </div>
                 </div>
        
         </div>}
         
        {activeTab === 4 && 
       <div  className='grid md:grid-cols-6 gap-2 mt-6'> 
                
       <div>
                       <img className='h-24 w-24' src={drone1} alt="" />
                       <p>Rolex </p>
                        <div className='flex gap-2'>
                        <del className='text-red-500'>$230.846</del>
                        <p className='text-orange-300'>$220</p>
                        </div>
                </div>
                <div>
                       <img className='h-24 w-24' src={drone2} alt="" />
                       <p>Goldenhour </p>
                       <div className='flex gap-2'>
                        <del className='text-red-500'>$230.846</del>
                        <p className='text-orange-300'>$220</p>
                        </div>
                </div>
                <div>
                       <img className='h-24 w-24' src={ drone3} alt="" />
                       <p>Gold  </p>
                       <div className='flex gap-2'>
                        <p className='text-orange-300'>$220</p>
                        </div>
                </div>
                <div>
                       <img className='h-24 w-24' src={ drone4} alt="" />
                       <p>Diamond </p>
                       <div className='flex gap-2'>
                        <del className='text-red-500'>$230.846</del>
                        <p className='text-orange-300'>$220</p>
                        </div>
                </div>
                <div>
                       <img className='h-24 w-24' src={ drone5} alt="" />
                       <p>Luxury Watche</p>
                       <div className='flex gap-2'>
                        <del className='text-red-500'>$230.846</del>
                        <p className='text-orange-300'>$220</p>
                        </div>
                </div>
                <div>
                       <img className='h-24 w-24' src={ drone6} alt="" />
                       <p>digital dron</p>
                       <div className='flex gap-2'>
                        <del className='text-red-500'>$230.846</del>
                        <p className='text-orange-300'>$220</p>
                        </div>
                </div>
       
        </div>}
        {activeTab === 5 && <div className='grid md:grid-cols-6 gap-2 mt-6'>
                
                         <div>
                                <img className='h-24 w-24' src={camera1} alt="" />
                                <p>Fuers Outdoor</p>
                                 <div className='flex gap-2'>
                                 <del className='text-red-500'>$230.846</del>
                                 <p className='text-orange-300'>$220</p>
                                 </div>
                         </div>
                         <div>
                                <img className='h-24 w-24' src={camera2} alt="" />
                                <p>Moving Camera</p>
                                <div className='flex gap-2'>
                                 <del className='text-red-500'>$230.846</del>
                                 <p className='text-orange-300'>$220</p>
                                 </div>
                         </div>
                         <div>
                                <img className='h-24 w-24' src={camera3} alt="" />
                                <p>CC Camera</p>
                                <div className='flex gap-2'>
                                 <p className='text-orange-300'>$220</p>
                                 </div>
                         </div>
                         <div>
                                <img className='h-24 w-24' src={camera4} alt="" />
                                <p>Waterproof</p>
                                <div className='flex gap-2'>
                                 <del className='text-red-500'>$230.846</del>
                                 <p className='text-orange-300'>$220</p>
                                 </div>
                         </div>
                         <div>
                                <img className='h-24 w-24' src={camera5} alt="" />
                                <p> DLScamera</p>
                                <div className='flex gap-2'>
                                 <del className='text-red-500'>$230.846</del>
                                 <p className='text-orange-300'>$220</p>
                                 </div>
                         </div>
                         <div>
                                <img className='h-24 w-24' src={camera6} alt="" />
                                <p>Waterproof</p>
                                <div className='flex gap-2'>
                                 <del className='text-red-500'>$230.846</del>
                                 <p className='text-orange-300'>$220</p>
                                 </div>
                         </div>
                         

             </div>}
      </div>
    </div>
        </div>
   </div>
  );
}

export default CategoryItem;
