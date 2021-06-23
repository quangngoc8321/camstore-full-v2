import React from "react";
import { Row, Col, Typography, Button, Form, Input } from "antd";
import CheckOutStep from "./CheckOutStep";
import { useHistory } from "react-router";
const { Title } = Typography;

const Shipping = () => {
  let history = useHistory();
  const shippingDetails = JSON.parse(localStorage.getItem("shippingDetails"))
  const onFinish = (values) => {
    localStorage.setItem('shippingDetails', JSON.stringify(values));
    history.push("/payment-method")
  }
  return (
    <div>
      <Row justify="center">
        <Col xs={24} xl={15} className="custom-box">
          <CheckOutStep current={0} />
          <Title level={2}>Shipping Details</Title>
          <Form
            size="large"
            name="shipping"
            onFinish={onFinish}
            initialValues={{
              name: shippingDetails?.name || "",
              email: shippingDetails?.email || "",
              address: shippingDetails?.address || "",
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
                Save & Continue &rarr;
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
