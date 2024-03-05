import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import AuthPage from "../pages/AuthPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
};
