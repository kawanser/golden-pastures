import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { CartProvider } from "./context/CartContext";
import { useCart } from "./context/CartContext";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
