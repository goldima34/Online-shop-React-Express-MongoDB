import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import Shop from "../pages/Shop";
import CabinetPage from "../pages/CabinetPage";
import ItemPage from "../pages/ItemPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/cabinet" element={<CabinetPage />} />
      <Route path="/product/:id" element={<ItemPage />} />
      <Route path="/" element={<Shop />} />
    </Routes>
  );
};
