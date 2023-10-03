import  { useState, useEffect } from 'react';
import closeOffer from '../../public/offerclose.png'

// eslint-disable-next-line react/prop-types
function Timercount({ initialTime }) {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    if (time <= 0) {
         
      return ;
    }

    const intervalId = setInterval(() => {
      setTime(prevTime => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [time]);

  // Format the time in HH:MM:SS format
  const formatTime = () => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    const formattedHours =  String(hours).padStart(2, '0 de');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <div>
      
      {
        time ?
         <div className='bg-sky-200'>
         <p className='text-2xl text-center'>{formatTime()}</p> <p className='text-center'>Hour:Mits:Sec</p>
         </div> : <div className='w-44 mx-auto'>
                <h1 className='text-2xl font-bold text-red-300'>Your Offer Is</h1>
              <img className='h-16' src= {closeOffer} alt="" />
        </div>
    }
      
       
    </div>
  );
}

export default Timercount;
