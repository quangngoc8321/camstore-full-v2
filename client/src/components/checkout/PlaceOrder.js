import React from "react";

import { Row, Col, List, Space, Button, Typography, Divider } from "antd";
import CheckOutStep from "./CheckOutStep";
import { Link } from "react-router-dom";
const { Title } = Typography;

const PlaceOrder = () => {
  const cartItems = [{}, {}, {}];
  return (
    <div className="custom-box">
      <CheckOutStep current={2} />
      <Row>
        <Col xs={24} xl={12} style={{ padding: "0 1rem 1rem 0" }}>
          <Row>
            <Col>
              <Title level={3}> Shipping</Title>
              <p>Name: Tu Tran</p>
              <p>Email: trandinhtu.dev@gmail.com</p>
              <p>Address: 112 Benligh Screcent</p>
            </Col>
          </Row>
          <Divider />
          <Row>
            <Col>
              <Title level={3}> Payment Method</Title>
              <p>Method: Stripe</p>
            </Col>
          </Row>
          <Divider />
          <Row>
            <Col xl={24}>
              <Title level={3}> Order Items</Title>
             
              <List
                grid={{
                  column: 1,
                  xs: 1,
                  sm: 1,
                  md: 1,
                }}
                itemLayout="horizontal"
                dataSource={cartItems}
                pagination={{
                  pageSize: 4,
                  total: 8,
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
                        <Link to={`/products/abc`}>
                          <img
                            src="https://res.cloudinary.com/dkalgpanl/image/upload/v1624252412/cameraStore/product/wcpctfq4piqwgqqcarvx.jpg"
                            alt="cart"
                            width="100"
                          />
                          <br />
                        </Link>
                        <Link
                          to={`/products/abc`}
                          style={{ textTransform: "uppercase", color: "black" }}
                        >
                          <strong>RICOHFLEX MILLION TLR 22 ($1000)</strong>
                        </Link>
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
              <Title level={5}>Items: 10</Title>

              <Title level={5}>Shipping: $0</Title>
              <Title level={5}>Tax: $0</Title>
              <Title level={5}>Total Price: $ 2650</Title>
              <Button id="btn" size="large">
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
