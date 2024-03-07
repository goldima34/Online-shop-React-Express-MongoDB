import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import Shop from "../pages/Shop";
import CabinetPage from "../pages/CabinetPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/cabinet" element={<CabinetPage />} />
      <Route path="/" element={<Shop />} />
    </Routes>
  );
};
