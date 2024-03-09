import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { fetchOneProduct } from "../api/ItemApi";
import { ImgSlider } from "../components/ImgSlider";

const ItemPage = () => {
  const [item, setItem] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    fetchOneProduct(id).then((data) => {
      setItem(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>loading</div>;
  }

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <ImgSlider images={item.img} />
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: "5px solid lightgray",
            }}
          >
            <h3>От: {item.price} грн.</h3>
            <Button variant={"outline-dark"}>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemPage;
