import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Row } from "react-bootstrap";
import ProductCard from "./ProductCard";

const DeviceList = observer(() => {
  const { item } = useContext(Context);
  return (
    <Row className="d-flex">
      {item.items.map((item) => (
        <ProductCard key={item._id} item={item} />
      ))}
    </Row>
  );
});

export default DeviceList;
