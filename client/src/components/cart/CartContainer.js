import React from "react";
import { Row, Col, Typography } from "antd";
import { ShopOutlined } from "@ant-design/icons";

import CartList from "./CartList";
import CartSummary from "./CartSummary";

const { Title } = Typography;

const CartContainer = () => {
  return (
    <div>
      <Title level={2}>
        <ShopOutlined /> Cart
      </Title>
      <Row>
        <Col xs={24} xl={12}>
          <CartList />
        </Col>

        <Col xs={24} xl={12} style={{ marginTop: "1rem" }}>
          <CartSummary />
        </Col>
      </Row>
    </div>
  );
};

export default CartContainer;
