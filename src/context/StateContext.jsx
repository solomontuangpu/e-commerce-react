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
  const [categoryItem, setCategoryItem] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dispatch({ type: "GET_PRODUCTS", payload: productLists });

    const filteredProducts = productLists.filter(
      (product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
    );
    dispatch({ type: "GET_PRODUCTS", payload: filteredProducts });

    const filteredCategory = productLists.filter(
      (product) => product.category.includes(categoryItem)
    );
    dispatch({ type: "GET_PRODUCTS", payload: filteredCategory});
  }, [productLists, search, categoryItem]);

  // fetch Data
  const fetchData = async () => {
    const api = await fetch("https://fakestoreapi.com/products");
    const products = await api.json();

    const newProducts = products.map(product => {
      if(product.category == "men's clothing"){
        return {...product, category: "gentlemen's clothing"}
      }
      return product;
    })
    setProductLists(newProducts);

  };
  // reducer
  const initialState = {
    products: [],
    cart: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const data = { state, dispatch, productLists, search, setSearch, categoryItem, setCategoryItem };

  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export const CustomStateContext = () => useContext(StateContext);
