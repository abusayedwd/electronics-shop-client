import { useEffect, useState } from "react";
import "./Features.css";
import { motion } from "framer-motion";
import { fadein } from "../../../hooks/fadein";
import gagepad from "../../../../public/gamepad/game2.jpg";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import Timercount from "../../../shared/Timercount";
import "./Collection.css";

const Features = () => {
  const initialTime = 360;
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
    <div className="md:flex mt-20 ">
      <div className="md:w-[30%] w-full border border-blue-500 ">
        <div className="flex justify-between items-center p-4 bg-blue-500">
          <h1 className="text-white font-medium">Deals of the week</h1>
          <p className="text-white inline-flex">
            <FaAngleLeft></FaAngleLeft>
            <FaAngleRight></FaAngleRight>
          </p>
        </div>
        <img
          className="h-32 relative w-36 mx-auto md:mt-10"
          src={gagepad}
          alt=""
        />
        <p className="absolute h-20 w-20 bg-yellow-400 font-semibold text-white px-1 py-4 rounded-full text-center ">
          18% Offer!
        </p>
        <p className="mt-12 text-blue-400 font-bold text-center">
          Sony Gamepad
        </p>
        <p className="text-2xl text-center font-bold text-orange-400">
          $110.0 - $120.0
        </p>
        <p className="flex items-center justify-around">
          <small>Already sold:0</small>
          <small>Available: 10</small>
        </p>
        <p className="w-[80%] mx-auto font-bold">
          <Progress percent={18} />
        </p>
        <h1 className="font-bold text-2xl mt-4">
          {" "}
          <span className="text-blue-500 font-bold text-2xl">
            Hurry-UP!
          </span>{" "}
          Offered End In:
        </h1>
        <Timercount initialTime={initialTime}></Timercount>
      </div>
      <div className="md:w-[70%] w-full">
        <div className="container ">
          <div className="tab md:flex justify-between">
            <div className="text-xl text-black font-bold">Features Product</div>
            <div className="">
              <button
                className={`button ${activeTab === 0 ? "active" : ""}`}
                onClick={() => handleTabClick(0)}
              >
                On-Sell
              </button>
              <button
                className={`button ${activeTab === 1 ? "active" : ""}`}
                onClick={() => handleTabClick(1)}
              >
                Hot-Sell
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
                {features.slice(0, 6).map((feature) => (
                  <motion.div
                    className="hover:shadow-2xl p-3"
                    key={feature.id}
                    variants={fadein("right", 0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                  >
                    <img
                      className="h-32 cade w-32 bg-white mx-auto"
                      src={feature.image}
                      alt=""
                    />
                     
                    <h1 className="text-center">{feature.name}</h1>
                    <div className="flex items-center gap-4 justify-center">
                      <del className="text-red-400 font-semibold">
                        ${feature.price}
                      </del>
                      <p className="text-orange-300 font-bold">
                        ${feature.new_price}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
            {activeTab === 1 && (
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                {hotsels.map((hotsel) => (
                  <motion.div
                    className="hover:shadow-2xl p-5 "
                    key={hotsel.id}
                    variants={fadein("down", 0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                  >
                    <img
                      className="h-32 cade w-32 bg-white mx-auto"
                      src={hotsel.image}
                      alt=""
                    />
                     
                    <h1 className="text-center">{hotsel.name}</h1>
                    <div className="flex items-center gap-4 justify-center">
                      <del className="text-red-400 font-semibold">
                        ${hotsel.price}
                      </del>
                      <p className="text-orange-300 font-bold">
                        ${hotsel.new_price}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
            {activeTab === 2 && (
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                {treads.slice(0, 6).map((tread) => (
                  
                        <motion.div
                    className="hover:shadow-2xl p-5"
                    key={tread.id}
                    variants={fadein("left", 0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                  >
                    <img
                      className="h-32 w-32 cade bg-white mx-auto"
                      src={tread.image}
                      alt=""
                    />
                     
                    <h1 className="text-center">{tread.name}</h1>
                    <div className="flex items-center gap-4 justify-center">
                      <del className="text-red-400 font-semibold">
                        ${tread.price}
                      </del>
                      <p className="text-orange-300 font-bold">
                        ${tread.new_price}
                      </p>
                    </div>
                  </motion.div>
                  
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
