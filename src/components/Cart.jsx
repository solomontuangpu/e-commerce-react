import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { CustomStateContext } from '../context/StateContext'
import CartItem from './CartItem';

const Cart = () => { 

  const { state: {cart}, dispatch } = CustomStateContext();

  const total = cart.reduce((acc, curr) => acc + curr.price, 0);

  
  useEffect(()=> {
    setMainTotal(total);
  },[])

  const [mainTotal, setMainTotal] = useState(0);

  const increaseTotal = (price) => {
      setMainTotal(mainTotal + price);
  }
  const decreaseTotal = (price) => {
      setMainTotal(mainTotal - price);
  }

 const removeFromCart = (product) => {
    setMainTotal(mainTotal - product.price);
   dispatch({ type: "REMOVE_FROM_CART", payload: product });
 };

  const isNotEmpty = cart.length > 0;

  return (
    <div className=' mt-10'>
      {isNotEmpty ? (
        <div className=' px-40'>
          {cart.map((product) => (
            <CartItem key={product.id} product={product} decreaseTotal={decreaseTotal} increaseTotal={increaseTotal} removeFromCart={removeFromCart} />
          ))}
          <div className=' flex justify-between mt-10 border-t-2 border-black py-5'>
            <p>Total:</p>
            <p>{ mainTotal.toFixed(2) }</p>
          </div>
        </div>

      ) : (
        <div className=' h-[700px] flex justify-center items-center flex-col'>
          <p className=' text-xl'>Your Cart is Empty!!!</p>
          <Link
            to={"/"}
            className=' px-3 py-2 mt-5 text-3xl text-white bg-emerald-700 rounded'
          >
            Go to Store
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart
