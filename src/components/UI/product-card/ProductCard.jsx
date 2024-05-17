import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

const ProductCard = (props) => {
  const { id, title, image01, price } = props.item;
  const dispatch = useDispatch();
  const [buttonText, setButtonText] = useState("Add to Cart");

  const addToCart = () => {
    buttonText == "Add to Cart"
      ? setButtonText("✔️ Added")
      : setButtonText("Add to Cart");

    setTimeout(() => {
      setButtonText("Add to Cart");
    }, 1000);

    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
      })
    );
  };

  return (
    <div className="border-2 border-gray-100 flex flex-col p-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
      <div className="mx-auto">
        <img src={image01} alt="" width={100} height={80} />
      </div>
      <div className="mx-auto">
        <h5>
          <Link to={`/foods/${id}`}>{title}</Link>
        </h5>
        <div className="flex gap-10 mt-2">
          <span className=" text-red-600">${price}</span>
          <button
            className="bg-emerald-400 text-sm px-2 py-1 hover:bg-red-600 hover:text-white rounded"
            onClick={addToCart}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
