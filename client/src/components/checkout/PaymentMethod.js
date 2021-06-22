import React from "react";

import CheckOutStep from "./CheckOutStep";
import { Row, Col, Typography, Radio, Button, Form } from "antd";
const { Title } = Typography;
const PaymentMethod = () => {
  return (
    <div>
      <Row justify="center">
        <Col xs={24} xl={15} className="custom-box">
          <CheckOutStep current={1} />
          <Title level={2}>Payment Method</Title>
          <Form
            size="large"
            name="paymentMethodForm"
            initialValues={{
              method: "Stripe",
            }}
          >
            <Form.Item label="Select method" name="method">
              <Radio.Group>
                <Radio value="Stripe">Stripe</Radio>
              </Radio.Group>
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

export default PaymentMethod;
