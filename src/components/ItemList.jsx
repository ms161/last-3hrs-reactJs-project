import React, { useContext, useState } from "react";
import Input from "./Input";
import CartContext from "./CartContext";

const ItemList = (props) => {
  const ctx = useContext(CartContext);
  const buy1 = (e) => {
    ctx.onCtxData(props);
  };

  const buy2 = (e) => {
    ctx.onCtxData({ ...props, qty: props.qty + 1 });
  };
  const buy3 = (e) => {
    ctx.onCtxData({ ...props, qty: props.qty + 2 });
  };

  return (
    <div style={{ display: "flex", gap: "4rem" }}>
      <div>{props.name}</div>
      <div>{props.desc}</div>
      <div>{props.price}</div>
      <button onClick={buy1}>Buy 1</button>
      <button onClick={buy2}>Buy 2</button>
      <button onClick={buy3}>Buy 3</button>
    </div>
  );
};

export default ItemList;
