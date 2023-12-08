import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import CategoryNav from "./components/CategoryNav";


function App() {
  return (
    <>
      <Navbar />
      <CategoryNav />

      <main className=' container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
