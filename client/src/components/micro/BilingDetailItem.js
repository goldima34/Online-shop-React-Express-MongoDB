import React from "react";

export const BilingDetailItem = ({ item }) => {
  return (
    <div
      style={{
        width: "300px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img
          style={{ width: 40, height: 40 }}
          src={process.env.REACT_APP_API_URL + item.item.img[0]}
        />
        <p>{item.item.name}</p>
      </div>
      <p>{item.count * item.item.price} грн</p>
    </div>
  );
};
