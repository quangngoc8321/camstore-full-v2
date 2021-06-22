import React from "react";
import { Space, Button, Typography } from "antd";
import { Link } from "react-router-dom";

const { Title } = Typography;

const CartSummary = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Space direction="vertical" className="custom-box">
        <Title level={3}>Items: 10</Title>
        <Title>Total: $ 2750</Title>

        <Link to="/shipping">
          <Button id="btn">&rarr; Process Check Out</Button>
        </Link>
      </Space>
    </div>
  );
};

export default CartSummary;
