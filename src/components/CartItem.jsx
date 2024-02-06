
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";


const CartItem = ({item,itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }

  return (
    <div className="max-w-[600px] mx-auto mb-10" >
      <div className=" grid grid-cols-1 sm:grid-cols-2 gap-3 border-b-2 border-black">
        <div className="flex justify-center">
          <img src={item.image} className="h-[220px] w-[220px] mb-5"/>
        </div>
      

        <div className=" flex flex-col justify-center" >
          <h2 className="font-bold text-lg">{item.title}</h2>
          <p className="text-gray-700 font-semibold text-sm mt-5  text-left"> {item.description.split(" ").splice(0,10).join(" ") + "..."}</p>
          <div className="flex justify-between  mt-10 p-3">
            <p className="font-bold text-lg text-green-700">${item.price}</p>
            <div  
            className="bg-red-300 w-10 h-10 rounded-full jusitify-center items-center relative transition hover:bg-red-600"
            onClick={removeFromCart}>
             <RiDeleteBin5Fill className="text-red-700 absolute right-3 top-3 hover:text-white transition"/>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
};

export default CartItem;
