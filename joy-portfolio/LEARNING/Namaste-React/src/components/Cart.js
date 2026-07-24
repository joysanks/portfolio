import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart =()=> {
    dispatch(clearCart());
  }



  return (
    <div className="text-center m-4 px-4">
      <h1 className="text-2xl font-bold">Cart</h1>

      <div className="w-6/12 m-auto">
        <button className="p-2 m-2 bg-black text-white rounded-lg cursor-pointer"
        onClick={handleClearCart}>
          clear cart
        </button>
        {items.length ===0 && <><h1>your cart is empty!!!!</h1></>}
        <ItemList items={items} />
      </div>
    </div>
  );
};

export default Cart;
