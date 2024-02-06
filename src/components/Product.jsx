import { useDispatch, useSelector } from "react-redux";

import {add,remove} from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";

const Product = ({post}) => {
  const {cart} = useSelector( (state) => state);
  
  const dispatch = useDispatch();

 const addToCart =() =>{
    dispatch(add(post));
    toast.success("Added to Cart");

  }

  const removeFromCart = ()=>{
    dispatch(remove(post.id));
    toast.error("Item remove from cart");
  }
  return (
    <div className="flex flex-col items-center justify-between hover:scale-110
    transition ease-in duration-300 border-1 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-4 rounded-xl gap-3 ml-5 mt-10">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.title.split(" ").splice(0,3).join(" ")+"..."}</p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{post.description.split(" ").splice(0,10).join(" ") + "..."}</p>
      </div>
      <div className="h-[180px]">
        <img src={post.image} className="h-full w-full"/>
      </div>
      <div className="flex justify-between gap-12 items-center w-full mt-5">
          <div>
            <p className="text-green-600 font-semibold">${post.price}</p>
          </div>
          <div>
            {
              cart.some( (p) => p.id == post.id)?
              (<div>
                <button
                className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase
                hover:bg-gray-700 hover:text-white transition ease-in duration-300"
                onClick={removeFromCart}
                >
                  Remove cart
                </button>
                </div>):
              (
                <div>
                  <button
                  className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase
                  hover:bg-gray-700 hover:text-white transition ease-in duration-300"
                  onClick={addToCart}
                  >
                    Add to cart
                  </button>
                  </div>
              )
            }
            
          </div>
      </div>
      
    </div>
  )
};

export default Product;
