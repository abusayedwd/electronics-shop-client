import { useEffect, useState } from "react";
import speaker from "../../../../public/speaker/speaker6.jpg";

const DreamProduct = () => {
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
    <div>
      <div className="md:flex mt-12 justify-between">
        <div className="md:w-3/4 w-full">
          <div className="container ">
            <div className="tab">
              <div className="">
                <button
                  className={`button ${activeTab === 0 ? "active" : ""}`}
                  onClick={() => handleTabClick(0)}
                >
                  Features-Pruduct
                </button>
                <button
                  className={`button ${activeTab === 1 ? "active" : ""}`}
                  onClick={() => handleTabClick(1)}
                >
                  Treading-Product
                </button>
                <button
                  className={`button ${activeTab === 2 ? "active" : ""}`}
                  onClick={() => handleTabClick(2)}
                >
                  Old-Product
                </button>
              </div>
            </div>
            <hr />
            <div className="content">
              {activeTab === 0 && (
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  {features.slice(0, 6).map((feature) => (
                    <div
                      className="flex cardbody h-24 hover:shadow items-center justify-evenly  p-3 border-r-2"
                      key={feature.id}
                    >
                      <div>
                        <img
                          className="h-20 cade w-20"
                          src={feature.image}
                          alt=""
                        />
                      </div>
                      <button className="bg-blue-600 offer py-2 px-2 text-sm text-white rounded hover:bg-amber-400">
                         Buy Now
                      </button>
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
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {activeTab === 1 && (
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  {hotsels.map((hotsel) => (
                    <div
                      className="flex cardbody h-24 hover:shadow items-center justify-evenly  p-3 border-r-2"
                      key={hotsel.id}
                    >
                      <div>
                        <img
                          className="h-20 cade w-20"
                          src={hotsel.image}
                          alt=""
                        />
                      </div>
                      <button className="bg-blue-600 offer py-2 px-2 text-sm text-white rounded hover:bg-amber-400">
                         Buy Now
                      </button>
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
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {activeTab === 2 && (
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  {treads.slice(0, 6).map((tread) => (
                    <div
                      className="flex cardbody h-24 hover:shadow items-center justify-evenly  p-3 border-r-2"
                      key={tread.id}
                    >
                      <div>
                        <img
                          className="h-20 cade w-20"
                          src={tread.image}
                          alt=""
                        />
                      </div>
                      <button className="bg-blue-600 offer py-2 px-2 text-sm text-white rounded hover:bg-amber-400">
                        Buy Now
                      </button>
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
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="md:w-1/4 w-full text-center shadow">
          <p className="text-2xl">
            <span className="font-bold">Your Dream</span> <br /> Comes To
          </p>
          <img className="w-[50%] mx-auto" src={speaker} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DreamProduct;
