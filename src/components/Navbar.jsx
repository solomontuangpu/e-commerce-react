import React, { useState } from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import { CustomStateContext } from "../context/StateContext";
import { Link, NavLink } from "react-router-dom";
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
  const {
    search,
    setSearch,
    state: { cart },
  } = CustomStateContext();

  const [openSearchBox, setOpenSearchBox] = useState(false);

  return (
    <div className=' bg-white py-5 shadow-md shadow-gray-300 sticky top-0 z-10'>
      <div className=' container flex justify-between items-center'>
        <NavLink to={"/"} className=' text-3xl text-black'>
          Shop
        </NavLink>
        <div className=' flex items-center'>
          <form className='mr-3' action=''>
            <input
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              className={`${
                openSearchBox ? "opacity-100" : "opacity-0"
              } rounded outline-none outline-black px-2 py-1 transition duration-200 ease-linear`}
              type='text'
            />
          </form>

          <button
            onClick={() => setOpenSearchBox(!openSearchBox)}
            className='flex items-center p-1 mx-1 border-black border-2 rounded hover:bg-black hover:text-white'
          >
            <BiSearch className='text-2xl' />
          </button>

          <Link to={"/cart"}>
            <div className=' relative cursor-pointer'>
              <MdOutlineShoppingBag className=' bg-black  text-white hover:bg-white hover:text-black text-4xl flex items-center p-1 mx-2 border-black border-2 rounded' />
               <span className={` ${cart.length > 0 ? "block" : "hidden" }  absolute right-0 top-4 bg-white rounded-full w-5 h-5 text-sm text-center text-black border border-black`} >
                {cart.length}
              </span> 
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
