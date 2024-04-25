import ItemsList from "./ItemsList";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearCart());
  };

  return (
    <div className="p-3  text-center font-semibold w-6/12 ml-72">
      <h1 className="text-2xl p-3">Cart</h1>
      <button
        onClick={handleClear}
        className="bg-black rounded-md p-2 text-white "
      >
        Clear Cart
      </button>

      {cartItems.length ? (
        <ItemsList items={cartItems} />
      ) : (
        <h1>Add items in the cart</h1>
      )}
    </div>
  );
};

export default Cart;
