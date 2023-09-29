 
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { PropagateLoader } from 'react-spinners';
import logo from '../../public/loading-gif.webp'

const Main = () => {
        const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
        return (
                <>
                {loading ? (
        <div className="flex flex-col justify-center items-center mt-[350px]">
          <motion.div className=''
            animate={{ y: [20, 50, 20], opacity: 1, scale: 0.8 }}
            transition={{
              duration: 1.5,
              delay: 0.1,
              ease: [0.5, 0.3, 1, 1.5],
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 0.2 }}
          >
            <img className='h-48 w-48 rounded-full' src={logo} alt="" />
          </motion.div>
          <PropagateLoader size={25} color="#07a8D1" />
        </div>
          ) : (
                <div className='container mx-auto'>
                      <Navbar></Navbar>
                      <Outlet></Outlet> 
                      <Footer></Footer>  
                </div>
          )}
                </>
        );
};

export default Main;