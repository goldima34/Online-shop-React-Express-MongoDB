import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { fetchOneItem } from "../http/itemApi";

const ItemPage = () => {
  const [item, setItem] = useState({ info: [] });
  const { id } = useParams();
  useEffect(() => {
    fetchOneItem(id).then((data) => setItem(data));
  }, []);

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image
            width={300}
            height={300}
            src={process.env.REACT_APP_API_URL + item.img}
          />
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
