import React, { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import TypeBar from "../components/TypeBar";
// import BrandBar from "../components/BrandBar";
import ItemList from "../components/ItemList";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { fetchProduct } from "../api/ItemApi";
import Pages from "../components/Pages";

const Shop = observer(() => {
  const { item } = useContext(Context);

  useEffect(() => {
    // fetchTypes().then((data) => item.setTypes(data));
    // fetchBrands().then((data) => item.setBrands(data));
    fetchProduct(null, null, 1, 2).then((data) => {
      item.setItems(data.rows);
      item.setTotalCount(data.count);
    });
  }, []);

  useEffect(() => {
    fetchProduct(
      //   item.selectedType.id,
      //   item.selectedBrand.id,
      item.page,
      2
    ).then((data) => {
      item.setItems(data.rows);
      item.setTotalCount(data.count);
    });
  }, [item.page, item.selectedType, item.selectedBrand]);
  //[item.page, item.selectedType, item.selectedBrand]
  return (
    <Container>
      <Row className="mt-2">
        <ItemList />
        <Pages />
      </Row>
    </Container>
  );
});

export default Shop;
