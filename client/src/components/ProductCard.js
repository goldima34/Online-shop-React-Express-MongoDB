import React from "react";
import { Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/product/${item._id}`)}
    >
      <Card style={{ width: 150, cursor: "pointer" }} border={"light"}>
        <Image
          width={200}
          height={200}
          src={process.env.REACT_APP_API_URL + item.img[0]}
        />
        <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
          <div>Samsung...</div>
        </div>
        <div>{item.name}</div>
      </Card>
    </div>
  );
};

export default ProductCard;
