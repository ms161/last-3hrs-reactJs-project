import React, { useContext, useState } from "react";
import CartContext from "./CartContext";
import CartList from "./CartList";

const CartData = () => {
  const ctx = useContext(CartContext);
  console.log(ctx, "this is in cart");
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = (e) => {
    setShowCart(!showCart);
  };

  const cartDeleteHandler = (e) => {
    // e.target.parentElement.remove()
  };

  return (
    <div >
      <div style={{position:'absolute',right:'60rem'}} onClick={showCartHandler}>CartData: {ctx.cartItems.length}</div>
      <div style={{ boxShadow: "2px 2px 20px 2px black" ,borderRadius:'10px'}}>
        {showCart &&
          ctx.cartItems.map((ele) => (
            <div>
              <CartList
                name={ele.name}
                desc={ele.desc}
                price={ele.price}
                qty={ele.qty}
              ></CartList>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CartData;
