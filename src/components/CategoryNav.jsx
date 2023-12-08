import React, { useEffect } from "react";
import { CustomStateContext } from "../context/StateContext";

const CategoryNav = () => {
  const { productLists, dispatch, setCategoryItem } = CustomStateContext();


  const handleClick = (category) => {
    if (category == "all") {
      dispatch({ type: "GET_PRODUCTS", payload: productLists });
    } else {
      setCategoryItem(category);
    }
  };
  return (
    <div className='container mt-10 flex'>
      <button
        onClick={() => handleClick("all")}
        className=' border rounded-xl px-4 py-1 mr-3 focus:bg-slate-400'
      >
        All
      </button>
      <button
        onClick={() => handleClick("men's clothing")}
        className=' border rounded-xl px-4 py-1 mr-3 focus:bg-slate-400'
      >
        Men
      </button>
      <button
        onClick={() => handleClick("women's clothing")}
        className=' border rounded-xl px-4 py-1 mr-3 focus:bg-slate-400'
      >
        Women
      </button>
      <button
        onClick={() => handleClick("jewelery")}
        className=' border rounded-xl px-4 py-1 mr-3 focus:bg-slate-400'
      >
        Jewelery
      </button>
      <button
        onClick={() => handleClick("electronics")}
        className=' border rounded-xl px-4 py-1 mr-3 focus:bg-slate-400'
      >
        Electronics
      </button>
    </div>
  );
};

export default CategoryNav;
