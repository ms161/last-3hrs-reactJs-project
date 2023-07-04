import Details from "./components/Details";
import Input from "./components/Input";
import Items from "./components/Items";
import CartContext from "./components/CartContext";
import { useState } from "react";
import Cart from "./components/Cart";

const App = () => {
  const [cartData, setCartData] = useState([]);

  const ctxData = (data) => {
    setCartData((prevData) => {
      return [...prevData, data];
    });
  };

  const cartDeleteHandler = (id) => {};

  const cartContext = {
    onCtxData: ctxData,
    onCartDelete: cartDeleteHandler,
    cartItems: cartData,
  };

  return (
    <CartContext.Provider value={cartContext}>
      <div style={{position:'absolute',marginLeft:'40rem',width:'auto',right:'0'}}>
        <Cart></Cart>
      </div>
      <div style={{}}>
        <div>
          <Items></Items>
        </div>
        <div></div>
      </div>
    </CartContext.Provider>
  );
};

export default App;
