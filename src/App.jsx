import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getAllProductsThunk } from "./store/slices/product.slice";
import { getCartThunk } from "./store/slices/cart.slice";
import Home from "./Pages/Home";
import ProductIDPage from "./Pages/ProductIDPage";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import CartPage from "./Pages/CartPage";
import Header from "./components/shared/Header";
import PurchasesPage from "./Pages/PurchasesPage";
import CartSidebar from "./components/shared/CartSidebar";
import ProtectedRoutes from "./Pages/ProtectedRoutes";
import "./App.css";

function App() {
  const [colorTheme, setColorTheme] = useState("darkMode");
  const [sidebarActive, setSidebarActive] = useState("sidebarFalse");
  const [cartSidebar, setCartSidebar] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsThunk());
    dispatch(getCartThunk());
  }, []);

  const handleSidebar = () => {
    if (sidebarActive === "sidebarFalse") {
      setSidebarActive("sidebarTrue");
    } else {
      setSidebarActive("sidebarFalse");
    }
  };

  const handleCartSidebar = () => {
    if (cartSidebar === "") {
      setCartSidebar("cartTrue");
    } else {
      setCartSidebar("");
    }
  };

  const handleColorTheme = () => {
    if (colorTheme === "lightmode") {
      setColorTheme("darkMode");
    } else {
      setColorTheme("lightMode");
    }
  };

  return (
    <div className={`app ${colorTheme}`}>
      <Header
        sidebarActive={sidebarActive}
        handleSidebar={handleSidebar}
        handleCartSidebar={handleCartSidebar}
      />
      <CartSidebar cartSidebar={cartSidebar} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductIDPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/purchases" element={<PurchasesPage />} />
        </Route>
      </Routes>
      <button className="menu_btn" onClick={handleSidebar}>
        <i className="bx bx-menu"></i>
      </button>
    </div>
  );
}

export default App;
