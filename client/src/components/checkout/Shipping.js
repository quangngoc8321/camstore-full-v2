import React from "react";
import { Row, Col, Typography, Button, Form, Input } from "antd";
import CheckOutStep from "./CheckOutStep";
const { Title } = Typography;

const Shipping = () => {
  return (
    <div>
      <Row justify="center">
        <Col xs={24} xl={15} className="custom-box">
          <CheckOutStep current={0} />
          <Title level={2}>Shipping Details</Title>
          <Form
            size="large"
            name="shipping"
            initialValues={{
              name: "",
              email: "",
              address: "",
            }}
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Address"
              name="address"
              rules={[
                {
                  required: true,
                  message: "Please input your address!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item>
              <div
                style={{
                  display: "flex",
                  direction: "column",
                  justifyContent: "center",
                }}
              >
                <Button id="btn" htmlType="submit">
                  Continue &rarr;
                </Button>
              </div>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Shipping;
