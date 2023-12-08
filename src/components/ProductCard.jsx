import React, { useState } from "react";
import { CustomStateContext } from "../context/StateContext";
import { IoStarOutline } from "react-icons/io5";
import { IoMdStar } from "react-icons/io";

const ProductCard = (props) => {
  const {
    title,
    description,
    image,
    price,
    rating: { rate, count },
  } = props;
  const [addBtn, setAddBtn] = useState(false);

  const { dispatch } = CustomStateContext();

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: props });
    setAddBtn(!addBtn);
  };

  const removeFromCart = () => {
    dispatch({ type: "REMOVE_FROM_CART", payload: props });
    setAddBtn(!addBtn);
  };

  // custom js for star rating
let stars = []
for(let i=0; i<5; i++){
  if( i < rate.toFixed(0)){
    stars.push("full");
  }else{
    stars.push("empty");
  }
}

  return (
    <div className=' mt-16 px-5 pt-16 pb-5 shadow-sm w-[290px] h-[350px] relative border-2 border-black rounded-xl'>
      <img
        className=' h-[100px] object-cover absolute top-[-50px] left-[50px]'
        src={image}
        alt=''
      />
      <div className=' h-[100%] flex flex-col justify-between'>
        <div>
          <p className=' font-bold text-lg'>{title.substring(0, 25)}</p>
          <p className=' text-gray-500 '>{description.substring(0, 80)}</p>
        </div>

        <div>
          <div className=" flex items-center justify-between py-2">
            <span className=" flex">
              {stars?.map((star, id) => {
                if(star == "full" ) {
                  return  <IoMdStar key={id} />; 
              }else{
                return <IoStarOutline key={id} />;
              }})
            }
            </span>
            <p>
              ({rate} / {count})
            </p>
          </div>

          <hr className='border border-black' />

          <p className=' py-2 text-lg'> ${price}</p>

          {!addBtn ? (
            <button
              onClick={addToCart}
              className={`bg-black
         text-white px-5 py-2 rounded w-[100%]`}
            >
              Add to Cart
            </button>
          ) : (
            <button
              onClick={removeFromCart}
              className={`bg-red-500 text-white px-5 py-2 rounded w-[100%]`}
            >
              Remove
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
