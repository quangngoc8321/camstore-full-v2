import React, { useContext } from "react";

import { Row, Col, List, Space, Button, Typography, Divider } from "antd";
import CheckOutStep from "./CheckOutStep";
import { CartContext } from "../context/CartContextProvider";
import axios from "axios";
import stripePromise from "../../helpers/stripeConfig";
// import { loadStripe } from '@stripe/stripe-js';

const { Title } = Typography;
// const stripePromise = loadStripe('pk_live_51If83qFmeRVWndcMCIhA24jjEEKO02Z0NC27glicvJwmzFIHF7Opw36b9zCrqgHXzgiJ9x8SXWcxKAP5rNtVFyrn00vn9NXB9k');

const PlaceOrder = () => {

  const shippingDetails = JSON.parse(localStorage.getItem("shippingDetails"))
  const paymentMethod = JSON.parse(localStorage.getItem("paymentMethod"))

  const { isLoading, data } = useContext(CartContext);
  const cartItems = data?.data.cartItems || [];

  const handleOnClick = async () => {
    const token = localStorage.getItem("token"); 
    const option = {
      url: "/api/v1/orders/stripe",
      method: "post",
      data: {
        orderItems: cartItems,
        totalPrice: data.data.totalPrice,
        shippingDetails
      },
      headers: {
          'Authorization': 'Bearer ' + token
      }
  };
  const response =  await axios(option);   
     // Get Stripe.js instance
  const stripe = await stripePromise;

  await stripe.redirectToCheckout({
    sessionId: response.data.id,
  });

  }
  return (
    <div className="custom-box">
      <CheckOutStep current={2} />
      <Row>
        <Col xs={24} xl={12} style={{ padding: "0 1rem 1rem 0" }}>
          <Row>
            <Col>
              <Title level={3}> Shipping</Title>
             <p>Name: {shippingDetails.name}</p>
              <p>Email: {shippingDetails.email}</p>
              <p>Address: {shippingDetails.address}</p>
            </Col>
          </Row>
          <Divider />
          <Row>
            <Col>
              <Title level={3}> Payment Method</Title>
              <p>Method: {paymentMethod.method}</p>
            </Col>
          </Row>
          <Divider />
          <Row>
            <Col xl={24}>
              <Title level={3}> Order Items</Title>
             
              <List
               loading={isLoading}
               grid={{
                 column: 1,
                 xs: 1,
                 sm: 1,
                 md: 1,
               }}
                itemLayout="horizontal"
                dataSource={cartItems}
                pagination={{
                  pageSize: 2,
                  total: cartItems.length,
                }}
                renderItem={(item) => (
                  <List.Item>
                    <Space
                      style={{
                        justifyContent: "space-between",
                        display: "flex",
                        border: "1px solid #eee",
                        padding: "0.5rem",
                      }}
                    >
                     <div>
                        <img src={item.product.image.url} alt="cart" width="50" />
                        <br />
                        <strong>
                          {item.product.name}
                        </strong>
                      </div>
                      <div>
                       <p> Quantity: {item.quantity}</p>
                       <p> Price: ${item.product.price}</p>
                       <p> Subtotal: ${item.subTotal}</p>
                      </div>
                    </Space>
                  </List.Item>
                )}
              />
            </Col>
          </Row>
        </Col>
        <Col
          xs={24}
          xl={12}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
          }}
        >
          <div
            className="custom-box"
            style={{ width: "100%", maxWidth: "300px" }}
          >
            <Title level={3}>Order Summary</Title>
            <Divider />
            <Space direction="vertical">
            <Title level={5}>Items: {data?.data.totalItems}</Title>

            <Title level={5}>Shipping: $0</Title>
            <Title level={5}>Tax: $0</Title>
            <Title level={5}>Total Price: ${data?.data.totalPrice}</Title>
            <Button id="btn" size="large" onClick={handleOnClick}>
              &rarr; Place Order
            </Button>
            </Space>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PlaceOrder;
