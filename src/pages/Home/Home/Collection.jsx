 import watch from '../../../../public/apple watch.jpg'
 import iphone from '../../../../public/iphone14.jpg'
 import headphone from '../../../../public/headphone/head4.jpg'

const Collection = () => {
        return (
                <div className='mt-12 grid md:grid-cols-3 gap-4 '>
                      <div className='bg-slate-200 p-5 md:flex items-center justify-between'>
                        <div>
                        <p className='text-blue-400'>Electronics Minimal</p>
                        <h1 className='text-xl font-semibold'>Get Holiday Deals</h1>
                        <button className="bg-blue-600 py-2 px-2 text-sm text-white rounded hover:bg-amber-400">View Collection</button>
                        </div>
                        <div  className='bg-transparent'>
                                <img className=' ' src={watch} alt="" />
                        </div>
                        </div>  
                        <div className='bg-slate-200 p-5 md:flex items-center justify-between'>
                        <div>
                        <p className='text-blue-400'>Get 50% Off</p>
                        <h1 className='text-xl font-semibold'>Every Handset Retina Item</h1>
                        <button className="bg-blue-600 py-2 px-2 text-sm text-white rounded hover:bg-amber-400">Go Shop</button>
                        </div>
                        <div  className='bg-transparent'>
                                <img className='h-40' src={iphone} alt="" />
                        </div>
                        </div>
                        <div className='bg-slate-200 p-5 md:flex items-center justify-between'>
                        <div>
                        <p className='text-blue-400'>Minimalism Design</p>
                        <h1 className='text-xl font-semibold'>Music Makes Feel Better</h1>
                        <button className="bg-blue-600 py-2 px-2 text-sm text-white rounded hover:bg-amber-400">View Collection</button>
                        </div>
                        <div  className='bg-transparent'>
                                <img className=' ' src={headphone} alt="" />
                        </div>
                        </div>  
                </div>
        );
};

export default Collection;