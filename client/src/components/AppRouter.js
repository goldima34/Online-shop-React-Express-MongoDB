import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../pages/AuthPage.js";
import Shop from "../pages/Shop.js";
import CabinetPage from "../pages/CabinetPage.js";
import ItemPage from "../pages/ItemPage.js";
import CategoryPage from "../pages/CategoryPage.js";
import { Basket } from "./Basket.js";
import { BilingDetails } from "../pages/BilingDetails.js";
import { AdminPage } from "../pages/AdminPage/AdminPage.js";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/cabinet" element={<CabinetPage />} />
      <Route path="/product/:id" element={<ItemPage />} />
      <Route path="/" element={<Shop />} />
      <Route path="/category" element={<CategoryPage />} />
      <Route path="/basket" element={<Basket />} />
      <Route path="/biling" element={<BilingDetails />} />
      <Route path="/biling" element={<BilingDetails />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
};
