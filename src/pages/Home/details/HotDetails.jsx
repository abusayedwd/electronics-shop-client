import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLoaderData, useParams } from "react-router-dom";
import {
  FaRegStar,
  FaStar,
  FaStarHalfAlt,
  FaUserLock,
  FaUserNinja,
  FaUserNurse,
} from "react-icons/fa";


const HotDetails = () => {

   const { id } = useParams();
   
  const hotDetails = useLoaderData();
  const [hotDtail, sethotDetail ] = useState([]);

  useEffect(() => {
    if (hotDetails) {
      const detailH = hotDetails.find((dt) => dt.id == id);
       sethotDetail(detailH);
    }
  }, []);

  const [count, setCount] = useState(0);

  const countplus = () => {
    let amount = count;
    const coun = amount - 1;
    setCount(coun);
    // console.log(coun)
  };

  const countless = () => {
    if (count < 1) {
      toast.error("Invalid operation");
    } else {
      countplus();
    }
  };


   return (
      <div className="mt-24">
      <h1 className="text-3xl font-bold text-sky-600 text-center">
        About the {hotDtail.name}
      </h1>

      <div className="md:flex py-8">
        <div className="md:w-1/2">
          <img
            className="rounded-3xl h-80 w-full"
            src={hotDtail.image}
            alt=""
          />
        </div>
        <div className="md:w-1/2 ml-8">
          <p className="text-2xl font-semibold">{hotDtail.name}</p>
          <p className="py-3">{hotDtail.details}</p>
          <Rating
            className="text-yellow-400"
            style={{
              maxWidth: 100,

              height: "50px",
              color: "burlywood",
            }}
            value={hotDtail.rating}
            readOnly
          />
          <p className="text-orange-400 font-semibold">
            {" "}
            ${hotDtail.new_price}
          </p>
          {count} x {hotDtail.new_price}
          <p className="text-orange-500 font-bold">
            {" "}
            Total : {parseFloat(count * hotDtail.new_price).toFixed(2)}
          </p>
          <div className="md:flex gap-6 items-center mt-4">
            <div className="flex gap-8 border-sky-400 border w-[196px]">
              <button
                className="px-4 py-1 bg-slate-100 border-sky-400 border-r"
                onClick={() => countless()}
              >
                -
              </button>
              <p>{count}</p>

              <button
                className="bg-slate-100 px-4 py-1 border-sky-400 border-l"
                onClick={() => setCount((count) => count + 1)}
              >
                +
              </button>
              <ToastContainer></ToastContainer>
            </div>
            <div>
              <button className="text-lg w-28 relative p-[10px] block   bg-indigo-600 text-white border-y-4 duration-500 overflow-hidden focus:border-indigo-500 z-50 group">
                Add to cart
                <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out flex justify-center inset-0 items-center z-10 text-white">
                  ADD
                </span>
                <span className="bg-indigo-800 absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                <span className="bg-indigo-800 absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                <span className="bg-indigo-800 absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
                <span className="bg-indigo-800 absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border my-5">
        <div className="md:px-16">
          <h1 className="text-orange-300 font-semibold">Reviews</h1>
          <div className="md:flex bg-slate-100 md:my-16 md:py-5">
            <div className="md:w-1/2 py-4">
              <div className="flex items-center justify-around">
                <small>
                  <p className="font-bold text-orange-300">5 stars</p>
                </small>
                <progress
                  className="progress progress-warning md:w-56 w-24"
                  value="100"
                  max="100"
                ></progress>
                <p className="text-yellow-400 flex items-center text-sm">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </p>
              </div>
              <div className="flex items-center justify-around">
                <small>
                  <p className="font-bold text-orange-300">4 stars</p>
                </small>
                <progress
                  className="progress progress-warning md:w-56 w-24"
                  value="100"
                  max="100"
                ></progress>
                <p className="text-yellow-400 flex items-center text-sm">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />{" "}
                </p>
              </div>
              <div className="flex items-center justify-around">
                <small>
                  <p className="font-bold text-orange-300">3 stars</p>
                </small>
                <progress
                  className="progress progress-warning md:w-56 w-24"
                  value="100"
                  max="100"
                ></progress>
                <p className="text-yellow-400 flex items-center text-sm">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStar />
                  <FaRegStar />
                </p>
              </div>
              <div className="flex items-center justify-around">
                <small>
                  <p className="font-bold text-orange-300">2 stars</p>
                </small>
                <progress
                  className="progress progress-warning md:w-56 w-24"
                  value="100"
                  max="100"
                ></progress>
                <p className="text-yellow-400 flex items-center text-sm">
                  <FaStar />
                  <FaStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </p>
              </div>
              <div className="flex items-center justify-around">
                <small>
                  <p className="font-bold text-orange-300">1 stars</p>
                </small>
                <progress
                  className="progress progress-warning md:w-56 w-24"
                  value="100"
                  max="100"
                ></progress>
                <p className="text-yellow-400 flex items-center text-sm">
                  <FaStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </p>
              </div>
            </div>
            <div className="md:w-1/2 md:border-l-4 flex justify-center items-center">
              <div>
                <p className="flex text-yellow-400 text-2xl">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </p>
                <p className="font-semibold">
                  Average Star Rating:{" "}
                  <span className="text-orange-300">4.8 out of 5</span>(vote){" "}
                  <span className="text-white font-bold bg-sky-600 px-2 md:ml-2 rounded-full">
                    ?
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10">
          <h1 className="text-2xl md:ml-20">
            Reviews for {hotDtail.name}
          </h1>
          <div className="md:flex md:px-16 mt-6">
            <div className="md:w-1/6">
              <p className="md:ml-20 text-6xl">
                <FaUserNinja />{" "}
              </p>
            </div>
            <div className="md:w-5/6 border py-6">
              <p className="flex items-center  md:px-8 text-yellow-400 text-sm">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <small className="text-xs font-medium text-black">
                  Jhon meri-- june 5, 2022
                </small>
              </p>
              <p className=" md:px-8 text-sm">
                The service was wonderful. Our waiter was so attentive and
                accommodating!
              </p>
            </div>
          </div>
          <div className="md:flex md:px-16 mt-6">
            <div className="md:w-1/6">
              <p className="md:ml-20 text-6xl">
                <FaUserLock />
              </p>
            </div>
            <div className="md:w-5/6 border py-6">
              <p className="flex items-center  md:px-8 text-yellow-400 text-sm">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
                <FaRegStar />
                <small className="text-xs font-medium text-black">
                  maria-- April 23, 2020
                </small>
              </p>
              <p className=" md:px-8 text-sm">The ambiance was perfect.!</p>
            </div>
          </div>
          <div className="md:flex md:px-16 mt-6">
            <div className="md:w-1/6">
              <p className="md:ml-20 text-6xl">
                <FaUserNurse />
              </p>
            </div>
            <div className="md:w-5/6 border py-6">
              <p className="flex items-center  md:px-8 text-yellow-400 text-sm">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
                <small className="text-xs font-medium text-black">
                  Jhon meri-- nobember 19, 2016
                </small>
              </p>
              <p className=" md:px-8 text-sm">
                He really is the cutest little man. Swoooon!
              </p>
            </div>
          </div>
        </div>
        <div className="md:px-16 mb-8">
          <div className="bg-slate-100 md:py-10 px-10 md:px-40">
            <h1 className="font-semibold py-3">
              Be the first to "{hotDtail.name}"
            </h1>
            <small>
              Your email address will not be published. Required fields are
              marked *
            </small>
            <form action="" className="space-y-6 ">
              <div className="space-y-2 text-sm">
                <label htmlFor="username" className="block ">
                  Your name*
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                  className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
                />
              </div>
              <div className="space-y-2 text-sm">
                <label htmlFor="email" className="block ">
                  Your Email*
                </label>
                <input
                  type="email"
                  name="email"
                  id="password"
                  placeholder="Enter Email"
                  className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
                />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <input type="checkbox" name="" id="" />
                  <p className="text-sm">
                    Save my name, email, and website in this browser for the
                    next time I comment
                  </p>
                </div>
                <p className="flex items-center font-bold gap-1">
                  Your Rating*
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </p>
                <label htmlFor="text">Your Review*</label>
                <textarea
                  className="w-full"
                  name=""
                  id=""
                  cols="30"
                  rows="4"
                ></textarea>
              </div>
              {/* Sign in Button */}
              <button className="text-lg w-20 relative p-[10px] block   bg-indigo-600 text-white border-y-4 duration-500 overflow-hidden focus:border-indigo-500 z-50 group">
                Submit
                <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out flex justify-center inset-0 items-center z-10 text-white">
                  Let's go
                </span>
                <span className="bg-indigo-800 absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                <span className="bg-indigo-800 absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                <span className="bg-indigo-800 absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
                <span className="bg-indigo-800 absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
   );
};

export default HotDetails;