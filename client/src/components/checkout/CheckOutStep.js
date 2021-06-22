import React from "react";
import { Row, Col, Steps } from "antd";
import { Link } from "react-router-dom";

const { Step } = Steps;
const CheckOutStep = ({ current }) => {
  return (
    <Row justify="center" style={{ marginBottom: "2rem" }}>
      <Col xs={24} xl={24}>
        <Steps size="small" current={current} responsive>
          <Step title={<Link to="/shipping"><strong>Shipping</strong></Link>} />
          <Step title={<Link to="/payment-method"><strong>Payment Method</strong></Link>} />
          <Step title={<Link to="/place-order"><strong>Place Order</strong></Link>} />
        </Steps>
      </Col>
    </Row>
  );
};

export default CheckOutStep;
