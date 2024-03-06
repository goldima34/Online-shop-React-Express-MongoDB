import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import UserStore from "./store/UserStore";
import ItemStore from "./store/ItemStore";
import { BrowserRouter } from "react-router-dom";

export const userStore = new UserStore();
export const item = new ItemStore();

export const Context = createContext({
  userStore,
  item,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context.Provider
    value={{
      userStore,
      item,
    }}
  >
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Context.Provider>
);
