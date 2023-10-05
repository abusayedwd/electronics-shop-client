import headphone from '../../../../public/headphone/head2.png'
import camera from '../../../../public/caame.jpg'
import gamepad from '../../../../public/gamepad-png-gamepad-png-2400.png'
import watch from '../../../../public/ewat.jpg'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import './Gadget.css'
const Gadget = () => {
   return (
      <div className='mt-12 bg-img bg-fixed'>
            <div className='grid md:grid-cols-2 gap-4 p-12 bg-slate-300 bg-opacity-40'>
                 <div className='md:flex bg-white bg-opacity-40 py-4 items-center justify-evenly'>
                      <div>
                        <img className='h-32' src={headphone} alt="" />
                      </div>
                      <div>
                        <p className='md:flex text-yellow-300 mb-6'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStarHalfAlt></FaStarHalfAlt>
                        </p>
                        <h1 className='font-bold'>Digital Headphone</h1>
                        <p className='text-orange-300 font-semibold my-2'>$43</p>
                        <button className='px-4 py-1 text-white text-xs bg-blue-500 font-bold rounded-xl hover:bg-amber-400'>Add To Cart</button>
                      </div>
                 </div>
                 <div className='md:flex bg-white py-4 bg-opacity-40 items-center justify-evenly'>
                      <div>
                        <img className='h-32' src={watch} alt="" />
                      </div>
                      <div>
                        <p className='md:flex text-yellow-300 mb-6'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStarHalfAlt></FaStarHalfAlt>
                        </p>
                        <h1 className='font-bold'>Apple Watch</h1>
                        <p className='text-orange-300 font-semibold my-2'>$43</p>
                        <button className='px-4 py-1 text-white text-xs bg-blue-500 font-bold rounded-xl hover:bg-amber-400'>Add To Cart</button>
                      </div>
                 </div>
                 <div className='md:flex bg-white py-4 bg-opacity-40 items-center justify-evenly'>
                      <div>
                        <img className='h-32 bg-transparent' src={camera} alt="" />
                      </div>
                      <div>
                        <p className='md:flex text-yellow-300 mb-6'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStarHalfAlt></FaStarHalfAlt>
                        </p>
                        <h1 className='font-bold'>DLS Camera</h1>
                        <p className='text-orange-300 font-semibold my-2'>$43</p>
                        <button className='px-4 py-1 text-white text-xs bg-blue-500 font-bold rounded-xl hover:bg-amber-400'>Add To Cart</button>
                      </div>
                 </div>
                 <div className='md:flex bg-white py-4 bg-opacity-40 items-center justify-evenly'>
                      <div>
                        <img className='h-32' src={gamepad} alt="" />
                      </div>
                      <div>
                        <p className='md:flex text-yellow-300 mb-6'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStarHalfAlt></FaStarHalfAlt>
                        </p>
                        <h1 className='font-bold'>Xpeed Gamepad</h1>
                        <p className='text-orange-300 font-semibold my-2'>$43</p>
                        <button className='px-4 py-1 text-white text-xs bg-blue-500 font-bold rounded-xl hover:bg-amber-400'>Add To Cart</button>
                      </div>
                 </div>
                  
                  
            </div>
      </div>
   );
};

export default Gadget;