import React from "react";
import { Card, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

const ProductCard = ({ item }) => {
  return (
    <Col
      md={3}
      className={"mt-3"}
      //   onClick={() => history.push(PRODUCT_ROUTE + "/" + device.id)}
    >
      <Card style={{ width: 150, cursor: "pointer" }} border={"light"}>
        <Image
          width={150}
          height={150}
          src={process.env.REACT_APP_API_URL + item.img}
        />
        <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
          <div>Samsung...</div>
        </div>
        <div>{item.name}</div>
      </Card>
    </Col>
  );
};

export default ProductCard;
