import React from "react";
import { CiShoppingCart } from "react-icons/ci";

const Home = (props) => {
  console.log('home', props.cartData);

  return (
    <div className="flex-1">
      <div className="h-28 bg-black flex items-center justify-around">
        <h1 className="text-white font-bold text-4xl text-center">
          Home Component
        </h1>
        <h2 className="flex">
          <CiShoppingCart size={44} color="white" />
          <span className="text-white text-2xl ml-2">
            {props.cartData.length}
          </span>
        </h2>
      </div>

      <div className="h-64 border justify-center items-center flex">
        <img
          src="https://m.economictimes.com/thumb/msid-105943288,width-1200,height-1200,resizemode-4,imgsize-10594/iphone-12.jpg"
          className="h-44 w-44"
          alt="Iphone 12"
        />

        <h1 className="text-2xl font-bold"> 
          Iphone 12 <span className="ml-2 font-normal">Price : $200</span>
        </h1>
        <button
          className="h-14 w-28 bg-green-500 font-bold text-white rounded-xl shadow-black ml-5 border outline-none hover:bg-green-400"
         onClick={()=>props.addToCartHandler({price:'$200',name:'iphone15'})}
        >
          Add to cart
        </button>
        <button
          className="h-14 w-44 bg-red-500 font-bold text-white rounded-xl shadow-black ml-5 border outline-none hover:bg-red-400"
         onClick={()=>props.removeFromCartHandler()}
        >
          Remove from cart
        </button>
      </div>
    </div>
  );
};

export default Home;
