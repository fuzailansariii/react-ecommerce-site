import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import NotFound from "./Pages/NotFound";
import Footer from "./components/Footer";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import OurTeam from "./Pages/OurTeam";
import { CartProvider } from "./context/CartContext";
import Chekout from "./Pages/Chekout";
import Success from "./Pages/Success";

function App() {
  return (
    <CartProvider>
      <Navbar />

      {/* React Router */}

      <Routes>
        <Route index element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/checkout" element={<Chekout />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </CartProvider>
  );
}

export default App;
