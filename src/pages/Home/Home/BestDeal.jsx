import { useEffect, useState } from "react";
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";

const BestDeal = () => {
  const [features, setFeatures] = useState([]);
  const [hotsels, setHotsels] = useState([]);
  const [treads, setTread] = useState([]);
  useEffect(() => {
    fetch("/features.json")
      .then((res) => res.json())
      .then((data) => setFeatures(data));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    fetch("/hotproduct.json")
      .then((res) => res.json())
      .then((data) => setHotsels(data));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    fetch("/treadproduct.json")
      .then((res) => res.json())
      .then((data) => setTread(data));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div className="mt-20">
      <div className="container ">
        <div className="tab md:flex justify-between">
          <div className="text-xl text-black font-bold">Beat Deals</div>
          <div className="">
            <button
              className={`button ${activeTab === 0 ? "active" : ""}`}
              onClick={() => handleTabClick(0)}
            >
              Best-Deal
            </button>
            <button
              className={`button ${activeTab === 1 ? "active" : ""}`}
              onClick={() => handleTabClick(1)}
            >
              Most-Sell
            </button>
            <button
              className={`button ${activeTab === 2 ? "active" : ""}`}
              onClick={() => handleTabClick(2)}
            >
              Treading
            </button>
          </div>
        </div>
        <hr />
        <div className="content">
          {activeTab === 0 && (
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              {features.map((feature) => (
                <div
                  className="flex cardbody h-28 items-center justify-evenly  p-3 border-r-2 "
                  key={feature.id}
                >
                  <div>
                    <img
                      className="h-24 cade w-24"
                      src={feature.image}
                      alt=""
                    />
                  </div>
                  <div>
                    <h1 className="text-center">{feature.name}</h1>
                    <div className="flex items-center gap-4 justify-center">
                      <del className="text-red-400 font-semibold">
                        ${feature.price}
                      </del>
                      <p className="text-orange-300 font-bold">
                        ${feature.new_price}
                      </p>
                    </div>
                    <Rating
                      className="rating"
                      style={{
                        maxWidth: 100,
                        height: "24px",
                      }}
                      value={feature.rating}
                      readOnly
                    />
                  </div>
                  <button className=" offer w-28 h-12 before:block before:absolute hover:before:bg-sky-700 before:w-0 before:h-0 hover:before:h-20 hover:before:w-40 before:-bottom-2 before:-right-2 before:duration-500 before:rounded-xl before:-z-10 relative inline-block transform hover:text-white text-sky-700 bg-slate-200 border-2 overflow-hidden border-sky-700 duration-500">
                    <Link to={`/featureDetails/${feature.id}`}>
                      View Details
                    </Link>
                  </button>
                </div>
              ))}
            </div>
          )}
          {activeTab === 1 && (
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              {hotsels.slice(0, 3).map((hotsel) => (
                <div
                  className="flex h-28 cardbody hover:shadow items-center justify-evenly  p-3 border-r-2"
                  key={hotsel.id}
                >
                  <div>
                    <img className="h-24 cade w-24" src={hotsel.image} alt="" />
                  </div>
                  <div>
                    <h1>{hotsel.name}</h1>
                    <div className="flex items-center gap-4 justify-center">
                      <del className="text-red-400 font-semibold">
                        ${hotsel.price}
                      </del>
                      <p className="text-orange-300 font-bold">
                        ${hotsel.new_price}
                      </p>
                    </div>
                    <Rating
                      className="text-yellow-400"
                      style={{
                        maxWidth: 100,
                        height: "24px",
                        color: "burlywood",
                      }}
                      value={hotsel.rating}
                      readOnly
                    />
                  </div>
                  <button className=" offer w-28 h-12 before:block before:absolute hover:before:bg-sky-700 before:w-0 before:h-0 hover:before:h-20 hover:before:w-40 before:-bottom-2 before:-right-2 before:duration-500 before:rounded-xl before:-z-10 relative inline-block transform hover:text-white text-sky-700 bg-slate-200 border-2 overflow-hidden border-sky-700 duration-500">
                    <Link to={`/hotDetails/${hotsel.id}`}>View Details</Link>
                  </button>
                </div>
              ))}
            </div>
          )}
          {activeTab === 2 && (
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              {treads.slice(0, 6).map((tread) => (
                <div
                  className="flex h-28 cardbody hover:shadow items-center justify-evenly  p-3 border-r-2"
                  key={tread.id}
                >
                  <div>
                    <img className="h-24 cade w-24" src={tread.image} alt="" />
                  </div>
                  <div>
                    <h1 className="text-center">{tread.name}</h1>
                    <div className="flex items-center gap-4 justify-center">
                      <del className="text-red-400 font-semibold">
                        ${tread.price}
                      </del>
                      <p className="text-orange-300 font-bold">
                        ${tread.new_price}
                      </p>
                    </div>
                    <Rating
                      className="text-yellow-400"
                      style={{
                        maxWidth: 100,
                        height: "24px",
                        color: "burlywood",
                      }}
                      value={tread.rating}
                      readOnly
                    />
                  </div>
                  <button className=" offer w-28 h-12 before:block before:absolute hover:before:bg-sky-700 before:w-0 before:h-0 hover:before:h-20 hover:before:w-40 before:-bottom-2 before:-right-2 before:duration-500 before:rounded-xl before:-z-10 relative inline-block transform hover:text-white text-sky-700 bg-slate-200 border-2 overflow-hidden border-sky-700 duration-500">
                    <Link to={`/treadDetails/${tread.id}`}>View Details</Link>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BestDeal;
