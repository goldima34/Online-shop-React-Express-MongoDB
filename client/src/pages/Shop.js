import React, { useContext } from "react";
import Row from "react-bootstrap/Row";
import ItemList from "../components/ItemList";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import Pages from "../components/Pages";
import { CategoryList } from "../components/CategoryList";
import { Prewiew } from "../components/Prewiew";

const Shop = observer(() => {
  return (
    <div>
      <Row className="mt-2">
        <div style={{display: "flex"}}>
          <CategoryList />
          {/* <Prewiew /> */}
        </div>
        <ItemList />
        {/* <Pages /> */}
      </Row>
    </div>
  );
});

export default Shop;
