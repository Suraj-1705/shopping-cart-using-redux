import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const {cart} = useSelector( (state) => state);
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  // reducer function add the values in the array
  useEffect( ()=> {
    setTotalAmount (cart.reduce( (accumulator, currentValue) => accumulator+currentValue.price,0));
  },[cart])
  console.log(totalAmount);
   

  return (
    <div className="container mx-auto p-3" >
      {
        cart.length > 0 ? 
        (
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 ">
              <div className="max-w-md mx-auto">
                { 
                    cart.map( (item,index) => (
                      <CartItem key={item.id} item ={item} indexIndex={index}/>
                    ))
                }
              </div>
            
            <div className=" max-w-md mx-auto ">
                <div className="mt-10  ">
                  <div className="text-xl text-green-700 font-semibold uppercase">Your Cart</div>
                  <div className="text-5xl uppercase text-green-700 font-semibold">Summary</div>
                  <p className="mt-5 font-bold ">
                    <span className="text-gray-600 text-lg">Total Items: <span className="text-black">{cart.length}</span></span>
                  </p>
                </div>

                <div className="mt-40 ">
                  <p className="text-gray-600 font-bold text-lg p-3 mb-3">Total Amount:${totalAmount}</p>
                  <button className="bg-green-700 w-full h-10 rounded-md text-white font-semibold">
                    Checkout Now
                  </button>
                </div>
            </div>
          </div>
        ) : 
        (<div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-lg font-bold text-gray-600 mb-3">Your Cart is Empty!</h1>
          <NavLink to="/">
            <button className="bg-green-700 w-[180px] p-2 rounded-md text-white text-sm font-bold uppercase">
              Shop Now
            </button>
          </NavLink>
          </div>)
      }
    </div>
  )
};

export default Cart;
