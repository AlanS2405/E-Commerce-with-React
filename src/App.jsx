import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllProductsThunk } from "./store/slices/product.slice";
import ProductIDPage from "./Pages/ProductIDPage";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import CartPage from "./Pages/CartPage";
import Header from "./components/shared/Header";
import { getCartThunk } from "./store/slices/cart.slice";
import PurchasesPage from "./Pages/PurchasesPage";
import ProtectedRoutes from "./Pages/ProtectedRoutes";

function App() {
  const [sidebarActive, setSidebarActive] = useState("sidebarFalse");

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

  return (
    <div className="app">
      <Header sidebarActive={sidebarActive} handleSidebar={handleSidebar} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductIDPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={ProtectedRoutes}>
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
