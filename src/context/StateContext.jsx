import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { reducer } from "./reducer";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [productLists, setProductLists] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dispatch({ type: "GET_PRODUCTS", payload: productLists });
    const filterProducts = productLists.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    dispatch({type: "GET_PRODUCTS", payload: filterProducts})
  }, [productLists, search]);

  const fetchData = async () => {
    const api = await fetch("https://fakestoreapi.com/products");
    const products= await api.json();
    setProductLists(products);
  };
  // reducer
  const initialState = {
    products: [],
    cart: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const data = { state, dispatch, search, setSearch };

  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export const CustomStateContext = () => useContext(StateContext);
