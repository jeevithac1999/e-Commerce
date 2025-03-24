import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Shop } from "./Pages/Shop";
import { ShopCategory } from "./Pages/ShopCategory";
import { Product } from "./Pages/Product";
import { Cart } from "./Pages/Cart";
import { LoginSignup } from "./Pages/LoginSignup";
import { Footer } from "./Components/Footer/Footer";
import saree_banner from "./Components/Assets/banner_mens.png";
import kurthi_banner from "./Components/Assets/banner_women.png";
import frock_banner from './Components/Assets/banner_kids.png';
import material_banner from './Components/Assets/banner_mens.png';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/Sarees" element={<ShopCategory banner= {saree_banner} category="sarees" />} />
          <Route path="/Kurthis" element={<ShopCategory banner = {kurthi_banner} category="kurthis" />} />
          <Route path="/Frocks" element={<ShopCategory banner = {frock_banner} category="frocks" />} />
          <Route path="/Materials" element={<ShopCategory banner = {material_banner} category="materials" />} />
          <Route path="/product" element={<Product/>}>
            <Route path=":productId" element={<Product/>}/>
          </Route>
          <Route path="/cart" element={<Cart/>} />
          <Route path="/login" element={<LoginSignup/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
