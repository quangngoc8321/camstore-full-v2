import React, { useContext } from "react";
import { Space, Button, Typography } from "antd";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContextProvider";
import { AuthContext } from "../context/AuthContextProvider";
import { LoadingOutlined } from "@ant-design/icons";

const { Title } = Typography;

const CartSummary = () => {
  const {data} = useContext(CartContext);
  const {isAuthStateReady, user} = useContext(AuthContext);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Space direction="vertical" className="custom-box">
        <Title level={3}>Items: {data?.data.totalItems}</Title>
        <Title>Total: $ {data?.data.totalPrice}</Title>

        {isAuthStateReady ? (
                <>
                  {user && (
                    <Link to="/shipping">
                      <Button id="btn">&rarr; Process Check Out</Button>
                    </Link>
                  )}

                  {!user && (
                    <Link to="/login?redirect=shipping">
                      <Button id="btn">
                        &rarr; You need to login to process
                      </Button>
                    </Link>
                  )}
                </>
              ) : (
                <LoadingOutlined />
              )}
      </Space>
    </div>
  );
};

export default CartSummary;
