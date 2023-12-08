import { CustomStateContext } from "../context/StateContext";
import ProductCard from "../components/ProductCard";



const Home = () => {
  const {
    state: { products },
  } = CustomStateContext();

  return (
    <div
      className={` flex flex-wrap gap-10`}
    >
      {products?.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Home;
