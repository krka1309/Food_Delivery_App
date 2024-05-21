import React, { useState } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import "./card.css";
import { useSelector } from "react-redux";
import Carts from "../UI/cart/Carts";

export const Card = () => {
  const [cardOpen, setCardOpen] = useState(false);
  const closeCard = () => {
    setCardOpen(null);
  };

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <>
      <div className="card" onClick={() => setCardOpen(!cardOpen)}>
        <BiShoppingBag className="cardIcon" />
        <span className={totalQuantity > 9 ? "flexCenter1" : "flexCenter"}>
          {totalQuantity}
        </span>
      </div>
      <div className={cardOpen ? "overlay" : "nonoverlay"}></div>
      <div className={cardOpen ? "cartItems" : "cardhide"}>
        <div className="flex justify-between">
          <h2 style={{ fontWeight: "700" }}>Shopping Cart</h2>
          <button onClick={closeCard}>
            <AiOutlineClose className="icon" size={30} />
          </button>
        </div>
        <div>
          <Carts />
        </div>
      </div>
    </>
  );
};
