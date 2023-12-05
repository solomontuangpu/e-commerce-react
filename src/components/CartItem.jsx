import React, { useState } from "react";

const CartItem = ({
  product,
  increaseTotal,
  decreaseTotal,
  removeFromCart,
}) => {
  const { image, title, price } = product;

  const [quantity, setQuantity] = useState(1);

  const oneProductPrice = price * quantity;

  const increaseQuantity = () => {
    increaseTotal(price);
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      decreaseTotal(price);
      setQuantity(quantity - 1);
    } else {
      return;
    }
  };

  return (
    <div className=' flex justify-between mt-5'>
      <div className=' flex gap-10 items-center'>
        <img className=' w-24' src={image} alt='' />
        <div>
          <p className=' font-bold'>{title}</p>
          <p>${oneProductPrice.toFixed(2)}</p>
          <button
            onClick={() => removeFromCart(product)}
            className=' bg-red-500 rounded px-2 py-1 text-white text-sm'
          >
            Remove
          </button>
        </div>
      </div>
      <div>
        <button onClick={increaseQuantity}>+</button>
        <p>{quantity} </p>
        <button onClick={decreaseQuantity}>-</button>
      </div>
    </div>
  );
};

export default CartItem;
