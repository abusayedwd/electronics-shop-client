import watch from "../../../../public/apple watch.jpg";
import iphone from "../../../../public/iphone14.jpg";
import headphone from "../../../../public/headphone/head4.jpg";
import "./Collection.css";

const Collection = () => {
  return (
    <div className="mt-20">  <h1 className="text-2xl text-center font-bold border-b-2 uppercase">new collections</h1>
      <div className=" mt-10 grid md:grid-cols-3 gap-4 ">
      <div className="cardbody shadow p-5 md:flex items-center justify-between">
        <div>
          <p className="text-blue-400">Electronics Minimal</p>
          <h1 className="text-xl font-semibold">Get Holiday Deals</h1>
          <button className="bg-blue-600 offer py-2 px-2 text-sm text-white rounded hover:bg-amber-400">
            View Collection
          </button>
        </div>
        <div>
          <img className="cade" src={watch} alt="" />
        </div>
      </div>
      <div className=" cardbody shadow p-5 md:flex items-center justify-between">
        <div>
          <p className="text-blue-400">Get 50% Off</p>
          <h1 className="text-xl font-semibold">Every Handset Retina Item</h1>
          <button className="bg-blue-600 offer py-2 px-2 text-sm text-white rounded hover:bg-amber-400">
            Go Shop
          </button>
        </div>
        <div className="bg-transparent">
          <img className="cade h-40" src={iphone} alt="" />
        </div>
      </div>
      <div className="  cardbody shadow p-5 md:flex items-center justify-between">
        <div>
          <p className="text-blue-400">Minimalism Design</p>
          <h1 className="text-xl font-semibold">Music Makes Feel Better</h1>
          <button className="bg-blue-600 offer py-2 px-2 text-sm text-white rounded hover:bg-amber-400">
            View Collection
          </button>
        </div>
        <div className="bg-transparent">
          <img className="cade" src={headphone} alt="" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Collection;
