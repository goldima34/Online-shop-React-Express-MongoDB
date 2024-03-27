import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import Shop from "../pages/Shop";
import CabinetPage from "../pages/CabinetPage";
import ItemPage from "../pages/ItemPage";
import CategoryPage from "../pages/CategoryPage";
import { Basket } from "./Basket";
import { Context } from "..";
import { BilingDetails } from "../pages/BilingDetails";
import { AdminPage } from "../pages/AdminPage";

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
